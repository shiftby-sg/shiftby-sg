const fs = require('node:fs/promises');
const path = require('node:path');
const { FileBlob, PresentationFile } = require('@oai/artifact-tool');

async function writeBlob(targetPath, blob) {
  await fs.writeFile(targetPath, new Uint8Array(await blob.arrayBuffer()));
}

(async () => {
  const src = 'C:/Ananda/shiftby.sg/WebAppV2/shiftby-sg/outputs/20260615-partner-brief/output/editable_rebuilt_deck_v86.pptx';
  const out = 'C:/Ananda/shiftby.sg/WebAppV2/shiftby-sg/outputs/20260615-partner-brief/output/editable_rebuilt_deck_v87.pptx';
  const qaDir = 'C:/Ananda/shiftby.sg/WebAppV2/shiftby-sg/outputs/20260615-partner-brief/output/v87-slide2-check';
  await fs.mkdir(qaDir, { recursive: true });

  const presentation = await PresentationFile.importPptx(await FileBlob.load(src));
  const slide = presentation.slides.items[1];
  const titleBox = slide.shapes.items.find((shape) => shape.text && String(shape.text).includes('Organizations preserve'));
  if (!titleBox) throw new Error('Title box not found');

  titleBox.text = 'Organizations preserve\nrecords.\nOperating context\nis harder to preserve.';
  titleBox.text.style = { fontSize: 50, bold: true, color: '#121826', fontFace: 'Ubuntu' };

  await writeBlob(path.join(qaDir, 'slide2-after.png'), await presentation.export({ slide, format: 'png', scale: 1 }));
  const pptx = await PresentationFile.exportPptx(presentation);
  await pptx.save(out);
  console.log(JSON.stringify({ out, qaDir }, null, 2));
})().catch((err) => { console.error(err); process.exit(1); });
