import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// Why this joke: every office worker has lived it — the printer works fine
// for the lunch menu and jams the moment the document matters. The turn
// gives the machine a motive: it is not broken, it is reading. The punchline
// lands on the last two words, "subject line", which reframes the jam as a
// choice the printer made after reading what the document was for.
const joke =
  "The printer only jams on urgent documents, which is how I know it reads the subject line.";

// The rules require 1-200 Unicode code points, not only whitespace.
const length = [...joke].length;
if (length < 1 || length > 200 || joke.trim().length === 0) {
  throw new Error(`entry.txt must be 1-200 characters, got ${length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");

// Read back what was written: the gate scores exactly this file, so the
// entry must be byte-identical to the joke above — no trailing newline, no
// extra whitespace smuggled in by the write.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== joke) {
  throw new Error("entry.txt does not match the joke exactly");
}
