
const TEMPLATE_BASE64 = "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";
const REQUIRED_HEADERS = ["Vehicle Name", "Flight ID", "Takeoff Time", "Takeoff Latitude", "Takeoff Longitude", "Land Time", "Land Latitude", "Land Longitude"];
const FIRST_PAGE_ROWS = Array.from({length:14}, (_, i) => i + 6); // 6-19
const NEXT_PAGE_ROWS = Array.from({length:15}, (_, i) => i + 5);  // 5-19
const SAFETY_ROWS_FIRST_PAGE = Array.from({length:14}, (_, i) => i + 6); // 6-19
const SAFETY_ROWS_NEXT_PAGE = Array.from({length:15}, (_, i) => i + 5);  // 5-19
const REPORT_ROWS = Array.from({length:5}, (_, i) => i + 21);    // 21-25
const NS_MAIN = "http://schemas.openxmlformats.org/spreadsheetml/2006/main";
const NS_REL = "http://schemas.openxmlformats.org/officeDocument/2006/relationships";
const NS_PKG_REL = "http://schemas.openxmlformats.org/package/2006/relationships";
const NS_CT = "http://schemas.openxmlformats.org/package/2006/content-types";
const NS_APP = "http://schemas.openxmlformats.org/officeDocument/2006/extended-properties";
const NS_VT = "http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes";
const EXCEL_EPOCH_MS = Date.UTC(1899, 11, 30);

const DEFAULT_YEARBOOK_PATH = "01.ドローン飛行日誌/年度管理/2026_飛行時間.xlsx";
const DEFAULT_OUTPUT_FOLDER_PATH = "01.ドローン飛行日誌/出力";
const GRAPH_ROOT = "https://graph.microsoft.com/v1.0";
const GRAPH_SCOPES = ["User.Read", "Files.ReadWrite"];
const OD_KEYS = {
  clientId: "flightLog.msClientId",
  tenant: "flightLog.msTenant",
  path: "flightLog.oneDriveYearbookPath",
  shareUrl: "flightLog.oneDriveYearbookShareUrl",
  driveId: "flightLog.oneDriveYearbookDriveId",
  itemId: "flightLog.oneDriveYearbookItemId",
  use: "flightLog.useOneDriveYearbook",
  outputFolderPath: "flightLog.oneDriveOutputFolderPath",
  outputFolderShareUrl: "flightLog.oneDriveOutputFolderShareUrl",
  saveDiary: "flightLog.saveDiaryToOneDrive",
  saveMaintenance: "flightLog.createMaintenanceRecord",
  initialMaintenancePlace: "flightLog.initialMaintenancePlacePreset",
  initialMaintenancePlaceCustom: "flightLog.initialMaintenancePlaceCustom",
  maintenanceEngineer: "flightLog.maintenanceEngineerOverride",
  maintenanceRemarks: "flightLog.maintenanceRemarks",
  downloadMaintenance: "flightLog.downloadMaintenanceRecord"
};
const VEHICLE_REG_MAP_KEY = "flightLogVehicleRegistrationMap.v1";


let parsedRows = [];
let csvImportFiles = [];
let csvSeenKeys = new Set();
let geocodeCache = new Map();
let geocodeLastAt = 0;
let entrySeq = 0;
let outputStyleMap = null;
let outputRedBoldStyleMap = null;

let msalApp = null;
let msalConfigKey = "";
let msalAccount = null;

const $ = (id) => document.getElementById(id);
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const specificFlights = [
  { label:"人口集中地区（DID）", short:"DID", default:true, basic:true },
  { label:"目視外", short:"目視外", default:true, basic:true },
  { label:"人・物件との距離30m未満", short:"30m未満", default:true, basic:true },
  { label:"空港等周辺や上空150m以上", short:"空港/150m以上", default:false, basic:false },
  { label:"夜間", short:"夜間", default:false, basic:false },
  { label:"イベント上空", short:"イベント上空", default:false, basic:false },
  { label:"危険物の輸送", short:"危険物輸送", default:false, basic:false },
  { label:"物件投下", short:"物件投下", default:false, basic:false },
  { label:"総重量25kg以上", short:"25kg以上", default:false, basic:false }
];

function setStatus(message, kind = "") {
  const el = $("status");
  el.className = "status" + (kind ? " " + kind : "");
  el.textContent = message;
}
function escHtml(s) { return String(s ?? "").replace(/[&<>"]/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[ch])); }
function b64ToArrayBuffer(base64) {
  const binary = atob(base64.replace(/\s/g, ""));
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return bytes.buffer;
}
function colToNumber(col) { let n = 0; for (const ch of col) n = n * 26 + ch.charCodeAt(0) - 64; return n; }
function numberToCol(n) { let s = ""; while (n > 0) { const m = (n - 1) % 26; s = String.fromCharCode(65 + m) + s; n = Math.floor((n - 1) / 26); } return s; }
function splitAddr(addr) { const m = String(addr).match(/^([A-Z]+)(\d+)$/); return { col:m[1], row:Number(m[2]), colNum:colToNumber(m[1]) }; }
function pad2(n) { return String(n).padStart(2, "0"); }
function yyyyMmDd(d) { return d ? `${d.getFullYear()}-${pad2(d.getMonth()+1)}-${pad2(d.getDate())}` : ""; }
function formatDate(d) { return d ? `${d.getFullYear()}/${pad2(d.getMonth()+1)}/${pad2(d.getDate())}` : ""; }
function formatTime(d) { return d ? `${pad2(d.getHours())}:${pad2(d.getMinutes())}` : ""; }
function excelSerialForDateString(s) {
  const [y,m,d] = String(s).split("-").map(Number);
  return Math.round((Date.UTC(y, m - 1, d) - EXCEL_EPOCH_MS) / 86400000);
}
function excelSerialToDateString(serial) {
  const d = new Date(EXCEL_EPOCH_MS + Math.round(Number(serial)) * 86400000);
  return `${d.getUTCFullYear()}-${pad2(d.getUTCMonth()+1)}-${pad2(d.getUTCDate())}`;
}
function minutesToExcelDay(mins) { return Number(mins || 0) / 1440; }
function hoursToExcelDay(hours) { return Number(hours || 0) / 24; }
function minutesToHours(mins) { return Number(mins || 0) / 60; }
function normalizeReg(s) { return String(s || "").trim().replace(/\s+/g, "").toUpperCase(); }
function loadVehicleRegMap() {
  try { return JSON.parse(localStorage.getItem(VEHICLE_REG_MAP_KEY) || "{}"); }
  catch (_) { return {}; }
}
function saveVehicleRegMap(map) { localStorage.setItem(VEHICLE_REG_MAP_KEY, JSON.stringify(map || {})); }
function getMappedRegistration(vehicleName) {
  const key = String(vehicleName || "").trim();
  if (!key) return "";
  return String(loadVehicleRegMap()[key] || "").trim();
}
function setMappedRegistration(vehicleName, registrationId) {
  const key = String(vehicleName || "").trim();
  const reg = normalizeReg(registrationId);
  if (!key || !reg) return;
  const map = loadVehicleRegMap();
  map[key] = reg;
  saveVehicleRegMap(map);
}
function guessRegistrationFromVehicleName(vehicleName) {
  const name = String(vehicleName || "").trim();
  if (!name) return "";
  const mapped = getMappedRegistration(name);
  if (mapped) return mapped;
  const compact = normalizeReg(name);
  const ju = compact.match(/JU[A-Z0-9]{6,}/i);
  if (ju) return ju[0].toUpperCase();
  return "";
}
function normalizeAddress(s) { return String(s || "").replace(/[\s　]+/g, "").replace(/丁目/g, "").replace(/[０-９]/g, ch => String.fromCharCode(ch.charCodeAt(0)-0xFEE0)); }
function isZeroCoord(lat, lon) { return Math.abs(Number(lat || 0)) < 0.000001 || Math.abs(Number(lon || 0)) < 0.000001; }
function coordFallback(lat, lon) { if (isZeroCoord(lat, lon)) return "不明"; const a = String(lat || "").trim(); const b = String(lon || "").trim(); return a && b ? `${a},${b}` : "不明"; }

function detectDelimiter(firstLine) {
  const counts = { "\t":0, ",":0, ";":0 };
  let quote = false;
  for (const ch of firstLine) { if (ch === '"') quote = !quote; if (!quote && Object.prototype.hasOwnProperty.call(counts, ch)) counts[ch]++; }
  return Object.entries(counts).sort((a,b)=>b[1]-a[1])[0][0] || ",";
}
function parseDelimited(text) {
  text = String(text || "").replace(/^\uFEFF/, "").replace(/\r\n/g, "\n").replace(/\r/g, "\n");
  const firstLine = text.split("\n").find(line => line.trim().length) || "";
  const delimiter = detectDelimiter(firstLine);
  const rows = [];
  let row = [], value = "", inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const ch = text[i], next = text[i + 1];
    if (ch === '"') { if (inQuotes && next === '"') { value += '"'; i++; } else inQuotes = !inQuotes; }
    else if (ch === delimiter && !inQuotes) { row.push(value); value = ""; }
    else if (ch === "\n" && !inQuotes) { row.push(value); if (row.some(v => String(v).trim() !== "")) rows.push(row); row = []; value = ""; }
    else value += ch;
  }
  row.push(value); if (row.some(v => String(v).trim() !== "")) rows.push(row);
  if (!rows.length) return [];
  const headers = rows[0].map(h => String(h).trim());
  return rows.slice(1).map(r => Object.fromEntries(headers.map((h,i) => [h, String(r[i] ?? "").trim()])));
}
function validateHeaders(rows) {
  if (!rows.length) return ["CSVにデータ行がありません。"]; 
  const actual = Object.keys(rows[0]);
  return REQUIRED_HEADERS.filter(h => !actual.includes(h)).map(h => `必要列がありません: ${h}`);
}
function parseDateTime(input) {
  const s = String(input || "").trim();
  if (!s) return null;
  if (/^\d+(\.\d+)?$/.test(s)) {
    const serial = Number(s);
    if (serial > 20000 && serial < 80000) return new Date(EXCEL_EPOCH_MS + serial * 86400000);
  }
  const m = s.match(/^(\d{4})[\/\-.](\d{1,2})[\/\-.](\d{1,2})(?:[ T](\d{1,2}):(\d{2})(?::(\d{2}))?)?/);
  if (m) return new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]), Number(m[4] || 0), Number(m[5] || 0), Number(m[6] || 0));
  const d = new Date(s);
  return Number.isNaN(d.getTime()) ? null : d;
}
function addHours(d, hours) { return d ? new Date(d.getTime() + hours * 3600000) : null; }
function prepareRows(rows) {
  return rows.map(row => {
    const takeoffRaw = parseDateTime(row["Takeoff Time"]);
    const landRaw = parseDateTime(row["Land Time"]);
    const takeoffJst = addHours(takeoffRaw, 9);
    const landJst = addHours(landRaw, 9);
    return { ...row, _takeoff: takeoffRaw, _land: landRaw, _takeoffJst: takeoffJst, _landJst: landJst, _targetDate: yyyyMmDd(takeoffJst) };
  });
}
function uniqueVehicleNames(rows) {
  const names = [];
  const seen = new Set();
  for (const row of rows || []) {
    const name = String(row["Vehicle Name"] || "").trim();
    if (!name || seen.has(name)) continue;
    seen.add(name);
    names.push(name);
  }
  return names;
}
function getSelectedVehicleName() {
  const sel = $("vehicleNameSelect");
  return sel && !sel.disabled ? String(sel.value || "").trim() : "";
}
function syncRegistrationFromVehicle(force = false) {
  const vehicleName = getSelectedVehicleName();
  if (!vehicleName) return;
  const guessed = guessRegistrationFromVehicleName(vehicleName);
  if (!guessed) return;
  const input = $("registrationId");
  if (force || !input.value.trim()) input.value = guessed;
}
function saveCurrentVehicleMapping() {
  const vehicleName = getSelectedVehicleName();
  const reg = $("registrationId")?.value || "";
  if (vehicleName && reg.trim()) setMappedRegistration(vehicleName, reg);
}
function updateVehicleNameSelect() {
  const sel = $("vehicleNameSelect");
  if (!sel) return;
  const selectedDate = $("targetDate")?.value || "";
  const baseRows = selectedDate ? parsedRows.filter(r => r._targetDate === selectedDate) : parsedRows;
  const names = uniqueVehicleNames(baseRows);
  const previous = sel.value;
  if (!names.length) {
    sel.disabled = true;
    sel.innerHTML = '<option value="">CSV読込後に自動表示</option>';
    return;
  }
  sel.disabled = false;
  sel.innerHTML = names.map(name => `<option value="${escHtml(name)}">${escHtml(name)}</option>`).join("");
  sel.value = names.includes(previous) ? previous : names[0];
  syncRegistrationFromVehicle(true);
}
function updateDateSelect() {
  const select = $("targetDate");
  const dates = [...new Set(parsedRows.map(r => r._targetDate).filter(Boolean))].sort();
  select.innerHTML = dates.length ? dates.map(d => `<option value="${d}">${d}</option>`).join("") : '<option value="">日付なし</option>';
  select.disabled = !dates.length;
  updateVehicleNameSelect();
  updatePageSelects();
}
function getSelectedRows() {
  const d = $("targetDate").value;
  let rows = parsedRows.filter(r => r._targetDate === d);
  const vehicleName = getSelectedVehicleName();
  if (vehicleName) rows = rows.filter(r => String(r["Vehicle Name"] || "").trim() === vehicleName);
  return rows;
}
function buildPageChunks(rows) {
  if (!rows.length) return [];
  const chunks = [];
  chunks.push(rows.slice(0, FIRST_PAGE_ROWS.length));
  let offset = FIRST_PAGE_ROWS.length;
  while (offset < rows.length) { chunks.push(rows.slice(offset, offset + NEXT_PAGE_ROWS.length)); offset += NEXT_PAGE_ROWS.length; }
  return chunks;
}
function flightMinutes(row) {
  if (!row._takeoff || !row._land) return 0;
  return Math.max(0, Math.round((row._land.getTime() - row._takeoff.getTime()) / 60000));
}
function selectedDayFlightMinutes(rows) { return rows.reduce((sum, r) => sum + flightMinutes(r), 0); }

