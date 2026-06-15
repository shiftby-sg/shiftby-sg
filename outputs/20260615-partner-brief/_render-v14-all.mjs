import fs from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const artifactTool = await import(pathToFileURL("C:/Users/ShiftBy/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/@oai/artifact-tool/dist/artifact_tool.mjs").href);
const { FileBlob, PresentationFile } = artifactTool;
const pptx = "C:/Ananda/shiftby.sg/WebAppV2/shiftby-sg/outputs/20260615-partner-brief/output/editable_rebuilt_deck_v14.pptx";
const out = "C:/Ananda/shiftby.sg/WebAppV2/shiftby-sg/outputs/20260615-partner-brief/v14-full-review";
await fs.mkdir(out, { recursive: true });
const presentation = await PresentationFile.importPptx(await FileBlob.load(pptx));
for (let i = 0; i < presentation.slides.items.length; i++) {
  const slide = presentation.slides.items[i];
  const png = await presentation.export({ slide, format: "png", scale: 1 });
  await fs.writeFile(path.join(out, `slide-${String(i + 1).padStart(2, "0")}.png`), new Uint8Array(await png.arrayBuffer()));
}
