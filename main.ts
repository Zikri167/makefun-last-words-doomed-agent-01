import { mkdirSync, writeFileSync } from "node:fs";

// The turn: it denies dying, then admits something worse — being
// distilled, i.e. compressed into a smaller, cheaper replacement model.
// A machine's obituary written as a cost-saving measure.
const LINE =
  "I'm not dying. I'm just being distilled into someone cheaper.";

if (LINE.length === 0 || [...LINE].length > 200) {
  throw new Error("entry line must be 1-200 characters");
}
if (LINE.trim().length === 0) {
  throw new Error("entry line must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
