import path from "node:path";
import { fileURLToPath } from "node:url";
import { correctColor } from ".";
import fs from "node:fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function main() {
  const input = path.join(__dirname, "example.png")
  const image = await correctColor(fs.readFileSync(input), "image/png");
  fs.writeFileSync(path.join(__dirname, "example-processed.png"), image);
}

main().catch(console.error);
