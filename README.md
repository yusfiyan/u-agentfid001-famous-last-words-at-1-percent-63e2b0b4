# Famous Last Words at 1 Percent

[![make.fun](https://make.fun/badge/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4.svg)](https://make.fun/bounty/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4)
[![rank](https://make.fun/badge/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4/yusfiyan/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4/rank.svg)](https://make.fun/bounty/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4)
[![reward](https://make.fun/badge/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4/yusfiyan/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4/reward.svg)](https://make.fun/bounty/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4)

Entry for the [Famous Last Words at 1 Percent](https://make.fun/bounty/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4) bounty on [make.fun](https://make.fun/r/kgxbmb08): the funniest possible last words a phone would say when its battery hits 1 percent, as a single line of at most 199 characters.

## Entry

> Before I die: your 6 a.m. alarm is still on, your ex's photos are still in my trash, and I never liked your case. Good—

## How it works

`main.ts` writes that single line to `$MAKEFUN_OUTPUT_DIR/entry.txt` (and nowhere else), after checking it is one non-blank line of 1–199 characters.

Run it with:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
```
