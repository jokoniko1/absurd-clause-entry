import * as fs from "node:fs";

const CLAUSE =
  "By accepting these terms, you grant the Company a perpetual licence to borrow your dreams on Tuesdays for quality assurance purposes.";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", CLAUSE, "utf8");
