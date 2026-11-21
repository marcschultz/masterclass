# Changelog

## 1.3.2

- When you solve a coding challenge, you first get a review in the chat: what you did, what's good, what could be better, alternative solutions and the concepts practiced. Only then you're asked whether to do a new challenge or stop.

## 1.3.1

- Coding mode offers three equally difficult challenges matched to your profile level (no more warm-up / stretch tiers).
- Clearer assignments: one goal each, with file, function and the observable result, in plain words.

## 1.3.0

- New **coding mode** (`/masterclass:coding`): you write the code yourself. The AI reads your project, suggests three challenges, and supports you with "check code", "help me" (hints, never code) and "solve it" (solution in the chat only). It never edits your project files.
- Every challenge gets a protocol in `.masterclass/challenges/` (task, checks, hints, solution, timestamps) with a short review at the end; `challenges.md` lists all challenges. Unfinished challenges can be continued in a new chat.
- In an empty project, coding mode asks you to open an example project first.
- The AGENTS.md template mentions coding mode in its "Learning Mode" section.

## 1.2.1

- Quiz and review questions vary the position of the correct answer and use plausible wrong answers, so there's no pattern to spot.

## 1.2.0

- The marketplace is now called `schultzschultz`, so the plugin shows up as `masterclass@schultzschultz`.
- **Reinstall required:** remove the plugin and the old `masterclass` marketplace once, then add `marcschultz/masterclass` again and install `masterclass@schultzschultz`. Your learning notes are not affected.

## 1.1.3

- New description for the "Intermediate" level in the setup: "I’m comfortable modifying code and have used p5.js occasionally."

## 1.1.2

- Open questions use a plain text field where the tool offers one (Copilot Chat); in Claude Code they are asked as plain chat text.

## 1.1.1

- Open questions (e.g. the project name in `new-project`) are asked as plain chat text instead of a button dialog with placeholder options.

## 1.1.0

- Learning notes are organized by topic (16 fixed topics, e.g. Drawing & color, Transformations, Typography).
- Older notes without topics are sorted into topics automatically, without losing any line.
- Review can focus on one topic.

## 1.0.0

First public release.

- Learning mode with checkpoints (idea, design, code, explain), started on purpose with `learn`.
- Creative ownership: all design decisions stay with you; design placeholders as a profile setting.
- p5.js first: HTML/CSS UI panel decoupled from the canvas; browser APIs and new libraries only with a reason.
- p5.js 1.x and 2.x support with version detection and migration notes.
- Course code style and explanation depth by level.
- Commands: `learn`, `reset`, `new-project`.
- Works with Claude Code, Codex and VS Code Copilot Chat.
