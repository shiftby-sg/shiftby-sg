import fs from "node:fs/promises";
import path from "node:path";
import { Presentation, PresentationFile } from "file:///C:/Users/ShiftBy/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/@oai/artifact-tool/dist/artifact_tool.mjs";

const OUT_DIR = "C:/Ananda/shiftby.sg/WebAppV2/shiftby-sg/outputs/20260615-partner-brief/output";
const PPTX_OUT = path.join(OUT_DIR, "editable_rebuilt_deck_v17.pptx");
const REPORT_OUT = path.join(OUT_DIR, "editability_report.json");
const PREVIEW_DIR = "C:/Ananda/shiftby.sg/WebAppV2/shiftby-sg/outputs/20260615-partner-brief/editable-preview";

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

function addWatermark(slide, opts = {}) {
  const left = opts.left ?? 1350;
  const top = opts.top ?? 190;
  const size = opts.size ?? 590;
  const lineFill = opts.lineFill ?? WATERMARK;
  const lineWidth = opts.lineWidth ?? 18;
  const fill = opts.fill ?? "none";
  addCircle(slide, left, top, size, fill, lineFill, lineWidth);
  addCircle(slide, left + size / 2 - 120, top + size / 2 - 120, 240, opts.centerFill ?? lineFill, "none", 0);
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
    left: 130,
    top: 47,
    width: 170,
    height: 42,
    text: "SHIFTBY",
    size: 22,
    bold: true,
    color: INK,
    valign: "middle",
  });
  addRect(slide, 93, 47, 34, 34, "none", BORDER, 1);
  addLine(slide, 93, 47, 34, 1, BORDER);
  addLine(slide, 93, 80, 34, 1, BORDER);
  addText(slide, {
    left: 1630,
    top: 54,
    width: 220,
    height: 28,
    text: sectionRight,
    size: 14,
    bold: false,
    color: "#2D3F68",
    align: "right",
  });
  addLine(slide, 130, 102, 1650, 1, LINE);
}