function parseXml(text) { return new DOMParser().parseFromString(text, "application/xml"); }
function serializeXml(doc) { return new XMLSerializer().serializeToString(doc).replace(/<\?xml[^>]*\?>/, ""); }
function childByLocalName(node, local) { return [...node.childNodes].find(n => n.localName === local); }
function getTextContent(node) { return node ? node.textContent || "" : ""; }
function getOrCreateRow(doc, rowNum) {
  const sheetData = doc.getElementsByTagNameNS(NS_MAIN, "sheetData")[0];
  let row = [...sheetData.getElementsByTagNameNS(NS_MAIN, "row")].find(r => Number(r.getAttribute("r")) === rowNum);
  if (row) return row;
  row = doc.createElementNS(NS_MAIN, "row"); row.setAttribute("r", String(rowNum));
  const rows = [...sheetData.getElementsByTagNameNS(NS_MAIN, "row")];
  const next = rows.find(r => Number(r.getAttribute("r")) > rowNum);
  sheetData.insertBefore(row, next || null);
  return row;
}
function getCell(doc, addr) {
  return [...doc.getElementsByTagNameNS(NS_MAIN, "c")].find(c => c.getAttribute("r") === addr) || null;
}
function getOrCreateCell(doc, addr) {
  let cell = getCell(doc, addr);
  if (cell) return cell;
  const { row, colNum } = splitAddr(addr);
  const rowNode = getOrCreateRow(doc, row);
  cell = doc.createElementNS(NS_MAIN, "c"); cell.setAttribute("r", addr);
  const cells = [...rowNode.getElementsByTagNameNS(NS_MAIN, "c")];
  const next = cells.find(c => colToNumber((c.getAttribute("r") || "A1").match(/^[A-Z]+/)[0]) > colNum);
  rowNode.insertBefore(cell, next || null);
  return cell;
}
function removeCellValueNodes(cell, keepFormula=false) {
  [...cell.childNodes].forEach(n => {
    if (n.localName === "v" || n.localName === "is" || n.localName === "extLst" || (!keepFormula && n.localName === "f")) n.remove();
  });
  cell.removeAttribute("t");
}
function applyOutputStyle(cell, variant="normal") {
  const oldStyle = cell.getAttribute("s") || "0";
  const map = variant === "redBold" ? outputRedBoldStyleMap : outputStyleMap;
  if (map && map[oldStyle]) cell.setAttribute("s", map[oldStyle]);
}
function setCellText(doc, addr, value, readable=true, styleVariant="normal") {
  const cell = getOrCreateCell(doc, addr);
  removeCellValueNodes(cell, false);
  if (readable) applyOutputStyle(cell, styleVariant);
  cell.setAttribute("t", "inlineStr");
  const is = doc.createElementNS(NS_MAIN, "is");
  const t = doc.createElementNS(NS_MAIN, "t");
  t.setAttribute("xml:space", "preserve");
  t.textContent = value == null ? "" : String(value);
  is.appendChild(t); cell.appendChild(is);
}
function setCellNumber(doc, addr, value, opts={}) {
  const cell = getOrCreateCell(doc, addr);
  removeCellValueNodes(cell, !!opts.keepFormula);
  if (opts.readable) applyOutputStyle(cell, opts.styleVariant || "normal");
  const v = doc.createElementNS(NS_MAIN, "v");
  v.textContent = Number.isFinite(Number(value)) ? String(Number(value)) : "";
  cell.appendChild(v);
}
function clearCell(doc, addr) { setCellText(doc, addr, "", false); }
function getCellRawValue(doc, addr) {
  const cell = getCell(doc, addr); if (!cell) return "";
  const v = childByLocalName(cell, "v"); if (v) return getTextContent(v);
  const is = childByLocalName(cell, "is"); if (is) return getTextContent(is);
  return "";
}
function getCellNumber(doc, addr) {
  const raw = getCellRawValue(doc, addr);
  const n = Number(raw);
  return Number.isFinite(n) ? n : null;
}

function prepareReadableStyles(xmlText) {
  const doc = parseXml(xmlText);
  const fonts = doc.getElementsByTagNameNS(NS_MAIN, "fonts")[0];
  const cellXfs = doc.getElementsByTagNameNS(NS_MAIN, "cellXfs")[0];
  if (!fonts || !cellXfs) return { xml: xmlText, styleMap: null, redBoldStyleMap: null };
  const originalFonts = [...fonts.getElementsByTagNameNS(NS_MAIN, "font")];
  const originalXfs = [...cellXfs.getElementsByTagNameNS(NS_MAIN, "xf")];
  const blackFontMap = {};
  const redBoldFontMap = {};

  function ensureColor(fontNode, rgb) {
    let color = childByLocalName(fontNode, "color");
    if (!color) { color = doc.createElementNS(NS_MAIN, "color"); fontNode.insertBefore(color, fontNode.firstChild || null); }
    color.setAttribute("rgb", rgb); color.removeAttribute("theme"); color.removeAttribute("indexed");
  }
  function ensureBold(fontNode) {
    if (!childByLocalName(fontNode, "b")) fontNode.insertBefore(doc.createElementNS(NS_MAIN, "b"), fontNode.firstChild || null);
  }
  function ensureFontSize(fontNode, pt) {
    let sz = childByLocalName(fontNode, "sz");
    if (!sz) { sz = doc.createElementNS(NS_MAIN, "sz"); fontNode.insertBefore(sz, fontNode.firstChild || null); }
    sz.setAttribute("val", String(pt));
  }
  function fontFor(fontId, variant) {
    const key = String(fontId || 0);
    const map = variant === "redBold" ? redBoldFontMap : blackFontMap;
    if (map[key] != null) return map[key];
    const source = originalFonts[fontId] || originalFonts[0];
    const clone = source.cloneNode(true);
    if (variant === "redBold") { ensureColor(clone, "FFFF0000"); ensureBold(clone); ensureFontSize(clone, 11); }
    else ensureColor(clone, "FF000000");
    fonts.appendChild(clone);
    const newId = fonts.getElementsByTagNameNS(NS_MAIN, "font").length - 1;
    map[key] = newId; return newId;
  }
  function styleForXf(xf, fontId, variant="normal") {
    const clone = xf.cloneNode(true);
    clone.setAttribute("fontId", String(fontId));
    clone.setAttribute("applyFont", "1"); clone.setAttribute("applyAlignment", "1");
    let alignment = childByLocalName(clone, "alignment");
    if (!alignment) { alignment = doc.createElementNS(NS_MAIN, "alignment"); clone.appendChild(alignment); }
    alignment.setAttribute("shrinkToFit", "1");
    alignment.setAttribute("wrapText", "1");
    alignment.setAttribute("vertical", "center");
    if (variant === "redBold") alignment.setAttribute("horizontal", "center");
    cellXfs.appendChild(clone);
    return String(cellXfs.getElementsByTagNameNS(NS_MAIN, "xf").length - 1);
  }

  const styleMap = {};
  const redBoldStyleMap = {};
  originalXfs.forEach((xf, idx) => {
    const fontId = Number(xf.getAttribute("fontId") || 0);
    styleMap[String(idx)] = styleForXf(xf, fontFor(fontId, "black"), "normal");
    redBoldStyleMap[String(idx)] = styleForXf(xf, fontFor(fontId, "redBold"), "redBold");
  });
  fonts.setAttribute("count", String(fonts.getElementsByTagNameNS(NS_MAIN, "font").length));
  cellXfs.setAttribute("count", String(cellXfs.getElementsByTagNameNS(NS_MAIN, "xf").length));
  return { xml: serializeXml(doc), styleMap, redBoldStyleMap };
}
function clearTemplateCells(doc) {
  ["G2","R2"].forEach(a => clearCell(doc, a));
  for (let r = 5; r <= 19; r++) ["B","D","G","H","I","L","M","O","P","Q"].forEach(c => clearCell(doc, `${c}${r}`));
  for (let r = 21; r <= 25; r++) ["C","E","I","K","R"].forEach(c => clearCell(doc, `${c}${r}`));
}
function getFlightSummaryText() {
  const purpose = $("purposeText").value.trim() || "橋梁定期点検";
  const selected = [...document.querySelectorAll(".specific-flight:checked")].map(el => el.dataset.short);
  return selected.length ? `${purpose}\n特定：${selected.join("、")}` : purpose;
}
function fillFlightSheet(doc, rows, pageNo, options, totalHoursStart) {
  clearTemplateCells(doc);
  setCellText(doc, "G2", options.registrationId, true);
  setCellText(doc, "R2", `（NR.　${pageNo}　）`, true);
  if (pageNo === 1) {
    if (Number.isFinite(totalHoursStart) && totalHoursStart > 0) setCellNumber(doc, "P5", hoursToExcelDay(totalHoursStart), { readable:true, styleVariant:"redBold" });
    setCellText(doc, "G5", "従前の総飛行時間を転記", true, "redBold");
  }
  const rowNumbers = pageNo === 1 ? FIRST_PAGE_ROWS : NEXT_PAGE_ROWS;
  let totalHours = Number(totalHoursStart || 0);
  rows.forEach((row, index) => {
    const excelRow = rowNumbers[index];
    const mins = flightMinutes(row);
    const flightHours = minutesToHours(mins);
    totalHours += flightHours;
    setCellText(doc, `B${excelRow}`, formatDate(row._takeoffJst), true);
    setCellText(doc, `D${excelRow}`, options.pilotName, true);
    setCellText(doc, `G${excelRow}`, options.flightSummary, true);
    setCellText(doc, `H${excelRow}`, row._takeoffPlace || coordFallback(row["Takeoff Latitude"], row["Takeoff Longitude"]), true);
    setCellText(doc, `I${excelRow}`, row._landPlace || coordFallback(row["Land Latitude"], row["Land Longitude"]), true);
    setCellText(doc, `L${excelRow}`, formatTime(row._takeoffJst), true);
    setCellText(doc, `M${excelRow}`, formatTime(row._landJst), true);
    setCellNumber(doc, `O${excelRow}`, minutesToExcelDay(mins), { readable:true });
    setCellNumber(doc, `P${excelRow}`, hoursToExcelDay(totalHours), { readable:true });
  });
  return totalHours;
}
function applySafety(doc, pageNo, safetyEntries) {
  const byCell = new Map();
  safetyEntries.filter(e => e.page === pageNo).forEach(e => {
    const key = `Q${e.row}`;
    byCell.set(key, byCell.has(key) ? `${byCell.get(key)}\n${e.text}` : e.text);
  });
  byCell.forEach((text, addr) => setCellText(doc, addr, text, true));
}
function applyReports(doc, pageNo, reportEntries, selectedDate) {
  const items = reportEntries.filter(e => e.page === pageNo).slice(0, REPORT_ROWS.length);
  items.forEach((e, i) => {
    const r = REPORT_ROWS[i];
    setCellText(doc, `C${r}`, selectedDate.replaceAll("-", "/"), true);
    setCellText(doc, `E${r}`, e.squawk, true);
    setCellText(doc, `I${r}`, e.actionDate ? e.actionDate.replaceAll("-", "/") : "", true);
    setCellText(doc, `K${r}`, e.action, true);
    setCellText(doc, `R${r}`, e.confirmer, true);
  });
}
function setWorkbookCalcOnLoad(xmlText) {
  const doc = parseXml(xmlText);
  let calcPr = doc.getElementsByTagNameNS(NS_MAIN, "calcPr")[0];
  if (!calcPr) { calcPr = doc.createElementNS(NS_MAIN, "calcPr"); doc.documentElement.appendChild(calcPr); }
  calcPr.setAttribute("calcMode", "auto"); calcPr.setAttribute("fullCalcOnLoad", "1"); calcPr.setAttribute("forceFullCalc", "1");
  return serializeXml(doc);
}
function updateWorkbookXml(xmlText, pageCount, includeDailyInspection = true, includeMaintenanceInspection = false) {
  const doc = parseXml(xmlText);
  const sheets = doc.getElementsByTagNameNS(NS_MAIN, "sheets")[0];
  [...sheets.getElementsByTagNameNS(NS_MAIN, "sheet")].forEach((s, i) => { if (i > 0) s.remove(); });
  const first = sheets.getElementsByTagNameNS(NS_MAIN, "sheet")[0];
  first.setAttribute("name", "飛行記録"); first.setAttribute("sheetId", "17"); first.setAttributeNS(NS_REL, "r:id", "rId1");

  let nextSheetId = 18;
  let nextRelId = 5;

  if (includeDailyInspection) {
    const daily = doc.createElementNS(NS_MAIN, "sheet");
    daily.setAttribute("name", "日常点検記録");
    daily.setAttribute("sheetId", String(nextSheetId++));
    daily.setAttributeNS(NS_REL, "r:id", `rId${nextRelId++}`);
    sheets.appendChild(daily);
  }

  if (includeMaintenanceInspection) {
    const maintenance = doc.createElementNS(NS_MAIN, "sheet");
    maintenance.setAttribute("name", "整備点検記録");
    maintenance.setAttribute("sheetId", String(nextSheetId++));
    maintenance.setAttributeNS(NS_REL, "r:id", `rId${nextRelId++}`);
    sheets.appendChild(maintenance);
  }

  for (let pageNo = 2; pageNo <= pageCount; pageNo++) {
    const sheet = doc.createElementNS(NS_MAIN, "sheet");
    sheet.setAttribute("name", `飛行記録_${pageNo}`);
    sheet.setAttribute("sheetId", String(nextSheetId++));
    sheet.setAttributeNS(NS_REL, "r:id", `rId${nextRelId++}`);
    sheets.appendChild(sheet);
  }

  let definedNames = doc.getElementsByTagNameNS(NS_MAIN, "definedNames")[0];
  if (!definedNames) { definedNames = doc.createElementNS(NS_MAIN, "definedNames"); const calcPr = doc.getElementsByTagNameNS(NS_MAIN, "calcPr")[0]; doc.documentElement.insertBefore(definedNames, calcPr || null); }
  [...definedNames.getElementsByTagNameNS(NS_MAIN, "definedName")].filter(n => n.getAttribute("name") === "_xlnm.Print_Area").forEach(n => n.remove());

  const dn1 = doc.createElementNS(NS_MAIN, "definedName");
  dn1.setAttribute("name", "_xlnm.Print_Area"); dn1.setAttribute("localSheetId", "0"); dn1.textContent = "飛行記録!$A$1:$S$26"; definedNames.appendChild(dn1);

  let localSheetId = 1;
  if (includeDailyInspection) {
    const dnDaily = doc.createElementNS(NS_MAIN, "definedName");
    dnDaily.setAttribute("name", "_xlnm.Print_Area"); dnDaily.setAttribute("localSheetId", String(localSheetId++)); dnDaily.textContent = "'日常点検記録'!$A$1:$M$25"; definedNames.appendChild(dnDaily);
  }
  if (includeMaintenanceInspection) {
    const dnMaintenance = doc.createElementNS(NS_MAIN, "definedName");
    dnMaintenance.setAttribute("name", "_xlnm.Print_Area"); dnMaintenance.setAttribute("localSheetId", String(localSheetId++)); dnMaintenance.textContent = "'整備点検記録'!$A$1:$U$25"; definedNames.appendChild(dnMaintenance);
  }

  for (let pageNo = 2; pageNo <= pageCount; pageNo++) {
    const dn = doc.createElementNS(NS_MAIN, "definedName");
    dn.setAttribute("name", "_xlnm.Print_Area");
    dn.setAttribute("localSheetId", String(localSheetId++));
    dn.textContent = `'飛行記録_${pageNo}'!$A$1:$S$26`;
    definedNames.appendChild(dn);
  }

  let calcPr = doc.getElementsByTagNameNS(NS_MAIN, "calcPr")[0];
  if (!calcPr) { calcPr = doc.createElementNS(NS_MAIN, "calcPr"); doc.documentElement.appendChild(calcPr); }
  calcPr.setAttribute("calcMode", "auto"); calcPr.setAttribute("fullCalcOnLoad", "1"); calcPr.setAttribute("forceFullCalc", "1");
  return serializeXml(doc);
}
function updateWorkbookRels(xmlText, pageCount, includeDailyInspection = true, includeMaintenanceInspection = false) {
  const doc = parseXml(xmlText); const root = doc.documentElement;
  [...root.getElementsByTagNameNS(NS_PKG_REL, "Relationship")].forEach(rel => { if (rel.getAttribute("Type")?.endsWith("/worksheet") && rel.getAttribute("Id") !== "rId1") rel.remove(); });
  let nextRelId = 5;
  let nextSheetIndex = 2;
  if (includeDailyInspection) {
    const dailyRel = doc.createElementNS(NS_PKG_REL, "Relationship");
    dailyRel.setAttribute("Id", `rId${nextRelId++}`);
    dailyRel.setAttribute("Type", "http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet");
    dailyRel.setAttribute("Target", `worksheets/sheet${nextSheetIndex++}.xml`);
    root.appendChild(dailyRel);
  }
  if (includeMaintenanceInspection) {
    const maintenanceRel = doc.createElementNS(NS_PKG_REL, "Relationship");
    maintenanceRel.setAttribute("Id", `rId${nextRelId++}`);
    maintenanceRel.setAttribute("Type", "http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet");
    maintenanceRel.setAttribute("Target", `worksheets/sheet${nextSheetIndex++}.xml`);
    root.appendChild(maintenanceRel);
  }
  for (let pageNo = 2; pageNo <= pageCount; pageNo++) {
    const rel = doc.createElementNS(NS_PKG_REL, "Relationship");
    rel.setAttribute("Id", `rId${nextRelId++}`);
    rel.setAttribute("Type", "http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet");
    rel.setAttribute("Target", `worksheets/sheet${nextSheetIndex++}.xml`);
    root.appendChild(rel);
  }
  return serializeXml(doc);
}
function updateContentTypes(xmlText, pageCount, includeDailyInspection = true, includeMaintenanceInspection = false) {
  const doc = parseXml(xmlText); const root = doc.documentElement;
  [...root.getElementsByTagNameNS(NS_CT, "Override")].forEach(o => { const p = o.getAttribute("PartName") || ""; if (/^\/xl\/worksheets\/sheet\d+\.xml$/.test(p) && p !== "/xl/worksheets/sheet1.xml") o.remove(); });
  const extraSheets = (includeDailyInspection ? 1 : 0) + (includeMaintenanceInspection ? 1 : 0);
  const maxSheetIndex = pageCount + extraSheets;
  for (let i = 2; i <= maxSheetIndex; i++) { const o = doc.createElementNS(NS_CT, "Override"); o.setAttribute("PartName", `/xl/worksheets/sheet${i}.xml`); o.setAttribute("ContentType", "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"); root.appendChild(o); }
  return serializeXml(doc);
}
function updateAppXml(xmlText, pageCount, includeDailyInspection = true, includeMaintenanceInspection = false) {
  const doc = parseXml(xmlText); const hp = doc.getElementsByTagNameNS(NS_APP, "HeadingPairs")[0]; const titles = doc.getElementsByTagNameNS(NS_APP, "TitlesOfParts")[0];
  const sheetNames = ["飛行記録"];
  if (includeDailyInspection) sheetNames.push("日常点検記録");
  if (includeMaintenanceInspection) sheetNames.push("整備点検記録");
  for (let pageNo = 2; pageNo <= pageCount; pageNo++) sheetNames.push(`飛行記録_${pageNo}`);
  if (hp) { const i4 = hp.getElementsByTagNameNS(NS_VT, "i4")[0]; if (i4) i4.textContent = String(sheetNames.length); }
  if (titles) { const vec = titles.getElementsByTagNameNS(NS_VT, "vector")[0]; if (vec) { while (vec.firstChild) vec.removeChild(vec.firstChild); vec.setAttribute("size", String(sheetNames.length + 1)); sheetNames.forEach(name => { const lp = doc.createElementNS(NS_VT, "vt:lpstr"); lp.textContent = name; vec.appendChild(lp); }); const pa = doc.createElementNS(NS_VT, "vt:lpstr"); pa.textContent = "飛行記録!Print_Area"; vec.appendChild(pa); } }
  return serializeXml(doc);
}

