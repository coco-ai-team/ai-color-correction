import path from "node:path";
import { fileURLToPath } from "node:url";
import correctColor from ".";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function main() {
  const input = path.join(__dirname, "example.png")
  const image = await correctColor(input);
  image.write(path.join(__dirname, "example-processed.png") as `${string}.${string}`)
}

main().catch(console.error);
