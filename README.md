# CommonCounsel

**Canada's business growth co-pilot.** CommonCounsel is a web app prototype that gives Canadian small-business owners one place to find government funding, get starter legal and registration documents, and ask questions about compliance. The goal is to help the more than 90% of small businesses that can't afford a lawyer.

> **Status:** Early prototype built by a team of five in March 2026. The main pages and components exist, but the app does not run yet.

---

## What it does

| Feature | What the user sees | File |
| --- | --- | --- |
| **Home page** | A landing page with the pitch, key stats (4.2M Canadian small businesses, $400/hr average lawyer rate), and a Free vs. $7.99/mo pricing table. | `src/pages/Home.jsx` |
| **Funding finder** | 15 Canadian grant and loan programs shown as cards with the amount and a "match" bar. Users can filter by Federal, Regional, Women, Indigenous, or Newcomer. | `src/pages/GrantsAndDashboard.jsx` |
| **Document Vault** | A pop-up window that previews 12 legal and registration templates (incorporation, GST/HST, NDA, employment agreement, privacy policy, trademark, and more) and lets the user save one as a PDF. | `src/components/DocumentVault.jsx` |
| **AI assistant** | A chat sidebar (🤖 button) where users ask about grants, documents, or deadlines. It sends questions to Anthropic's Claude API with the user's name and province so answers fit their situation. | `src/components/AIAssistant.jsx` |
| **Navigation & styling** | The top navigation bar, brand colours, animations, and a custom animated cursor. | `src/components/Navigation.jsx`, `src/styles/App.css` |

---

## How it works

CommonCounsel is a single-page **React 18** app created with Create React App. There is no backend and no router library: `App.jsx` holds the app's state and decides what to show.

```
App.jsx  (holds state: current page, user profile, vault open/closed)
├── Navigation        → changes currentPage
├── <main>            → renders Home or Grants based on currentPage
├── DocumentVault     → overlay, shown when isVaultOpen is true
└── AIAssistant       → floating chat, always available
```

- **Page switching:** `currentPage` is a piece of React state (`'home'`, `'funding'`, ...). Buttons call `setCurrentPage(...)` and `renderPage()` picks the matching component with a `switch` statement.
- **Document Vault:** templates live in a JavaScript object keyed by ID (`inc`, `gst`, `nda`, ...). "Download PDF" opens the document in a new tab and triggers the browser's print dialog, where the user can choose *Save as PDF*.
- **Funding filter:** the grants list is a hard-coded array. Choosing a filter keeps only grants whose `type` contains that word.
- **AI assistant:** keeps the conversation in state, builds a system prompt from the user's profile, and posts the whole history to the Claude Messages API.
- **Custom cursor:** a `useEffect` in `App.jsx` follows the mouse and eases a ring toward it every animation frame.

---

## Project structure

```
commoncouncil/
├── index.html                      # Page shell, fonts, and meta tags
├── package.json                    # Dependencies and npm scripts
└── src/
    ├── App.jsx                     # App state, page switching, custom cursor
    ├── components/
    │   ├── Navigation.jsx          # Navigation bar (currently holds CSS, see status)
    │   ├── DocumentVault.jsx       # Legal document preview + PDF export
    │   └── AIAssistant.jsx         # Claude-powered chat sidebar
    ├── pages/
    │   ├── Home.jsx                # Landing page, stats, pricing
    │   └── GrantsAndDashboard.jsx  # Grant cards and filters
    └── styles/
        └── App.css                 # Colours, layout, animations
```

---

## Running it locally

> These steps will work once the setup fixes in [Project status](#project-status) are done.

**You need:** [Node.js](https://nodejs.org/) 18 or newer.

```bash
git clone https://github.com/janhvibohra-oss/CommonCouncil.git
cd CommonCouncil
npm install
npm start
```

The app opens at `http://localhost:3000`.

**To use the AI assistant**, create a file called `.env` in the project folder:

```
REACT_APP_ANTHROPIC_KEY=your-api-key-here
```

⚠️ Never commit this file. Add `.env` to `.gitignore`. Because this is a front-end-only app, the key is visible to anyone using the site, so only use it for local testing.

---

## Project status

**Done**
- Landing page, funding finder with filters, Document Vault, and AI chat sidebar
- Shared colour palette, animations, and custom cursor

**Needs fixing before the app will run**
- [ ] `package.json` starts with a stray `/`, so `npm install` fails. Delete that character.
- [ ] `Navigation.jsx` contains CSS instead of a React component. Move that CSS into `App.css` and write the navigation component.
- [ ] Create React App needs `src/index.js` (to render `<App />`) and `public/index.html`. Move `index.html` into a `public/` folder and add `index.js`.

**Still to build**
- [ ] Onboarding, Login, and Dashboard pages (referenced in `App.jsx` but not written yet)
- [ ] Real content for the 12 document templates (currently placeholders)
- [ ] Styles for most page classes (only the base styles are in `App.css`)
- [ ] Real grant matching (the "match" percentages are fixed numbers for now)
- [ ] Move the Claude API call to a small backend so the API key stays private, and update to a current Claude model
- [ ] Fix the Black Entrepreneurship Program being tagged as `indigenous` in the grants list

---

## Built by

| Contributor | Part of the project |
| --- | --- |
| [@janhvibohra-oss](https://github.com/janhvibohra-oss) | Project setup (`package.json`), Document Vault, navigation styles |
| [@saihajsinghdhaliwal-cyber](https://github.com/saihajsinghdhaliwal-cyber) | Global styles and cursor, Funding finder |
| [@ABRKustoms-1](https://github.com/ABRKustoms-1) | Page shell (`index.html`), Home page |
| [@smritijethi-oss](https://github.com/smritijethi-oss) | AI assistant |
| [@tortila9](https://github.com/tortila9) | `App.jsx` (state and page switching) |

---

## Disclaimer

CommonCounsel is a student project and is not a law firm. Nothing in it is legal or financial advice. Always check requirements with official Government of Canada and provincial sources.
