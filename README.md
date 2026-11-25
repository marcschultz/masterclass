# masterclass

**Version 2.0.7** · p5.js learning plugin for Claude Code, Codex and VS Code Copilot Chat

Masterclass helps you learn p5.js while the AI builds your sketches with you.
Instead of writing code right away, it asks for your design decisions, plans the
technical side with you through checkpoints, and explains what it changes and why.

All three tools share your learning notes, so you can switch between them.

## Installation

### Claude Code (VS Code panel)

1. Type `/plugins` to open **Manage plugins**.
2. On the **Marketplaces** tab, add `marcschultz/masterclass`.
3. On the **Plugins** tab, install **masterclass** and choose **Install for you**.
   It's then available in all your projects. It only starts when you run one of
   its commands.
4. Start a new chat.

### Codex (CLI or VS Code extension)

In a terminal:
```sh
codex plugin marketplace add marcschultz/masterclass
codex plugin add masterclass@schultzschultz
```

### VS Code Copilot Chat

1. Make sure the setting `chat.plugins.enabled` is on.
2. Command Palette → **Chat: Install Plugin from Source** →
   enter `https://github.com/marcschultz/masterclass`.
3. Start a new chat with Copilot.

Copilot support for plugin formats is still evolving; if a skill doesn't show up,
check **Chat: Open Customizations → Plugins** for errors.

## Updating

| Tool | How |
|---|---|
| Claude Code | `/plugins` → **Marketplaces** → refresh **schultzschultz**, then start a new chat |
| Codex | `codex plugin marketplace upgrade schultzschultz`, then `codex plugin add masterclass@schultzschultz` |
| Copilot Chat | Command Palette → **Chat: Update Plugins**, then start a new chat |

What's new in each version: see [CHANGELOG.md](CHANGELOG.md).

## Commands

Build mode and challenge mode are opt-in: they only start when you invoke them in a session.

| Action | Claude Code | Codex | Copilot Chat |
|---|---|---|---|
| Build mode (the AI codes with you) | `/masterclass:build` | `$masterclass:build` | `/` menu → build |
| Challenge mode (you write the code) | `/masterclass:challenge` | `$masterclass:challenge` | `/` menu → challenge |
| Reset profile and notes | `/masterclass:reset` | `$masterclass:reset` | `/` menu → reset |
| New empty project | `/masterclass:new-project` | `$masterclass:new-project` | `/` menu → new-project |

**build** – The first time in a project, it asks for your Experience Level, Checkpoints
and Design Decisions settings, and detects the p5.js version, UI approach and
libraries. Later, it summarizes where you left off.

**challenge** – You write the code yourself. The AI reads your project and
suggests three clear challenges of the same difficulty, matched to your level and
based on your code. After you pick one, it explains the task and the rules – and never edits your files.
Challenge mode needs existing code: in an empty project, open one of the course's example
projects first.

**reset** – Backs up your profile and notes to `.masterclass.backup/` and runs the
setup again. Your sketch files are never touched.

**new-project** – Creates an empty project from the course template
(`index.html`, `css/style.css`, `js/sketch.js`, `AGENTS.md`, an empty `assets/` folder, `libraries/`). If the folder
open in VS Code is empty, it asks whether to use that folder (its name becomes the
project title) or create a new project folder inside it. It asks
whether to use p5.js 1.x or 2.x, downloads the latest stable version into `libraries/`,
and fills in the AGENTS.md for that version. If the download fails, you can copy
p5.js from another project or add it yourself.

### Things you can say in challenge mode

| Say | What happens |
|---|---|
| "check code" | Save your file first – the AI reviews what you changed and gives feedback, without writing code. When the challenge is solved, you get a final review: what you did, what's good, what could be better, and alternative solutions. |
| "help me" | A hint, sometimes with a short syntax example – never the solution. Ask again for a more concrete hint. |
| "solve it" | A complete solution, shown in the chat only. You type it in yourself. |
| "new challenge" | Three new suggestions. |
| "stop challenge" | Leaves challenge mode; an open challenge is kept for next time. |