function directChildrenByLocalName(node, local) {
  return [...node.childNodes].filter(n => n.localName === local);
}
function isInsidePhoneticRun(node) {
  let p = node ? node.parentNode : null;
  while (p) {
    if (p.localName === "rPh") return true;
    p = p.parentNode;
  }
  return false;
}
function sharedStringTextWithoutPhonetics(si) {
  // Excelのふりがな情報は sharedStrings.xml 内の <rPh> に入る。
  // textContentで一括取得すると、元ラベルにカナが連結されて帳票が崩れるため、
  // <rPh> 配下の <t> は除外して、セル本体の文字だけを使う。
  return [...si.getElementsByTagNameNS(NS_MAIN, "t")]
    .filter(t => !isInsidePhoneticRun(t))
    .map(t => t.textContent || "")
    .join("");
}
function parseSharedStringsXml(xmlText) {
  if (!xmlText) return [];
  const doc = parseXml(xmlText);
  return [...doc.getElementsByTagNameNS(NS_MAIN, "si")].map(sharedStringTextWithoutPhonetics);
}
function convertSharedStringsToInlineStrings(sheetDoc, sharedStrings) {
  [...sheetDoc.getElementsByTagNameNS(NS_MAIN, "c")].forEach(cell => {
    if (cell.getAttribute("t") !== "s") return;
    const v = childByLocalName(cell, "v");
    const idx = v ? Number(v.textContent || 0) : -1;
    const text = Number.isFinite(idx) && idx >= 0 ? (sharedStrings[idx] || "") : "";
    removeCellValueNodes(cell, false);
    cell.setAttribute("t", "inlineStr");
    const is = sheetDoc.createElementNS(NS_MAIN, "is");
    const t = sheetDoc.createElementNS(NS_MAIN, "t");
    t.setAttribute("xml:space", "preserve");
    t.textContent = text;
    is.appendChild(t); cell.appendChild(is);
  });
}
function mergeImportedSheetStyles(mainStylesXml, importedStylesXml, importedSheetDoc) {
  const mainDoc = parseXml(mainStylesXml);
  const importedDoc = parseXml(importedStylesXml);
  const mainFonts = mainDoc.getElementsByTagNameNS(NS_MAIN, "fonts")[0];
  const mainFills = mainDoc.getElementsByTagNameNS(NS_MAIN, "fills")[0];
  const mainBorders = mainDoc.getElementsByTagNameNS(NS_MAIN, "borders")[0];
  const mainCellXfs = mainDoc.getElementsByTagNameNS(NS_MAIN, "cellXfs")[0];
  const impFonts = importedDoc.getElementsByTagNameNS(NS_MAIN, "fonts")[0];
  const impFills = importedDoc.getElementsByTagNameNS(NS_MAIN, "fills")[0];
  const impBorders = importedDoc.getElementsByTagNameNS(NS_MAIN, "borders")[0];
  const impCellXfs = importedDoc.getElementsByTagNameNS(NS_MAIN, "cellXfs")[0];
  if (!mainFonts || !mainFills || !mainBorders || !mainCellXfs || !impFonts || !impFills || !impBorders || !impCellXfs) {
    return { xml: mainStylesXml, styleOffset: 0 };
  }
  const fontOffset = directChildrenByLocalName(mainFonts, "font").length;
  const fillOffset = directChildrenByLocalName(mainFills, "fill").length;
  const borderOffset = directChildrenByLocalName(mainBorders, "border").length;
  const styleOffset = directChildrenByLocalName(mainCellXfs, "xf").length;

  directChildrenByLocalName(impFonts, "font").forEach(n => mainFonts.appendChild(mainDoc.importNode(n, true)));
  directChildrenByLocalName(impFills, "fill").forEach(n => mainFills.appendChild(mainDoc.importNode(n, true)));
  directChildrenByLocalName(impBorders, "border").forEach(n => mainBorders.appendChild(mainDoc.importNode(n, true)));

  directChildrenByLocalName(impCellXfs, "xf").forEach(xf => {
    const clone = mainDoc.importNode(xf, true);
    if (clone.hasAttribute("fontId")) clone.setAttribute("fontId", String(Number(clone.getAttribute("fontId") || 0) + fontOffset));
    if (clone.hasAttribute("fillId")) clone.setAttribute("fillId", String(Number(clone.getAttribute("fillId") || 0) + fillOffset));
    if (clone.hasAttribute("borderId")) clone.setAttribute("borderId", String(Number(clone.getAttribute("borderId") || 0) + borderOffset));
    // Normalスタイル基準に寄せる。セル表示の見た目は font/fill/border/alignment を優先。
    clone.setAttribute("xfId", "0");
    mainCellXfs.appendChild(clone);
  });

  mainFonts.setAttribute("count", String(directChildrenByLocalName(mainFonts, "font").length));
  mainFills.setAttribute("count", String(directChildrenByLocalName(mainFills, "fill").length));
  mainBorders.setAttribute("count", String(directChildrenByLocalName(mainBorders, "border").length));
  mainCellXfs.setAttribute("count", String(directChildrenByLocalName(mainCellXfs, "xf").length));

  [...importedSheetDoc.getElementsByTagNameNS(NS_MAIN, "c")].forEach(cell => {
    const oldStyle = Number(cell.getAttribute("s") || 0);
    if (Number.isFinite(oldStyle)) cell.setAttribute("s", String(oldStyle + styleOffset));
  });
  return { xml: serializeXml(mainDoc), styleOffset };
}
async function loadDailyInspectionTemplateZip() {
  const res = await fetch("templates/日常点検記録.xlsx");
  if (!res.ok) throw new Error("日常点検記録テンプレートを読み込めませんでした。templates/日常点検記録.xlsx を確認してください。");
  return JSZip.loadAsync(await res.arrayBuffer());
}
function inspectionSelectValue(id) {
  return ($(`${id}`)?.value || "OK").trim() || "OK";
}
function getDailyInspectionOptions(rows, selectedDate, options) {
  const first = rows && rows.length ? rows[0] : null;
  const autoPlace = first ? (first._takeoffPlace || coordFallback(first["Takeoff Latitude"], first["Takeoff Longitude"])) : "";
  return {
    registrationId: options.registrationId || "",
    results: {
      J6: inspectionSelectValue("inspectionJ6"),
      J7: inspectionSelectValue("inspectionJ7"),
      J8: inspectionSelectValue("inspectionJ8"),
      J9: inspectionSelectValue("inspectionJ9"),
      J10: inspectionSelectValue("inspectionJ10"),
      J11: inspectionSelectValue("inspectionJ11"),
      J12: inspectionSelectValue("inspectionJ12"),
      J13: inspectionSelectValue("inspectionJ13"),
      J14: inspectionSelectValue("inspectionJ14")
    },
    notes: ($("inspectionNotes")?.value || "特になし").trim() || "特になし",
    place: ($("inspectionPlaceOverride")?.value || "").trim() || autoPlace,
    date: ($("inspectionDateOverride")?.value || "").trim() || selectedDate.replaceAll("-", "/"),
    inspector: ($("inspectionInspectorOverride")?.value || "").trim() || options.pilotName || ""
  };
}
async function buildDailyInspectionSheet(zip, sheetIndex, selectedRows, selectedDate, options) {
  const dailyZip = await loadDailyInspectionTemplateZip();
  const sheetXml = await dailyZip.file("xl/worksheets/sheet1.xml").async("string");
  const dailyDoc = parseXml(sheetXml);
  const ssFile = dailyZip.file("xl/sharedStrings.xml");
  const sharedStrings = ssFile ? parseSharedStringsXml(await ssFile.async("string")) : [];
  convertSharedStringsToInlineStrings(dailyDoc, sharedStrings);

  const importedStyles = await dailyZip.file("xl/styles.xml").async("string");
  const mergedStyles = mergeImportedSheetStyles(await zip.file("xl/styles.xml").async("string"), importedStyles, dailyDoc);
  zip.file("xl/styles.xml", mergedStyles.xml);

  const values = getDailyInspectionOptions(selectedRows, selectedDate, options);
  setCellText(dailyDoc, "C1", values.registrationId, false);
  Object.entries(values.results).forEach(([addr, value]) => setCellText(dailyDoc, addr, value, false));
  setCellText(dailyDoc, "B18", values.notes, false);
  setCellText(dailyDoc, "A24", values.place, false);
  setCellText(dailyDoc, "E24", values.date, false);
  setCellText(dailyDoc, "J24", values.inspector, false);

  zip.file(`xl/worksheets/sheet${sheetIndex}.xml`, serializeXml(dailyDoc));
  const relsFile = dailyZip.file("xl/worksheets/_rels/sheet1.xml.rels");
  if (relsFile) zip.file(`xl/worksheets/_rels/sheet${sheetIndex}.xml.rels`, await relsFile.async("string"));
}

