---
name: new-project
description: Create a new, empty p5.js project from the course template, with the latest stable p5.js 1.x or 2.x and a matching AGENTS.md. Only runs when the user explicitly invokes it (/masterclass:new-project in Claude Code, $masterclass:new-project in Codex, or the / menu in VS Code Copilot Chat).
disable-model-invocation: true
---

# Masterclass: new project

Create an empty project that matches the course template exactly.
The template files are in [template/](template/) next to this file:
`index.html`, `css/style.css`, `js/sketch.js`, `AGENTS.md`.

If you are running in Codex or VS Code Copilot Chat, read
[../build/other-tools.md](../build/other-tools.md) for command names and paths.

Ask the questions in steps 1–3 one at a time, then create everything.

Two kinds of questions:
- **Open text questions** (project name, location, a folder path): if your
  question tool can show a plain text field without options (e.g. VS Code
  Copilot Chat), you may use it. If it always needs options – like
  AskUserQuestion in Claude Code – write the question as a normal chat message
  instead and wait for the reply. Never add placeholder options like "I'll type
  a name" or "Other".
- **Button questions** (p5.js version, how to add p5.js): use AskUserQuestion
  in Claude Code with the options given below.

## 1. Project name

Ask as an open text question: "What should the project be called?"
Use a plain text field if your tool has one; in Claude Code, write it as a
normal chat message (not AskUserQuestion) and wait for the reply.
The name is the user's choice – don't suggest names.

From the answer, derive:
- **Folder name**: the name in lowercase, spaces replaced by underscores,
  only letters, numbers, `_` and `-` (e.g. "Particle Field" → `particle_field`).
  If the user gave a folder-style name (e.g. `02_01_particle_field`), keep it.
- **Title**: the name as the user wrote it (e.g. "Particle Field").

## 2. Location

- If the current folder is not itself a project (no index.html in it),
  create the new folder inside the current folder.
- If the current folder is a project, ask as an open text question where the
  new project should go (e.g. next to it, in the parent folder).
- If a folder with that name already exists, stop and ask for another name.
  Never overwrite anything.

## 3. p5.js version

Ask as a button question (AskUserQuestion in Claude Code; elsewhere see
other-tools.md): "Which p5.js version should the project use?"
Options (neutral – no recommendation):
- p5.js 2.x – "Current major version, default in the p5.js Editor"
- p5.js 1.x – "Previous major version, used by many tutorials and older examples"

## 4. Create the files

Create the folder and copy the template files into it, keeping the structure:

```
<folder>/
├── index.html
├── AGENTS.md
├── css/style.css
├── js/sketch.js
├── assets/
└── libraries/
```

Also create the empty `assets/` folder (for images, fonts and data the user
adds later). Use `mkdir -p "<folder>/assets"`; if your tools can't create an
empty folder, tell the user to create it.

Create the files with your file tools (not shell redirection). Copy everything
exactly – comments, blank lines and markers included – and replace:
- `{{PROJECT_TITLE}}` → the title (index.html, js/sketch.js).
- `{{TITLE_DASHES}}` → a line of `-` exactly as long as the title (js/sketch.js).
- The p5.js placeholders in AGENTS.md – fill them in after step 5, once the
  exact version is known.

## 5. Download the latest stable p5.js

Resolve the newest **stable** version of the chosen major version
(`1` or `2`; pre-releases such as `-rc` or `-beta` are never used):

```sh
curl -fsSL "https://data.jsdelivr.com/v1/packages/npm/p5/resolved?specifier=<major>"
```

The answer contains `"version": "<x.y.z>"`. If that request fails, the version
is `null`, or it contains a `-` (a pre-release), use npm instead if available:
`npm view "p5@<major>" version` and take the highest version listed
(npm excludes pre-releases here).

Download that exact version into the project. Downloading a library is the one
step where a shell command is the right tool:

```sh
curl -fsSL -o "<folder>/libraries/p5.js" "https://cdn.jsdelivr.net/npm/p5@<x.y.z>/lib/p5.js"
```

Check that the file's first line contains `p5.js v<x.y.z>`. If not, delete the
broken file and treat it as a failed download.

**If the download fails**, say so and ask as a button question:
- Copy from another project – "Use libraries/p5.js from an existing project"
- I'll add it myself – "I'll put p5.js into libraries/ later"

For **Copy**: ask for the folder (open text), check that `libraries/p5.js`
exists there and that its first line shows the chosen major version
(`p5.js v1.` or `p5.js v2.`), copy it, and read the exact version from it.
For **Myself**: the exact version stays unknown; remind the user that the
sketch won't run until `libraries/p5.js` is there.

## 6. Fill in AGENTS.md

Replace the placeholders in the new project's AGENTS.md:
- `{{P5_MAJOR}}` → `1` or `2`.
- `{{P5_VERSION}}` → the exact version (e.g. `2.4.0`). If it's unknown
  (user adds p5.js later), remove the whole ` (this project: v{{P5_VERSION}})`
  part instead.
- `{{P5_VERSION_RULE}}` →
  - for 1.x: `Load assets (images, fonts, data) in preload(). Don't use p5.js 2.x APIs.`
  - for 2.x: `Load assets (images, fonts, data) with async setup() and await; there is no preload(). Many tutorials use 1.x syntax – translate it to 2.x.`

Check that no `{{…}}` placeholder is left in any file and that `assets/`
exists.

## 7. Finish

Tell the user in a few lines:
- where the project was created and which p5.js version it uses,
- how to open it: in VS Code via File → Open Folder… (or keep working here if
  the course folder is open),
- that masterclass may need to be switched on for the new project
  (`/plugins` → switch next to masterclass) if they opened it as its own folder,
- to start build mode with `/masterclass:build` (or the tool's equivalent).

Don't start build mode automatically.
