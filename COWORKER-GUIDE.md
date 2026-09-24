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
1. Ask Adam to add you to the repo. You'll get an email invite from GitHub. Accept it.
2. You need a free GitHub account for that. Use your work email.

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
- **Our photos or none.** No stock photos of people. No AI-generated people. Get consent; children need a parent's yes.

### Using it with an AI tool: type /journey-design
The skill in Part 2 teaches your AI tool the brand and carries a copy of the whole design system: the logos, photos, templates and finished graphics. In Claude you start it by typing **/journey-design** and saying what you need, for example:

> /journey-design a feed square and a story for Baptism Sunday, Oct 19, 11:00 AM

It asks whether this is a Ministry, Series, Event or Project, asks for any facts it doesn't have, builds from the matching templates and finished work, and tells you what it wrote so Adam can approve it.

- **Claude, with your Journey Church account:** nothing to install. Adam adds the skill for the whole church. It shows up under **Customize → Skills**, already turned on. Type **/journey-design** in any chat.
- **Claude Code:** sign in with your Journey Church account and the same skill is there; type **/journey-design**. Working inside a clone of this repo is even better: the skill uses the repo's full-size files instead of its smaller copies.
- **ChatGPT:** create a custom GPT (Explore GPTs → Create). Paste the skill text into **Instructions**. Upload `brand.md` and the logo PNGs under **Knowledge**.
- **Gemini:** create a Gem. Paste the skill text into the instructions box. Add `brand.md` as a file.
- **Anything else:** paste the skill text at the top of your first message, then attach `brand.md`.

### Adding something new to the repo
1. Put the finished files in the right folder (Ministry, Series, Event or Project), one folder per name.
2. Finished exports (PNGs, JPGs) also go in `Graphics/<name>/`.
3. On github.com, open the folder → **Add file → Upload files** → drag them in → write one line saying what it is → **Commit changes**.
4. Don't edit `_ds_bundle.js`, `_ds_manifest.json` or `_adherence.oxlintrc.json`. They're generated.

If you're not sure where something goes, ask Adam before you upload.

---

## Part 2: The skill

The skill lives in this repo at **`skill/journey-design/SKILL.md`**. That file is the one source; everything else is built from it.

### Installing it
- **Claude (the whole church):** Adam uploads `journey-design.zip` once in Organization settings → Plugins & skills → Add → Upload a skill. Everyone on the Journey Church account gets **/journey-design** from then on. When the design system changes, Adam uploads a new zip and everyone gets the update.
- **ChatGPT, Gemini, other tools:** open `skill/journey-design/SKILL.md` on GitHub. Copy everything **below** the block at the top that sits between the two `---` lines (that block is only for Claude). Paste it as the instructions, then add `brand.md` as a file.

### What's in the zip
`journey-design.zip` holds `SKILL.md` and a `design/` folder, which is a copy of this repo. To keep it small enough to upload, the photos, series art and finished graphics in that copy are reduced in size, and `exports/`, `uploads/` and `screenshots/` are left out. Anyone who needs full-resolution artwork gets it from this repo.

---

Questions about the brand, or something the rules don't cover: ask Adam.
