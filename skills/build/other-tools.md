# Masterclass in Codex and VS Code Copilot Chat

These notes adapt Claude Code names for other tools. They don't change the
learning behavior; follow SKILL.md and behavior.md as written.

## Codex
- Commands: `/masterclass:build` is `$masterclass:build`;
  `/masterclass:reset` is `$masterclass:reset`;
  `/masterclass:new-project` is `$masterclass:new-project`;
  `/masterclass:challenge` is `$masterclass:challenge`.
- Paths: guides such as behavior.md and the references/ folder sit next to
  this file. `${CLAUDE_PLUGIN_ROOT}` is not expanded in Codex.
- Button questions: AskUserQuestion doesn't exist here. If a native question
  tool such as `request_user_input` is available, use it with the same options.
  Otherwise use the text fallback below.

## VS Code Copilot Chat
- Commands: the user starts these skills from the `/` menu in chat.
  Refer to them by the name shown there (e.g. "build" from masterclass).
- Paths: guides and references sit next to this file; read them with your
  file tools.
- Button questions: if a native tool for asking the user questions with options
  is available, use it with the same options. Otherwise use the text fallback below.

## Text fallback for button questions
Ask the question once, at the end of your reply, with numbered options:

    Does this plan work for you?
    1. Confirm – go on to the code
    2. Change something – I want to adjust the plan
    3. Explain more – I don't understand a part yet

Tell the user they can reply with the number or their own words. Then end your
turn and wait.

## All tools
Learning notes live in `.masterclass/` in the project, so they are shared
between Claude Code, Codex and Copilot.
