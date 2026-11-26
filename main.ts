// One Star for Monday — a one-star review of Monday, written as a restaurant review.
// 15 words, 73 chars — inside the 1–180 char gate, at most 25 words.
// The program only creates the output directory and writes one file.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "One star. I dropped my weekend in the tip jar and Monday kept the change.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
