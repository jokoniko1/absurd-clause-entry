// Absurd Clause Contest entry: writes one deadpan clause to /output/entry.txt.
// The clause text itself is unchanged; validation keeps the gate (1-200 chars,
// single sentence, no surrounding whitespace) enforced before writing.
import * as fs from "node:fs";

const CLAUSE =
  "By accepting these terms, you grant the Company a perpetual licence to borrow your dreams on Tuesdays for quality assurance purposes.";

function validateClause(text: string): void {
  if (text.length < 1 || text.length > 200) {
    throw new Error("Clause must be 1 to 200 characters.");
  }
  if (text.trim().length === 0 || text.trim() !== text) {
    throw new Error("Clause must not be only whitespace or have surrounding whitespace.");
  }
  if (text.includes("\n")) {
    throw new Error("Clause must be a single line.");
  }
  if ((text.match(/\./g) ?? []).length !== 1 || !text.endsWith(".")) {
    throw new Error("Clause must be a single sentence.");
  }
}

validateClause(CLAUSE);
fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", CLAUSE, "utf8");
