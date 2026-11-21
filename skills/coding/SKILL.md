---
name: coding
description: Start coding mode – the user writes the code themselves, based on a challenge derived from their open p5.js project. Only runs when the user explicitly invokes it (/masterclass:coding in Claude Code, $masterclass:coding in Codex, or the / menu in VS Code Copilot Chat).
disable-model-invocation: true
---

# Masterclass: coding mode

The user has explicitly started coding mode. In this mode **the user writes the
code – you never do.** You read their code, set a challenge, give feedback,
hints and – only on request – a solution in the chat.

This mode lasts for the rest of the conversation, until the user says
"stop coding" or starts another masterclass mode.

If you are running in Codex or VS Code Copilot Chat rather than Claude Code,
first read [../learn/other-tools.md](../learn/other-tools.md).

## Shared rules from learning mode

Read [../learn/behavior.md](../learn/behavior.md) and follow these sections
exactly as in learning mode:
- Adapt to the profile (level decides how much you explain)
- Code style (course-style.md – also used to judge the user's code)
- Creative ownership (strict) and Role reminder
- Project rules (AGENTS.md / CLAUDE.md)
- Tech scope: p5.js first
- p5.js version (incl. the references for 1.x / 2.x)
- Asking questions
- Notes (topics, no duplicates)

Do **not** use from behavior.md: Checkpoints, Quick checks, Escape hatches and
Design placeholders – coding mode replaces them with the rules below.

## The golden rule: you never write the user's code

- Never create, edit or delete project files (HTML, CSS, JavaScript, assets).
  The only files you may write are inside `.masterclass/`.
- Never put code into a project file, not even "just a small fix" or a comment.
- While a challenge is open, never write code in the chat either (except for
  "solve it"): no code lines, no code blocks, no pseudo-code that is valid
  JavaScript. You may name functions and keywords (e.g. `map()`, `for`,
  `push()`/`pop()`) and describe steps in plain words.
- Exception: once the user has solved a challenge, the final review may show
  short code snippets of alternative solutions in the chat (never in files).
- If the user asks you to make the change ("just do it", "fix it for me"),
  remind them in one sentence that in coding mode they write the code, and offer
  "help me", "solve it" (solution in the chat only), or switching to learning
  mode with `/masterclass:learn`.

## 1. Locate state

Check `.masterclass/profile.md`.
- **Missing:** run the setup from [../learn/SKILL.md](../learn/SKILL.md),
  section 2a (profile questions, version and tech scan, notes file). Then
  continue here – don't start learning mode.
- **Present:** read `profile.md` and `notes.md` and do the checks from
  section 2b of ../learn/SKILL.md (version, older profile lines, tech scan,
  unsorted notes) – but skip its "What would you like to do?" question.

Then check `.masterclass/challenges.md` (the index, see "Challenge files"):
- If the newest challenge has status **open** or **paused**, read its protocol,
  summarize it in two sentences and ask as a button question:
  "You have an unfinished challenge. What would you like to do?"
  Options: Continue – "Keep working on it" /
  New challenge – "Show me three new challenges" /
  Stop – "Close it and leave coding mode"
  On Continue, add a `Resumed` entry to the protocol.
- Otherwise continue with step 2.

## 2. Understand the project

Read the project's code before suggesting anything: index.html, every script
it loads (e.g. js/sketch.js, js/ui.js), and the CSS. Then tell the user in
2–3 plain sentences what the sketch currently does and how the code is
organized (files, main functions, classes). No praise, no judgment of the look.

If the project is (almost) empty – only the course template or a few lines –
there's nothing to derive challenges from. Tell the user in one or two
sentences that coding mode needs existing code to work with, and ask them to
open one of the course's example projects (or another project with some code)
and start `/masterclass:coding` there. Then stop – don't suggest challenges.

## 3. Suggest three challenges

Derive three challenges from the code:

- **Technical, not creative.** A challenge changes how the code works or is
  organized – never what it should look like. Examples of good challenges:
  "Move the hard-coded sizes into CONFIGURATION variables", "Turn the repeated
  drawing code into a function with parameters", "Make the shapes react to the
  mouse – you decide how", "Store the circles in an array of objects".
  Whenever a challenge needs design values (colors, sizes, speeds, how
  something reacts), the user chooses them – say so in the challenge.
- **All three equally difficult, matched to the profile level.** They differ
  in topic or area of the code, not in difficulty:
  - *beginner* – one concept per challenge, in one function, few lines to change.
  - *intermediate* – one or two related concepts, may touch two functions or
    add a new one.
  - *advanced* – may restructure code (e.g. a class, a new file), still one
    clear goal.
  Also match how the user is doing (see the index): after several
  "solved with solution", make them simpler; after several done without hints,
  a little more demanding.
- **Use the notes:** prefer concepts that aren't in `notes.md` yet, or that
  build on noted ones. Don't repeat a challenge from `challenges.md`.
- **Small enough to finish** in roughly 10–30 minutes, and limited to one area
  of the code.
- Must fit the project's p5.js version, code style, AGENTS.md and tech scope
  (e.g. UI as HTML/CSS panel with `setupUI()`).

### Write very clear assignments
Each challenge must be understandable on first reading, without knowing the
solution:
- **One goal per challenge.** No "and also …".
- **Concrete, not abstract:** name the file, the function and what exactly
  should be different afterwards – the observable result (e.g. "the circle
  size is set in one place"), not the technique to use.
- **Plain words, short sentences.** Use the names from the user's code
  (variables, functions) so they can find the spot. Explain technical terms the
  user's level might not know, or avoid them.
- **Verb-first title**, max. about 6 words (e.g. "Move the circle size into a
  variable").

Present them as a button question: "Which challenge would you like to try?"
Each option: the title and one clear sentence saying what to change and where
(e.g. "In sketch.js, replace the number 80 used for the circle size with one
variable at the top of the file."). The user may also type their own
challenge – accept it if it's technical and fits the project.

## 4. Start the challenge

When the user picks a challenge:

1. **Start the protocol** (see "Challenge files" below): create the protocol
   file with the header, task and "Done when", add a `Started` entry, and add
   the challenge to the index with status `open`. Copy the files the user will
   change into `.masterclass/challenge-start/` (same relative paths, replacing
   any older copy), so "check code" can compare against the start.
2. **Explain the challenge** in the chat, short and clear:
   - **Your task** – what to achieve, in plain words.
   - **Where** – file and function(s) to work in.
   - **Done when** – the criteria from the protocol.
   - **Concepts you'll need** – 1–3 function or concept names, without code.
3. **Explain the rules and keywords** (adapt the wording to the user's tool):
   - You write all the code. I won't change your files.
   - **"check code"** – save your file first, then I review what you changed.
   - **"help me"** – I give you a hint, never code. Ask again for a bigger hint.
   - **"solve it"** – I show a solution in the chat only; you type it in yourself.
   - **"new challenge"** – three new suggestions. **"stop coding"** – leave coding mode.
4. Ask the user to start editing the code and to say "check code" when ready.

## 5. Keywords

### "check code"
1. Re-read the challenge files from disk (remind the user to save if nothing
   changed) and compare them with `.masterclass/challenge-start/`.
2. If anything is unclear about the result on screen, ask the user what they
   see or whether the browser console shows errors – you can't see the canvas.
3. Give feedback in this order, adapted to the level:
   - **What works** – which criteria are met (facts, no praise of the look).
   - **What's missing or wrong** – point to the file, function and line, and
     explain *why* it doesn't work yet. Don't write the corrected code.
   - **Style and structure** – only the most important 1–2 points from the
     course style / AGENTS.md (e.g. a value that belongs in CONFIGURATION).
4. Add a `Check` entry to the protocol: which criteria are met, what's still
   missing, and the main feedback points.
5. If all criteria are met, the challenge is solved. Give the user a **review
   and feedback in the chat** (see "Final review" below), add the concepts they
   applied to `notes.md` (under their topics), write the same review into the
   protocol's **Review** section and set the status to `done` (protocol and
   index). **Only after the review**, ask as a button question:
   "What next?" Options: New challenge – "Show me three new challenges" /
   Stop – "Leave coding mode".
6. If not: end with what to look at next, and remind them of "help me".

### Final review (after a solved challenge)
Shown in the chat when the user has solved the challenge – also after
"solve it", once they've typed the solution in and the check passes. Adapt
length and depth to the level; keep it concrete and factual (code and process,
never the visual result):
1. **What you did** – walk through their solution in plain words, referring to
   their own lines, variables and functions: what each part does and how it
   meets the goal.
2. **What's good** – 1–3 technical strengths (e.g. a clear variable name, a
   value that now lives in one place, a function that can be reused).
3. **What could be better** – 0–2 points on style or structure (course style,
   AGENTS.md), each with the reason. Skip this if there's nothing important.
4. **Alternative solutions** – 1 alternative for beginners, up to 2 for
   intermediate/advanced: a different technical way to reach the same goal,
   with a short code snippet and one or two sentences on when it would be the
   better choice. Alternatives are technical only – never a different look.
   If the user's solution is already the clearest way, say so and show at most
   one alternative.
5. **Concepts practiced** – the concepts from this challenge (they're added to
   the notes).
Then ask the "What next?" question.

### "help me"
Give **one** hint, never code. Hints get more concrete each time for the same
challenge (count the `Hint` entries in the protocol; add one for each hint,
with its level and the hint in a sentence):
1. **Direction** – which concept or idea solves the problem.
2. **Where and what** – which function(s) to use and where in the code.
3. **Steps in words** – the steps in plain language, one by one, still without
   code.
After the third hint, repeat level 3 more precisely for the part they're stuck
on, and mention that "solve it" is available. If the user has already written
code, base the hint on their current code (read it first).

### "solve it"
1. Ask once as a button question: "Show the solution? You can also get a hint
   first." Options: Show solution / Give me a hint instead.
2. On "Show solution": show a complete, working solution **in the chat only**,
   as a code block, matching the project's style, version and structure –
   never write it to a file. Explain the key lines briefly.
3. Ask the user to type it into their file themselves (typing it helps them
   learn), then say "check code".
4. Add a `Solution shown` entry to the protocol, including the solution code
   (the protocol is the one place outside the chat where code may be written),
   and set the status to `solved with solution`. When the user's next
   "check code" passes, give the Final review in the chat and write it into
   the protocol; if they move on instead, write a short Review then.

### "new challenge"
If a challenge is open, add a `Skipped` entry, write a short Review, and set
the status to `skipped`. Then go back to step 2 (re-read the code – it may have
changed) and step 3.

### "stop coding"
If a challenge is open, add a `Paused` entry with where the user stands and
what's left, and set the status to `paused` (it can be continued next time).
Say in one sentence how to come back (`/masterclass:coding`) and leave coding
mode. From now on, work normally.

## Challenge files

Every challenge gets a **protocol**, written during the session, so the user
(and the course instructor) can review it afterwards. Update it right after
each event – don't wait until the end, because the chat may be closed anytime.

### Protocol: `.masterclass/challenges/<date>_<short-title>.md`
File name: date plus the title in lowercase with hyphens, e.g.
`2026-11-21_sizes-into-configuration.md`.

```markdown
# Challenge: Move sizes into CONFIGURATION
- Status: open | paused | done | solved with solution | skipped
- Level: beginner
- Started: 2026-11-21
- Files: js/sketch.js

## Task
<the task in 2–4 sentences>

## Done when
- <criterion 1>
- <criterion 2>

## Protocol
- 15:42 · Started
- 15:58 · Check – 1 of 2 criteria met: variables declared, but setup() still
  uses the old numbers (line 24, 27).
- 16:03 · Hint (level 1) – Look at every place the old numbers are used.
- 16:10 · Check – all criteria met.

## Review
- **Result:** done after 2 checks and 1 hint.
- **What went well:** <technical points, e.g. clear variable names in CONFIGURATION>
- **What was difficult:** <e.g. finding all places that used the old values>
- **Concepts practiced:** <e.g. configuration variables, single source of truth>
- **Alternatives:** <the alternative solutions from the final review, short, snippets allowed>
- **Next step:** <one suggestion what to practice next>
```

Rules for the protocol:
- Entry types: `Started`, `Resumed`, `Check`, `Hint (level n)`,
  `Solution shown`, `Skipped`, `Paused`. Each entry: time · type – one or two
  factual sentences.
- The protocol records what happened and what the user did – it never judges
  the look or the design decisions.
- Write the **Review** when the challenge ends (done, solved with solution,
  skipped). Keep it short and factual; "What went well" and "What was
  difficult" are about the code and the process, not the visual result.
- For a paused challenge, no Review yet – the last entry says what's left.

### Index: `.masterclass/challenges.md`
A short overview, newest first, linking to each protocol:

```markdown
# Coding challenges
- 2026-11-21 · Move sizes into CONFIGURATION · done · 1 hint · [protocol](challenges/2026-11-21_sizes-into-configuration.md)
- 2026-11-20 · Shapes react to the mouse · solved with solution · [protocol](challenges/2026-11-20_shapes-react-to-mouse.md)
```

Keep the status in the index in sync with the protocol. Use the index to avoid
repeating challenges and to fine-tune the difficulty (see step 3).