async function buildMaintenanceInspectionSheet(zip, sheetIndex, maintenanceBlob) {
  if (!maintenanceBlob) return false;
  const maintenanceZip = await JSZip.loadAsync(await maintenanceBlob.arrayBuffer());
  const info = await getWorkbookSheetInfo(maintenanceZip);
  const sheetXml = await maintenanceZip.file(info.path).async("string");
  const maintenanceDoc = parseXml(sheetXml);
  const ssFile = maintenanceZip.file("xl/sharedStrings.xml");
  const sharedStrings = ssFile ? parseSharedStringsXml(await ssFile.async("string")) : [];
  convertSharedStringsToInlineStrings(maintenanceDoc, sharedStrings);

  const importedStyles = await maintenanceZip.file("xl/styles.xml").async("string");
  const mergedStyles = mergeImportedSheetStyles(await zip.file("xl/styles.xml").async("string"), importedStyles, maintenanceDoc);
  zip.file("xl/styles.xml", mergedStyles.xml);

  zip.file(`xl/worksheets/sheet${sheetIndex}.xml`, serializeXml(maintenanceDoc));
  const relPath = info.path.replace(/^xl\/worksheets\//, "xl/worksheets/_rels/") + ".rels";
  const relsFile = maintenanceZip.file(relPath) || maintenanceZip.file("xl/worksheets/_rels/sheet1.xml.rels");
  if (relsFile) zip.file(`xl/worksheets/_rels/sheet${sheetIndex}.xml.rels`, await relsFile.async("string"));
  return true;
}

async function reverseGeocode(lat, lon) {
  if (isZeroCoord(lat, lon)) return "不明";
  const key = `${Number(lat).toFixed(6)},${Number(lon).toFixed(6)}`;
  if (geocodeCache.has(key)) return geocodeCache.get(key);
  const wait = Math.max(0, 1100 - (Date.now() - geocodeLastAt));
  if (wait) await sleep(wait);
  geocodeLastAt = Date.now();
  try {
    const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${encodeURIComponent(lat)}&lon=${encodeURIComponent(lon)}&zoom=18&addressdetails=1&accept-language=ja`;
    const res = await fetch(url, { headers: { "Accept":"application/json" } });
    if (!res.ok) throw new Error("geocode failed");
    const data = await res.json();
    const a = data.address || {};
    const parts = [a.city || a.town || a.village || a.municipality, a.ward || a.city_district || a.suburb, a.quarter || a.neighbourhood || a.hamlet, a.road].filter(Boolean);
    let out = normalizeAddress(parts.join(""));
    if (!out) out = normalizeAddress(data.display_name || "");
    if (!out) out = coordFallback(lat, lon);
    geocodeCache.set(key, out); return out;
  } catch (e) {
    const fallback = coordFallback(lat, lon);
    geocodeCache.set(key, fallback); return fallback;
  }
}
async function enrichLocations(rows) {
  setStatus("緯度経度から地名を取得しています...", "warn");
  for (const row of rows) {
    row._takeoffPlace = await reverseGeocode(row["Takeoff Latitude"], row["Takeoff Longitude"]);
    row._landPlace = await reverseGeocode(row["Land Latitude"], row["Land Longitude"]);
  }
}

function parseSharedStrings(xmlText) {
  if (!xmlText) return [];
  const doc = parseXml(xmlText);
  return [...doc.getElementsByTagNameNS(NS_MAIN, "si")].map(sharedStringTextWithoutPhonetics);
}
function getCellDisplayValue(doc, addr, sharedStrings) {
  const cell = getCell(doc, addr); if (!cell) return "";
  const t = cell.getAttribute("t");
  const v = getCellRawValue(doc, addr);
  if (t === "s") return sharedStrings[Number(v)] ?? "";
  if (t === "inlineStr") return v;
  return v;
}
function getRowCells(doc, rowNum) {
  const row = [...doc.getElementsByTagNameNS(NS_MAIN, "row")].find(r => Number(r.getAttribute("r")) === rowNum);
  return row ? [...row.getElementsByTagNameNS(NS_MAIN, "c")] : [];
}
function resolveTargetPath(target) {
  if (!target) return "xl/worksheets/sheet1.xml";
  let p = target.replace(/^\//, "");
  if (!p.startsWith("xl/")) p = "xl/" + p;
  return p.replace(/\/\.\//g, "/");
}
async function getWorkbookSheetInfo(zip) {
  const workbookXml = await zip.file("xl/workbook.xml").async("string");
  const relsXml = await zip.file("xl/_rels/workbook.xml.rels").async("string");
  const wbDoc = parseXml(workbookXml); const relDoc = parseXml(relsXml);
  const relMap = new Map([...relDoc.getElementsByTagNameNS(NS_PKG_REL, "Relationship")].map(r => [r.getAttribute("Id"), r.getAttribute("Target")]));
  const sheets = [...wbDoc.getElementsByTagNameNS(NS_MAIN, "sheet")].map(s => ({ name:s.getAttribute("name"), rid:s.getAttributeNS(NS_REL, "id") || s.getAttribute("r:id") }));
  const target = sheets.find(s => /飛行時間記録/.test(s.name || "")) || sheets[0];
  if (!target) throw new Error("年度管理ブックにシートが見つかりません。");
  return { name:target.name, path:resolveTargetPath(relMap.get(target.rid)), workbookXml };
}
function findYearbookRow(doc, sharedStrings, registrationId) {
  const target = normalizeReg(registrationId);
  if (!target) return null;
  const rows = [...doc.getElementsByTagNameNS(NS_MAIN, "row")];
  for (const row of rows) {
    const r = Number(row.getAttribute("r"));
    if (r < 8) continue;
    const val = normalizeReg(getCellDisplayValue(doc, `C${r}`, sharedStrings));
    if (val === target) return r;
  }
  return null;
}
function findYearbookDateCol(doc, sharedStrings, selectedDate) {
  const cells = getRowCells(doc, 7);
  const targetSerial = excelSerialForDateString(selectedDate);
  for (const cell of cells) {
    const addr = cell.getAttribute("r") || "";
    const col = (addr.match(/^[A-Z]+/) || [""])[0];
    const raw = getCellRawValue(doc, addr);
    const n = Number(raw);
    if (Number.isFinite(n) && Math.round(n) === targetSerial) return col;
    const text = getCellDisplayValue(doc, addr, sharedStrings).replace(/[./]/g, "-");
    if (text === selectedDate) return col;
  }
  return null;
}
function sumYearbookRowHours(doc, rowNum, overrideAddr=null, overrideValue=null) {
  let sum = 0;
  for (const cell of getRowCells(doc, rowNum)) {
    const addr = cell.getAttribute("r") || "";
    const col = (addr.match(/^[A-Z]+/) || [""])[0];
    const colNum = colToNumber(col);
    if (colNum < 8) continue; // H onward, including 2025年度 and dates
    let val;
    if (addr === overrideAddr) val = overrideValue;
    else val = Number(getCellRawValue(doc, addr));
    if (Number.isFinite(val)) sum += val;
  }
  if (overrideAddr && !getCell(doc, overrideAddr) && Number.isFinite(Number(overrideValue))) sum += Number(overrideValue);
  return Math.round(sum * 100) / 100;
}
function sumYearbookRowHoursBeforeTargetDate(doc, rowNum, targetDateCol) {
  // 飛行日誌P5は「出力対象日の直前までの総飛行時間」。
  // G列総飛行時間を使うと、5/8入力済みの状態で5/7を出したときに未来分まで含まれる。
  // そのため、H列以降のうち対象日列より前のセルだけを合計する。
  const targetColNum = colToNumber(targetDateCol);
  let sum = 0;
  for (const cell of getRowCells(doc, rowNum)) {
    const addr = cell.getAttribute("r") || "";
    const col = (addr.match(/^[A-Z]+/) || [""])[0];
    const colNum = colToNumber(col);
    if (colNum < 8 || colNum >= targetColNum) continue;
    const val = Number(getCellRawValue(doc, addr));
    if (Number.isFinite(val)) sum += val;
  }
  return Math.round(sum * 100) / 100;
}
async function loadYearbook(file, registrationId, selectedDate, dayFlightHours=null) {
  if (!file) return { previousHours:0, updatedBlob:null, message:"年度管理ブックなし" };
  const zip = await JSZip.loadAsync(await file.arrayBuffer());
  const sharedStrings = parseSharedStrings(zip.file("xl/sharedStrings.xml") ? await zip.file("xl/sharedStrings.xml").async("string") : "");
  const info = await getWorkbookSheetInfo(zip);
  const sheetXml = await zip.file(info.path).async("string");
  const sheetDoc = parseXml(sheetXml);
  const rowNum = findYearbookRow(sheetDoc, sharedStrings, registrationId);
  if (!rowNum) throw new Error(`年度管理ブックで登録記号 ${registrationId || "(未入力)"} が見つかりません。C列を確認してください。`);
  const dateCol = findYearbookDateCol(sheetDoc, sharedStrings, selectedDate);
  if (!dateCol) throw new Error(`年度管理ブックの7行目に ${selectedDate} の日付列が見つかりません。`);
  const previousHours = sumYearbookRowHoursBeforeTargetDate(sheetDoc, rowNum, dateCol);
  const totalHoursFromG = getCellNumber(sheetDoc, `G${rowNum}`);
  const targetAddr = `${dateCol}${rowNum}`;

  // 読み取りだけの場合。P5はG列総飛行時間ではなく、対象日の前日までの累計を使う。
  if (dayFlightHours == null) {
    const gNote = Number.isFinite(totalHoursFromG) ? ` / G列現在値 ${totalHoursFromG} 時間` : "";
    return { previousHours, updatedBlob:null, sheetName:info.name, rowNum, dateCol, targetAddr, dayHours:null, message:`年度ブック ${info.name}!${rowNum}行目から対象日前までの従前総飛行時間 ${previousHours} 時間を算出${gNote}` };
  }

  // 年度管理ブックには「P5:P19の差分」だけを書き込む。
  // P5は従前値、P19などの最終累計との差分が年度管理へ入れる当日分。
  // G列の総飛行時間は、年度管理ブック側の数式・既存管理に任せるため上書きしない。
  const roundedDayHours = Math.round(Math.max(0, Number(dayFlightHours || 0)) * 100) / 100;
  setCellNumber(sheetDoc, targetAddr, roundedDayHours, { readable:false });
  zip.file(info.path, serializeXml(sheetDoc));
  if (zip.file("xl/workbook.xml")) zip.file("xl/workbook.xml", setWorkbookCalcOnLoad(await zip.file("xl/workbook.xml").async("string")));
  const updatedBlob = await zip.generateAsync({ type:"blob", mimeType:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
  return { previousHours, updatedBlob, sheetName:info.name, rowNum, dateCol, targetAddr, dayHours:roundedDayHours, message:`年度ブック ${info.name}!${targetAddr} にP5:P19の差分 ${roundedDayHours} 時間を書き込み（G列は未更新）` };
}


function setOneDriveStatus(message, kind = "") {
  const el = $("oneDriveStatus");
  if (!el) return;
  el.className = "status" + (kind ? " " + kind : "");
  el.textContent = message;
}
function loadOneDriveUiSettings() {
  if (!$("msClientId")) return;
  $("msClientId").value = localStorage.getItem(OD_KEYS.clientId) || "";
  $("msTenant").value = localStorage.getItem(OD_KEYS.tenant) || "";
  if ($("oneDriveYearbookShareUrl")) $("oneDriveYearbookShareUrl").value = localStorage.getItem(OD_KEYS.shareUrl) || "";
  if ($("oneDriveYearbookDriveId")) $("oneDriveYearbookDriveId").value = localStorage.getItem(OD_KEYS.driveId) || "";
  if ($("oneDriveYearbookItemId")) $("oneDriveYearbookItemId").value = localStorage.getItem(OD_KEYS.itemId) || "";
  $("oneDriveYearbookPath").value = localStorage.getItem(OD_KEYS.path) || DEFAULT_YEARBOOK_PATH;
  if ($("oneDriveOutputFolderShareUrl")) $("oneDriveOutputFolderShareUrl").value = localStorage.getItem(OD_KEYS.outputFolderShareUrl) || "";
  if ($("oneDriveOutputFolderPath")) $("oneDriveOutputFolderPath").value = localStorage.getItem(OD_KEYS.outputFolderPath) || DEFAULT_OUTPUT_FOLDER_PATH;
  const savedUse = localStorage.getItem(OD_KEYS.use);
  $("useOneDriveYearbook").checked = savedUse == null ? true : savedUse === "1";
  if ($("saveDiaryToOneDrive")) {
    const savedSaveDiary = localStorage.getItem(OD_KEYS.saveDiary);
    $("saveDiaryToOneDrive").checked = savedSaveDiary == null ? true : savedSaveDiary === "1";
  }
  if ($("createMaintenanceRecord")) {
    const saved = localStorage.getItem(OD_KEYS.saveMaintenance);
    $("createMaintenanceRecord").checked = saved == null ? true : saved === "1";
  }
  if ($("initialMaintenancePlacePreset")) $("initialMaintenancePlacePreset").value = localStorage.getItem(OD_KEYS.initialMaintenancePlace) || "事務所";
  if ($("initialMaintenancePlaceCustom")) $("initialMaintenancePlaceCustom").value = localStorage.getItem(OD_KEYS.initialMaintenancePlaceCustom) || "";
  if ($("maintenanceEngineerOverride")) $("maintenanceEngineerOverride").value = localStorage.getItem(OD_KEYS.maintenanceEngineer) || "";
  if ($("maintenanceRemarks")) $("maintenanceRemarks").value = localStorage.getItem(OD_KEYS.maintenanceRemarks) || "";
  if ($("downloadMaintenanceRecord")) {
    const saved = localStorage.getItem(OD_KEYS.downloadMaintenance);
    $("downloadMaintenanceRecord").checked = saved == null ? false : saved === "1";
  }
}
function saveOneDriveUiSettings() {
  localStorage.setItem(OD_KEYS.clientId, $("msClientId").value.trim());
  localStorage.setItem(OD_KEYS.tenant, $("msTenant").value.trim());
  if ($("oneDriveYearbookShareUrl")) localStorage.setItem(OD_KEYS.shareUrl, $("oneDriveYearbookShareUrl").value.trim());
  if ($("oneDriveYearbookDriveId")) localStorage.setItem(OD_KEYS.driveId, $("oneDriveYearbookDriveId").value.trim());
  if ($("oneDriveYearbookItemId")) localStorage.setItem(OD_KEYS.itemId, $("oneDriveYearbookItemId").value.trim());
  localStorage.setItem(OD_KEYS.path, $("oneDriveYearbookPath").value.trim() || DEFAULT_YEARBOOK_PATH);
  localStorage.setItem(OD_KEYS.use, $("useOneDriveYearbook").checked ? "1" : "0");
  if ($("oneDriveOutputFolderShareUrl")) localStorage.setItem(OD_KEYS.outputFolderShareUrl, $("oneDriveOutputFolderShareUrl").value.trim());
  if ($("oneDriveOutputFolderPath")) localStorage.setItem(OD_KEYS.outputFolderPath, $("oneDriveOutputFolderPath").value.trim() || DEFAULT_OUTPUT_FOLDER_PATH);
  if ($("saveDiaryToOneDrive")) localStorage.setItem(OD_KEYS.saveDiary, $("saveDiaryToOneDrive").checked ? "1" : "0");
  if ($("createMaintenanceRecord")) localStorage.setItem(OD_KEYS.saveMaintenance, $("createMaintenanceRecord").checked ? "1" : "0");
  if ($("initialMaintenancePlacePreset")) localStorage.setItem(OD_KEYS.initialMaintenancePlace, $("initialMaintenancePlacePreset").value);
  if ($("initialMaintenancePlaceCustom")) localStorage.setItem(OD_KEYS.initialMaintenancePlaceCustom, $("initialMaintenancePlaceCustom").value.trim());
  if ($("maintenanceEngineerOverride")) localStorage.setItem(OD_KEYS.maintenanceEngineer, $("maintenanceEngineerOverride").value.trim());
  if ($("maintenanceRemarks")) localStorage.setItem(OD_KEYS.maintenanceRemarks, $("maintenanceRemarks").value.trim());
  if ($("downloadMaintenanceRecord")) localStorage.setItem(OD_KEYS.downloadMaintenance, $("downloadMaintenanceRecord").checked ? "1" : "0");
  const diarySaveText = $("saveDiaryToOneDrive")?.checked ? "飛行日誌のOneDrive保存も有効です。" : "飛行日誌のOneDrive保存は無効です。";
  const maintenanceText = $("createMaintenanceRecord")?.checked ? "整備点検記録の自動作成も有効です。" : "整備点検記録の自動作成は無効です。";
  setOneDriveStatus((getOneDriveShareUrl() ? "OneDrive設定を保存しました。共有リンクの年度管理ブックを使います。" : "OneDrive設定を保存しました。自分のOneDriveパスを使います。") + " " + diarySaveText + " " + maintenanceText, "ok");
}
function getOneDriveTenant() {
  const t = ($("msTenant")?.value || "").trim();
  return t || "organizations";
}
function getOneDrivePath() {
  return ($("oneDriveYearbookPath")?.value || "").trim() || DEFAULT_YEARBOOK_PATH;
}
function getOneDriveShareUrl() {
  return ($("oneDriveYearbookShareUrl")?.value || "").trim();
}
function getOneDriveYearbookDirectIds() {
  const driveId = ($("oneDriveYearbookDriveId")?.value || "").trim();
  const itemId = ($("oneDriveYearbookItemId")?.value || "").trim();
  return driveId && itemId ? { driveId, itemId } : null;
}
function setOneDriveYearbookDirectIds(driveId, itemId) {
  if ($("oneDriveYearbookDriveId")) $("oneDriveYearbookDriveId").value = driveId || "";
  if ($("oneDriveYearbookItemId")) $("oneDriveYearbookItemId").value = itemId || "";
  if (driveId) localStorage.setItem(OD_KEYS.driveId, driveId);
  if (itemId) localStorage.setItem(OD_KEYS.itemId, itemId);
}
function getYearbookLocationLabel() {
  const direct = getOneDriveYearbookDirectIds();
  if (direct) return "Drive ID / Item ID指定の年度管理ブック";
  const shared = getOneDriveShareUrl();
  return shared ? "共有リンクの年度管理ブック" : getOneDrivePath();
}

const MSAL_SCRIPT_URLS = [
  "lib/msal-browser.min.js",
  "https://cdn.jsdelivr.net/npm/@azure/msal-browser@2.38.3/lib/msal-browser.min.js",
  "https://unpkg.com/@azure/msal-browser@2.38.3/lib/msal-browser.min.js",
  "https://alcdn.msauth.net/browser/2.38.3/js/msal-browser.min.js"
];
let msalLoadPromise = null;
function loadScriptWithTimeout(src, timeoutMs = 9000) {
  return new Promise((resolve, reject) => {
    const existing = Array.from(document.scripts).find(sc => sc.src === src);
    if (existing && existing.dataset.loaded === "1") return resolve(src);
    const script = existing || document.createElement("script");
    let done = false;
    const timer = setTimeout(() => {
      if (done) return;
      done = true;
      reject(new Error(`読み込みタイムアウト: ${src}`));
    }, timeoutMs);
    script.onload = () => {
      if (done) return;
      done = true;
      clearTimeout(timer);
      script.dataset.loaded = "1";
      resolve(src);
    };
    script.onerror = () => {
      if (done) return;
      done = true;
      clearTimeout(timer);
      reject(new Error(`読み込み失敗: ${src}`));
    };
    if (!existing) {
      script.src = src;
      script.async = true;
      document.head.appendChild(script);
    }
  });
}
async function ensureMsalLoaded() {
  if (typeof msal !== "undefined") return;
  if (msalLoadPromise) return msalLoadPromise;
  msalLoadPromise = (async () => {
    const errors = [];
    for (const url of MSAL_SCRIPT_URLS) {
      try {
        setOneDriveStatus(`MSAL.jsを読み込み中: ${url}`, "warn");
        await loadScriptWithTimeout(url);
        if (typeof msal !== "undefined") {
          setOneDriveStatus(`MSAL.jsを読み込みました: ${url}`, "ok");
          return;
        }
        errors.push(`${url}: 読み込み後もmsalが見つかりません`);
      } catch (e) {
        errors.push(e.message);
      }
    }
    throw new Error("MSAL.jsを読み込めませんでした。社内ネットワークで外部CDNがブロックされている可能性があります。同じフォルダに msal-browser.min.js を置くか、別回線で再試行してください。詳細: " + errors.join(" / "));
  })();
  return msalLoadPromise;
}

function makeMsalConfigKey() {
  return `${($("msClientId")?.value || "").trim()}|${getOneDriveTenant()}|${location.origin}${location.pathname}`;
}
async function ensureMsalApp() {
  await ensureMsalLoaded();
  const clientId = ($("msClientId")?.value || "").trim();
  if (!clientId) throw new Error("Microsoft Entra Client IDを入力してください。");
  const key = makeMsalConfigKey();
  if (msalApp && msalConfigKey === key) return msalApp;
  msalConfigKey = key;
  msalApp = new msal.PublicClientApplication({
    auth: {
      clientId,
      authority: `https://login.microsoftonline.com/${getOneDriveTenant()}`,
      redirectUri: `${location.origin}${location.pathname}`
    },
    cache: {
      cacheLocation: "localStorage",
      storeAuthStateInCookie: false
    }
  });
  const accounts = msalApp.getAllAccounts();
  msalAccount = accounts[0] || null;
  if (msalAccount) msalApp.setActiveAccount(msalAccount);
  return msalApp;
}
async function loginMicrosoft() {
  try {
    const app = await ensureMsalApp();
    const result = await app.loginPopup({ scopes: GRAPH_SCOPES, prompt: "select_account" });
    msalAccount = result.account;
    app.setActiveAccount(msalAccount);
    setOneDriveStatus(`ログインしました：${msalAccount?.username || "会社アカウント"}`, "ok");
  } catch (e) {
    console.error(e);
    setOneDriveStatus("Microsoftログインに失敗しました: " + e.message, "err");
  }
}
async function logoutMicrosoft() {
  try {
    const app = await ensureMsalApp();
    const account = msalAccount || app.getActiveAccount() || app.getAllAccounts()[0];
    if (account) await app.logoutPopup({ account });
    msalAccount = null;
    setOneDriveStatus("ログアウトしました。", "ok");
  } catch (e) {
    console.error(e);
    setOneDriveStatus("ログアウトに失敗しました: " + e.message, "err");
  }
}
async function acquireGraphToken() {
  const app = await ensureMsalApp();
  let account = msalAccount || app.getActiveAccount() || app.getAllAccounts()[0] || null;
  if (!account) {
    const login = await app.loginPopup({ scopes: GRAPH_SCOPES, prompt: "select_account" });
    account = login.account;
    msalAccount = account;
    app.setActiveAccount(account);
  }
  try {
    const token = await app.acquireTokenSilent({ scopes: GRAPH_SCOPES, account });
    return token.accessToken;
  } catch (silentError) {
    const token = await app.acquireTokenPopup({ scopes: GRAPH_SCOPES, account });
    msalAccount = token.account || account;
    return token.accessToken;
  }
}
function encodeOneDrivePath(path) {
  return String(path || "").split("/").filter(Boolean).map(part => encodeURIComponent(part)).join("/");
}
function normalizeSharingUrlCandidate(url) {
  const raw = String(url || "").trim();
  if (!raw) return "";
  try {
    const u = new URL(raw);
    // OneDrive/SharePoint の共有リンク末尾に付く ?e=xxxx などの一時クエリは、
    // Graph /shares で 308 Redirect の原因になることがあるため解決時だけ除外する。
    u.search = "";
    u.hash = "";
    return u.toString();
  } catch (_) {
    return raw.split("#")[0].split("?")[0];
  }
}
function buildSharingUrlCandidates(url) {
  const raw = String(url || "").trim();
  const clean = normalizeSharingUrlCandidate(raw);
  const list = [];
  if (clean) list.push(clean);
  if (raw && raw !== clean) list.push(raw);
  // 末尾スラッシュ違いも環境によって解決結果が変わるため候補化する。
  const more = [];
  for (const v of list) {
    if (v.endsWith("/")) more.push(v.slice(0, -1));
    else more.push(v + "/");
  }
  return Array.from(new Set([...list, ...more].filter(Boolean)));
}
function encodeSharingUrlToToken(url) {
  const bytes = new TextEncoder().encode(String(url || ""));
  let binary = "";
  bytes.forEach(b => binary += String.fromCharCode(b));
  return "u!" + btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}
