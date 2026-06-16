const fs = require('node:fs/promises');
const path = require('node:path');
const { FileBlob, PresentationFile } = require('@oai/artifact-tool');

async function writeBlob(targetPath, blob) {
  await fs.writeFile(targetPath, new Uint8Array(await blob.arrayBuffer()));
}

(async () => {
  const src = 'C:/Ananda/shiftby.sg/WebAppV2/shiftby-sg/outputs/20260615-partner-brief/output/editable_rebuilt_deck_v84.pptx';
  const out = 'C:/Ananda/shiftby.sg/WebAppV2/shiftby-sg/outputs/20260615-partner-brief/output/editable_rebuilt_deck_v86.pptx';
  const qaDir = 'C:/Ananda/shiftby.sg/WebAppV2/shiftby-sg/outputs/20260615-partner-brief/output/v86-slide2-check';
  await fs.mkdir(qaDir, { recursive: true });
  const presentation = await PresentationFile.importPptx(await FileBlob.load(src));
  const inspect = await presentation.inspect({ kind: 'slide,textbox,shape,image,table,chart,layout', maxChars: 30000 });
  const records = inspect.ndjson.split(/\r?\n/).filter(Boolean).map((line) => JSON.parse(line));
  const slide2 = records.find((r) => r.kind === 'slide' && r.slide === 2);
  const titleRec = records.find((r) => r.kind === 'textbox' && r.slide === 2 && r.textChars === 60);
  const bottomRec = records.find((r) => r.kind === 'textbox' && r.slide === 2 && r.textChars === 49);
  const slide = presentation.resolve(slide2.id);
  await writeBlob(path.join(qaDir, 'slide2-before.png'), await presentation.export({ slide, format: 'png', scale: 1 }));

  const titleBox = presentation.resolve(titleRec.id);
  titleBox.text = 'Organizations preserve\nrecords.\nOperating context becomes\nharder to retain.';
  titleBox.text.style = { fontSize: 50, bold: true, color: '#121826', fontFace: 'Ubuntu' };

  const bottomLine = presentation.resolve(bottomRec.id);
  bottomLine.text = 'Understanding connects decisions, evidence, accountability, and outcomes.';
  bottomLine.text.style = { fontSize: 24, bold: false, color: '#5F6B7A', fontFace: 'Ubuntu' };

  slide.shapes.add({ geometry: 'roundRect', name: 'slide2-proof-surface', position: { left: 130, top: 660, width: 560, height: 108 }, fill: '#F7F6FF', line: { style: 'solid', fill: '#E2E6EF', width: 1 }, borderRadius: 'rounded-xl' });
  slide.shapes.add({ geometry: 'line', name: 'slide2-proof-divider', position: { left: 410, top: 680, width: 1, height: 52 }, line: { style: 'solid', fill: '#D8DDE8', width: 1 } });

  let box = slide.shapes.add({ geometry: 'textbox', name: 'slide2-proof1-value', position: { left: 172, top: 680, width: 170, height: 34 }, fill: 'none', line: { style: 'solid', fill: 'none', width: 0 } });
  box.text = '42%';
  box.text.style = { fontSize: 30, bold: true, color: '#121826', fontFace: 'Ubuntu' };
  box = slide.shapes.add({ geometry: 'textbox', name: 'slide2-proof1-copy', position: { left: 172, top: 714, width: 190, height: 26 }, fill: 'none', line: { style: 'solid', fill: 'none', width: 0 } });
  box.text = 'knowledge remains unique to individuals';
  box.text.style = { fontSize: 13, color: '#5F6B7A', fontFace: 'Ubuntu' };

  box = slide.shapes.add({ geometry: 'textbox', name: 'slide2-proof2-value', position: { left: 454, top: 680, width: 180, height: 34 }, fill: 'none', line: { style: 'solid', fill: 'none', width: 0 } });
  box.text = '5.3 hours';
  box.text.style = { fontSize: 30, bold: true, color: '#121826', fontFace: 'Ubuntu' };
  box = slide.shapes.add({ geometry: 'textbox', name: 'slide2-proof2-copy', position: { left: 454, top: 714, width: 180, height: 26 }, fill: 'none', line: { style: 'solid', fill: 'none', width: 0 } });
  box.text = 'lost weekly recreating knowledge';
  box.text.style = { fontSize: 13, color: '#5F6B7A', fontFace: 'Ubuntu' };

  box = slide.shapes.add({ geometry: 'textbox', name: 'slide2-proof-citation', position: { left: 146, top: 778, width: 520, height: 12 }, fill: 'none', line: { style: 'solid', fill: 'none', width: 0 } });
  box.text = '(Panopto 2018; McKinsey Global Institute 2012)';
  box.text.style = { fontSize: 9, italic: true, color: '#7A8594', fontFace: 'Ubuntu' };

  await writeBlob(path.join(qaDir, 'slide2-after.png'), await presentation.export({ slide, format: 'png', scale: 1 }));
  const pptx = await PresentationFile.exportPptx(presentation);
  await pptx.save(out);
  console.log(JSON.stringify({ out, qaDir }, null, 2));
})().catch((err) => { console.error(err); process.exit(1); });
