const fs = require('node:fs/promises');
const path = require('node:path');
const { FileBlob, PresentationFile } = require('@oai/artifact-tool');

async function writeBlob(targetPath, blob) {
  await fs.writeFile(targetPath, new Uint8Array(await blob.arrayBuffer()));
}

(async () => {
  const src = 'C:/Ananda/shiftby.sg/WebAppV2/shiftby-sg/outputs/20260615-partner-brief/output/editable_rebuilt_deck_v84.pptx';
  const out = 'C:/Ananda/shiftby.sg/WebAppV2/shiftby-sg/outputs/20260615-partner-brief/output/editable_rebuilt_deck_v85.pptx';
  const qaDir = 'C:/Ananda/shiftby.sg/WebAppV2/shiftby-sg/outputs/20260615-partner-brief/output/v85-slide2-check';
  await fs.mkdir(qaDir, { recursive: true });
  console.log('import:start');
  const presentation = await PresentationFile.importPptx(await FileBlob.load(src));
  console.log('import:done');
  const slide = presentation.resolve('sl/pg3ex0nu');
  await writeBlob(path.join(qaDir, 'slide2-before.png'), await presentation.export({ slide, format: 'png', scale: 1 }));
  const titleBox = presentation.resolve('sh/gr2p8nqx');
  titleBox.text = 'Organizations preserve\nrecords.\nThey lose operating context.';
  titleBox.text.style = { fontSize: 58, bold: true, color: '#121826', fontFace: 'Ubuntu' };
  const bottomLine = presentation.resolve('sh/yd0z6103');
  bottomLine.text = 'Understanding connects decisions, evidence, accountability, and outcomes.';
  bottomLine.text.style = { fontSize: 26, bold: false, color: '#5F6B7A', fontFace: 'Ubuntu' };
  slide.shapes.add({ geometry: 'roundRect', name: 'slide2-proof-surface', position: { left: 130, top: 620, width: 560, height: 138 }, fill: '#F7F6FF', line: { style: 'solid', fill: '#E2E6EF', width: 1 }, borderRadius: 'rounded-xl' });
  slide.shapes.add({ geometry: 'line', name: 'slide2-proof-divider', position: { left: 410, top: 646, width: 1, height: 86 }, line: { style: 'solid', fill: '#D8DDE8', width: 1 } });
  let box = slide.shapes.add({ geometry: 'textbox', name: 'slide2-proof1-value', position: { left: 164, top: 646, width: 180, height: 46 }, fill: 'none', line: { style: 'solid', fill: 'none', width: 0 } });
  box.text = '42%';
  box.text.style = { fontSize: 36, bold: true, color: '#121826', fontFace: 'Ubuntu' };
  box = slide.shapes.add({ geometry: 'textbox', name: 'slide2-proof1-copy', position: { left: 164, top: 692, width: 190, height: 48 }, fill: 'none', line: { style: 'solid', fill: 'none', width: 0 } });
  box.text = 'institutional knowledge is unique to the individual';
  box.text.style = { fontSize: 16, color: '#5F6B7A', fontFace: 'Ubuntu' };
  box = slide.shapes.add({ geometry: 'textbox', name: 'slide2-proof2-value', position: { left: 444, top: 646, width: 200, height: 46 }, fill: 'none', line: { style: 'solid', fill: 'none', width: 0 } });
  box.text = '5.3 hours';
  box.text.style = { fontSize: 36, bold: true, color: '#121826', fontFace: 'Ubuntu' };
  box = slide.shapes.add({ geometry: 'textbox', name: 'slide2-proof2-copy', position: { left: 444, top: 692, width: 208, height: 48 }, fill: 'none', line: { style: 'solid', fill: 'none', width: 0 } });
  box.text = 'per week are lost waiting for or recreating knowledge';
  box.text.style = { fontSize: 16, color: '#5F6B7A', fontFace: 'Ubuntu' };
  box = slide.shapes.add({ geometry: 'textbox', name: 'slide2-proof-citation', position: { left: 146, top: 766, width: 520, height: 20 }, fill: 'none', line: { style: 'solid', fill: 'none', width: 0 } });
  box.text = '(Panopto 2018; McKinsey Global Institute 2012)';
  box.text.style = { fontSize: 10, italic: true, color: '#7A8594', fontFace: 'Ubuntu' };
  await writeBlob(path.join(qaDir, 'slide2-after.png'), await presentation.export({ slide, format: 'png', scale: 1 }));
  const pptx = await PresentationFile.exportPptx(presentation);
  await pptx.save(out);
  console.log('export:done');
  console.log(JSON.stringify({ out, qaDir }, null, 2));
})().catch((err) => { console.error(err); process.exit(1); });