### Things you can say in build mode

| Say | What happens |
|---|---|
| "just implement this one" | Skips the checkpoints for this one step. |
| "no quizzes" | No more quick quiz questions this session. |
| "pause build" | Build mode off until you start build again. |
| "always ask" / "fill small details" / "use placeholders" | Changes the Design Decisions setting. |
| "design check" | The AI looks for design decisions it made for you, takes them back and asks you instead. |

## How it works

### Your design, its technique

All creative and design decisions stay with you: what the sketch shows, colors,
shapes, motion, interaction, and the look of your UI. The AI never suggests ideas
or designs. It handles the technical side and asks you targeted questions to get
your decisions. If you ask it to decide ("make it look nice"), it reminds you in one
sentence that you're the designer, then asks what it needs to know.

How it handles values you haven't decided yet is the **Design Decisions** profile setting:

| Setting | Behavior |
|---|---|
| Always ask | Asks before using any design value. No placeholders. |
| Fill small details | Asks for everything that shapes the look; placeholders only for minor details. Recommended. |
| Neutral placeholders | Uses grays / p5.js defaults, marks them `// TODO: your choice`, lists them after each step. |

### Checkpoints

1. **Idea** – you describe what the sketch should show and how you'd approach it.
2. **Design** – the AI describes the technical plan; you confirm or change it.
3. **Code** – the AI shows the planned change; you say "implement".
4. **Explain** – a short explanation of what changed and why.

Choices use clickable buttons where your tool supports them (otherwise numbered
options). Design questions and "how would you approach this?" stay open questions
on purpose, so you do the thinking. You can always type your own answer.

### Your level

You know JavaScript basics up to OOP, so everything may be used. Your level only
changes how much is explained and how densely code is commented. New project
sections and files are introduced step by step, when first needed. After important
new concepts, you may get one quick quiz question.

### p5.js first

- Solutions use the p5.js core API plus plain JavaScript.
- **UI:** an HTML/CSS control panel, logically decoupled from the canvas: controls
  only change configuration variables in `sketch.js`, and `draw()` uses them.
  Interaction inside the canvas stays in p5.js (`mousePressed()`, `keyPressed()`, …).
  Which values get a control, how the panel looks, and whether it floats over the
  canvas or the canvas makes room for it, is your decision.
- **Browser APIs** only when p5.js has no equivalent – with an explanation.
- **Libraries** already in your project may be used. A new one is only offered with
  an explicit technical reason, and only added after you agree.
- The plugin detects whether your project uses p5.js 1.x or 2.x (also from a local
  `libraries/p5.js`) and only writes code for that version.

### Code style and project rules

Code follows the course template's style: file headers, full-sentence English
comments, template markers and formatting. Files you create get a header without
a copyright line.

Your project's AGENTS.md still applies for structure, code style, export, performance
and debugging. While build mode is active, masterclass takes precedence where they
conflict.

## Your notes

Your profile (`profile.md`) and learning notes (`notes.md`) are stored in
`.masterclass/` inside each project. You can open and read them anytime.
Add `.masterclass/` to `.gitignore` if you don't want them in Git.

Learning notes are organized by topic (e.g. Drawing & color, Transformations,
Typography, Motion & time), so you can find things again. When you choose
**Review** after starting `build`, you can pick a topic to be quizzed on.

Challenge mode writes a **protocol** for every challenge in `.masterclass/challenges/`:
the task, every check, hint and solution in order, and a short review at the
end (result, what went well, what was difficult, concepts practiced, next step).
`challenges.md` is the overview with links to all protocols. The protocol, the
overview and your notes are written once, when a challenge ends (solved, skipped
or paused with "stop challenge") – so you aren't asked for file permissions during the
challenge. A paused challenge can be continued in a new chat.

## License

MIT – see [LICENSE](LICENSE).
