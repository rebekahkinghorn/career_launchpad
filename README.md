# IS Career Launchpad

A static, no-build prototype for the BYU IS Junior Core Case Competition. Helps incoming
IS students explore career paths and practice interview questions for them.

## Pages
- `index.html` — Tracks & Careers: a "departures board" of six IS career paths (click a row to expand day-to-day duties, required skills, entry-level expectations, salary range, and what makes a strong candidate).
- `compatibility.html` — Compatibility Test: an 8-question quiz that scores your answers against the six tracks and issues a "boarding pass" to your best-fit career, with a link straight into that track's interview prep.
- `interview.html` — Interview Prep: pick a track ("gate") and work through behavioral and technical questions, with a reveal for a strong model answer and a coaching tip on each.

## Shared files
- `data.js` — all career, quiz, and interview-question content in one place. Edit this file to add/adjust careers or questions; both `index.html` and `interview.html` and `compatibility.html` read from it.
- `styles.css` — the shared visual system (departure-board theme).

## Running it
No build step and no dependencies beyond a Google Fonts import. Open `index.html` directly
in a browser, or serve the folder with GitHub Pages (Settings → Pages → deploy from the
`main` branch, root folder).

## Team
- Eva Rushforth — mock resume for the ideal candidate in the interview prep section
- Rebekah Kinghorn — GitHub repo setup and page layout
- Xander G. — Handshake/LinkedIn placement research to ground the career and interview content
- Maren Jorgensen — compatibility test and the career listing/interview drop-down structure

## Data note
Salary ranges and interview questions in `data.js` are prototype estimates built from
general, publicly available entry-level industry knowledge. Before final submission, swap
in figures/questions validated against current Handshake and LinkedIn postings, per the
case's requirement to explain where statistics come from.
