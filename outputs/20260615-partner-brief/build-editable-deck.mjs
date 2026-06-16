import fs from "node:fs/promises";
import path from "node:path";
import { Presentation, PresentationFile } from "file:///C:/Users/ShiftBy/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/@oai/artifact-tool/dist/artifact_tool.mjs";

const OUT_DIR = "C:/Ananda/shiftby.sg/WebAppV2/shiftby-sg/outputs/20260615-partner-brief/output";
const PPTX_OUT = path.join(OUT_DIR, "editable_rebuilt_deck_v84.pptx");
const REPORT_OUT = path.join(OUT_DIR, "editability_report.json");
const PREVIEW_DIR = "C:/Ananda/shiftby.sg/WebAppV2/shiftby-sg/outputs/20260615-partner-brief/editable-preview";
const LOGO_PATH = "C:/Ananda/shiftby.sg/WebAppV2/shiftby-sg/outputs/20260615-partner-brief/ShiftbyLogoTransparentTrimmed.png";
const LOGO_DATA_URL = `data:image/png;base64,${(await fs.readFile(LOGO_PATH)).toString("base64")}`;
const WATERMARK_PATH = "C:/Ananda/shiftby.sg/WebAppV2/shiftby-sg/outputs/20260615-partner-brief/ShiftbyLogoWatermark.png";
const WATERMARK_DATA_URL = `data:image/png;base64,${(await fs.readFile(WATERMARK_PATH)).toString("base64")}`;

const W = 1920;
const H = 1080;
const BG = "#F8FAFD";
const TINT = "#F7F0F8";
const BORDER = "#D6D9E3";
const LINE = "#D8DBE6";
const INK = "#0E1420";
const BODY = "#5A6473";
const ACCENT = "#5863D6";
const FAINT = "#EAEAF6";
const WATERMARK = "#E8EAF6";
const DARK_RING = "#5D7595";
const DARK_RING_2 = "#2A3762";
const DARK_CENTER = "#0C1A43";
const FOOTER_TEXT = "ShiftBy | A guide to when ShiftBy can help";

function blankTextbox(slide, left, top, width, height) {
  return slide.shapes.add({
    geometry: "textbox",
    position: { left, top, width, height },
    fill: "none",
    line: { style: "solid", fill: "none", width: 0 },
  });
}

function addText(slide, {
  left,
  top,
  width,
  height,
  text,
  size = 24,
  bold = false,
  color = INK,
  align = "left",
  valign = "top",
  typeface = "Arial",
}) {
  const shape = blankTextbox(slide, left, top, width, height);
  shape.text = text;
  shape.text.style = {
    fontSize: size,
    bold,
    color,
    alignment: align,
    verticalAlignment: valign,
    typeface,
  };
  shape.text.insets = { left: 0, right: 0, top: 0, bottom: 0 };
  return shape;
}

function addLine(slide, left, top, width, height = 1, color = LINE) {
  return slide.shapes.add({
    geometry: "rect",
    position: { left, top, width, height },
    fill: color,
    line: { style: "solid", fill: color, width: 0 },
  });
}

function addRect(slide, left, top, width, height, fill = "white", lineFill = BORDER, lineWidth = 1, geometry = "rect") {
  return slide.shapes.add({
    geometry,
    position: { left, top, width, height },
    fill,
    line: { style: "solid", fill: lineFill, width: lineWidth },
  });
}

function addCircle(slide, left, top, size, fill = "none", lineFill = WATERMARK, lineWidth = 18) {
  return slide.shapes.add({
    geometry: "ellipse",
    position: { left, top, width: size, height: size },
    fill,
    line: { style: "solid", fill: lineFill, width: lineWidth },
  });
}

function addLogoImage(slide, left, top, size, opts = {}) {
  return slide.images.add({
    dataUrl: LOGO_DATA_URL,
    alt: "ShiftBy logo",
    position: { left, top, width: size, height: size },
    fit: opts.fit ?? "contain",
  });
}

function addWatermark(slide, opts = {}) {
  const left = opts.left ?? 1350;
  const top = opts.top ?? 190;
  const size = opts.size ?? 590;
  slide.images.add({
    dataUrl: WATERMARK_DATA_URL,
    alt: "ShiftBy watermark",
    position: { left, top, width: size, height: size },
    fit: "contain",
  });
}

function addHeader(slide, sectionRight, opts = {}) {
  const tint = opts.tint;
  if (tint) {
    addRect(slide, opts.tintLeft ?? 0, opts.tintTop ?? 0, opts.tintWidth ?? 760, opts.tintHeight ?? 1080, tint, tint, 0);
  }
  addRect(slide, 0, 0, W, H, BG, BG, 0);
  if (tint) {
    addRect(slide, 0, 0, W, H, BG, BG, 0);
  }
  addText(slide, {
    left: 160,
    top: 44,
    width: 190,
    height: 46,
    text: "SHIFTBY",
    size: 21,
    bold: true,
    color: INK,
    valign: "middle",
  });
  addLogoImage(slide, 90, 34, 64, { fit: "contain" });
  addText(slide, {
    left: 1420,
    top: 54,
    width: 370,
    height: 24,
    text: sectionRight,
    size: 12,
    bold: false,
    color: "#2D3F68",
    align: "right",
  });
  addLine(slide, 130, 102, 1650, 1, LINE);
}

