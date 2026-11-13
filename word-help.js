/* Click-to-learn word help. Built-in lesson glosses work without a network. */
(()=>{
  'use strict';
  const main=document.querySelector('#main');
  const dictionary=WORD_GLOSSES;
  let requestNumber=0,activeWord='',returnFocus=null,aborter=null;
  const escapeHTML=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const normalise=s=>s.trim().toLowerCase().replace(/^[^a-z]+|[^a-z]+$/g,'');
  const cache=new Map();
  const dialog=document.createElement('dialog');
  dialog.className='word-dialog';dialog.setAttribute('aria-labelledby','wordTitle');
  dialog.innerHTML=`<div class="word-dialog-top"><span class="eyebrow">YOUR WORD COMPANION</span><button class="word-close" aria-label="Close word help">✕</button></div><form id="wordSearchForm" class="word-search"><label class="visually-hidden" for="wordSearch">Look up an English word</label><input id="wordSearch" autocomplete="off" placeholder="Look up another English word…" maxlength="60"><button class="btn" type="submit">Look up</button></form><div id="wordContent" aria-live="polite"></div><p class="word-disclaimer">Lesson meanings describe the business context. Synonyms can change the tone or grammar; they are not always interchangeable.</p>`;
  document.body.append(dialog);
  const content=dialog.querySelector('#wordContent');
  function close(){aborter?.abort();requestNumber++;dialog.close();returnFocus?.focus({preventScroll:true});}
  dialog.querySelector('.word-close').addEventListener('click',close);
  dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)close();}});
  dialog.addEventListener('cancel',()=>{aborter?.abort();requestNumber++;});
  dialog.addEventListener('close',()=>{if('speechSynthesis'in window)speechSynthesis.cancel();window.CEOReader?.resumeAfterWord();});
  dialog.querySelector('#wordSearchForm').addEventListener('submit',e=>{e.preventDefault();const word=dialog.querySelector('#wordSearch').value.trim();if(word)openWord(word);});
  dialog.addEventListener('click',e=>{const b=e.target.closest('[data-word-command]');if(!b)return;switch(b.dataset.wordCommand){case'pronounce':speakWord(activeWord,false);break;case'spell':speakWord(activeWord,true);break;case'synonym':openWord(b.dataset.lookup);break;}});
  function speakWord(word,spell){
    if(!('speechSynthesis'in window)){dialog.querySelector('#wordVoiceStatus').textContent='Voice playback is unavailable. The spelling is shown above.';return;}
    speechSynthesis.cancel();const utterance=new SpeechSynthesisUtterance(spell?[...word].join(', '):word);utterance.lang='en-US';utterance.rate=spell?.65:.8;
    const voices=speechSynthesis.getVoices();utterance.voice=voices.find(v=>v.lang==='en-US')||voices.find(v=>v.lang.startsWith('en'))||null;
    utterance.onerror=e=>{if(!['canceled','interrupted'].includes(e.error))dialog.querySelector('#wordVoiceStatus').textContent='Voice playback failed. Try an English voice on your device.';};
    speechSynthesis.speak(utterance);
  }
  function render(word,data,loading=false){
    const synonyms=(data?.synonyms||[]).filter(s=>typeof s==='string'&&s.toLowerCase()!==word).slice(0,8);
    content.innerHTML=`<div class="word-title-row"><div><h2 id="wordTitle">${escapeHTML(word)}</h2>${data?.phonetic?`<span class="word-phonetic">${escapeHTML(data.phonetic)}</span>`:''}${data?.base&&data.base!==word?`<span class="meta">Form of “${escapeHTML(data.base)}”</span>`:''}</div><button class="btn primary" data-word-command="pronounce">▶ Hear word</button></div><section class="word-section"><h3>Spelling · අක්ෂර වින්‍යාසය</h3><div class="spelled-word" aria-label="${escapeHTML([...word].join(' '))}">${[...word].map(c=>`<span aria-hidden="true">${escapeHTML(c.toUpperCase())}</span>`).join('')}</div><button class="btn" data-word-command="spell">▶ Spell it aloud</button><span id="wordVoiceStatus" class="meta" role="status"></span></section><section class="word-section"><h3>English meaning</h3><p>${escapeHTML(data?.meaning||(loading?'Looking up the English meaning…':'No English definition was found. Try the base form of the word.'))}</p></section><section class="word-section sinhala-meaning"><h3>Sinhala meaning · සිංහල තේරුම</h3><p lang="si">${escapeHTML(data?.sinhala||(loading?'සිංහල තේරුම සොයමින් පවතී…':'මෙම වචනය සඳහා සිංහල තේරුමක් සොයාගත නොහැකි විය. Internet සම්බන්ධතාව පරීක්ෂා කර නැවත උත්සාහ කරන්න.'))}</p></section><section class="word-section"><h3>Synonyms & related expressions</h3>${synonyms.length?`<div class="synonym-list">${synonyms.map(s=>`<button data-word-command="synonym" data-lookup="${escapeHTML(s)}">${escapeHTML(s)} ↗</button>`).join('')}</div>`:`<p>${loading?'Looking for related words…':'No direct synonym is listed for this use. Grammar words often have no simple replacement.'}</p>`}</section><div class="word-source">${data?.source==='built-in'?'✓ Built-in glossary · English + Sinhala':loading?'Online lookup · requires an internet connection':'Online: Free Dictionary API; Sinhala: MyMemory machine translation. Translations may miss context.'}</div>`;
  }
  async function onlineWord(word,signal){
    const results=await Promise.allSettled([
      fetch('https://api.dictionaryapi.dev/api/v2/entries/en/'+encodeURIComponent(word),{signal}).then(r=>{if(!r.ok)throw Error('No definition');return r.json();}),
      fetch('https://api.mymemory.translated.net/get?q='+encodeURIComponent(word)+'&langpair=en%7Csi',{signal}).then(r=>{if(!r.ok)throw Error('No translation');return r.json();})
    ]);
    const entry=results[0].status==='fulfilled'&&Array.isArray(results[0].value)?results[0].value[0]:null;
    const meanings=entry?.meanings||[];const definitions=meanings.flatMap(m=>m.definitions||[]);
    const translated=results[1].status==='fulfilled'?results[1].value:null;
    const sinhala=translated?.responseStatus===200&&typeof translated.responseData?.translatedText==='string'&&/[\u0D80-\u0DFF]/.test(translated.responseData.translatedText)?translated.responseData.translatedText:null;
    return {meaning:definitions.find(d=>d.definition)?.definition||null,sinhala,synonyms:[...new Set([...meanings.flatMap(m=>m.synonyms||[]),...definitions.flatMap(d=>d.synonyms||[])])],phonetic:entry?.phonetic||entry?.phonetics?.find(p=>p.text)?.text||'',source:'online'};
  }
  async function openWord(raw){
    const word=normalise(raw);if(!/^[a-z]+(?:[' -][a-z]+)*$/.test(word)||word.length>60)return;
    window.CEOReader?.pauseForWord();activeWord=word;aborter?.abort();const request=++requestNumber;
    if(!dialog.open){returnFocus=document.activeElement;dialog.showModal();}
    if('speechSynthesis'in window)speechSynthesis.cancel();
    dialog.querySelector('#wordSearch').value=word;
    const builtIn=dictionary[word];
    if(builtIn){render(word,{...builtIn,source:'built-in'});return;}
    if(cache.has(word)){render(word,cache.get(word));return;}
    render(word,null,true);const controller=new AbortController();aborter=controller;const timeout=setTimeout(()=>controller.abort(),9000);
    try{const data=await onlineWord(word,controller.signal);if(request!==requestNumber)return;if(data.meaning||data.sinhala)cache.set(word,data);render(word,data);}
    catch{if(request===requestNumber)render(word,null);}
    finally{clearTimeout(timeout);}
  }
  function makeWordsClickable(){
    main.querySelectorAll('.script:not(.hidden-script), .phrase-text, .bubble, .reader-paragraph').forEach(root=>{
      const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,{acceptNode(node){return /[A-Za-z]/.test(node.nodeValue)&&!node.parentElement.closest('.word-token,.role-label,button,a,input,textarea,select,script,style')?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT;}});
      const texts=[];while(walker.nextNode())texts.push(walker.currentNode);
      for(const text of texts){const fragment=document.createDocumentFragment();const tokens=text.nodeValue.split(/([A-Za-z]+(?:'[A-Za-z]+)*)/g);
        for(const token of tokens){if(/^[A-Za-z]+(?:'[A-Za-z]+)*$/.test(token)){const el=document.createElement('span');el.className='word-token';el.setAttribute('role','button');el.tabIndex=0;el.dataset.word=token;el.setAttribute('aria-label',`Learn the word ${token}`);el.textContent=token;fragment.append(el);}else fragment.append(document.createTextNode(token));}
        text.replaceWith(fragment);
      }
      if(!root.hasAttribute('data-word-help')){root.setAttribute('data-word-help','true');root.title='Click any word for spelling, meanings, Sinhala, and synonyms.';}
    });
    const lab=main.querySelector('.lab-card');if(lab&&!lab.querySelector('.word-help-tip')&&lab.querySelector('.script,.bubble')){const tip=document.createElement('p');tip.className='word-help-tip';tip.innerHTML='✦ <strong>Click any English word</strong> for spelling, pronunciation, synonyms &amp; සිංහල තේරුම.';lab.prepend(tip);}
  }
  main.addEventListener('click',e=>{const token=e.target.closest('.word-token');if(token){e.preventDefault();e.stopPropagation();openWord(token.dataset.word);}},true);
  main.addEventListener('keydown',e=>{const token=e.target.closest('.word-token');if(token&&['Enter',' '].includes(e.key)){e.preventDefault();openWord(token.dataset.word);}});
  new MutationObserver(makeWordsClickable).observe(main,{childList:true,subtree:true});makeWordsClickable();
})();