function addFooter(slide, text, page, total = 14) {
  addLine(slide, 130, 993, 1625, 1, LINE);
  addText(slide, {
    left: 130,
    top: 1007,
    width: 1180,
    height: 36,
    text,
    size: 18,
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

  addSlide((slide, api) => {
    addHeader(slide, "PARTNER BRIEFING");
    addTitleBlock(
      slide,
      "INTRODUCTION",
      "Execution changes.\nUnderstanding preserves confidence.",
      "AI advisory, coaching, and thought leadership for organizations navigating AI, governance, knowledge, and transformation.",
      { bodyTop: 495, bodyHeight: 160, bodySize: 36, titleWidth: 980, titleHeight: 260 }
    );
    addWatermark(slide, { left: 1420, top: 240, size: 560, lineFill: FAINT, centerFill: FAINT, lineWidth: 16 });
    addFooter(slide, "A trusted partner's guide to when ShiftBy can help.", 1);
  }, 1);

  addSlide((slide) => {
    addHeader(slide, "WHY SHIFTBY EXISTS");
    addText(slide, { left: 130, top: 386, width: 320, height: 24, text: "CORE OBSERVATION", size: 12, color: ACCENT, bold: true });
    addText(slide, { left: 130, top: 432, width: 560, height: 235, text: "Organizations preserve\nrecords.\nThey lose operating context.", size: 64, color: INK, bold: true });
    addText(slide, { left: 130, top: 812, width: 760, height: 54, text: "ShiftBy exists to help leaders preserve the rationale behind execution.", size: 26, color: BODY });
    const x = 850;
    const y = 388;
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
  }, 2);

  addSlide((slide) => {
    addHeader(slide, "PARTNER VALUE FRAME");
    addText(slide, { left: 130, top: 150, width: 380, height: 24, text: "WHY ORGANIZATIONS ENGAGE SHIFTBY", size: 12, color: ACCENT, bold: true });
    addText(slide, { left: 130, top: 172, width: 1120, height: 170, text: "Value, risk, and trust are\nincreasingly connected.", size: 68, color: INK, bold: true });
    const cards = [
      { title: "CREATE VALUE", lines: ["Clarify where AI can create meaningful value", "Prioritize AI opportunities and investments", "Improve decision quality and visibility", "Accelerate responsible AI adoption", "Improve organizational effectiveness"] },
      { title: "REDUCE RISK", lines: ["Strengthen governance and oversight", "Improve audit readiness and assurance", "Address AI security and privacy concerns", "Improve accountability and traceability", "Improve visibility of AI-related risks"] },
      { title: "PRESERVE TRUST", lines: ["Preserve organizational knowledge", "Maintain explainability of important decisions", "Retain rationale as systems evolve", "Maintain accountability as execution changes", "Increase confidence in AI-enabled operations"] },
    ];
    const startX = 130, startY = 360, cw = 560, ch = 430;
    for (let i = 0; i < cards.length; i++) {
      const c = cards[i];
      addRect(slide, startX + i * cw, startY, cw, ch, "white", BORDER, 1);
      addText(slide, { left: startX + i * cw + 28, top: startY + 26, width: cw - 56, height: 40, text: c.title, size: 42, bold: true });
      let ty = startY + 95;
      for (const line of c.lines) {
        addText(slide, { left: startX + i * cw + 28, top: ty, width: cw - 56, height: 30, text: line, size: 24, color: BODY });
        ty += 55;
      }
    }
    addLine(slide, 130, 840, 1080, 1);
    addText(slide, { left: 130, top: 875, width: 1120, height: 88, text: "Understanding helps organizations navigate all\nthree.", size: 42, bold: true });
    addFooter(slide, "A partner should be able to connect ShiftBy to value creation, risk reduction, and trust preservation.", 3);
  }, 3);

  addSlide((slide) => {
    addHeader(slide, "INDUSTRY RECOGNITION");
    addText(slide, { left: 130, top: 148, width: 650, height: 24, text: "INDUSTRIES WHERE SIMILAR CONVERSATIONS FREQUENTLY ARISE", size: 12, color: ACCENT, bold: true });
    addText(slide, { left: 130, top: 172, width: 1100, height: 180, text: "Different industries. Similar\nchallenges around confidence.", size: 72, bold: true });
    const cells = [
      { title: "Pharmaceuticals", titleTop: 90 },
      { title: "Consumer Health", titleTop: 90 },
      { title: "Medical Technology", titleTop: 90 },
      { title: "Manufacturing", titleTop: 90 },
      { title: "Supply Chain & Logistics", titleTop: 90 },
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
    addLine(slide, 130, 716, 1100, 1);
    addText(slide, { left: 130, top: 750, width: 1120, height: 98, text: "Different industries.\nSimilar challenges around change, knowledge,\naccountability, and confidence.", size: 50, bold: true, color: INK });
    addFooter(slide, "Use this slide to help partners recognize familiar industry contexts.", 4);
  }, 4);

  addSlide((slide) => {
    addHeader(slide, "ORGANIZATIONAL RECOGNITION");
    addText(slide, { left: 130, top: 148, width: 440, height: 24, text: "BUSINESS FUNCTIONS", size: 12, color: ACCENT, bold: true });
    addText(slide, { left: 130, top: 172, width: 1120, height: 220, text: "ShiftBy conversations often\nstart where responsibility,\nchange, and control meet.", size: 70, bold: true });
    const items = [
      "Executive Leadership","Research & Development","Manufacturing","Supply Chain",
      "Quality & Compliance","Procurement","Technology & Digital","Data & AI",
      "Enterprise Architecture","Risk & Governance","Internal Audit","Transformation Offices"
    ];
    const x = 130, y = 431, cellW = 415, cellH = 150;
    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 4; c++) {
        const i = r * 4 + c;
        const left = x + c * cellW;
        const top = y + r * cellH;
        addRect(slide, left, top, cellW, cellH, "white", BORDER, 1);
        addText(slide, { left: left + 28, top: top + 88, width: cellW - 56, height: 34, text: items[i], size: 28, bold: true });
      }
    }
    addLine(slide, 130, 884, 1120, 1);
    addText(slide, { left: 130, top: 900, width: 1120, height: 48, text: "Many functions inherit AI-enabled change\nbefore they own it.", size: 28, bold: true, color: BODY });
    addFooter(slide, "Many functions inherit AI-enabled change before they own it.", 5);
  }, 5);

  addSlide((slide) => {
    addHeader(slide, "REFERRAL TRIGGERS");
    addText(slide, { left: 130, top: 148, width: 350, height: 24, text: "TYPICAL SITUATIONS", size: 12, color: ACCENT, bold: true });
    addText(slide, { left: 130, top: 172, width: 890, height: 230, text: "When you hear this,\nthere may be a ShiftBy\nconversation.", size: 72, bold: true });
    const statements = [
      "We are exploring AI but do not know where to start.",
      "We have many AI ideas but cannot prioritize.",
      "We need governance, audit readiness, and oversight.",
      "We are introducing AI agents into operational workflows.",
      "We are concerned about losing critical knowledge."
    ];
    const x = 130, y = 370, w = 335, h = 320;
    for (let i = 0; i < 5; i++) {
      const left = x + i * w;
      addRect(slide, left, y, w, h, "white", BORDER, 1);
      addText(slide, { left: left + 28, top: y + 28, width: 40, height: 20, text: String(i + 1).padStart(2, "0"), size: 12, color: ACCENT, bold: true });
      addText(slide, { left: left + 28, top: y + 225, width: w - 56, height: 72, text: statements[i], size: 30, bold: true });
    }
    addFooter(slide, "This is the partner's recognition slide: listen for uncertainty, prioritization, trust, operations, and knowledge loss.", 6);
  }, 6);

  addSlide((slide) => {
    addHeader(slide, "CONVERSATION DOMAIN");
    addRect(slide, 0, 110, 880, 530, "#F7F6FB", "#F7F6FB", 0);
    addText(slide, { left: 130, top: 241, width: 300, height: 24, text: "PREPARING FOR AI", size: 12, color: ACCENT, bold: true });
    addText(slide, { left: 130, top: 314, width: 540, height: 185, text: "AI Readiness\n& Enablement", size: 64, bold: true });
    addText(slide, { left: 130, top: 548, width: 540, height: 98, text: "REDUCE UNCERTAINTY BEFORE\nMAJOR AI DECISIONS.", size: 34, bold: true });
    addWatermark(slide, { left: 1400, top: 170, size: 620, lineFill: WATERMARK, centerFill: WATERMARK, lineWidth: 18 });
    const cells = [
      { title: "Executive workshops" }, { title: "AI literacy" },
      { title: "Data readiness" }, { title: "Knowledge readiness" },
      { title: "Governance readiness" }, { title: "Workforce readiness" },
    ];
    addGrid(slide, 965, 281, 810, 385, 2, 3, cells);
    addLine(slide, 965, 678, 810, 1);
    addText(slide, { left: 965, top: 712, width: 760, height: 96, text: "Organizations often know AI matters.\nThe harder question is whether their data, knowledge,\npeople, governance, and operating model are ready.", size: 38, bold: true });
    addFooter(slide, "Purpose: Map situations to conversation domain.", 7);
  }, 7);

  addSlide((slide) => {
    addHeader(slide, "BUSINESS VALUE CONVERSATION");
    addRect(slide, 0, 110, 880, 530, "#F7F6FB", "#F7F6FB", 0);
    addText(slide, { left: 130, top: 241, width: 350, height: 24, text: "CHOOSING WHERE TO ACT", size: 12, color: ACCENT, bold: true });
    addText(slide, { left: 130, top: 314, width: 700, height: 140, text: "AI Adoption &\nTransformation", size: 60, bold: true });
    addText(slide, { left: 130, top: 500, width: 620, height: 86, text: "TURN AI INTEREST INTO\nFOCUSED BUSINESS VALUE.", size: 30, bold: true });
    addWatermark(slide, { left: 1410, top: 160, size: 620, lineFill: WATERMARK, centerFill: WATERMARK, lineWidth: 18 });
    const boxes = [
      { title: "Opportunity assessment" },
      { title: "Use-case prioritization" },
      { title: "Business process analysis" },
      { title: "AI roadmaps" },
      { title: "Operating model\nconsiderations", titleTop: 86, titleSize: 28 },
    ];
    addRect(slide, 975, 280, 820, 135, "white", BORDER, 1);
    addRect(slide, 975, 415, 820, 135, "white", BORDER, 1);
    addRect(slide, 975, 550, 405, 135, "white", BORDER, 1);
    addRect(slide, 1390, 550, 405, 135, "white", BORDER, 1);
    addText(slide, { left: 1005, top: 330, width: 330, height: 30, text: boxes[0].title, size: 30, bold: true });
    addText(slide, { left: 1420, top: 330, width: 330, height: 30, text: boxes[1].title, size: 30, bold: true });
    addText(slide, { left: 1005, top: 464, width: 330, height: 30, text: boxes[2].title, size: 30, bold: true });
    addText(slide, { left: 1420, top: 464, width: 250, height: 30, text: boxes[3].title, size: 30, bold: true });
    addText(slide, { left: 1005, top: 586, width: 340, height: 70, text: boxes[4].title, size: 28, bold: true });
    addLine(slide, 975, 680, 820, 1);
    addText(slide, { left: 975, top: 714, width: 780, height: 94, text: "Organizations often have more AI ideas\nthan they can realistically pursue.\nThe challenge is determining where value\nmay emerge, what should be prioritized,\nand where ownership should remain visible.", size: 36, bold: true });
    addFooter(slide, "Organizations often have more AI ideas than they can realistically pursue.", 8);
  }, 8);

  addSlide((slide) => {
    addHeader(slide, "TRUST AND OVERSIGHT CONVERSATION");
    addRect(slide, 0, 110, 880, 530, "#F7F6FB", "#F7F6FB", 0);
    addText(slide, { left: 130, top: 241, width: 460, height: 24, text: "PRESERVING TRUST AS EXECUTION CHANGES", size: 12, color: ACCENT, bold: true });
    addText(slide, { left: 130, top: 314, width: 560, height: 190, text: "AI Governance,\nSafety & Resilience", size: 64, bold: true });
    addText(slide, { left: 130, top: 548, width: 530, height: 92, text: "PRESERVE TRUST WHILE REDUCING\nOPERATIONAL AND GOVERNANCE RISK.", size: 34, bold: true });
    addWatermark(slide, { left: 1410, top: 160, size: 620, lineFill: WATERMARK, centerFill: WATERMARK, lineWidth: 18 });
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
    addRect(slide, 965, 670, 405, 120, "white", BORDER, 1);
    addText(slide, { left: 1000, top: 706, width: 320, height: 24, text: "Third-party AI risk", size: 28, bold: true });
    addLine(slide, 965, 823, 820, 1);
    addText(slide, { left: 965, top: 836, width: 820, height: 132, text: "As AI adoption grows, organizations\nincreasingly need decisions that can be\nexplained, reviewed, governed, and defended.", size: 36, bold: true });
    addFooter(slide, "Purpose: Trust and oversight conversation.", 9);
  }, 9);

  addSlide((slide) => {
    addHeader(slide, "FUTURE-STATE OPERATIONS");
    addRect(slide, 0, 110, 880, 530, "#F7F6FB", "#F7F6FB", 0);
    addText(slide, { left: 130, top: 241, width: 470, height: 24, text: "IMPROVING WORK WITHOUT LOSING CONTEXT", size: 12, color: ACCENT, bold: true });
    addText(slide, { left: 130, top: 314, width: 540, height: 250, text: "AI Agents &\nIntelligent\nOperations", size: 78, bold: true });
    addText(slide, { left: 130, top: 595, width: 520, height: 96, text: "IMPROVE WORK WITHOUT LOSING\nACCOUNTABILITY OR CONTEXT.", size: 38, bold: true });
    addWatermark(slide, { left: 1410, top: 160, size: 620, lineFill: WATERMARK, centerFill: WATERMARK, lineWidth: 18 });
    const boxPos = [
      [965, 280, 405, 130, "AI agents"], [1370, 280, 405, 130, "Human-AI collaboration"],
      [965, 410, 405, 130, "Knowledge-\nconnected workflows"], [1370, 410, 405, 130, "Traceability"],
      [965, 540, 405, 130, "Governed artifact generation"],
    ];
    boxPos.forEach(([x,y,w,h,text]) => {
      addRect(slide, x, y, w, h, "white", BORDER, 1);
      addText(slide, { left: x + 26, top: y + 45, width: w - 52, height: 65, text, size: 28, bold: true });
    });
    addLine(slide, 965, 694, 820, 1);
    addText(slide, { left: 965, top: 726, width: 790, height: 120, text: "As AI becomes part of operational\nexecution, understanding, traceability,\nand ownership must remain visible.", size: 46, bold: true });
    addFooter(slide, "Purpose: Future-state operational conversation.", 10);
  }, 10);

  addSlide((slide) => {
    addHeader(slide, "DIFFERENTIATION");
    addRect(slide, 0, 0, 1920, 1080, BG, BG, 0);
    addRect(slide, 0, 0, 1120, 1080, "#F7F0F8", "#F7F0F8", 0);
    addText(slide, { left: 130, top: 231, width: 360, height: 24, text: "WHY SHIFTBY", size: 12, color: ACCENT, bold: true });
    addText(slide, { left: 130, top: 286, width: 820, height: 260, text: "Organizations rarely need\nmore technology.", size: 66, bold: true });
    addText(slide, { left: 130, top: 590, width: 980, height: 134, text: "They lose clarity when decisions, knowledge, ownership, and\naccountability become harder to preserve.", size: 34, color: BODY, bold: true });
    addText(slide, { left: 130, top: 760, width: 1100, height: 88, text: "ShiftBy helps leaders preserve understanding as execution changes.", size: 34, color: BODY, bold: true });
    addCircle(slide, 1340, 260, 580, "none", WATERMARK, 18);
    addCircle(slide, 1485, 405, 300, WATERMARK, "none", 0);
    addText(slide, { left: 1125, top: 585, width: 420, height: 64, text: "Ananda Krishna", size: 48, bold: true });
    addLine(slide, 1125, 555, 650, 1);
    addText(slide, { left: 1125, top: 650, width: 480, height: 24, text: "Founder-led advisory practice", size: 16, color: ACCENT, bold: true });
    addText(slide, { left: 1125, top: 664, width: 320, height: 30, text: "Founder", size: 28, color: BODY });
    addText(slide, { left: 1125, top: 708, width: 420, height: 30, text: "ShiftBy Pte. Ltd.", size: 28, color: BODY });
    addText(slide, { left: 1125, top: 764, width: 500, height: 30, text: "https://www.shiftby.sg", size: 26, color: INK });
    addText(slide, { left: 1125, top: 822, width: 620, height: 30, text: "linkedin.com/in/anandakrishnam", size: 26, color: INK });
    addText(slide, { left: 1125, top: 880, width: 420, height: 30, text: "anandakrishnam@shiftby.sg", size: 26, color: INK });
    addFooter(slide, "Purpose: Differentiation.", 11);
  }, 11);

  addSlide((slide) => {
    addHeader(slide, "CAPABILITY ARCHITECTURE");
    addText(slide, { left: 130, top: 150, width: 390, height: 24, text: "THE SHIFTBY CAPABILITY SYSTEM", size: 12, color: ACCENT, bold: true });
    addText(slide, { left: 130, top: 176, width: 860, height: 205, text: "Four capabilities support\nconfidence when\nexecution changes.", size: 78, bold: true });
    const cells = [
      { title: "Decision Traceability", body: "Rationale remains visible." },
      { title: "Organizational\nMemory", body: "Meaning survives change." },
      { title: "Human-AI\nAccountability", body: "Responsibility stays legible." },
      { title: "Adaptive Execution", body: "Change remains coherent." },
    ];
    addGrid(slide, 130, 444, 1660, 330, 4, 1, cells, { gap: 0 });
    addFooter(slide, "Purpose: Reveal underlying capability architecture. No deep dive.", 12);
  }, 12);

  addSlide((slide) => {
    addHeader(slide, "REFERRAL MOMENT");
    addRect(slide, 0, 0, 700, 1080, "#F7F0F8", "#F7F0F8", 0);
    addText(slide, { left: 130, top: 231, width: 400, height: 24, text: "INTRODUCE SHIFTBY WHEN...", size: 12, color: ACCENT, bold: true });
    addText(slide, { left: 130, top: 290, width: 470, height: 340, text: "Confidence\nneeds to\nsurvive\nchange.", size: 74, bold: true });
    addText(slide, { left: 130, top: 724, width: 450, height: 145, text: "A partner does not need to\ndiagnose the work. They only\nneed to recognize the moment.", size: 34, color: BODY });
    const rows = [
      "A new AI initiative needs a clear starting point.",
      "AI ideas exist, but prioritization is unclear.",
      "Governance, auditability, or ownership is missing.",
      "AI agents are moving into live workflows.",
      "Critical knowledge is at risk of being lost.",
    ];
    const rx = 735;
    const ry = 260;
    addLine(slide, rx, ry, 1110, 1);
    rows.forEach((row, i) => {
      const y = ry + 40 + i * 121;
      addLine(slide, rx, y + 49, 1110, 1);
      addText(slide, { left: rx - 2, top: y + 4, width: 40, height: 20, text: String(i + 1).padStart(2, "0"), size: 12, color: ACCENT, bold: true });
      addText(slide, { left: rx + 130, top: y, width: 920, height: 72, text: row, size: 36, bold: true });
    });
    addLine(slide, rx, 854, 1110, 1);
    addFooter(slide, "Most important referral slide.", 13);
  }, 13);

  addSlide((slide) => {
    addHeader(slide, "CONTACT");
    addRect(slide, 0, 0, 1920, 1080, BG, BG, 0);
    addRect(slide, 0, 0, 1920, 1080, BG, BG, 0);
    addText(slide, { left: 130, top: 231, width: 370, height: 24, text: "MAKE AN INTRODUCTION", size: 12, color: ACCENT, bold: true });
    addText(slide, { left: 130, top: 286, width: 650, height: 340, text: "Execution\nchanges.\nUnderstanding\npreserves\nconfidence.", size: 78, bold: true });
    addText(slide, { left: 130, top: 815, width: 500, height: 100, text: "Introduce ShiftBy when understanding\nneeds to survive change.", size: 38, color: BODY });
    addCircle(slide, 1380, 260, 580, "none", WATERMARK, 18);
    addCircle(slide, 1525, 405, 300, WATERMARK, "none", 0);
    addLine(slide, 1120, 550, 680, 1);
    addText(slide, { left: 1120, top: 585, width: 430, height: 44, text: "Ananda Krishna", size: 48, bold: true });
    addText(slide, { left: 1120, top: 664, width: 250, height: 30, text: "Founder", size: 28, color: BODY });
    addText(slide, { left: 1120, top: 706, width: 300, height: 30, text: "ShiftBy Pte. Ltd.", size: 28, color: BODY });
    addText(slide, { left: 1120, top: 765, width: 500, height: 30, text: "https://www.shiftby.sg", size: 26, color: INK });
    addText(slide, { left: 1120, top: 823, width: 560, height: 30, text: "linkedin.com/in/anandakrishnam", size: 26, color: INK });
    addText(slide, { left: 1120, top: 881, width: 500, height: 30, text: "anandakrishnam@shiftby.sg", size: 26, color: INK });
    addFooter(slide, "SHIFTBY_PARTNER_BRIEF_V1A_OPENDESIGN_IMPLEMENTATION_PASS", 14);
  }, 14);

  for (let i = 0; i < 4; i++) {
    addSlide((slide) => {
      addDarkMark(slide);
    }, 15 + i);
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

  for (const [idx, slide] of presentation.slides.items.entries()) {
    const png = await presentation.export({ slide, format: "png", scale: 1 });
    await fs.writeFile(path.join(PREVIEW_DIR, `slide-${String(idx + 1).padStart(2, "0")}.png`), new Uint8Array(await png.arrayBuffer()));
  }

  console.log(PPTX_OUT);
  console.log(REPORT_OUT);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
