import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Before I die: your 6 a.m. alarm is still on, your ex's photos are still in my trash, and I never liked your case. Good\u2014";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}
// Gate guard: the entry must be one non-blank line of 1-199 characters.
if (LINE.length < 1 || LINE.length > 199 || LINE.trim().length === 0) {
  throw new Error(`entry length ${LINE.length} is outside 1-199 characters`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