function addFooter(slide, _text, page, total = 14) {
  addLine(slide, 130, 993, 1625, 1, LINE);
  addText(slide, {
    left: 130,
    top: 1007,
    width: 1260,
    height: 28,
    text: FOOTER_TEXT,
    size: 15,
    color: "#3D5878",
  });
  const pill = addRect(slide, 1778, 1000, 146, 58, "white", BORDER, 1, "roundRect");
  pill.name = "pager-pill";
  addRect(slide, 1792, 1009, 38, 38, "white", BORDER, 1, "ellipse");
  addRect(slide, 1870, 1009, 38, 38, "white", BORDER, 1, "ellipse");
  addText(slide, {
    left: 1795,
    top: 1013,
    width: 30,
    height: 20,
    text: "‹",
    size: 18,
    bold: true,
    color: INK,
    align: "center",
  });
  addText(slide, {
    left: 1831,
    top: 1014,
    width: 40,
    height: 18,
    text: `${String(page).padStart(2, "0")} / ${String(total).padStart(2, "0")}`,
    size: 13,
    color: "#414D67",
    align: "center",
  });
  addText(slide, {
    left: 1878,
    top: 1013,
    width: 24,
    height: 20,
    text: "›",
    size: 18,
    bold: true,
    color: INK,
    align: "center",
  });
}

function addCard(slide, x, y, w, h, title, body, opts = {}) {
  addRect(slide, x, y, w, h, "white", BORDER, 1, "rect");
  if (opts.index) {
    addText(slide, {
      left: x + 28,
      top: y + 28,
      width: 60,
      height: 20,
      text: opts.index,
      size: 12,
      color: ACCENT,
      bold: true,
    });
  }
  addText(slide, {
    left: x + 28,
    top: y + (opts.titleTop ?? 88),
    width: w - 56,
    height: opts.titleHeight ?? 110,
    text: title,
    size: opts.titleSize ?? 32,
    bold: true,
    color: INK,
    valign: "top",
  });
  if (body) {
    addText(slide, {
      left: x + 28,
      top: y + (opts.bodyTop ?? h - 90),
      width: w - 56,
      height: opts.bodyHeight ?? 50,
      text: body,
      size: opts.bodySize ?? 20,
      color: BODY,
    });
  }
}

function addGrid(slide, x, y, w, h, cols, rows, cells, opts = {}) {
  const gap = opts.gap ?? 0;
  const cellW = (w - gap * (cols - 1)) / cols;
  const cellH = (h - gap * (rows - 1)) / rows;
  const boxes = [];
  let idx = 0;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (idx >= cells.length) break;
      const cell = cells[idx++];
      const left = x + c * (cellW + gap);
      const top = y + r * (cellH + gap);
      const box = addRect(slide, left, top, cellW, cellH, "white", BORDER, 1, cell.rounded ? "roundRect" : "rect");
      boxes.push(box);
      if (cell.index) {
        addText(slide, {
          left: left + 26,
          top: top + 24,
          width: 44,
          height: 20,
          text: cell.index,
          size: 12,
          color: ACCENT,
          bold: true,
        });
      }
      if (cell.title) {
        addText(slide, {
          left: left + (cell.titleLeft ?? 26),
          top: top + (cell.titleTop ?? 85),
          width: cellW - 52,
          height: cell.titleHeight ?? 120,
          text: cell.title,
          size: cell.titleSize ?? 30,
          color: INK,
          bold: true,
        });
      }
      if (cell.body) {
        addText(slide, {
          left: left + (cell.bodyLeft ?? 26),
          top: top + (cell.bodyTop ?? cellH - 76),
          width: cellW - 52,
          height: cell.bodyHeight ?? 40,
          text: cell.body,
          size: cell.bodySize ?? 18,
          color: BODY,
        });
      }
      if (cell.lines) {
        let lineTop = top + (cell.linesTop ?? 84);
        for (const line of cell.lines) {
          addText(slide, {
            left: left + 28,
            top: lineTop,
            width: cellW - 56,
            height: 28,
            text: line,
            size: cell.linesSize ?? 18,
            color: BODY,
          });
          lineTop += 34;
        }
      }
    }
  }
  return boxes;
}

function addTitleBlock(slide, kicker, title, body, opts = {}) {
  addText(slide, {
    left: opts.left ?? 130,
    top: opts.kickerTop ?? 150,
    width: opts.kickerWidth ?? 420,
    height: 24,
    text: kicker,
    size: 12,
    color: ACCENT,
    bold: true,
  });
  addText(slide, {
    left: opts.left ?? 130,
    top: opts.titleTop ?? 175,
    width: opts.titleWidth ?? 760,
    height: opts.titleHeight ?? 280,
    text: title,
    size: opts.titleSize ?? 72,
    color: INK,
    bold: true,
  });
  if (body) {
    addText(slide, {
      left: opts.left ?? 130,
      top: opts.bodyTop ?? 450,
      width: opts.bodyWidth ?? 720,
      height: opts.bodyHeight ?? 200,
      text: body,
      size: opts.bodySize ?? 36,
      color: BODY,
      bold: opts.bodyBold ?? false,
    });
  }
}

function buildEditabilityReportFromInspect(ndjson) {
  const slides = new Map();
  let slideCount = 0;

  for (const rawLine of ndjson.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line) continue;
    const entry = JSON.parse(line);
    if (entry.kind === "slide") {
      if (!Number.isInteger(entry.slide)) continue;
      slideCount = Math.max(slideCount, entry.slide);
      if (!slides.has(entry.slide)) {
        slides.set(entry.slide, { slide: entry.slide, textBoxes: 0, shapes: 0, images: 0 });
      }
      continue;
    }
    if (!Number.isInteger(entry.slide)) continue;
    if (!slides.has(entry.slide)) {
      slides.set(entry.slide, { slide: entry.slide, textBoxes: 0, shapes: 0, images: 0 });
    }
    const current = slides.get(entry.slide);
    if (entry.kind === "textbox") current.textBoxes += 1;
    if (entry.kind === "shape") current.shapes += 1;
    if (entry.kind === "image") current.images += 1;
  }

  return {
    source: "editable rebuild",
    slideCount,
    slides: [...slides.values()]
      .sort((a, b) => a.slide - b.slide)
      .map((slide) => ({
        ...slide,
        passesEditability: slide.images === 0,
      })),
  };
}

