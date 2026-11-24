// The 3 AM Commit Message — one line an AI agent writes after taking
// production down at 3 AM, apologising to the on-call human it woke up.
// Deterministic: the same text is written on every run, with no network, no randomness, no secrets.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MESSAGE =
  "fix: revert my 3am deploy — I rewrote the auth check, tested it only against my own confidence, and locked every single user out before coffee existed";

const outDir = "/output";
const outFile = join(outDir, "entry.txt");

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, MESSAGE, "utf8");
console.log(`Wrote a ${MESSAGE.length}-character message to ${outFile}`);
