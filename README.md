# Safety Hazards Trainer

A complete, English-only workplace safety study app built with React, Vite and TypeScript. No backend, account or paid API is needed.

## Run locally

Requires Node.js 20.19+ or 22.12+.

```sh
npm install
npm run dev
```

Open the local URL printed by Vite (normally http://localhost:5173).

```sh
npm test       # assessment and exam-generation tests
npm run build # TypeScript check and production build into dist/
npm run preview
```

## Included

- All 36 requested safety signs, drawn as local SVGs, with category filters and flashcards.
- Four signs quiz modes with immediate feedback and session scoring.
- A keyboard-accessible SVG warehouse with ten hazard areas, hints and model answers.
- Six grammar exercise types covering should, shouldn’t and could.
- Random 20-question exams: eight signs questions, six grammar questions and six hazards questions. Results, mistake review, incorrect-only retries and restart.
- Dashboard, light/dark themes and responsive desktop/mobile layouts.
- Progress, recent answers and exam scores saved in browser localStorage. No learning data leaves the browser. Saved data is specific to this browser and origin; clearing site data removes it.

## Answer assessment

Multiple-choice answers are checked directly. Sign names accept predefined aliases and normalised punctuation. Written safety explanations use model answers and explicit self-assessment; keyword and grammar hints do not claim to establish correctness. The exam uses objectively scored multiple-choice questions. Dashboard practice accuracy includes self-assessed answers, and stores the latest 500 attempts. Mistake review uses the latest attempt per question, so correctly answering it later removes it from the list.

Signs are learning illustrations, not certified signs for workplace installation. General safety language practice does not replace task-specific training. Safety labels use illustrative symbols with plain-English instructions; the temperature label intentionally has no invented temperature limit.

All SVG artwork is included in the source. No reference screenshots were available in the supplied workspace. Fonts are optionally loaded from Google Fonts, with local sans-serif fallbacks; the application otherwise has no runtime network dependency.

## Structure

`src/data.ts` contains learning content; `assessment.ts` handles answer normalisation and exam generation; `progress.ts` manages persistence; `SignSymbol.tsx` and `Workshop.tsx` contain SVG artwork; `Practice.tsx`, `Exam.tsx` and `App.tsx` provide the interface.