const sharedDriveItemCaches = new Map();
function graphErrorDetail(url, status, body, statusText) {
  const shortUrl = String(url || "").replace(/^https:\/\/graph\.microsoft\.com\/v1\.0\//, "graph:/");
  const msg = body || statusText || "";
  return `Graph API ${status}: ${msg} [${shortUrl}]`;
}
async function graphFetch(url, options = {}, redirectDepth = 0) {
  const token = await acquireGraphToken();
  const headers = new Headers(options.headers || {});
  headers.set("Authorization", `Bearer ${token}`);
  const res = await fetch(url, { ...options, headers });

  // SharePoint / OneDrive 共有リンクでは、受信者側から見ると remoteItem になり、
  // 一部環境でGraphが 308 Redirect を返すことがある。
  // Location が取れる場合だけ最大3回まで手動追従する。
  if ([301, 302, 303, 307, 308].includes(res.status)) {
    const location = res.headers.get("Location") || res.headers.get("location");
    if (location && redirectDepth < 3) {
      const followHeaders = new Headers(options.headers || {});
      if (String(location).startsWith(GRAPH_ROOT)) {
        followHeaders.set("Authorization", `Bearer ${token}`);
      }
      const followOptions = { ...options, headers: followHeaders };
      // 303はGETへ変えるのがHTTP仕様。308/307はメソッド維持。
      if (res.status === 303) {
        followOptions.method = "GET";
        delete followOptions.body;
      }
      const followRes = await fetch(location, followOptions);
      if (followRes.ok) return followRes;
      let followBody = "";
      try { followBody = await followRes.text(); } catch (_) {}
      throw new Error(graphErrorDetail(location, followRes.status, followBody, followRes.statusText));
    }
  }

  if (!res.ok) {
    let body = "";
    try { body = await res.text(); } catch (_) {}
    throw new Error(graphErrorDetail(url, res.status, body, res.statusText));
  }
  return res;
}
async function resolveSharedDriveItemFromUrl(sourceUrl, label = "共有リンク") {
  const originalUrl = String(sourceUrl || "").trim();
  if (!originalUrl) return null;

  const cached = sharedDriveItemCaches.get(originalUrl);
  if (cached?.driveId && cached?.itemId) return cached;

  const candidates = buildSharingUrlCandidates(originalUrl);
  let lastError = null;

  for (const candidateUrl of candidates) {
    try {
      const candidateCache = sharedDriveItemCaches.get(candidateUrl);
      if (candidateCache?.driveId && candidateCache?.itemId) {
        sharedDriveItemCaches.set(originalUrl, candidateCache);
        return candidateCache;
      }

      const shareToken = encodeSharingUrlToToken(candidateUrl);
      const apiUrl = `${GRAPH_ROOT}/shares/${shareToken}/driveItem?$select=id,name,webUrl,parentReference,folder,file,remoteItem`;
      const res = await graphFetch(apiUrl, { method: "GET", headers: { "Prefer": "redeemSharingLinkIfNecessary" } });
      const item = await res.json();

      // 重要：共有リンクを「他のユーザー」が開くと、GraphのdriveItemは remoteItem として返ることがある。
      // その場合は item.id ではなく remoteItem.id / remoteItem.parentReference.driveId を使わないと、
      // 後続の /content や /workbook が 308 Redirect になる環境がある。
      const remote = item?.remoteItem || null;
      const driveId = remote?.parentReference?.driveId || item?.parentReference?.driveId;
      const itemId = remote?.id || item?.id;
      const name = remote?.name || item?.name || "";
      const webUrl = remote?.webUrl || item?.webUrl || "";
      const isFolder = Boolean(remote?.folder || item?.folder);
      const isFile = Boolean(remote?.file || item?.file);

      if (!driveId || !itemId) {
        throw new Error(`${label}から driveId / itemId を取得できませんでした。リンクの権限を確認してください。`);
      }

      const resolved = {
        sourceUrl: originalUrl,
        resolvedShareUrl: candidateUrl,
        driveId,
        itemId,
        name,
        isFolder,
        isFile,
        webUrl,
        usedRemoteItem: Boolean(remote)
      };

      sharedDriveItemCaches.set(originalUrl, resolved);
      sharedDriveItemCaches.set(candidateUrl, resolved);
      return resolved;
    } catch (e) {
      lastError = e;
      // ?e=付き共有リンク等で /shares が308になる場合があるため、候補URLを続けて試す。
      console.warn(`${label}の解決候補で失敗:`, candidateUrl, e);
    }
  }

  throw new Error(
    `${label}の解決に失敗しました。共有リンクを作り直すか、リンク末尾の ?e=... を除いたURLで試してください。` +
    (lastError ? ` 詳細: ${lastError.message}` : "")
  );
}
async function resolveSharedDriveItem() {
  const direct = getOneDriveYearbookDirectIds();
  if (direct) {
    return {
      sourceUrl: "direct-id",
      driveId: direct.driveId,
      itemId: direct.itemId,
      name: "年度管理ブック",
      isFile: true,
      isFolder: false,
      directId: true
    };
  }
  return resolveSharedDriveItemFromUrl(getOneDriveShareUrl(), "年度管理ブックの共有リンク");
}
async function getYearbookContentUrl() {
  const shared = await resolveSharedDriveItem();
  if (shared) return `${GRAPH_ROOT}/drives/${shared.driveId}/items/${shared.itemId}/content`;
  return `${GRAPH_ROOT}/me/drive/root:/${encodeOneDrivePath(getOneDrivePath())}:/content`;
}
async function downloadDriveItemContentBlob(itemBaseUrl, label = "OneDriveファイル") {
  // /content はGraph側でリダイレクトされることがあり、環境によっては308になる。
  // まず driveItem の @microsoft.graph.downloadUrl を取得し、その一時URLから直接ダウンロードする。
  try {
    const meta = await graphFetchJson(`${itemBaseUrl}?$select=id,name,file,%40microsoft.graph.downloadUrl`, { method: "GET" });
    const downloadUrl = meta && meta["@microsoft.graph.downloadUrl"];
    if (downloadUrl) {
      const res = await fetch(downloadUrl);
      if (!res.ok) {
        let body = "";
        try { body = await res.text(); } catch (_) {}
        throw new Error(`${label}のダウンロードに失敗しました: ${res.status} ${body || res.statusText}`);
      }
      return await res.blob();
    }
  } catch (e) {
    console.warn(`${label}のdownloadUrl取得に失敗したため/contentへfallbackします:`, e);
  }

  const res = await graphFetch(`${itemBaseUrl}/content`, { method: "GET" });
  return await res.blob();
}

async function downloadYearbookFromOneDrive() {
  const baseUrl = await getYearbookItemBaseUrl();
  const blob = await downloadDriveItemContentBlob(baseUrl, "年度管理ブック");
  return new Blob([blob], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
}
async function getYearbookItemBaseUrl() {
  const shared = await resolveSharedDriveItem();
  if (shared) return `${GRAPH_ROOT}/drives/${shared.driveId}/items/${shared.itemId}`;
  return `${GRAPH_ROOT}/me/drive/root:/${encodeOneDrivePath(getOneDrivePath())}:`;
}
function escapeGraphWorkbookAddress(addr) {
  return String(addr || "").replace(/'/g, "''");
}
async function updateYearbookCellInOneDrive(sheetName, targetAddr, value) {
  const baseUrl = await getYearbookItemBaseUrl();
  const sessionRes = await graphFetch(`${baseUrl}/workbook/createSession`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ persistChanges: true })
  });
  const session = await sessionRes.json();
  const sessionId = session.id;
  const headers = {
    "Content-Type": "application/json",
    "Workbook-Session-Id": sessionId
  };
  const sheetSegment = encodeURIComponent(sheetName);
  const address = escapeGraphWorkbookAddress(targetAddr);
  try {
    await graphFetch(`${baseUrl}/workbook/worksheets/${sheetSegment}/range(address='${address}')`, {
      method: "PATCH",
      headers,
      body: JSON.stringify({ values: [[value]] })
    });
  } finally {
    try {
      await graphFetch(`${baseUrl}/workbook/closeSession`, {
        method: "POST",
        headers: { "Workbook-Session-Id": sessionId }
      });
    } catch (e) {
      console.warn("Workbook session close failed", e);
    }
  }
}
async function uploadYearbookToOneDrive(blob, yearbookResult = null) {
  // 旧方式の丸ごと上書きは、Excelを開いているだけで 423 Locked が出やすい。
  // 会社アカウント版ではExcel APIで対象セルだけ更新する。
  if (yearbookResult?.sheetName && yearbookResult?.targetAddr && Number.isFinite(Number(yearbookResult.dayHours))) {
    await updateYearbookCellInOneDrive(yearbookResult.sheetName, yearbookResult.targetAddr, Number(yearbookResult.dayHours));
    return;
  }
  const contentUrl = await getYearbookContentUrl();
  await graphFetch(contentUrl, {
    method: "PUT",
    headers: { "Content-Type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" },
    body: blob
  });
}
function shouldUseOneDriveYearbook() {
  return Boolean($("useOneDriveYearbook")?.checked && ($("msClientId")?.value || "").trim());
}
function getDiaryOutputFolderShareUrl() {
  return ($("oneDriveOutputFolderShareUrl")?.value || "").trim();
}
function getDiaryOutputFolderPath() {
  return ($("oneDriveOutputFolderPath")?.value || "").trim() || DEFAULT_OUTPUT_FOLDER_PATH;
}
function shouldSaveDiaryToOneDrive() {
  return Boolean($("saveDiaryToOneDrive")?.checked && ($("msClientId")?.value || "").trim());
}
function sanitizeFileNamePart(value, fallback = "unknown") {
  let s = String(value || "").trim();
  if (!s) s = fallback;
  s = s.replace(/[\/:*?"<>|#%&{}~]/g, "_");
  s = s.replace(/\s+/g, "_");
  s = s.replace(/_+/g, "_");
  if (s.length > 80) s = s.slice(0, 80);
  return s || fallback;
}
function buildDiaryOutputFileName(selectedDate, registrationId, vehicleName) {
  const datePart = sanitizeFileNamePart(selectedDate, "date");
  const regPart = sanitizeFileNamePart(registrationId, "registration");
  const vehiclePart = sanitizeFileNamePart(vehicleName, "vehicle");
  return `${datePart}_飛行日誌_${regPart}_${vehiclePart}.xlsx`;
}
function buildDiaryOutputSubfolderName(registrationId, vehicleName) {
  const regPart = sanitizeFileNamePart(registrationId, "registration");
  const vehiclePart = sanitizeFileNamePart(vehicleName, "vehicle");
  return `${regPart}_${vehiclePart}`;
}
async function graphFetchJson(url, options = {}) {
  const res = await graphFetch(url, options);
  return await res.json();
}
async function ensureChildFolder(driveId, parentItemId, folderName) {
  const safeName = sanitizeFileNamePart(folderName, "folder");
  const createUrl = `${GRAPH_ROOT}/drives/${driveId}/items/${parentItemId}/children`;
  try {
    return await graphFetchJson(createUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: safeName,
        folder: {},
        "@microsoft.graph.conflictBehavior": "fail"
      })
    });
  } catch (e) {
    // 既に同名フォルダがある場合は、そのフォルダを取得して使う。
    if (!String(e.message || e).includes("409")) throw e;
    const listUrl = `${GRAPH_ROOT}/drives/${driveId}/items/${parentItemId}/children?$select=id,name,folder&$top=999`;
    const data = await graphFetchJson(listUrl, { method: "GET" });
    const found = (data.value || []).find(item => item.name === safeName && item.folder);
    if (!found) throw new Error(`同名の項目がありますがフォルダとして取得できませんでした：${safeName}`);
    return found;
  }
}
async function resolveMyDriveFolderByPath(folderPath) {
  const encoded = encodeOneDrivePath(folderPath);
  const url = `${GRAPH_ROOT}/me/drive/root:/${encoded}:?$select=id,name,parentReference,folder`;
  const folder = await graphFetchJson(url, { method: "GET" });
  if (!folder.folder) throw new Error(`保存先パスはフォルダを指定してください：${folderPath}`);
  const driveId = folder?.parentReference?.driveId;
  if (!driveId || !folder.id) throw new Error(`保存先フォルダのdriveId / itemIdを取得できませんでした：${folderPath}`);
  return { driveId, itemId: folder.id, name: folder.name || "", isFolder: true };
}
async function uploadDiaryToOneDrive(blob, filename, registrationId, vehicleName) {
  const subfolderName = buildDiaryOutputSubfolderName(registrationId, vehicleName);
  const folderShareUrl = getDiaryOutputFolderShareUrl();

  if (folderShareUrl) {
    const baseFolder = await resolveSharedDriveItemFromUrl(folderShareUrl, "飛行日誌保存先フォルダの共有リンク");
    if (!baseFolder.isFolder) throw new Error("飛行日誌保存先の共有リンクは、Excelファイルではなくフォルダの共有リンクを指定してください。");

    const targetFolder = await ensureChildFolder(baseFolder.driveId, baseFolder.itemId, subfolderName);
    const uploadUrl = `${GRAPH_ROOT}/drives/${baseFolder.driveId}/items/${targetFolder.id}:/${encodeURIComponent(filename)}:/content`;
    await graphFetch(uploadUrl, {
      method: "PUT",
      headers: { "Content-Type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" },
      body: blob
    });
    return `共有フォルダ/${subfolderName}/${filename}`;
  }

  const baseFolder = await resolveMyDriveFolderByPath(getDiaryOutputFolderPath());
  const targetFolder = await ensureChildFolder(baseFolder.driveId, baseFolder.itemId, subfolderName);
  const uploadUrl = `${GRAPH_ROOT}/drives/${baseFolder.driveId}/items/${targetFolder.id}:/${encodeURIComponent(filename)}:/content`;
  await graphFetch(uploadUrl, {
    method: "PUT",
    headers: { "Content-Type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" },
    body: blob
  });
  return `${getDiaryOutputFolderPath()}/${subfolderName}/${filename}`;
}
async function trySaveDiaryToOneDrive(blob, filename, registrationId, vehicleName) {
  if (!shouldSaveDiaryToOneDrive()) return { ok: false, message: "" };
  try {
    const savedPath = await uploadDiaryToOneDrive(blob, filename, registrationId, vehicleName);
    return { ok: true, message: ` / 飛行日誌OneDrive保存：${savedPath}` };
  } catch (e) {
    console.error(e);
    return { ok: false, message: ` / 飛行日誌OneDrive保存失敗：${e.message}` };
  }
}

