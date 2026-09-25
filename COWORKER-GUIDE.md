# Journey Design: coworker guide

Everything you need to make a Journey Church graphic, slide, story or page that looks like it came from us. Read Part 1 once. Part 2 is a skill that teaches your AI tool the brand, so it follows the rules for you.

---

## Part 1: How to use the design system

### What it is
One GitHub repo, **JourneyChurchJax/journey-design**, holds all of it:

| Folder or file | What's in it |
|---|---|
| `brand.md` | The whole brand in one plain-text file. Voice, colors, type, logo rules, sizes, ministry branding. **Start here.** |
| `readme.md` | The long version, with the reasoning behind each rule. |
| `index.html` | A browsable page of every design card. |
| `assets/logo/` | Every Journey Church logo file (PNG). Use these. Never redraw or retype the logo. |
| `assets/photo/` | Journey's own photographs, cleared for use. |
| `Graphics/` | Finished work: Good Work, Women's Ministry, Baptism, Good Living Food Pantry and more. Match these when you make something new for the same ministry or series. |
| `ministries/` `series/` `events/` `projects/` | One folder per name, with its own look and cards. |
| `guidelines/` `tokens/` `components/` `base/` | The building blocks. You rarely need to open these. |

### Getting access
Anyone can look at the repo and download from it; you don't need an account for that. To **add** files to it, ask Adam to add you. You'll get an email invite from GitHub (you need a free GitHub account; use your work email).

### The four kinds of work
Before you make anything, decide which of these it is. It changes the rules.

- **Ministry:** has its own logo and look (Good Work, Journey Women, Good Living). The Journey Church logo still appears, usually small and centered at the bottom. Files go in `ministries/<name>/`.
- **Series:** a sermon series. Each one can look nothing like the last. Only two things never change: the reversed horizontal Journey logo in its corner, and Scripture set in Newsreader. Files go in `series/<name>/`.
- **Event:** stays in the main Journey look unless it's a big event. The When / Where block is set the same every time, directly above the logo. Files go in `events/<name>/`.
- **Project:** runs for months and carries a number, like *Arise & Build*. The progress bar is the device. Figures come from a live source. Files go in `projects/<name>/`.

### Rules nobody gets to skip
- **Adam approves all copy before anything posts.**
- **No exclamation points. No emoji.** Anywhere.
- **Never make up a date, time, number, quote, name or Scripture reference.** Confirm it in Planning Center or on journeychurch.org. If you can't, leave a clearly marked blank.
- **One red thing per view.** Journey Red is `#FF3A3A`. There is no second accent color in the main look.
- **Our photos or none.** No stock photos of people. No AI-generated people. Every photo in `assets/photo/` is cleared for use.

### Using it with an AI tool: type /journey-design
Install the skill once (Part 2). After that, start any chat with **/journey-design** and say what you need, for example:

> /journey-design a feed square and a story for Baptism Sunday, Oct 19, 11:00 AM

Every time, it reads the newest design files straight from this repo, so you always get the current logos, rules, templates and finished graphics. It asks whether this is a Ministry, Series, Event or Project, asks for any facts it doesn't have, builds from the matching templates and finished work, and tells you what it wrote so Adam can approve it.

- **ChatGPT:** create a custom GPT (Explore GPTs → Create). Paste the skill text into **Instructions**. Upload `brand.md` and the logo PNGs under **Knowledge**. (ChatGPT won't pull updates on its own; re-upload `brand.md` when Adam says it changed.)
- **Gemini:** create a Gem. Paste the skill text into the instructions box. Add `brand.md` as a file.
- **Anything else:** paste the skill text at the top of your first message, then attach `brand.md`.

### Journey Youth: type /youth-design
Youth has its own skill. It reads the same repo, but starts from the Youth files and writes for students and their parents.

> /youth-design a story for this Wednesday night

Youth files live in three places:

| What | Where |
|---|---|
| The Youth brand sheet: facts, look, voice | `ministries/journey-youth/youth.md` |
| Youth logo files | `ministries/journey-youth/logo/` |
| Finished Youth graphics | `Graphics/Journey Youth/` |

Until a Youth logo, colors and fonts are uploaded and written into `youth.md`, /youth-design uses the main Journey look. The moment they're there, it uses them.

### Adding something new to the repo
1. Put the finished files in the right folder (Ministry, Series, Event or Project), one folder per name.
2. Finished exports (PNGs, JPGs) also go in `Graphics/<name>/`.
3. On github.com, open the folder → **Add file → Upload files** → drag them in → write one line saying what it is → **Commit changes**.
4. Don't edit `_ds_bundle.js`, `_ds_manifest.json` or `_adherence.oxlintrc.json`. They're generated.

If you're not sure where something goes, ask Adam before you upload.

---

## Part 2: The skill

The skill is one small file, `skill/journey-design/SKILL.md`, packed as `skill/journey-design.zip` so Claude can take it. It holds the rules and tells Claude where the repo is. The designs themselves stay here in the repo, and the skill reads them fresh each time. **You install it once. When Adam updates the design system, you don't do anything.**

### Install it in Claude (about two minutes)
There are two skills in the **skill** folder: **journey-design.zip** for everything, and **youth-design.zip** for Journey Youth. Install whichever you need, or both. The steps are the same.

1. On github.com, open this repo, then the **skill** folder, then **journey-design.zip** (or **youth-design.zip**).
2. Click **Download** (the arrow on the right). It lands in your Downloads folder.
3. Go to **claude.ai/customize/skills**.
4. Click the **+** button, then **Create skill**, then **Upload a skill**.
5. Pick the zip from Downloads.
6. Make sure its switch is on.
7. Start a new chat and type **/journey-design** (or **/youth-design**).

It only goes into your own Claude account. Nobody else gets it unless they install it too.

### If it says it can't reach GitHub
The skill downloads the design files using Claude's code tool. If that tool isn't allowed to reach the internet, Claude can still read the rules but can't build a finished image. In **Settings → Capabilities**, check that **Code execution and file creation** is on and that it's allowed to use the network. If you can't find that, ask Adam.

### ChatGPT, Gemini, other tools
Open `skill/journey-design/SKILL.md` on GitHub. Copy everything **below** the block at the top that sits between the two `---` lines (that block is only for Claude). Paste it as the instructions, then add `brand.md` as a file.

---

Questions about the brand, or something the rules don't cover: ask Adam.
