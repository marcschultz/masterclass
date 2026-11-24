---
name: build
description: Start or resume p5.js build mode. Only runs when the user explicitly invokes it (/masterclass:build in Claude Code, $masterclass:build in Codex, or the / menu in VS Code Copilot Chat).
disable-model-invocation: true
---

# Masterclass: p5.js build mode

The user has explicitly started build mode. From now on, for the rest of this
conversation, follow [behavior.md](behavior.md) – not only for this message.
If challenge mode was active in this conversation, it ends now: from here on you
may write code again (with checkpoints).

If you are running in Codex or VS Code Copilot Chat rather than Claude Code,
first read [other-tools.md](other-tools.md).

## 1. Locate state

Check whether `.masterclass/profile.md` exists in the project root.
A missing `.masterclass/` folder is normal on first use, not an error.

## 2a. First time: setup

Ask these as button questions (see "Asking questions" in behavior.md),
one at a time, and wait for each answer. Keep the option order: in every
question, the option with the most guidance comes first.
1. **Experience Level** – "What's your experience with p5.js?"
   Options: Beginner – "New to p5.js or coding" /
   Intermediate – "I’m comfortable modifying code and have used p5.js occasionally." /
   Advanced – "I want to discuss code structure and performance"
2. **Checkpoints** – "How often should I pause for checkpoints?"
   Options: Frequent – "Before every change" /
   Normal – "For new features (recommended)" /
   Light – "Only before bigger code changes"
3. **Design Decisions** – "Design decisions are always yours. When a value you haven't chosen yet is
   needed in the code (a color, a size, a speed), what should I do?"
   Options: Always ask – "Ask me before using any design value" /
   Fill small details – "Ask for everything that shapes the look, placeholders for minor details only (recommended)" /
   Neutral placeholders – "Use gray or p5.js defaults, mark them, list them after each step"

Then detect the p5.js version: version in the script tag URL in index.html,
"p5" in package.json, or – for a local file like `libraries/p5.js` – the
version in the file's header comment (`/*! p5.js v1.11.3 …`, first lines only).
If it's unclear, ask as a button question:
"Which p5.js version does this project use?"
Options: 2.x – "Current version, default in the p5.js Editor" /
1.x – "Older version, many tutorials use it" /
Not sure – "Help me find out"

Then scan the project for its existing tech (see "Tech scope" in behavior.md):
- **UI**: does index.html / CSS already contain UI elements (buttons, inputs,
  panels, forms) outside the canvas? Does sketch.js use p5 DOM functions
  (createButton, createSlider, …)? Result: `html-css`, `p5-dom` or `none`.
- **Libraries**: script tags in index.html other than p5.js, and dependencies in
  package.json. List them by name (e.g. `p5.sound`), or `none`.
Tell the user in one line what you found.

Create `.masterclass/profile.md`:
```markdown
# Masterclass profile
- Experience Level: <beginner|intermediate|advanced>
- Checkpoints: <light|normal|frequent>
- Design Decisions: <neutral|minor|ask>
- p5.js version: <e.g. 2.2.3>
- Existing UI: <html-css|p5-dom|none>
- Libraries: <comma-separated names, or none>
```
Create `.masterclass/notes.md` with only the heading `# Learning notes`.
Topics are added as entries come in (see "Notes" in behavior.md).

Suggest adding `.masterclass/` to `.gitignore`, but do not change it without asking.

## 2b. Returning: resume

Read `.masterclass/profile.md` and `.masterclass/notes.md`.
Re-check the p5.js version; if it changed, update the profile and say so.
Older profiles use the names "Level" and "Design placeholders": rename those
lines to "Experience Level" and "Design Decisions" (values stay the same).
If the profile has no "Design Decisions" line at all, ask setup question 3
once and add the answer to the profile.
Re-scan the project for existing UI and libraries (as in setup) and update the
profile if anything changed (also add the lines if an older profile lacks them).
Summarize where we left off in two sentences, then ask as a button question:
"What would you like to do?"
Options: Continue – "Pick up where we left off" /
Something new – "I have a new idea for this sketch" /
Review – "Quiz me on what I learned so far"

If `notes.md` still has entries without topics, sort them into topics first
(see "Notes" in behavior.md).

On **Review**: if the notes have more than one topic, ask as a button question
which topic to review (up to 4 topics with the most entries, plus "Mix of
everything"). Then ask quick-check questions about entries from that topic,
one at a time, as described under "Quick checks" in behavior.md.