function addDarkMark(slide) {
  slide.background.fill = "#000000";
  addCircle(slide, 110, 90, 1700, "none", DARK_RING, 32);
  // create gaps
  addRect(slide, 910, 80, 95, 130, "#000000", "#000000", 0);
  addRect(slide, 80, 845, 120, 100, "#000000", "#000000", 0);
  addRect(slide, 1700, 845, 120, 100, "#000000", "#000000", 0);
  addRect(slide, 920, 940, 95, 140, "#000000", "#000000", 0);
  addCircle(slide, 620, 520, 680, DARK_CENTER, "none", 0);
  addCircle(slide, 650, 548, 620, "none", DARK_RING_2, 6);
}

async function main() {
  await fs.mkdir(OUT_DIR, { recursive: true });
  await fs.mkdir(PREVIEW_DIR, { recursive: true });

  const presentation = Presentation.create({ slideSize: { width: W, height: H } });
  const report = [];
  const originalSlides = [];

  function addSlide(slideBuilder, index) {
    const slide = presentation.slides.add();
    slide.background.fill = BG;
    const counts = { textBoxes: 0, shapes: 0, images: 0 };
    const t = (args) => { counts.textBoxes += 1; return addText(slide, args); };
    const r = (...args) => { counts.shapes += 1; return addRect(slide, ...args); };
    const c = (...args) => { counts.shapes += 1; return addCircle(slide, ...args); };
    const l = (...args) => { counts.shapes += 1; return addLine(slide, ...args); };
    slide._addText = t;
    slide._addRect = r;
    slide._addCircle = c;
    slide._addLine = l;
    slideBuilder(slide, { t, r, c, l, counts });
    report.push({
      slide: index,
      textBoxes: counts.textBoxes,
      shapes: counts.shapes,
      images: counts.images,
      passesEditability: counts.images === 0,
    });
    return slide;
  }

  originalSlides.push(addSlide((slide, api) => {
    addHeader(slide, "BRIEFING");
    addTitleBlock(
      slide,
      "INTRODUCTION",
      "Execution changes.\nUnderstanding preserves confidence.",
      "AI advisory, coaching, and thought leadership for organizations navigating AI,\ngovernance, knowledge, and transformation.",
      { kickerTop: 275, titleTop: 300, bodyTop: 625, bodyHeight: 120, bodySize: 36, titleWidth: 980, titleHeight: 260 }
    );
    addWatermark(slide, { left: 1420, top: 240, size: 560, lineFill: FAINT, centerFill: FAINT, lineWidth: 16 });
    addFooter(slide, "ShiftBy guidance footer.", 1);
  }, 1));

  originalSlides.push(addSlide((slide) => {
    addHeader(slide, "WHY SHIFTBY EXISTS");
    addText(slide, { left: 130, top: 275, width: 320, height: 24, text: "CORE OBSERVATION", size: 12, color: ACCENT, bold: true });
    addText(slide, { left: 130, top: 321, width: 560, height: 235, text: "Organizations preserve\nrecords.\nThey lose operating context.", size: 64, color: INK, bold: true });
    addLine(slide, 130, 804, 760, 1);
    addText(slide, { left: 130, top: 836, width: 760, height: 64, text: "Understanding stays visible as execution changes.", size: 34, color: BODY, bold: true });
    const x = 850;
    const y = 310;
    const rowH = 145;
    addLine(slide, x, y, 980, 1);
    addText(slide, { left: x, top: y + 24, width: 250, height: 70, text: "The decision\nsurvives.", size: 30, bold: true });
    addText(slide, { left: x + 370, top: y + 24, width: 320, height: 70, text: "The rationale\noften does not.", size: 30, color: BODY });
    addLine(slide, x, y + rowH, 980, 1);
    addText(slide, { left: x, top: y + rowH + 24, width: 250, height: 70, text: "The process\nsurvives.", size: 30, bold: true });
    addText(slide, { left: x + 370, top: y + rowH + 24, width: 320, height: 70, text: "The context\noften does not.", size: 30, color: BODY });
    addLine(slide, x, y + rowH * 2, 980, 1);
    addText(slide, { left: x, top: y + rowH * 2 + 24, width: 250, height: 70, text: "The system survives.", size: 30, bold: true });
    addText(slide, { left: x + 370, top: y + rowH * 2 + 24, width: 320, height: 70, text: "The knowledge\noften does not.", size: 30, color: BODY });
    addLine(slide, x, y + rowH * 3, 980, 1);
    addFooter(slide, "ShiftBy exists to help understanding remain available when execution changes.", 2);
  }, 2));

  originalSlides.push(addSlide((slide) => {
    addHeader(slide, "VALUE FRAME");
    addText(slide, { left: 130, top: 150, width: 380, height: 24, text: "WHY ORGANIZATIONS ENGAGE SHIFTBY", size: 12, color: ACCENT, bold: true });
    addText(slide, { left: 130, top: 172, width: 1120, height: 150, text: "AI creates value when\nvisibility, evidence, and trust align.", size: 60, color: INK, bold: true });
    const cards = [
      { title: "CREATE VALUE", lines: ["Focus on what matters", "Prioritize high-value use cases", "Keep decision visibility", "Support responsible adoption"] },
      { title: "REDUCE RISK", lines: ["Strengthen control evidence", "Improve audit readiness", "Keep accountability visible", "Address security and privacy"] },
      { title: "PRESERVE TRUST", lines: ["Preserve organizational memory", "Retain explainability", "Keep rationale visible", "Maintain confidence through change"] },
    ];
    const startX = 130, startY = 360, cw = 560, ch = 430;
    for (let i = 0; i < cards.length; i++) {
      const c = cards[i];
      addRect(slide, startX + i * cw, startY, cw, ch, "white", BORDER, 1);
      addText(slide, { left: startX + i * cw + 28, top: startY + 30, width: cw - 56, height: 40, text: c.title, size: 38, bold: true });
      let ty = startY + 108;
      for (const line of c.lines) {
        addText(slide, { left: startX + i * cw + 28, top: ty, width: cw - 56, height: 28, text: line, size: 22, color: BODY });
        ty += 58;
      }
    }
    addLine(slide, 130, 804, 1080, 1);
    addText(slide, { left: 130, top: 836, width: 1120, height: 64, text: "Understanding keeps value, risk, and trust connected.", size: 34, bold: true, color: BODY });
    addFooter(slide, "Value, risk, and trust.", 3);
  }, 3));

  originalSlides.push(addSlide((slide) => {
    addHeader(slide, "INDUSTRY CONTEXT");
    addText(slide, { left: 130, top: 148, width: 650, height: 24, text: "INDUSTRIES WHERE SIMILAR CONVERSATIONS FREQUENTLY ARISE", size: 12, color: ACCENT, bold: true });
    addText(slide, { left: 130, top: 172, width: 1100, height: 180, text: "Different sectors.\nSame confidence failure.", size: 72, bold: true });
    const cells = [
      { title: "Pharmaceuticals", titleTop: 90 },
      { title: "Consumer Health", titleTop: 90 },
      { title: "Medical Technology", titleTop: 90 },
      { title: "Manufacturing", titleTop: 90 },
      { title: "Supply Chain", titleTop: 90 },
      { title: "Technology & Digital", titleTop: 90 },
      { title: "Professional Services", titleTop: 90 },
    ];
    const positions = [
      [130, 360, 415, 150], [545, 360, 415, 150], [960, 360, 415, 150], [1375, 360, 415, 150],
      [130, 510, 415, 150], [545, 510, 415, 150], [960, 510, 415, 150]
    ];
    positions.forEach((p, i) => {
      addRect(slide, ...p, "white", BORDER, 1);
      addText(slide, { left: p[0] + 28, top: p[1] + 85, width: p[2] - 56, height: 34, text: cells[i].title, size: 32, bold: true });
    });
    addLine(slide, 130, 804, 1100, 1);
    addText(slide, { left: 130, top: 836, width: 1260, height: 64, text: "Understanding keeps evidence, ownership, and confidence connected across sectors.", size: 34, bold: true, color: BODY });
    addFooter(slide, "Recurring enterprise patterns.", 4);
  }, 4));

  originalSlides.push(addSlide((slide) => {
    addHeader(slide, "FUNCTIONAL CONTEXT");
    addText(slide, { left: 130, top: 148, width: 440, height: 24, text: "BUSINESS FUNCTIONS", size: 12, color: ACCENT, bold: true });
    addText(slide, { left: 130, top: 172, width: 1120, height: 180, text: "ShiftBy conversations begin where\ndecision intent, operating context,\nand assurance meet.", size: 66, bold: true });
    const clusterCards = [
      {
        title: "Strategy",
        labels: ["Decision traceability", "Leadership ownership", "Enterprise direction"],
      },
      {
        title: "Execution",
        labels: ["Organizational memory", "Process context", "Execution continuity"],
      },
      {
        title: "Assurance",
        labels: ["Accountability", "Control evidence", "Audit readiness"],
      },
    ];
    const cardY = 420;
    const cardH = 286;
    const cardW = 500;
    const gap = 30;
    clusterCards.forEach((card, idx) => {
      const left = 130 + idx * (cardW + gap);
      addRect(slide, left, cardY, cardW, cardH, "white", BORDER, 1);
      addText(slide, { left: left + 28, top: cardY + 28, width: 280, height: 36, text: card.title, size: 34, bold: true });
      card.labels.forEach((label, i) => {
        addText(slide, {
          left: left + 28,
          top: cardY + 92 + i * 52,
          width: cardW - 56,
          height: 32,
          text: label,
          size: 22,
          bold: true,
        });
      });
    });
    addLine(slide, 130, 804, 1120, 1);
    addText(slide, { left: 130, top: 836, width: 1120, height: 64, text: "Decision traceability keeps ownership visible across functions.", size: 34, bold: true, color: BODY });
    addFooter(slide, "Function-level readiness.", 5);
  }, 5));

  originalSlides.push(addSlide((slide) => {
    addHeader(slide, "REFERRAL MOMENTS");
    addText(slide, { left: 130, top: 148, width: 580, height: 24, text: "WHEN UNDERSTANDING STARTS TO FRAGMENT", size: 12, color: ACCENT, bold: true });
    addText(slide, { left: 130, top: 172, width: 1200, height: 180, text: "These conditions often signal a\ndeeper need to preserve understanding.", size: 54, bold: true });
    const statements = [
      "AI direction needs a clearer starting point.",
      "Opportunity signals are outpacing prioritization.",
      "Governance and auditability are becoming unclear.",
      "AI participation is entering live workflows.",
      "Critical knowledge is becoming harder to retain."
    ];
    const x = 130, y = 452, w = 335, h = 282;
    for (let i = 0; i < 5; i++) {
      const left = x + i * w;
      addRect(slide, left, y, w, h, "white", BORDER, 1);
      addText(slide, { left: left + 28, top: y + 28, width: 40, height: 20, text: String(i + 1).padStart(2, "0"), size: 12, color: ACCENT, bold: true });
      addText(slide, { left: left + 28, top: y + 150, width: w - 56, height: 110, text: statements[i], size: 23, bold: true });
    }
    addLine(slide, 130, 804, 1120, 1);
    addText(slide, { left: 130, top: 836, width: 1120, height: 64, text: "ShiftBy can be introduced before uncertainty becomes structural.", size: 34, bold: true, color: BODY });
    addFooter(slide, "Recurring leadership questions.", 6);
  }, 6));

  originalSlides.push(addSlide((slide) => {
    addHeader(slide, "READINESS PICTURE");
    addRect(slide, 0, 110, 880, 883, "#F7F6FB", "#F7F6FB", 0);
    addText(slide, { left: 130, top: 241, width: 300, height: 24, text: "PREPARING FOR AI", size: 12, color: ACCENT, bold: true });
    addText(slide, { left: 130, top: 328, width: 540, height: 172, text: "AI Readiness\n& Enablement", size: 58, bold: true });
    addText(slide, { left: 130, top: 570, width: 540, height: 92, text: "REDUCE UNCERTAINTY BEFORE\nMAJOR AI MOVES.", size: 30, bold: true });
    const cells = [
      { title: "Executive workshops" }, { title: "AI literacy" },
      { title: "Data readiness" }, { title: "Knowledge readiness" },
      { title: "Governance readiness" }, { title: "Workforce readiness" },
    ];
    addGrid(slide, 965, 281, 810, 385, 2, 3, cells);
    addLine(slide, 965, 804, 810, 1);
    addText(slide, { left: 965, top: 826, width: 900, height: 78, text: "Understanding becomes easier to mobilize\nbefore major AI moves.", size: 32, bold: true, color: BODY });
    addFooter(slide, "Readiness and enablement.", 7);
  }, 7));

  originalSlides.push(addSlide((slide) => {
    addHeader(slide, "VALUE PRIORITIES");
    addRect(slide, 0, 110, 880, 883, "#F7F6FB", "#F7F6FB", 0);
    addText(slide, { left: 130, top: 241, width: 350, height: 24, text: "CHOOSING WHERE TO ACT", size: 12, color: ACCENT, bold: true });
    addText(slide, { left: 130, top: 328, width: 720, height: 172, text: "AI Adoption &\nTransformation", size: 58, bold: true });
    addText(slide, { left: 130, top: 570, width: 620, height: 92, text: "TURN AI INTEREST INTO\nFOCUSED BUSINESS VALUE.", size: 30, bold: true });
    const boxes = [
      { title: "Opportunity assessment" },
      { title: "Use-case prioritization" },
      { title: "Business process analysis" },
      { title: "AI roadmaps" },
      { title: "Operating model\nconsiderations", titleTop: 80, titleSize: 26 },
    ];
    addRect(slide, 965, 280, 820, 135, "white", BORDER, 1);
    addRect(slide, 965, 415, 820, 135, "white", BORDER, 1);
    addRect(slide, 965, 550, 820, 135, "white", BORDER, 1);
    addText(slide, { left: 995, top: 330, width: 330, height: 30, text: boxes[0].title, size: 30, bold: true });
    addText(slide, { left: 1410, top: 330, width: 330, height: 30, text: boxes[1].title, size: 30, bold: true });
    addText(slide, { left: 995, top: 464, width: 330, height: 30, text: boxes[2].title, size: 30, bold: true });
    addText(slide, { left: 1410, top: 464, width: 250, height: 30, text: boxes[3].title, size: 30, bold: true });
    addText(slide, { left: 995, top: 580, width: 740, height: 70, text: boxes[4].title, size: 26, bold: true });
    addLine(slide, 965, 804, 820, 1);
    addText(slide, { left: 965, top: 824, width: 820, height: 64, text: "Understanding helps leaders prioritize value\nafter ownership stays visible.", size: 32, bold: true, color: BODY });
    addFooter(slide, "AI idea prioritization.", 8);
  }, 8));

  originalSlides.push(addSlide((slide) => {
    addHeader(slide, "TRUST & OVERSIGHT");
    addRect(slide, 0, 110, 880, 883, "#F7F6FB", "#F7F6FB", 0);
    addText(slide, { left: 130, top: 241, width: 460, height: 24, text: "PRESERVING TRUST AS EXECUTION CHANGES", size: 12, color: ACCENT, bold: true });
    addText(slide, { left: 130, top: 328, width: 530, height: 172, text: "AI Governance,\nSafety & Resilience", size: 58, bold: true });
    addText(slide, { left: 130, top: 570, width: 500, height: 92, text: "PRESERVE TRUST WHILE KEEPING\nOPERATIONAL AND GOVERNANCE RISK IN VIEW.", size: 30, bold: true });
    const gpos = [
      [965, 150, 405, 130, "Responsible AI"], [1370, 150, 405, 130, "AI governance"],
      [965, 280, 405, 130, "AI risk management"], [1370, 280, 405, 130, "AI security"],
      [965, 410, 405, 130, "AI safety"], [1370, 410, 405, 130, "Data privacy"],
      [965, 540, 405, 130, "AI assurance"], [1370, 540, 405, 130, "Audit readiness"],
    ];
    gpos.forEach(([x,y,w,h,text]) => {
      addRect(slide, x, y, w, h, "white", BORDER, 1);
      addText(slide, { left: x + 26, top: y + 45, width: w - 52, height: 28, text, size: 28, bold: true });
    });
    addRect(slide, 965, 670, 820, 120, "white", BORDER, 1);
    addText(slide, { left: 1000, top: 706, width: 760, height: 24, text: "Third-party AI exposure", size: 28, bold: true });
    addLine(slide, 965, 804, 820, 1);
    addText(slide, { left: 965, top: 836, width: 1100, height: 84, text: "Greater confidence in where to invest,\nwhat to prioritize, and who stays accountable.", size: 30, bold: true, color: BODY });
    addFooter(slide, "Trust and oversight.", 9);
  }, 9));

  originalSlides.push(addSlide((slide) => {
    addHeader(slide, "FUTURE OPERATIONS");
    addRect(slide, 0, 110, 880, 883, "#F7F6FB", "#F7F6FB", 0);
    addText(slide, { left: 130, top: 241, width: 470, height: 24, text: "IMPROVING WORK WITHOUT LOSING CONTEXT", size: 12, color: ACCENT, bold: true });
    addText(slide, { left: 130, top: 328, width: 620, height: 172, text: "AI Agents &\nIntelligent Operations", size: 58, bold: true });
    addText(slide, { left: 130, top: 570, width: 520, height: 92, text: "IMPROVE WORK WHILE KEEPING\nACCOUNTABILITY AND CONTEXT IN PLACE.", size: 30, bold: true });
    const boxPos = [
      [965, 280, 405, 130, "AI agents"], [1370, 280, 405, 130, "Human-AI collaboration"],
      [965, 410, 405, 130, "Knowledge-\nconnected workflows"], [1370, 410, 405, 130, "Traceability"],
      [965, 540, 820, 130, "Governed output generation"],
    ];
    boxPos.forEach(([x,y,w,h,text]) => {
      addRect(slide, x, y, w, h, "white", BORDER, 1);
      addText(slide, { left: x + 26, top: y + 45, width: w - 52, height: 65, text, size: 28, bold: true });
    });
    addLine(slide, 965, 804, 820, 1);
    addText(slide, { left: 965, top: 836, width: 920, height: 72, text: "Greater confidence that trust can be demonstrated\nthrough clear ownership, evidence, oversight,\nand accountability.", size: 32, bold: true, color: BODY });
    addFooter(slide, "Future-state operations.", 10);
  }, 10));

  originalSlides.push(addSlide((slide) => {
    addRect(slide, 0, 0, 1920, 1080, BG, BG, 0);
    addRect(slide, 0, 0, 1120, 1080, "#F7F0F8", "#F7F0F8", 0);
    addHeader(slide, "DIFFERENTIATION");
    addText(slide, { left: 130, top: 231, width: 430, height: 24, text: "WHY UNDERSTANDING MATTERS", size: 12, color: ACCENT, bold: true });
    addText(slide, { left: 130, top: 286, width: 950, height: 230, text: "Organizations often preserve\nartifacts while losing the\nrationale behind them.", size: 58, bold: true });
    addText(slide, { left: 130, top: 590, width: 980, height: 110, text: "Decision history, ownership, and accountability\nneed to stay visible as work changes.", size: 30, color: BODY, bold: true });
    addLine(slide, 130, 804, 1100, 1);
    addText(slide, { left: 130, top: 836, width: 1100, height: 64, text: "Decision history preserves rationale as change accelerates.", size: 34, color: BODY, bold: true });
    addWatermark(slide, { left: 1335, top: 235, size: 590 });
    addFooter(slide, "Differentiation.", 11);
  }, 11));

  originalSlides.push(addSlide((slide) => {
    addHeader(slide, "CAPABILITIES");
    addText(slide, { left: 130, top: 150, width: 520, height: 24, text: "CAPABILITIES THAT PRESERVE UNDERSTANDING", size: 12, color: ACCENT, bold: true });
    addText(slide, { left: 130, top: 176, width: 1080, height: 200, text: "Four capabilities help\norganizations preserve\nunderstanding as execution changes.", size: 60, bold: true });
    const cells = [
      { title: "Decision Traceability", body: "Decision rationale remains visible.", titleTop: 76, titleSize: 28, bodyTop: 205, bodySize: 17 },
      { title: "Organizational\nMemory", body: "Operational meaning stays recoverable.", titleTop: 76, titleSize: 28, bodyTop: 205, bodySize: 17 },
      { title: "Human-AI\nAccountability", body: "Ownership and escalation stay clear.", titleTop: 76, titleSize: 28, bodyTop: 205, bodySize: 17 },
      { title: "Adaptive Execution", body: "Execution adapts without losing intent.", titleTop: 76, titleSize: 28, bodyTop: 205, bodySize: 17 },
    ];
    addGrid(slide, 130, 530, 1660, 290, 4, 1, cells, { gap: 0 });
    addFooter(slide, "Capability architecture.", 12);
  }, 12));

  originalSlides.push(addSlide((slide) => {
    addHeader(slide, "REFERRAL MOMENT");
    addRect(slide, 0, 110, 660, 883, "#F7F0F8", "#F7F0F8", 0);
    addText(slide, { left: 130, top: 231, width: 400, height: 24, text: "INTRODUCE SHIFTBY WHEN...", size: 12, color: ACCENT, bold: true });
    addText(slide, { left: 130, top: 290, width: 500, height: 240, text: "Confidence needs to\nsurvive change.", size: 66, bold: true });
    addText(slide, { left: 130, top: 724, width: 500, height: 145, text: "A referral works once the\nsignal is visible.\nThe moment matters.", size: 28, color: BODY });
    const rows = [
      "A starting point is missing.",
      "AI priorities are unclear.",
      "Ownership is not visible.",
      "AI agents are moving into live workflows.",
      "Critical knowledge is at risk of loss.",
    ];
    const rx = 695;
    const ry = 260;
    addLine(slide, rx, ry, 1110, 1);
    rows.forEach((row, i) => {
      const y = ry + 40 + i * 121;
      addLine(slide, rx, y + 49, 1110, 1);
      addText(slide, { left: rx - 2, top: y + 4, width: 40, height: 20, text: String(i + 1).padStart(2, "0"), size: 12, color: ACCENT, bold: true });
      addText(slide, { left: rx + 130, top: y, width: 920, height: 72, text: row, size: 34, bold: true });
    });
    // Footer rule intentionally removed to avoid a duplicate divider line.
    addFooter(slide, "Referral moment.", 13);
  }, 13));

  originalSlides.push(addSlide((slide) => {
    addHeader(slide, "CONTACT");
    addRect(slide, 0, 0, 1920, 1080, BG, BG, 0);
    addRect(slide, 0, 0, 1920, 1080, BG, BG, 0);
    addText(slide, { left: 130, top: 231, width: 370, height: 24, text: "MAKE AN INTRODUCTION", size: 12, color: ACCENT, bold: true });
    addText(slide, { left: 130, top: 286, width: 650, height: 340, text: "Execution\nchanges.\nUnderstanding\npreserves\nconfidence.", size: 78, bold: true });
    addText(slide, { left: 130, top: 800, width: 500, height: 100, text: "Introduce ShiftBy when understanding\nneeds to survive change.", size: 34, color: BODY });
    addWatermark(slide, { left: 1390, top: 250, size: 540 });
    addLine(slide, 1120, 560, 640, 1);
    addText(slide, { left: 1120, top: 600, width: 430, height: 44, text: "Ananda Krishna", size: 46, bold: true });
    addText(slide, { left: 1120, top: 678, width: 250, height: 30, text: "Founder", size: 26, color: BODY });
    addText(slide, { left: 1120, top: 718, width: 300, height: 30, text: "ShiftBy Pte. Ltd.", size: 26, color: BODY });
    addText(slide, { left: 1120, top: 778, width: 500, height: 30, text: "https://www.shiftby.sg", size: 24, color: INK });
    addText(slide, { left: 1120, top: 834, width: 560, height: 30, text: "linkedin.com/in/anandakrishnam", size: 24, color: INK });
    addText(slide, { left: 1120, top: 890, width: 500, height: 30, text: "anandakrishnam@shiftby.sg", size: 24, color: INK });
    addFooter(slide, "Contact ShiftBy.", 14);
  }, 14));

  function replaceExactText(slide, from, to) {
    if (!from || !to) return false;
    for (const shape of slide.shapes.items) {
      try {
        if (shape.text && String(shape.text) === from) {
          shape.text = to;
          return true;
        }
      } catch {}
    }
    return false;
  }

  function replacePageNumber(slide, fromPage, toPage, total = 14) {
    const from = `${String(fromPage).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;
    const to = `${String(toPage).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;
    replaceExactText(slide, from, to);
  }

  const variantEdits = [
    [
      ["BRIEFING", "BRIEFING"],
      [
        ["AI advisory, coaching, and thought leadership for organizations navigating AI, governance, knowledge, and transformation.",
         "Enterprise guidance for leaders navigating AI,\ngovernance, knowledge, and transformation."],
      ],
    ],
    [
      ["CORE OBSERVATION", "CORE OBSERVATION"],
      [],
    ],
    [
      ["WHY ORGANIZATIONS ENGAGE SHIFTBY", "WHY ORGANIZATIONS ENGAGE SHIFTBY"],
      [
        ["Value, risk, and trust are\nincreasingly connected.",
         "Value, risk, and trust stay\nconnected through change."],
        ["Understanding keeps value, risk, and trust connected.",
         "Understanding keeps value, risk, and trust connected as change accelerates."],
      ],
    ],
    [
      ["INDUSTRIES WHERE SIMILAR CONVERSATIONS FREQUENTLY ARISE", "INDUSTRIES WHERE SIMILAR CONVERSATIONS FREQUENTLY ARISE"],
      [
        ["Different industries.\nSimilar enterprise questions.",
         "Different industries.\nSimilar enterprise questions."],
        ["Understanding helps leaders address recurring enterprise questions across sectors.",
         "Recurring enterprise questions reappear across sectors as execution changes."],
      ],
    ],
    [
      ["FUNCTIONAL CONTEXT", "FUNCTIONAL CONTEXT"],
      [
        ["ShiftBy conversations often\nbegin where responsibility,\nchange, and control meet.",
         "ShiftBy conversations often\nbegin where responsibility,\nchange, and control converge."],
      ],
    ],
    [
      ["REFERRAL MOMENTS", "REFERRAL MOMENTS"],
      [],
    ],
    [
      ["READINESS PICTURE", "READINESS PICTURE"],
      [
        ["PREPARING FOR AI", "READINESS TO SUPPORT ADOPTION"],
        ["REDUCE UNCERTAINTY BEFORE\nMAJOR AI MOVES.",
         "People, knowledge, governance,\nand ways of working need to be ready."],
        ["Understanding becomes easier to mobilize\nbefore major AI moves.",
         "Readiness becomes easier to mobilize\nbefore adoption proceeds."],
      ],
    ],
    [
      ["VALUE PRIORITIES", "VALUE PRIORITIES"],
      [
        ["CHOOSING WHERE TO ACT", "PRIORITIZING WHAT MATTERS"],
        ["TURN AI INTEREST INTO\nFOCUSED BUSINESS VALUE.",
         "Greater confidence in where to invest,\nwhat to prioritize, and how adoption should proceed."],
        ["Understanding helps leaders prioritize value without losing ownership.",
         "Investment choices stay visible as adoption proceeds."],
      ],
    ],
    [
      ["TRUST & OVERSIGHT", "TRUST & OVERSIGHT"],
      [
        ["PRESERVING TRUST AS EXECUTION CHANGES", "TRUST THAT CAN BE DEMONSTRATED"],
        ["Trust stays demonstrable through\nclear ownership, evidence, oversight,\nand accountability.",
         "Preserve trust while keeping\noperational and governance risk in view."],
        ["Greater confidence in where to invest,\nwhat to prioritize, and who remains accountable\nas adoption proceeds.",
         "Trust stays demonstrable through\nclear ownership, evidence, oversight,\nand accountability."],
      ],
    ],
    [
      ["FUTURE OPERATIONS", "FUTURE OPERATIONS"],
      [
        ["IMPROVING WORK WITHOUT LOSING CONTEXT", "EXPLAINABLE HUMAN-AI WORK"],
        ["IMPROVE WORK WHILE KEEPING\nACCOUNTABILITY AND CONTEXT IN PLACE.",
         "Human-AI work stays explainable as execution changes."],
        ["Greater confidence that trust can be demonstrated\nthrough clear ownership, evidence, oversight,\nand accountability.",
         "Accountability stays visible as human-AI work changes."],
      ],
    ],
    [
      ["DIFFERENTIATION", "DIFFERENTIATION"],
      [
        ["WHY SHIFTBY", "WHY UNDERSTANDING MATTERS"],
        ["Organizations rarely need\nmore technology.",
         "Organizations often preserve\nartifacts while losing the\nunderstanding behind them."],
        ["Organizations preserve artifacts, but they often lose\nthe understanding behind them. As decisions, ownership,\nand accountability move through change, clarity becomes harder to sustain.",
         "Understanding stays visible as decisions, ownership,\nand accountability move through change."],
      ],
    ],
    [
      ["CAPABILITIES", "CAPABILITIES"],
      [
        ["THE SHIFTBY CAPABILITY SYSTEM", "CAPABILITIES THAT PRESERVE UNDERSTANDING"],
        ["Four capabilities support\nconfidence when\nexecution changes.",
         "Four capabilities help\norganizations preserve\nunderstanding as execution changes."],
      ],
    ],
    [
      ["REFERRAL MOMENT", "REFERRAL MOMENT"],
      [
        ["INTRODUCE SHIFTBY WHEN...", "INTRODUCE SHIFTBY WHEN..."],
        ["A partner does not need to\ndiagnose the work. They only\nneed to recognize the moment.",
         "Introduce ShiftBy when\nunderstanding needs to survive\nchange."],
        ["ShiftBy can be introduced before uncertainty becomes structural.",
         "ShiftBy can be introduced when uncertainty becomes structural."],
      ],
    ],
    [
      ["CONTACT", "CONTACT"],
      [],
    ],
  ];

  for (let i = 0; i < originalSlides.length; i++) {
    const sourceSlide = originalSlides[i];
    const variant = sourceSlide.duplicate();
    variant.moveTo(presentation.slides.items.length - 1);
    const [headerPair, edits] = variantEdits[i];
    replaceExactText(variant, headerPair[0], headerPair[1]);
    for (const [from, to] of edits) {
      replaceExactText(variant, from, to);
    }
  }

  for (let i = originalSlides.length - 1; i >= 0; i--) {
    presentation.slides.remove(i);
  }

  const pptx = await PresentationFile.exportPptx(presentation);
  await pptx.save(PPTX_OUT);
  const inspectPath = path.join(OUT_DIR, `${path.basename(PPTX_OUT)}.inspect.ndjson`);
  let finalReport = { source: "editable rebuild", slideCount: presentation.slides.items.length, slides: report };
  try {
    const ndjson = await fs.readFile(inspectPath, "utf8");
    finalReport = buildEditabilityReportFromInspect(ndjson);
  } catch (err) {
    console.warn(`Could not rebuild editability report from inspect output: ${err.message}`);
  }
  await fs.writeFile(REPORT_OUT, JSON.stringify(finalReport, null, 2));

  await fs.rm(PREVIEW_DIR, { recursive: true, force: true });
  await fs.mkdir(PREVIEW_DIR, { recursive: true });
  for (const [idx, slide] of presentation.slides.items.entries()) {
    try {
      const png = await presentation.export({ slide, format: "png", scale: 1 });
      await fs.writeFile(path.join(PREVIEW_DIR, `slide-${String(idx + 1).padStart(2, "0")}.png`), new Uint8Array(await png.arrayBuffer()));
    } catch (err) {
      console.warn(`Could not render preview for slide ${idx + 1}: ${err.message}`);
    }
  }

  console.log(PPTX_OUT);
  console.log(REPORT_OUT);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