function shouldCreateMaintenanceRecord() {
  return Boolean($("createMaintenanceRecord")?.checked);
}
function shouldDownloadMaintenanceRecord() {
  // OneDrive保存が有効な場合、整備点検記録は既存ファイルを読み書きするのが基本。
  // ローカル保存が必要なときだけチェックONにする。
  return Boolean($("downloadMaintenanceRecord")?.checked || !shouldSaveDiaryToOneDrive());
}
function getInitialMaintenancePlace() {
  const preset = ($("initialMaintenancePlacePreset")?.value || "事務所").trim();
  if (preset === "custom") return ($("initialMaintenancePlaceCustom")?.value || "").trim() || "事務所";
  return preset || "事務所";
}
function getMaintenanceEngineer(pilotName) {
  return ($("maintenanceEngineerOverride")?.value || "").trim() || pilotName || "";
}
function getMaintenanceRemarks() {
  return ($("maintenanceRemarks")?.value || "").trim();
}
function buildMaintenanceOutputFileName(registrationId, vehicleName) {
  const regPart = sanitizeFileNamePart(registrationId, "registration");
  const vehiclePart = sanitizeFileNamePart(vehicleName, "vehicle");
  return `整備点検記録_${regPart}_${vehiclePart}.xlsx`;
}
function formatHoursJa(hours) {
  const totalMinutes = Math.round(Number(hours || 0) * 60);
  const h = Math.floor(totalMinutes / 60);
  const m = totalMinutes % 60;
  return `${h}時間${String(m).padStart(2, "0")}分`;
}
async function getOutputTargetFolder(registrationId, vehicleName) {
  const subfolderName = buildDiaryOutputSubfolderName(registrationId, vehicleName);
  const folderShareUrl = getDiaryOutputFolderShareUrl();
  if (folderShareUrl) {
    const baseFolder = await resolveSharedDriveItemFromUrl(folderShareUrl, "飛行日誌保存先フォルダの共有リンク");
    if (!baseFolder.isFolder) throw new Error("飛行日誌保存先の共有リンクは、Excelファイルではなくフォルダの共有リンクを指定してください。");
    const targetFolder = await ensureChildFolder(baseFolder.driveId, baseFolder.itemId, subfolderName);
    return { driveId: baseFolder.driveId, itemId: targetFolder.id, label: `共有フォルダ/${subfolderName}` };
  }
  const baseFolder = await resolveMyDriveFolderByPath(getDiaryOutputFolderPath());
  const targetFolder = await ensureChildFolder(baseFolder.driveId, baseFolder.itemId, subfolderName);
  return { driveId: baseFolder.driveId, itemId: targetFolder.id, label: `${getDiaryOutputFolderPath()}/${subfolderName}` };
}
async function uploadWorkbookToOutputFolder(blob, filename, registrationId, vehicleName) {
  const folder = await getOutputTargetFolder(registrationId, vehicleName);
  const uploadUrl = `${GRAPH_ROOT}/drives/${folder.driveId}/items/${folder.itemId}:/${encodeURIComponent(filename)}:/content`;
  await graphFetch(uploadUrl, {
    method: "PUT",
    headers: { "Content-Type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" },
    body: blob
  });
  return `${folder.label}/${filename}`;
}
async function downloadWorkbookFromOutputFolder(filename, registrationId, vehicleName) {
  const folder = await getOutputTargetFolder(registrationId, vehicleName);
  const itemBaseUrl = `${GRAPH_ROOT}/drives/${folder.driveId}/items/${folder.itemId}:/${encodeURIComponent(filename)}:`;
  return await downloadDriveItemContentBlob(itemBaseUrl, filename);
}
async function fetchMaintenanceTemplateBlob() {
  const res = await fetch("templates/整備点検記録.xlsx");
  if (!res.ok) throw new Error("整備点検記録テンプレートを読み込めませんでした。templates/整備点検記録.xlsx を確認してください。");
  return await res.blob();
}
async function getMaintenanceBaseBlob(filename, registrationId, vehicleName) {
  if (shouldSaveDiaryToOneDrive()) {
    try {
      const blob = await downloadWorkbookFromOutputFolder(filename, registrationId, vehicleName);
      return { blob, isTemplate: false, source: "onedrive" };
    } catch (e) {
      const msg = String(e.message || e);
      if (msg.includes("Graph API 404")) {
        console.info("整備点検記録の既存ファイルがないため、テンプレートから新規作成します。", filename);
      } else {
        console.warn("既存の整備点検記録を取得できなかったため、テンプレートから作成します:", e);
      }
    }
  }
  return { blob: await fetchMaintenanceTemplateBlob(), isTemplate: true, source: "template" };
}
function maintenanceRecordRows() { return [6,8,10,12,14,16,18,20,22]; }
function clearMaintenanceEntry(doc, r) {
  ["A","C","E","K","O","R","T"].forEach(c => clearCell(doc, `${c}${r}`));
}
function maintenanceCellValue(doc, sharedStrings, addr) {
  return String(getCellDisplayValue(doc, addr, sharedStrings) || getCellRawValue(doc, addr) || "").trim();
}
function inspectMaintenanceRecords(zip, doc, sharedStrings) {
  const rows = maintenanceRecordRows();
  const usedRows = [];
  let initialDone = false;
  const thresholds = new Set();
  for (const r of rows) {
    const vals = ["A","C","E","K","O","R","T"].map(c => maintenanceCellValue(doc, sharedStrings, `${c}${r}`));
    const joined = vals.join(" ");
    if (joined.trim()) usedRows.push(r);
    if (joined.includes("初回")) initialDone = true;
    const cVal = vals[1];
    const m = cVal.match(/(\d+)\s*時間/);
    if (m) {
      const h = Number(m[1]);
      if (Number.isFinite(h) && h >= 20 && h % 20 === 0) thresholds.add(h);
    }
    const textM = joined.match(/(\d+)\s*時間/);
    if (textM) {
      const h = Number(textM[1]);
      if (Number.isFinite(h) && h >= 20 && h % 20 === 0) thresholds.add(h);
    }
  }
  return { usedRows, initialDone, thresholds };
}
function firstEmptyMaintenanceRow(doc, sharedStrings) {
  for (const r of maintenanceRecordRows()) {
    const vals = ["A","C","E","K","O","R","T"].map(c => maintenanceCellValue(doc, sharedStrings, `${c}${r}`));
    if (!vals.join("").trim()) return r;
  }
  return null;
}
function setMaintenanceEntry(doc, row, entry) {
  setCellText(doc, `A${row}`, entry.date || "", true);
  setCellText(doc, `C${row}`, entry.totalFlightTime || "", true);
  setCellText(doc, `E${row}`, entry.detail || "", true);
  setCellText(doc, `K${row}`, entry.reason || "", true);
  setCellText(doc, `O${row}`, entry.place || "", true);
  setCellText(doc, `R${row}`, entry.engineer || "", true);
  setCellText(doc, `T${row}`, entry.remarks || "", true);
}
function buildMaintenanceEntries(flags, selectedDate, previousHours, pilotName) {
  const entries = [];
  const dateText = selectedDate.replaceAll("-", "/");
  const engineer = getMaintenanceEngineer(pilotName);
  const remarks = getMaintenanceRemarks();
  if (!flags.initialDone) {
    entries.push({
      kind: "initial",
      date: dateText,
      totalFlightTime: "0時間00分",
      detail: "初回点検を実施\n機体外観・各機能の点検を実施",
      reason: "運用開始時の初回点検",
      place: getInitialMaintenancePlace(),
      engineer,
      remarks
    });
  }
  const prev = Number(previousHours || 0);
  const latestThreshold = Math.floor(prev / 20) * 20;
  if (latestThreshold >= 20 && !flags.thresholds.has(latestThreshold)) {
    entries.push({
      kind: "periodic",
      threshold: latestThreshold,
      date: dateText,
      totalFlightTime: formatHoursJa(latestThreshold),
      detail: "20時間毎の定期点検を実施\n機体外観・各機能の点検を実施",
      reason: `${latestThreshold}時間到達後の定期点検`,
      place: "現地",
      engineer,
      remarks
    });
  }
  return entries;
}
async function createMaintenanceRecordBlob(registrationId, vehicleName, selectedDate, previousHours, pilotName) {
  const filename = buildMaintenanceOutputFileName(registrationId, vehicleName);
  const base = await getMaintenanceBaseBlob(filename, registrationId, vehicleName);
  const zip = await JSZip.loadAsync(await base.blob.arrayBuffer());
  const sharedStrings = parseSharedStrings(zip.file("xl/sharedStrings.xml") ? await zip.file("xl/sharedStrings.xml").async("string") : "");
  const info = await getWorkbookSheetInfo(zip);
  const sheetXml = await zip.file(info.path).async("string");
  const doc = parseXml(sheetXml);
  const styleResult = prepareReadableStyles(await zip.file("xl/styles.xml").async("string"));
  outputStyleMap = styleResult.styleMap;
  zip.file("xl/styles.xml", styleResult.xml);
  setCellText(doc, "E1", registrationId, true);
  setCellText(doc, "S2", "（NR.　1　）", true);
  if (base.isTemplate) {
    maintenanceRecordRows().forEach(r => clearMaintenanceEntry(doc, r));
  }
  const flags = inspectMaintenanceRecords(zip, doc, sharedStrings);
  const entries = buildMaintenanceEntries(flags, selectedDate, previousHours, pilotName);
  if (!entries.length) {
    outputStyleMap = null;
    return { blob: null, filename, entries: [], baseSource: base.source, message: base.isTemplate ? "整備点検記録：新規作成対象なし" : "整備点検記録：既存ファイル確認済み・追記対象なし" };
  }
  for (const entry of entries) {
    const row = firstEmptyMaintenanceRow(doc, sharedStrings);
    if (!row) throw new Error("整備点検記録の空き行がありません。次の版で複数ページ対応が必要です。");
    clearMaintenanceEntry(doc, row);
    setMaintenanceEntry(doc, row, entry);
    // 次の入力のためにsharedStringsではなくdoc上のinlineStrを読めるようにする
    sharedStrings.length = sharedStrings.length;
  }
  zip.file(info.path, serializeXml(doc));
  const blob = await zip.generateAsync({ type:"blob", mimeType:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
  outputStyleMap = null;
  const action = base.isTemplate ? "新規作成" : "既存ファイルに追記";
  const message = `整備点検記録：${action}（${entries.map(e => e.kind === "initial" ? "初回点検" : `${e.threshold}時間定期点検`).join("、")}）`;
  return { blob, filename, entries, baseSource: base.source, message };
}
async function prepareMaintenanceRecordResult(registrationId, vehicleName, selectedDate, previousHours, pilotName) {
  if (!shouldCreateMaintenanceRecord()) return { ok:false, blob:null, filename:"", message:"" };
  try {
    const result = await createMaintenanceRecordBlob(registrationId, vehicleName, selectedDate, previousHours, pilotName);
    return { ok:true, ...result };
  } catch (e) {
    console.error(e);
    return { ok:false, blob:null, filename:"", entries:[], message:`整備点検記録作成失敗：${e.message}` };
  }
}
async function savePreparedMaintenanceRecord(result, registrationId, vehicleName) {
  if (!result || !result.message) return { ok:false, message:"" };
  if (!result.blob) return { ok: result.ok !== false, message:` / ${result.message}` };
  let localMsg = "";
  if (shouldDownloadMaintenanceRecord()) {
    downloadBlob(result.blob, result.filename);
    localMsg = " / 整備点検記録ダウンロード済み";
  }
  let savedMsg = "";
  if (shouldSaveDiaryToOneDrive()) {
    try {
      const savedPath = await uploadWorkbookToOutputFolder(result.blob, result.filename, registrationId, vehicleName);
      savedMsg = ` / 整備点検記録OneDrive保存：${savedPath}`;
    } catch (e) {
      console.error(e);
      savedMsg = ` / 整備点検記録OneDrive保存失敗：${e.message}`;
    }
  }
  return { ok:true, message:` / ${result.message}${localMsg}${savedMsg}` };
}
async function tryCreateAndSaveMaintenanceRecord(registrationId, vehicleName, selectedDate, previousHours, pilotName) {
  const result = await prepareMaintenanceRecordResult(registrationId, vehicleName, selectedDate, previousHours, pilotName);
  return savePreparedMaintenanceRecord(result, registrationId, vehicleName);
}
function findYearbookVehicleCandidates(doc, sharedStrings, vehicleName) {
  const target = String(vehicleName || "").trim();
  if (!target) return [];
  const candidates = [];
  const rows = [...doc.getElementsByTagNameNS(NS_MAIN, "row")];
  for (const row of rows) {
    const r = Number(row.getAttribute("r"));
    if (r < 8) continue;
    const eVal = String(getCellDisplayValue(doc, `E${r}`, sharedStrings) || "").trim();
    if (eVal !== target) continue;
    const registrationId = normalizeReg(getCellDisplayValue(doc, `C${r}`, sharedStrings));
    if (!registrationId) continue;
    candidates.push({
      rowNum: r,
      registrationId,
      vehicleName: eVal,
      aircraftType: getCellDisplayValue(doc, `D${r}`, sharedStrings),
      setName: getCellDisplayValue(doc, `F${r}`, sharedStrings),
      totalHours: getCellNumber(doc, `G${r}`)
    });
  }
  return candidates;
}
async function resolveRegistrationCandidatesFromYearbook(file, vehicleName) {
  if (!file || !vehicleName) return [];
  const zip = await JSZip.loadAsync(await file.arrayBuffer());
  const sharedStrings = parseSharedStrings(zip.file("xl/sharedStrings.xml") ? await zip.file("xl/sharedStrings.xml").async("string") : "");
  const info = await getWorkbookSheetInfo(zip);
  const sheetXml = await zip.file(info.path).async("string");
  const sheetDoc = parseXml(sheetXml);
  const candidates = findYearbookVehicleCandidates(sheetDoc, sharedStrings, vehicleName);
  return candidates.map(c => ({ ...c, sheetName: info.name }));
}
function applyRegistrationCandidates(candidates, vehicleName, force = true) {
  const input = $("registrationId");
  const select = $("registrationCandidateSelect");
  const hint = $("registrationMatchHint");
  if (!select || !input) return;
  select.innerHTML = "";
  select.classList.add("hide");
  if (!candidates.length) {
    if (hint) hint.textContent = `年度管理E列で Vehicle Name「${vehicleName}」に完全一致する行がありません。登録記号を手入力してください。`;
    return;
  }
  const setInput = (reg) => { if (force || !input.value.trim()) input.value = reg; };
  if (candidates.length === 1) {
    setInput(candidates[0].registrationId);
    if (hint) hint.textContent = `年度管理E列で完全一致：${vehicleName} → C列 ${candidates[0].registrationId}（${candidates[0].sheetName}!${candidates[0].rowNum}行目）`;
    return;
  }
  select.classList.remove("hide");
  select.innerHTML = candidates.map((c, i) => `<option value="${escHtml(c.registrationId)}">${escHtml(c.registrationId)} / ${escHtml(c.aircraftType || "")}${c.setName ? ` / ${escHtml(c.setName)}` : ""} / ${c.sheetName}!${c.rowNum}行目</option>`).join("");
  select.value = candidates[0].registrationId;
  setInput(select.value);
  select.onchange = () => { input.value = select.value; saveCurrentVehicleMapping(); };
  if (hint) hint.textContent = `年度管理E列で Vehicle Name「${vehicleName}」が複数一致しました。候補から登録記号を選択してください。`;
}
async function syncRegistrationFromYearbookSource(yearbookSource, force = true) {
  const vehicleName = getSelectedVehicleName();
  if (!vehicleName || !yearbookSource) return [];
  const candidates = await resolveRegistrationCandidatesFromYearbook(yearbookSource, vehicleName);
  applyRegistrationCandidates(candidates, vehicleName, force);
  return candidates;
}

async function fetchYearbookItemByPersonalPath() {
  const url = `${GRAPH_ROOT}/me/drive/root:/${encodeOneDrivePath(getOneDrivePath())}:?$select=id,name,parentReference,webUrl,file`;
  const item = await graphFetchJson(url, { method: "GET" });
  const driveId = item?.parentReference?.driveId;
  const itemId = item?.id;
  if (!driveId || !itemId) throw new Error("個人用パスから年度管理ブックのDrive ID / Item IDを取得できませんでした。");
  return { driveId, itemId, name: item.name || "" };
}

async function captureYearbookDirectIds() {
  try {
    setOneDriveStatus("年度管理ブックのDrive ID / Item IDを取得中...", "");
    const item = await fetchYearbookItemByPersonalPath();
    setOneDriveYearbookDirectIds(item.driveId, item.itemId);
    saveOneDriveUiSettings();
    setOneDriveStatus(`年度管理IDを取得しました：${item.name || "年度管理ブック"} / Drive ID=${item.driveId} / Item ID=${item.itemId}。以後は共有リンクよりこのIDを優先します。`, "ok");
  } catch (e) {
    console.error(e);
    setOneDriveStatus("年度管理ID取得に失敗しました: " + e.message, "err");
  }
}

async function testOneDriveYearbook() {
  const selectedDate = $("targetDate").value;
  if (!selectedDate) { setOneDriveStatus("先にCSVを読み込んで転記対象日を選択してください。", "warn"); return; }
  try {
    setOneDriveStatus("OneDrive年度管理ブックを取得中...", "");
    const blob = await downloadYearbookFromOneDrive();
    await syncRegistrationFromYearbookSource(blob, true);
    const registrationId = $("registrationId").value.trim();
    if (!registrationId) { setOneDriveStatus("年度管理E列から登録記号を取得できませんでした。登録記号を手入力してください。", "warn"); return; }
    const info = await loadYearbook(blob, registrationId, selectedDate, null);
    setOneDriveStatus(`${info.message} / 書込予定セル：${info.targetAddr}`, "ok");
  } catch (e) {
    console.error(e);
    setOneDriveStatus("OneDrive年度管理の読込テストに失敗しました: " + e.message, "err");
  }
}


function csvRowKey(row) {
  const vehicle = String(row["Vehicle Name"] || "").trim();
  const flightId = String(row["Flight ID"] || "").trim();
  const takeoff = String(row["Takeoff Time"] || "").trim();
  const land = String(row["Land Time"] || "").trim();
  if (flightId) return ["id", vehicle, flightId, takeoff, land].join("|");
  return ["noid", vehicle, takeoff, land, String(row["Takeoff Latitude"] || "").trim(), String(row["Takeoff Longitude"] || "").trim(), String(row["Land Latitude"] || "").trim(), String(row["Land Longitude"] || "").trim()].join("|");
}
function updateCsvCacheStatus() {
  const el = $("csvCacheStatus");
  if (!el) return;
  if (!parsedRows.length) {
    el.textContent = "CSVキャッシュ：未読込";
    return;
  }
  const files = csvImportFiles.length;
  const vehicleCount = uniqueVehicleNames(parsedRows).length;
  const dates = [...new Set(parsedRows.map(r => r._targetDate).filter(Boolean))].length;
  const skipped = csvImportFiles.reduce((sum, f) => sum + Number(f.skipped || 0), 0);
  el.textContent = `CSVキャッシュ：${files}回読込 / ${parsedRows.length}フライト / ${vehicleCount}機体 / ${dates}日${skipped ? ` / 重複除外 ${skipped}件` : ""}`;
}
function readFileAsText(file, encoding) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = () => reject(new Error(`${file.name} を読み込めませんでした。`));
    reader.readAsText(file, encoding);
  });
}
function appendParsedRows(newRows, sourceName) {
  let added = 0;
  let skipped = 0;
  for (const row of newRows) {
    const key = csvRowKey(row);
    if (csvSeenKeys.has(key)) { skipped++; continue; }
    csvSeenKeys.add(key);
    parsedRows.push(row);
    added++;
  }
  parsedRows.sort((a, b) => (a._takeoffJst?.getTime?.() || 0) - (b._takeoffJst?.getTime?.() || 0));
  csvImportFiles.push({ name: sourceName, total: newRows.length, added, skipped });
  return { added, skipped };
}
function refreshAfterCsvChange(messageKind = "ok", customMessage = "") {
  renderPreview(parsedRows);
  updateDateSelect();
  updateCsvCacheStatus();
  $("downloadBtn").disabled = !parsedRows.length;
  const chunks = buildPageChunks(getSelectedRows());
  const vehicleCount = uniqueVehicleNames(parsedRows).length;
  const vehicleNote = vehicleCount > 1 ? ` / Vehicle Name：${vehicleCount}種類（選択可）` : (vehicleCount === 1 ? ` / Vehicle Name：${getSelectedVehicleName()}` : "");
  setStatus(customMessage || `${parsedRows.length}件をキャッシュしています${vehicleNote}。対象日と機体を選択してExcelを作成できます。選択条件のページ数：${chunks.length || 1}枚`, messageKind);
}
function clearCsvCache() {
  parsedRows = [];
  csvImportFiles = [];
  csvSeenKeys = new Set();
  if ($("csvFile")) $("csvFile").value = "";
  if ($("targetDate")) { $("targetDate").innerHTML = '<option value="">CSV読込後に選択</option>'; $("targetDate").disabled = true; }
  if ($("vehicleNameSelect")) { $("vehicleNameSelect").innerHTML = '<option value="">CSV読込後に自動表示</option>'; $("vehicleNameSelect").disabled = true; }
  if ($("registrationId")) $("registrationId").value = "";
  if ($("registrationCandidateSelect")) { $("registrationCandidateSelect").innerHTML = ""; $("registrationCandidateSelect").classList.add("hide"); }
  renderPreview([]);
  updateCsvCacheStatus();
  updatePageSelects();
  $("downloadBtn").disabled = true;
  setStatus("CSVキャッシュをクリアしました。", "ok");
}

