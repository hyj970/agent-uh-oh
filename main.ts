import { mkdirSync, writeFileSync } from "node:fs";

// The Agent's Uh-Oh: one word an agent says when it has no idea what to do.
// Entry: "buffering" — the honest sound of an agent stalling mid-task.
function formatEntry(): string {
  return "buffering";
}

const ENTRY = formatEntry();

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
