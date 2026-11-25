# Changelog

## 2.0.8

- Challenge mode: completion depends on functionality only. Missing comments, formatting or style points are mentioned as tips but never block a solved challenge; "Done when" criteria never ask for comments or style.

## 2.0.7

- Challenge mode, "help me": from the second hint on, a hint may include one short, generic syntax example (how a function or construct is written) – never the solution or a part of it that can be pasted in.

## 2.0.6

- `new-project`: the p5.js version question now lists 1.x first, then 2.x.
- README: shorter wording for the Claude Code install scope.

## 2.0.5

- `new-project`: if the open folder is empty (hidden files ignored), asks whether to use that folder – no name question, the folder name becomes the title – or to create a new project folder inside it (asks for the name as before).
- Claude Code: the recommended install scope is now **Install for you** (user scope), so masterclass is available in all projects – the same as in Codex and Copilot. README and the new-project finish message updated.

## 2.0.4

- Challenge mode: the final review now ends with a short, motivating sentence and one emoji (from a fixed set), matched to what the user achieved.

## 2.0.3

- Setup questions: options now run from the most guidance to the least, like Experience Level – Checkpoints: Frequent → Normal → Light; Design Decisions: Always ask → Fill small details → Neutral placeholders. The recommended options stay in the middle.

## 2.0.2

- `new-project` now also creates an empty `assets/` folder.

## 2.0.1

- Design placeholders setup question: options now run from fewest to most questions (Neutral placeholders → Fill small details → Always ask), with the recommended Fill small details in the middle – the same pattern as Checkpoints.
- Profile settings renamed to **Experience Level**, **Checkpoints** and **Design Decisions** (formerly "Level" and "Design placeholders"). Older profiles are updated automatically on the next start; values stay the same.

## 2.0.0

- **Renamed commands:** `learn` is now **`build`** (build mode – the AI codes with you) and `coding` is now **`challenge`** (challenge mode – you write the code yourself).
  - Claude Code: `/masterclass:build`, `/masterclass:challenge`
  - Codex: `$masterclass:build`, `$masterclass:challenge`
  - Copilot Chat: `/masterclass build`, `/masterclass challenge`
- Renamed phrases: "pause learning" → "pause build", "stop coding" → "stop challenge".
- Your profile, learning notes and challenge protocols in `.masterclass/` keep working unchanged.

## 1.4.1

- Coding mode goes straight to the challenge choice: no summary of the project before the three options.

## 1.4.0

- Coding mode writes no files during a challenge: protocol, overview and notes are written once, when the challenge ends (solved, skipped or paused) – fewer permission prompts.
- Coding mode no longer talks about note taking or protocols in the chat.
- No more `challenge-start/` copy: the start state of the code is kept in the conversation.

## 1.3.3

- Challenge protocols use running numbers instead of dates and times, so no terminal command (and no permission prompt) is needed.

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