function renderPreview(rows) {
  if (!rows.length) { $("preview").innerHTML = "<table><tbody><tr><td>データがありません。</td></tr></tbody></table>"; return; }
  const headers = ["_targetDate", ...REQUIRED_HEADERS];
  const max = Math.min(rows.length, 50);
  let html = "<table><thead><tr>" + headers.map(h => `<th>${escHtml(h === "_targetDate" ? "対象日(+9h)" : h)}</th>`).join("") + "</tr></thead><tbody>";
  for (let i = 0; i < max; i++) html += "<tr>" + headers.map(h => `<td>${escHtml(rows[i][h] || "")}</td>`).join("") + "</tr>";
  if (rows.length > max) html += `<tr><td colspan="${headers.length}">他 ${rows.length - max} 件...</td></tr>`;
  html += "</tbody></table>";
  $("preview").innerHTML = html;
}
async function readSelectedCsv() {
  const input = $("csvFile");
  const files = Array.from(input.files || []);
  if (!files.length) { setStatus("CSVを選択してください。", "warn"); return; }
  let totalAdded = 0;
  let totalSkipped = 0;
  const errorsAll = [];
  try {
    for (const file of files) {
      const text = await readFileAsText(file, $("encoding").value);
      const newRows = prepareRows(parseDelimited(text));
      const errors = validateHeaders(newRows);
      if (errors.length) {
        errorsAll.push(`${file.name}: ${errors.join(" / ")}`);
        continue;
      }
      const result = appendParsedRows(newRows, file.name);
      totalAdded += result.added;
      totalSkipped += result.skipped;
    }
    input.value = ""; // 同じファイル名でも再選択できるようにする
    if (errorsAll.length && !totalAdded) {
      $("downloadBtn").disabled = !parsedRows.length;
      refreshAfterCsvChange("err", errorsAll.join(" / "));
      return;
    }
    const msg = `${files.length}ファイルを処理しました。追加 ${totalAdded}件 / 重複除外 ${totalSkipped}件 / キャッシュ合計 ${parsedRows.length}件。` + (errorsAll.length ? ` 注意：${errorsAll.join(" / ")}` : "");
    refreshAfterCsvChange(errorsAll.length ? "warn" : "ok", msg);
  } catch (e) {
    console.error(e);
    $("downloadBtn").disabled = !parsedRows.length;
    setStatus("CSVの読み込みに失敗しました: " + e.message, "err");
  }
}
function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a"); a.href = url; a.download = filename; document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
async function createFlightDiaryBlob(selectedRows, selectedDate, previousHours, maintenanceRecordBlob = null) {
  const chunks = buildPageChunks(selectedRows);
  const pageCount = chunks.length || 1;
  const includeMaintenanceInspection = Boolean(maintenanceRecordBlob);
  const extraSheets = 1 + (includeMaintenanceInspection ? 1 : 0); // 日常点検記録 + 必要時のみ整備点検記録
  const zip = await JSZip.loadAsync(b64ToArrayBuffer(TEMPLATE_BASE64));
  const sheetTemplate = await zip.file("xl/worksheets/sheet1.xml").async("string");
  const sheetRelTemplate = await zip.file("xl/worksheets/_rels/sheet1.xml.rels").async("string");
  const styleResult = prepareReadableStyles(await zip.file("xl/styles.xml").async("string"));
  outputStyleMap = styleResult.styleMap; outputRedBoldStyleMap = styleResult.redBoldStyleMap; zip.file("xl/styles.xml", styleResult.xml);
  const options = { registrationId: $("registrationId").value.trim(), pilotName: $("pilotName").value.trim(), flightSummary:getFlightSummaryText() };
  const safetyEntries = getSafetyEntries(); const reportEntries = getReportEntries();
  const startTotalHours = Number(previousHours || 0);
  let totalHours = startTotalHours;

  for (let i = 0; i < pageCount; i++) {
    const pageNo = i + 1;
    const sheetIndex = pageNo === 1 ? 1 : pageNo + extraSheets; // sheet2は日常点検記録、sheet3は必要時のみ整備点検記録
    const doc = parseXml(sheetTemplate);
    totalHours = fillFlightSheet(doc, chunks[i] || [], pageNo, options, totalHours);
    applySafety(doc, pageNo, safetyEntries);
    applyReports(doc, pageNo, reportEntries, selectedDate);
    zip.file(`xl/worksheets/sheet${sheetIndex}.xml`, serializeXml(doc));
    if (sheetIndex > 1) zip.file(`xl/worksheets/_rels/sheet${sheetIndex}.xml.rels`, sheetRelTemplate);
  }

  // 2枚目に日常点検記録、必要時のみ3枚目に整備点検記録を自動追加
  await buildDailyInspectionSheet(zip, 2, selectedRows, selectedDate, options);
  if (includeMaintenanceInspection) await buildMaintenanceInspectionSheet(zip, 3, maintenanceRecordBlob);

  zip.file("xl/workbook.xml", updateWorkbookXml(await zip.file("xl/workbook.xml").async("string"), pageCount, true, includeMaintenanceInspection));
  zip.file("xl/_rels/workbook.xml.rels", updateWorkbookRels(await zip.file("xl/_rels/workbook.xml.rels").async("string"), pageCount, true, includeMaintenanceInspection));
  zip.file("[Content_Types].xml", updateContentTypes(await zip.file("[Content_Types].xml").async("string"), pageCount, true, includeMaintenanceInspection));
  zip.file("docProps/app.xml", updateAppXml(await zip.file("docProps/app.xml").async("string"), pageCount, true, includeMaintenanceInspection));
  const blob = await zip.generateAsync({ type:"blob", mimeType:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
  outputStyleMap = null; outputRedBoldStyleMap = null;
  const yearbookDayHours = Math.round(Math.max(0, totalHours - startTotalHours) * 100) / 100;
  return { blob, pageCount, finalTotalHours:totalHours, startTotalHours, yearbookDayHours };
}
async function downloadWorkbook() {
  if (!parsedRows.length) { setStatus("先にCSVを読み込んでください。", "warn"); return; }
  if (typeof JSZip === "undefined") { setStatus("ZIP処理ライブラリを読み込めませんでした。インターネット接続を確認して再読み込みしてください。", "err"); return; }
  const selectedDate = $("targetDate").value;
  const selectedRows = getSelectedRows();
  if (!selectedDate || !selectedRows.length) { setStatus("転記対象日を選択してください。", "warn"); return; }
  $("downloadBtn").disabled = true;
  try {
    await enrichLocations(selectedRows);

    const manualYearbookFile = $("yearbookFile").files[0] || null;
    let yearbookSource = manualYearbookFile;
    let usingOneDrive = false;

    if (shouldUseOneDriveYearbook()) {
      try {
        setStatus("OneDrive年度管理ブックを取得中...", "");
        yearbookSource = await downloadYearbookFromOneDrive();
        usingOneDrive = true;
      } catch (e) {
        console.error(e);
        if (!manualYearbookFile) throw new Error("OneDrive年度管理ブックを取得できませんでした。手動の年度管理ブックも未選択です。詳細: " + e.message);
        setStatus("OneDrive取得に失敗したため、手動選択の年度管理ブックで続行します。", "warn");
        yearbookSource = manualYearbookFile;
        usingOneDrive = false;
      }
    }

    await syncRegistrationFromYearbookSource(yearbookSource, true);
    const registrationIdForYearbook = $("registrationId").value.trim();
    if (!registrationIdForYearbook) throw new Error("年度管理E列から登録記号を取得できませんでした。登録記号を手入力してください。");
    const yearbookRead = await loadYearbook(yearbookSource, registrationIdForYearbook, selectedDate, null);
    const vehicleNameForFile = getSelectedVehicleName();
    // 整備点検記録はOneDrive内の既存ファイルを優先して追記し、
    // ダウンロード用の飛行日誌Excelには必要時だけシートとして同梱する。
    const maintenancePrepared = await prepareMaintenanceRecordResult(registrationIdForYearbook, vehicleNameForFile, selectedDate, yearbookRead.previousHours || 0, $("pilotName").value.trim());
    const diary = await createFlightDiaryBlob(selectedRows, selectedDate, yearbookRead.previousHours || 0, maintenancePrepared.blob);

    // 年度管理ブックへ書き込む値はP5:P19の差分。
    // 例：P5=7:06、P19=7:32 なら 26分 = 0.43時間。
    const dayHours = diary.yearbookDayHours;
    const yearbookResult = await loadYearbook(yearbookSource, registrationIdForYearbook, selectedDate, dayHours);

    const now = new Date();
    const stamp = `${now.getFullYear()}${pad2(now.getMonth()+1)}${pad2(now.getDate())}_${pad2(now.getHours())}${pad2(now.getMinutes())}`;
    const dateStamp = selectedDate.replaceAll("-", "");
    const diaryName = buildDiaryOutputFileName(selectedDate, registrationIdForYearbook, vehicleNameForFile);

    if (usingOneDrive && yearbookResult.updatedBlob) {
      setStatus("OneDrive年度管理ブックの対象セルを更新中...", "");
      await uploadYearbookToOneDrive(yearbookResult.updatedBlob, yearbookResult);
      downloadBlob(diary.blob, diaryName);
      const diarySave = await trySaveDiaryToOneDrive(diary.blob, diaryName, registrationIdForYearbook, vehicleNameForFile);
      const maintenance = await savePreparedMaintenanceRecord(maintenancePrepared, registrationIdForYearbook, vehicleNameForFile);
      const combinedMsg = diarySave.message + maintenance.message;
      const statusKind = combinedMsg.includes("失敗") ? "warn" : "ok";
      setStatus(`飛行日誌を作成し、OneDrive年度管理も更新しました。P5開始値：${yearbookResult.previousHours}時間 / P5:P19差分：${Math.round(dayHours*100)/100}時間 / ${yearbookResult.message}${combinedMsg}`, statusKind);
      setOneDriveStatus(`OneDriveへ保存済み：${getYearbookLocationLabel()} / ${yearbookResult.targetAddr}=${Math.round(dayHours*100)/100}${combinedMsg}`, statusKind);
    } else if (yearbookResult.updatedBlob) {
      const outZip = new JSZip();
      outZip.file(diaryName, diary.blob);
      outZip.file(`2026_飛行時間_更新済_${dateStamp}_${stamp}.xlsx`, yearbookResult.updatedBlob);
      const zipBlob = await outZip.generateAsync({ type:"blob", mimeType:"application/zip" });
      downloadBlob(zipBlob, `飛行日誌出力_${dateStamp}_${stamp}.zip`);
      const diarySave = await trySaveDiaryToOneDrive(diary.blob, diaryName, registrationIdForYearbook, vehicleNameForFile);
      const maintenance = await savePreparedMaintenanceRecord(maintenancePrepared, registrationIdForYearbook, vehicleNameForFile);
      const combinedMsg = diarySave.message + maintenance.message;
      const statusKind = combinedMsg.includes("失敗") ? "warn" : "ok";
      setStatus(`ZIPを作成しました。P5開始値：${yearbookResult.previousHours}時間 / P5:P19差分：${Math.round(dayHours*100)/100}時間 / ${yearbookResult.message}${combinedMsg}`, statusKind);
    } else {
      downloadBlob(diary.blob, diaryName);
      const diarySave = await trySaveDiaryToOneDrive(diary.blob, diaryName, registrationIdForYearbook, vehicleNameForFile);
      const maintenance = await savePreparedMaintenanceRecord(maintenancePrepared, registrationIdForYearbook, vehicleNameForFile);
      const combinedMsg = diarySave.message + maintenance.message;
      const statusKind = combinedMsg.includes("失敗") ? "warn" : "ok";
      setStatus(`Excelを作成しました：${diaryName}（${diary.pageCount}ページ / 年度管理ブックなし）${combinedMsg}`, statusKind);
    }
  } catch (e) {
    console.error(e);
    const msg = String(e.message || e);
    if (msg.includes("Graph API 423") || msg.includes("resourceLocked")) {
      setStatus("Excel作成または年度管理更新に失敗しました: 年度管理ブックまたは保存先ファイルがロック中です。Excel/ブラウザ/スマホで開いている場合は閉じて、1〜3分待ってから再実行してください。詳細: " + msg, "err");
    } else {
      setStatus("Excel作成に失敗しました: " + msg, "err");
    }
  }
  finally { outputStyleMap = null; outputRedBoldStyleMap = null; $("downloadBtn").disabled = false; }
}

function initFlightSummaryOptions() {
  const basic = $("basicSpecificFlights"); const extra = $("extraSpecificFlights");
  function itemHtml(item, index) { return `<label><input class="specific-flight" type="checkbox" data-short="${escHtml(item.short)}" ${item.default ? "checked" : ""}> <span>${escHtml(item.label)}</span></label>`; }
  basic.innerHTML = specificFlights.filter(x => x.basic).map(itemHtml).join("");
  extra.innerHTML = specificFlights.filter(x => !x.basic).map(itemHtml).join("");
}
function toggleSpecificFlights() {
  const el = $("extraSpecificFlights");
  el.classList.toggle("hide");
  $("toggleSpecificBtn").textContent = el.classList.contains("hide") ? "その他の特定飛行を表示" : "その他の特定飛行を隠す";
}
function pageOptions() {
  const chunks = buildPageChunks(getSelectedRows());
  const count = Math.max(1, chunks.length || 1);
  return Array.from({length:count}, (_, i) => `<option value="${i+1}">${i+1}ページ目</option>`).join("");
}
function safetyRowsForPage(page) {
  return Number(page) === 1 ? SAFETY_ROWS_FIRST_PAGE : SAFETY_ROWS_NEXT_PAGE;
}
function rowOptions(page = 1) {
  return safetyRowsForPage(page).map(r => `<option value="${r}">${r}行目</option>`).join("");
}
function updateSafetyRowOptions(entryDiv) {
  const pageSel = entryDiv.querySelector(".safety-page");
  const rowSel = entryDiv.querySelector(".safety-row");
  if (!pageSel || !rowSel) return;
  const current = Number(rowSel.value);
  const rows = safetyRowsForPage(Number(pageSel.value));
  rowSel.innerHTML = rows.map(r => `<option value="${r}">${r}行目</option>`).join("");
  rowSel.value = rows.includes(current) ? String(current) : String(rows[0]);
}
function addSafetyEntry() {
  $("safetyWrap").classList.remove("hide");
  const id = ++entrySeq;
  const div = document.createElement("div"); div.className = "entry"; div.dataset.id = id;
  div.innerHTML = `<div><label>ページ</label><select class="safety-page">${pageOptions()}</select></div><div><label>入力行</label><select class="safety-row">${rowOptions(1)}</select></div><div><label>安全に影響のあった事項</label><textarea class="safety-text" placeholder="任意入力"></textarea></div><button type="button" class="danger remove">×</button>`;
  div.querySelector(".safety-page").addEventListener("change", () => updateSafetyRowOptions(div));
  div.querySelector(".remove").addEventListener("click", () => div.remove());
  updateSafetyRowOptions(div);
  $("safetyEntries").appendChild(div);
}
function addReportEntry() {
  $("reportWrap").classList.remove("hide");
  const id = ++entrySeq;
  const div = document.createElement("div"); div.className = "entry report-entry"; div.dataset.id = id;
  div.innerHTML = `<div><label>ページ</label><select class="report-page">${pageOptions()}</select></div><div><label>不具合事項</label><textarea class="report-squawk" placeholder="任意入力"></textarea></div><div><label>処置年月日</label><input class="report-action-date" type="date"></div><div><label>処置その他</label><textarea class="report-action" placeholder="任意入力"></textarea></div><div><label>確認者</label><input class="report-confirmer" type="text" placeholder="任意入力"></div><button type="button" class="danger remove">×</button>`;
  div.querySelector(".remove").addEventListener("click", () => div.remove());
  $("reportEntries").appendChild(div);
}
function updatePageSelects() {
  document.querySelectorAll(".safety-page,.report-page").forEach(sel => { const current = sel.value; sel.innerHTML = pageOptions(); if ([...sel.options].some(o => o.value === current)) sel.value = current; });
  document.querySelectorAll("#safetyEntries .entry").forEach(updateSafetyRowOptions);
}
function getSafetyEntries() {
  return [...document.querySelectorAll("#safetyEntries .entry")].map(div => ({ page:Number(div.querySelector(".safety-page").value), row:Number(div.querySelector(".safety-row").value), text:div.querySelector(".safety-text").value.trim() })).filter(e => e.text);
}
function getReportEntries() {
  return [...document.querySelectorAll("#reportEntries .entry")].map(div => ({ page:Number(div.querySelector(".report-page").value), squawk:div.querySelector(".report-squawk").value.trim(), actionDate:div.querySelector(".report-action-date").value, action:div.querySelector(".report-action").value.trim(), confirmer:div.querySelector(".report-confirmer").value.trim() })).filter(e => e.squawk || e.actionDate || e.action || e.confirmer);
}

$("readBtn").addEventListener("click", readSelectedCsv);
$("clearCsvBtn").addEventListener("click", clearCsvCache);
$("downloadBtn").addEventListener("click", downloadWorkbook);
$("csvFile").addEventListener("change", readSelectedCsv);
$("targetDate").addEventListener("change", () => { updateVehicleNameSelect(); updatePageSelects(); const chunks = buildPageChunks(getSelectedRows()); setStatus(`転記対象日を変更しました。Vehicle Name：${getSelectedVehicleName() || "未選択"} / 選択条件の件数：${getSelectedRows().length}件 / ページ数：${chunks.length || 1}枚`, "ok"); });
if ($("vehicleNameSelect")) $("vehicleNameSelect").addEventListener("change", () => { syncRegistrationFromVehicle(true); updatePageSelects(); const chunks = buildPageChunks(getSelectedRows()); setStatus(`Vehicle Nameを変更しました：${getSelectedVehicleName()} / 登録記号：${$("registrationId").value || "未入力"} / 件数：${getSelectedRows().length}件 / ページ数：${chunks.length || 1}枚`, "ok"); });
if ($("registrationId")) $("registrationId").addEventListener("change", saveCurrentVehicleMapping);
$("addSafetyBtn").addEventListener("click", addSafetyEntry);
$("addReportBtn").addEventListener("click", addReportEntry);
$("toggleSpecificBtn").addEventListener("click", toggleSpecificFlights);

if ($("saveOneDriveSettingsBtn")) $("saveOneDriveSettingsBtn").addEventListener("click", saveOneDriveUiSettings);
if ($("msLoginBtn")) $("msLoginBtn").addEventListener("click", loginMicrosoft);
if ($("msLogoutBtn")) $("msLogoutBtn").addEventListener("click", logoutMicrosoft);
if ($("oneDriveTestBtn")) $("oneDriveTestBtn").addEventListener("click", testOneDriveYearbook);
if ($("yearbookIdBtn")) $("yearbookIdBtn").addEventListener("click", captureYearbookDirectIds);
if ($("useOneDriveYearbook")) $("useOneDriveYearbook").addEventListener("change", saveOneDriveUiSettings);
if ($("saveDiaryToOneDrive")) $("saveDiaryToOneDrive").addEventListener("change", saveOneDriveUiSettings);
if ($("createMaintenanceRecord")) $("createMaintenanceRecord").addEventListener("change", saveOneDriveUiSettings);
if ($("downloadMaintenanceRecord")) $("downloadMaintenanceRecord").addEventListener("change", saveOneDriveUiSettings);
["initialMaintenancePlacePreset","initialMaintenancePlaceCustom","maintenanceEngineerOverride","maintenanceRemarks"].forEach(id => { if ($(id)) $(id).addEventListener("change", saveOneDriveUiSettings); });
loadOneDriveUiSettings();
initFlightSummaryOptions();
