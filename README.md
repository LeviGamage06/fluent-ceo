# Fluent CEO — Your English Speaking Studio

A responsive, beginner-friendly English speaking application for a Sinhala-speaking learner who wants to communicate confidently in business. All speaking content is English; optional Sinhala hints explain practice strategies.

## Run locally

No npm installation, API key, or server backend is required.

```sh
python -m http.server 8080
```

Visit http://localhost:8080. Microphone access requires HTTPS or localhost. Speech synthesis uses installed device voices. Live speech recognition is optional and primarily supported in Chrome/Edge; availability varies by platform. If recognition is unavailable, record audio and type your transcript. The browser vendor may process speech remotely. Voice recordings remain in memory, are not automatically uploaded, and disappear on navigation; download them to keep a copy.

## Deploy to GitHub Pages

1. Create a new **public** GitHub repository with default branch `main` (private Pages hosting requires an eligible GitHub plan).
2. Extract `source.zip`. Upload **its contents** to the repository root: `index.html` must be at the root. Include the hidden `.github/workflows/pages.yml` folder; GitHub's upload UI may hide dotfolders, so use Git if necessary.
3. Open **Settings → Pages → Build and deployment → Source → GitHub Actions**.
4. Push a commit to `main`, or open **Actions → Deploy to GitHub Pages → Run workflow**.
5. Wait for the deploy job to complete. Your site is at `https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/`.

Every asset uses a relative URL, so project Pages paths work without configuration. The workflow runs `python build.py`, builds `dist/`, and deploys only that directory. `dist/source.zip` lets you download a clean, editable copy at any time. The ZIP does not contain Site identity or credentials.

### Upload using Git

```sh
git init
git add .
git commit -m "Add Fluent CEO speaking studio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

If the repository already has commits, clone it first, then copy these source files into it and commit. Never force-push over existing work.

### Simpler alternative: deploy from a branch

If you do not want to use Actions, choose **Deploy from a branch → main → /(root)** in Settings → Pages. The app works directly from these root files. To also provide the source ZIP link, run `python build.py` and copy `dist/source.zip` to the repository root before committing.

## What's included

- 12 lessons: introductions, meetings, updates, clarification, pitches, disagreement, delegation, negotiation, difficult questions, storytelling, decisions, and meeting conclusions.
- 48 listenable phrases and a searchable topic library.
- Listen-and-shadow with variable speed and word highlighting when the speech engine provides boundary events.
- Read-aloud full scripts, hide/reveal for retrieval practice, audio recording, playback, and downloads.
- Transcript comparison using word edit distance. This measures word similarity, **not pronunciation or fluency**.
- Sentence ordering and multiple-choice meaning exercises.
- Four scripted business role-plays with self-review checklists. They do not generate AI answers or evaluate grammar.
- A one-minute introduction challenge.
- Spaced phrase review: Again = 10 minutes, Good starts at 1 day and doubles, Easy starts at 3 days and multiplies by 2.5; maximum 60 days.
- Browser-local progress, streaks, daily goal, and JSON export/import.

## A practical daily routine

1. **Listen (3 min):** notice chunks, stressed words, and pauses.
2. **Shadow (4 min):** speak along with a slow model, then repeat independently.
3. **Recall (4 min):** hide the script, reorder words, and retrieve saved phrases before revealing them.
4. **Transfer (4 min):** answer a business prompt using your own situation. Use Point → Reason → Example → Point or Problem → Solution → Benefit.

Use the same lesson several times before moving on. Spacing, retrieval practice, shadowing, and meaningful task practice are useful complementary methods; no method guarantees a timeline or a particular fluency level. Use clear speech rather than forcing an accent. For external foundations: [retrieval practice](https://www.retrievalpractice.org/) and [British Council speaking practice](https://learnenglish.britishcouncil.org/skills/speaking).

## Data and privacy

Progress is saved only in this origin's `localStorage`; it does not sync between devices, browsers, or hosting URLs. Use Settings → Export progress before changing devices. Import replaces current progress after confirmation and validates the file. Clearing browser data removes progress. Sessions are logged when you finish a practice action, not while the dashboard is open. A completed lesson is self-recorded practice, not a proficiency certificate.

Google Fonts is optional: if blocked or offline, local font fallbacks are used. The app itself makes no API requests and requires no secrets. Browser speech services may require internet. A fully offline speech recognizer is not included.

## Verification limits

JavaScript syntax, lesson data consistency, exercise logic, and the static package can be tested without a microphone. Real microphone permissions, device voice quality, live recognition, and mobile-browser behavior must be checked on the target device. Browser UI verification results are reported separately at delivery.

## Click-to-learn word companion

Click or keyboard-focus a word in lesson reading scripts, phrase-library sentences, or boardroom conversation bubbles. Press Enter or Space to open its word companion. It shows letter-by-letter spelling, “Hear word” and “Spell it aloud” voice controls, an English definition, a Sinhala meaning, and synonyms/related expressions. Escape or the close button dismisses it. You can also search within the dialog or click a synonym.

All 245 distinct words in the included lesson scripts and boardroom questions have built-in bilingual glosses, including function words and inflected forms. These work without an online dictionary. Grammar words often have no exact synonym; this is stated rather than supplying a misleading substitute. Glosses are selected for the lesson's business context, not every possible meaning of a word.

For a new word in your own role-play answers or a searched word outside this glossary, online lookup uses `api.dictionaryapi.dev` for English and `api.mymemory.translated.net` for Sinhala machine translation. The requested word is sent to these services. Online meanings depend on network access, their dictionaries, and quotas; a Sinhala translation cannot be guaranteed for arbitrary words. The dialog clearly labels unavailable results and machine translations. External lookup results are cached only in memory during the tab session. Device speech synthesis is used for word and spelling audio.

## CEO Reading Room

The default opening screen is now a continuous book-style reader at `#reading`. Nine original fictional chapters include three complete speeches, three leadership meetings, and three business conversations. Each chapter is roughly 270–350 words, with every paragraph on the page at once. No sentence-by-sentence navigation is needed.

