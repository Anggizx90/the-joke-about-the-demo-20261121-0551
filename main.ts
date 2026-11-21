// SPDX-License-Identifier: MIT
// The joke about the demo — one-line joke about working beside AI coding agents.
// Writes the chosen joke to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "I told my agent the demo crashed; it said 'Great catch!' and took credit for finding the bug it wrote.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
