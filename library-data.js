/* 48 situation briefs x 28 substantive constraints x 3 formats = 4,032 generated variations.
   Original modular practice material, not 4,032 real transcripts or separately researched CEO stories. */
const LIBRARY_BASE_COUNT=READING_CHAPTERS.length;
['Strategy','Trust','Stakeholders','Operations','Strategy','People','Negotiation','Stakeholders','Stakeholders'].forEach((topic,i)=>{READING_CHAPTERS[i].topic=topic;});
const LIBRARY_FORMATS=['Speech','Meeting','Conversation'];
const generatedPassageCache=new Map();
function composePracticePassage(s,c,format){
  const context=`${s.problem} ${s.evidence}`;
  const pressure=`${c.pressure} ${c.adaptation}`;
  const proposal=`${s.proposal} ${c.measure}`;
  const questions=`${s.question} ${c.question}`;
  if(format==='Speech')return [
    {speaker:'CEO',text:`Thank you for making time for this discussion. I want to explain a decision that needs our attention and give you enough context to question it. ${context} Before we choose a direction, we need to be clear about the problem we are trying to solve rather than defend the first idea that feels comfortable.`},
    {speaker:'CEO',text:`There is a further condition we must take seriously. ${pressure} That changes how we should communicate the decision. Confidence should come from a clear process and an honest account of the evidence, not from pretending that the difficult part has disappeared.`},
    {speaker:'CEO',text:`Here is the approach I propose. ${proposal} We will name an owner for the action and agree on the next review before we leave this conversation. A useful plan should explain what we will do, what we will check, and what would make us change our minds.`},
    {speaker:'CEO',text:`I want us to test the reasoning as well as the plan. ${questions} If you see evidence that points in a different direction, please raise it. It is easier to improve a decision while it is still open than to repair a result after people have quietly carried concerns into the work.`},
    {speaker:'CEO',text:`There is one limit I want to state explicitly. ${s.guardrail} Let us make a commitment that people can understand and check. I will share the agreed action, the owner, and the review time in a short summary. Our next conversation should begin with what actually happened and what we learned, rather than simply repeat what we intended.`}
  ];
  if(format==='Meeting')return [
    {speaker:'CEO',text:`Our purpose today is to decide how to handle this situation, not to collect another round of general updates. ${context} Let us separate the facts, the assumptions, and the decision that needs an owner. I will give the team a chance to challenge the proposed approach before we close.`},
    {speaker:'Team lead',text:`The main complication is this: ${pressure} I do not think we should move directly from the initial problem to a confident commitment. We need to understand how this condition changes the work and what support the people carrying it out will need.`},
    {speaker:'CEO',text:`Thank you for making that explicit. ${s.question} I also want us to consider this question: ${c.question} We should not interpret a quiet room as agreement. If someone sees a practical problem with the proposal, this is the right moment to make it visible.`},
    {speaker:'Operations lead',text:`A workable starting point would be the following. ${proposal} We can document the assumptions, keep the first action as clear as possible, and report what we observe. That would give the next decision a firmer basis than another discussion about what each of us hopes will happen.`},
    {speaker:'CEO',text:`I am comfortable proceeding on that basis, with an important boundary. ${s.guardrail} Please confirm who will own the first action and when the team will hear the next update. If the evidence changes before that time, bring it forward rather than wait for the next scheduled meeting.`},
    {speaker:'Team lead',text:'Let me check our shared understanding. We have a defined problem, a practical first action, and an agreed way to review the result. I will write the owner and review time into the summary and ask each person to confirm their part. If our understanding differs, we should correct it now rather than discover the gap during delivery.'}
  ];
  return [
    {speaker:'Business counterpart',text:`I would like to understand your thinking before we agree on the next step. ${context} From my side, the important question is whether the proposal will create a useful result without leaving us with an obligation that has not been explained.`},
    {speaker:'CEO',text:`That is a reasonable question. I do not want to ask for agreement before we understand the constraint. ${pressure} Could you tell me which part of the outcome matters most to you and which part of the current approach you would be willing to change?`},
    {speaker:'Business counterpart',text:`I am open to a different approach, but I need a clear account of the trade-off. ${s.question} There is also a second question we should answer directly: ${c.question} If those points remain vague, it will be difficult to explain the agreement to the people who must act on it.`},
    {speaker:'CEO',text:`Here is a proposal we can evaluate together. ${proposal} I suggest that we put the first commitment in plain language and record the condition that would lead us to review it. That gives both sides a way to remain accountable without pretending that every dependency is within our control.`},
    {speaker:'Business counterpart',text:'That would help. Please distinguish the part you are committing to now from the part that depends on a later decision. I also want us to agree on who will communicate a change, so neither side is left learning about a problem through an incomplete message or a missed deadline.'},
    {speaker:'CEO',text:`Agreed. I will summarise the action, the responsibility, and the next review, and ask you to correct anything that does not match your understanding. There is also a limit we should keep visible: ${s.guardrail} A useful agreement should be clear enough for our teams to carry out and honest enough for us to revise when new evidence appears.`}
  ];
}
for(let si=0;si<PRACTICE_SITUATIONS.length;si++)for(let ci=0;ci<PRACTICE_CONSTRAINTS.length;ci++)for(let fi=0;fi<LIBRARY_FORMATS.length;fi++){
  const s=PRACTICE_SITUATIONS[si],c=PRACTICE_CONSTRAINTS[ci],format=LIBRARY_FORMATS[fi];
  const id=`practice-v1-${String(si+1).padStart(2,'0')}-${String(ci+1).padStart(2,'0')}-${fi+1}`;
  const entry={id,type:format,level:c.level,title:`${s.title} — ${c.title.toLowerCase()}`,subtitle:`${format} practice · ${s.topic} · ${c.title}`,topic:s.topic,generated:true,provenance:'Generated scenario variation',situationIndex:si,constraintIndex:ci,skill:s.proposal,structure:'Context → constraint → options → clear commitment → review',coach:'The business situation and the added constraint both matter. Practise the speech, then change the wording while preserving the reasoning. These are modular fictional variations, not transcripts from real executives.',transfer:`Use your own situation to answer: ${s.question} Then adapt your answer for this constraint: ${c.title.toLowerCase()}.`,keywords:`${s.problem} ${s.evidence} ${c.pressure}`};
  Object.defineProperty(entry,'paragraphs',{enumerable:true,get(){if(!generatedPassageCache.has(id)){if(generatedPassageCache.size>=12)generatedPassageCache.delete(generatedPassageCache.keys().next().value);generatedPassageCache.set(id,composePracticePassage(s,c,format));}return generatedPassageCache.get(id);}});
  READING_CHAPTERS.push(entry);
}
const LIBRARY_GENERATED_COUNT=PRACTICE_SITUATIONS.length*PRACTICE_CONSTRAINTS.length*LIBRARY_FORMATS.length;