Use the chapter selector to change material. “Listen to full chapter” plays through all paragraphs automatically, with Pause, Resume, and Stop controls. Speech is split internally into short queued utterances for device compatibility; the reader never needs to advance a sentence. “Follow audio” scrolls to the current paragraph and can be turned off. A− and A+ adjust text size. Device voice availability and playback depend on the browser.

Clicking a word pauses chapter audio. Close word help and press Resume to restart that spoken segment without losing the chapter. All 663 distinct words in the original nine core reading passages have built-in English/Sinhala glosses, so passage meanings do not require online lookup. Synonyms are contextual suggestions, not universal replacements.

Reading place, text size, chosen chapter, and chapters marked practised are stored with progress and included in JSON backups. Earlier backups can still be imported; absent reading fields use defaults. The daily practice log records a chapter once when marked practised. Finishing audio alone does not mark it complete. The optional reflection and recording section supports moving from reading aloud to explaining an idea without the text.

Content is for practice and uses fictional situations, not quotes or business performance claims from real executives. The reading room teaches purpose, structure, listening, empathy, decision-making, negotiation, and honest treatment of uncertainty. Printing uses a clean book layout.

## Expanded material library — 4,049 entries

The Material library at `#library` contains:

- **9 core chapters** from the original Reading Room.
- **8 source-based CEO summaries**: Steve Jobs, Jeff Bezos, Satya Nadella, Jensen Huang, Indra Nooyi, Howard Schultz, Bob Iger, and Sara Blakely. Each includes a linked source and a separately labelled original practice reflection. They are paraphrases, not verbatim speeches, a ranking of executives, or endorsements. Sources were checked on 14 November 2026.
- **4,032 generated practice variations** = 48 authored business situation briefs × 28 substantive decision constraints × 3 formats (speech, meeting, conversation). They use a shared modular structure. This is not a claim of 4,032 separately written, historically verified speeches or independently reviewed teaching materials. Situation, constraint, trade-off, review measure, and format determine the passage. Stable IDs preserve bookmarks across visits.

Browse by collection, format, skill, practice level, keyword, or saved entries. Results are paginated at 18 cards per page. Saving a reading entry is separate from saving a phrase for spaced review. Reading entries open as whole passages with continuous audio.

Generated passages are composed locally from the included briefs and format structures. They do not require a model API or a network call. Only the current passages are cached (up to 12) and the reader's quick selector contains core material plus the current variation, avoiding thousands of option elements. All 1,631 distinct words in the complete reading corpus have local bilingual glosses. User-written text and searched vocabulary outside the glossary still use optional online lookup.

### Research and practice methods

The Practice methods page at `#methods` connects activities to sources:

- Nation (2007), **The Four Strands**, a balanced course-design framework: https://doi.org/10.2167/illt039.0
- Nation (1989), **Improving speaking fluency**, including repeated 4/3/2 delivery: https://doi.org/10.1016/0346-251X(89)90010-9
- British Council practical guidance on shadowing and reading aloud: https://englishonline.britishcouncil.org/blog/articles/8-practical-ways-to-practise-speaking-english/
- Carpenter, Pan & Butler (2022), a review of spacing and retrieval practice: https://doi.org/10.1038/s44159-022-00089-1
- British Council guidance on self-recording: https://learnenglish.britishcouncil.org/level/improve-your-english-level/how-improve-your-english-speaking

The page includes a real 4-minute / 3-minute / 2-minute drill. The learner retells the same ideas without viewing the text. Each round can be paused and must finish before the next round is enabled. Completing all rounds allows one nine-minute practice log. Navigating away stops the drill. These sources support principles and activities; the authors and organisations have not verified or endorsed this app or every generated passage. Fluency practice does not guarantee accuracy or a proficiency level, and meaningful interaction and feedback remain useful.

Library source summaries are deliberately short. Full speeches/articles remain at their linked publishers. Practice variants and reflections are original instructional text. The download does not bundle copyrighted full transcripts or source books.
