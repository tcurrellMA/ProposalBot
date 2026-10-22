(function (root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory();
  else root.ProposalCompensationImport = factory();
}(typeof window !== "undefined" ? window : globalThis, function () {
  "use strict";

  var phases = [
    { key: "concept", label: "Concept Design", aliases: ["conceptual design", "concept design", "pre-design", "predesign"] },
    { key: "schematic", label: "Schematic Design", aliases: ["schematic design", "schematic", "SD"] },
    { key: "designDevelopment", label: "Design Development", aliases: ["design development", "DD"] },
    { key: "constructionDocuments", label: "Construction Documents", aliases: ["construction documents", "construction document", "CD", "CDs"] },
    { key: "bid", label: "Bidding", aliases: ["bidding and negotiation", "bidding", "bid"] },
    { key: "constructionObservation", label: "Construction Administration", aliases: ["construction administration", "construction observation", "construction admin", "CA"] }
  ];

  function compact(text) { return String(text || "").toLowerCase().replace(/[^a-z0-9]/g, ""); }
  function cleanLabel(text) {
    return String(text || "").replace(/^\s*(?:\d{1,2}[.)\-:]?\s+|[|•:—–-]\s*)/, "").replace(/[|:$—–-]+\s*$/, "").replace(/\s+/g, " ").trim();
  }
  function matchPhase(label, labels) {
    var value = compact(label);
    var matches = phases.filter(function (phase) {
      return phase.aliases.concat(labels && labels[phase.key] || []).some(function (alias) {
        var key = compact(alias);
        // Abbreviations must be whole labels, not letters inside other words.
        return key && (key.length <= 3 ? value === key : value.indexOf(key) >= 0);
      });
    });
    return matches.length === 1 ? matches[0] : null;
  }
  function isTotal(label) { return /^(?:grand\s*)?total(?:\s+(?:fee|fees|compensation))?$/i.test(cleanLabel(label)); }
  function money(value) {
    var raw = String(value).replace(/[$,\s]/g, "").replace(/\.(?=\d{3}(?:\.|$))/g, "");
    if (!/^\d+(?:\.\d{1,2})?$/.test(raw)) return null;
    var number = Number(raw);
    return Number.isSafeInteger(Math.round(number * 100)) ? { amount: raw, cents: Math.round(number * 100) } : null;
  }
  function amounts(text) {
    var expression = /\$?\s*(?:\d{1,3}(?:[,. ]\d{3})+|\d+)(?:\.\d{1,2})?/g, match, found = [];
    while ((match = expression.exec(text))) {
      if (/^\s*%/.test(text.slice(expression.lastIndex))) continue;
      var parsed = money(match[0]);
      if (parsed) found.push({ index: match.index, end: expression.lastIndex, amount: parsed.amount, cents: parsed.cents, currency: /\$/.test(match[0]) });
    }
    return found;
  }
  function displayLabel(label, phase, labels) {
    var cleaned = cleanLabel(label);
    // Spaced-out display lettering is common in exported proposal charts.
    if (/\b[A-Z]\s+[A-Z]\s+[A-Z]\b/.test(cleaned)) return labels && labels[phase.key] || phase.label;
    return cleaned === cleaned.toUpperCase() && cleaned.length > 3
      ? cleaned.toLowerCase().replace(/\b[a-z]/g, function (letter) { return letter.toUpperCase(); })
      : cleaned;
  }
  function finish(candidates, totals, labels) {
    var rows = [], warnings = [];
    phases.forEach(function (phase) {
      var found = candidates.filter(function (row) { return row.key === phase.key; });
      var values = Array.from(new Set(found.map(function (row) { return row.cents; })));
      if (values.length > 1) warnings.push("Conflicting amounts for " + phase.label + "; that field was left unchanged.");
      else if (found.length) rows.push({ key: phase.key, label: displayLabel(found[0].label, phase, labels), amount: found[0].amount, cents: found[0].cents });
    });
    var totalValues = Array.from(new Set(totals.map(function (total) { return total.cents; })));
    var total = totalValues.length === 1 ? totals[0] : null;
    if (totalValues.length > 1) warnings.push("The image contains conflicting totals.");
    var sum = rows.reduce(function (value, row) { return value + row.cents; }, 0);
    var totalMatches = !!(total && rows.length && total.cents === sum);
    if (total && rows.length && !totalMatches) warnings.push("The recognized phases do not add up to the image total. Check the amounts and any missing phases.");
    return { rows: rows, total: total && total.amount, totalMatches: totalMatches, warnings: warnings };
  }

  function parseText(text, labels) {
    var lines = String(text || "").replace(/\r/g, "").replace(/\|/g, " ").split(/\n/).map(function (line) { return line.trim(); }).filter(Boolean);
    var candidates = [], totals = [];
    var percentageTable = /full\s*fee\s*%|m\s*\+\s*a\s*%/i.test(String(text || ""));
    lines.forEach(function (line, index) {
      // Ignore rates and fee notes; keep dollar amounts even when percentage columns share a row.
      if (/\$\s*[-−]\s*\d|[-−]\s*\$?\s*\d|\(\s*\$?\s*\d/.test(line)) return;
      if (/\b(?:per\s+hour|hourly|months?|weeks?|visits?)\b|\/\s*hr\b/i.test(line)) return;
      line = line.replace(/^\d{1,2}[.)\-:]?\s+(?=[a-z])/i, "");
      var found = amounts(line);
      var dollarAmounts = found.filter(function (amount) { return amount.currency; });
      if (dollarAmounts.length) found = dollarAmounts;
      else if (/%/.test(line)) return;
      var firstNumber = line.search(/[$\d]/);
      var label = cleanLabel(firstNumber >= 0 ? line.slice(0, firstNumber) : line);
      var phase = matchPhase(label, labels);
      var totalLabel = isTotal(label);
      if (!phase && !totalLabel) return;
      if (!found.length) {
        for (var following = index + 1; following < Math.min(lines.length, index + 9); following += 1) {
          var nextLine = lines[following];
          if (matchPhase(cleanLabel(nextLine), labels) || isTotal(nextLine)) break;
          var nextDollars = amounts(nextLine).filter(function (amount) { return amount.currency; });
          if (nextDollars.length) { found = nextDollars; break; }
          if (!percentageTable && following === index + 1 && /^[\s\d,.]+$/.test(nextLine)) { found = amounts(nextLine); break; }
        }
      }
      // Several dollar columns need spatial pairing; never guess from text order.
      if (found.length !== 1) return;
      if (totalLabel) totals.push(found[0]);
      else candidates.push({ key: phase.key, label: label, amount: found[0].amount, cents: found[0].cents });
    });
    return finish(candidates, totals, labels);
  }

  function parseWords(words, labels) {
    var rows = [];
    (words || []).filter(function (word) { return word.text && word.bbox && !/^(?:show|in|chart|showin)$/i.test(word.text); }).sort(function (a, b) { return a.bbox.y0 - b.bbox.y0; }).forEach(function (word) {
      var box = word.bbox, center = (box.y0 + box.y1) / 2, height = box.y1 - box.y0;
      var row = rows.find(function (item) { return Math.abs(item.center - center) <= Math.max(item.height, height) * 0.55; });
      if (!row) { row = { center: center, height: height, words: [] }; rows.push(row); }
      row.words.push(word);
    });
    var segments = [];
    rows.forEach(function (row, rowIndex) {
      var current;
      row.words.sort(function (a, b) { return a.bbox.x0 - b.bbox.x0; }).forEach(function (word) {
        if (!current || word.bbox.x0 - current.x1 > Math.max(24, row.height * 2.5)) {
          current = { text: word.text, x0: word.bbox.x0, x1: word.bbox.x1, y: row.center, height: row.height, row: rowIndex };
          segments.push(current);
        } else { current.text += " " + word.text; current.x1 = word.bbox.x1; }
      });
    });
    var candidates = [], totals = [];
    var percentageTable = /full\s*fee\s*%|m\s*\+\s*a\s*%/i.test((words || []).map(function (word) { return word.text; }).join(" "));
    segments.forEach(function (segment) {
      var inline = parseText(segment.text, labels);
      inline.rows.forEach(function (row) { candidates.push(row); });
      if (inline.total) totals.push(money(inline.total));
      if (inline.rows.length || inline.total) return;
      var segmentLabel = segment.text.replace(/^\d{1,2}[.)\-:]?\s+(?=[a-z])/i, "");
      var firstNumber = segmentLabel.search(/[$\d]/);
      var label = cleanLabel(firstNumber >= 0 ? segmentLabel.slice(0, firstNumber) : segmentLabel), phase = matchPhase(label, labels), totalLabel = isTotal(label);
      if (!phase && !totalLabel) return;
      if (amounts(label).length || /%|\b(?:months?|visits?)\b/i.test(label)) return;
      var sameRow = segments.filter(function (item) { return item.row === segment.row && item.x0 >= segment.x1 && /^[\s$\d,.]+$/.test(item.text); });
      var below = segments.filter(function (item) {
        return item.y > segment.y && item.y - segment.y < segment.height * 5 && Math.abs(item.x0 - segment.x0) < segment.height * 3 && /^[\s$\d,.]+$/.test(item.text);
      }).sort(function (a, b) { return a.y - b.y; });
      var dollarCells = sameRow.filter(function (cell) { return /^\s*\$/.test(cell.text); });
      var next = dollarCells.length === 1 ? dollarCells[0] : percentageTable ? null : sameRow.length === 1 ? sameRow[0] : below[0];
      if (!next) return;
      var found = amounts(next.text);
      if (found.length !== 1) return;
      if (totalLabel) totals.push(found[0]);
      else candidates.push({ key: phase.key, label: label, amount: found[0].amount, cents: found[0].cents });
    });
    return finish(candidates, totals, labels);
  }

  function score(result) { return result.rows.length * 100 + (result.totalMatches ? 200 : 0) - result.warnings.length * 40; }

  function cleanTablePixels(pixels, width, height) {
    var data = pixels.data, rows = new Uint32Array(height), columns = new Uint32Array(width);
    for (var y = 0; y < height; y += 1) {
      for (var x = 0; x < width; x += 1) {
        var index = (y * width + x) * 4, red = data[index], green = data[index + 1], blue = data[index + 2];
        var annotation = red > 160 && blue > 130 && green < Math.min(red, blue) * 0.7;
        var redHeading = red > 180 && red > green * 1.5 && red > blue * 1.2;
        var gray = red * 0.299 + green * 0.587 + blue * 0.114;
        var value = annotation || redHeading || gray > 175 ? 255 : 0;
        data[index] = data[index + 1] = data[index + 2] = value;
        data[index + 3] = 255;
        if (!value) { rows[y] += 1; columns[x] += 1; }
      }
    }
    // Long ruling lines confuse page segmentation. Text and blue currency digits stay intact.
    var rowMask = new Uint8Array(height), columnMask = new Uint8Array(width);
    rows.forEach(function (count, row) {
      if (count > width * 0.6) for (var offset = -1; offset <= 1; offset += 1) if (row + offset >= 0 && row + offset < height) rowMask[row + offset] = 1;
    });
    columns.forEach(function (count, column) {
      if (count > height * 0.55) for (var offset = -1; offset <= 1; offset += 1) if (column + offset >= 0 && column + offset < width) columnMask[column + offset] = 1;
    });
    for (var row = 0; row < height; row += 1) {
      for (var column = 0; column < width; column += 1) {
        if (!rowMask[row] && !columnMask[column]) continue;
        var position = (row * width + column) * 4;
        data[position] = data[position + 1] = data[position + 2] = 255;
      }
    }
    return pixels;
  }

  async function recognize(reader, dataUrl, labels, onProgress, cancelled) {
    var image = await new Promise(function (resolve, reject) {
      var source = new Image();
      source.onload = function () { resolve(source); };
      source.onerror = function () { reject(new Error("The image could not be opened.")); };
      source.src = dataUrl;
    });
    if (!image.naturalWidth || image.naturalWidth * image.naturalHeight > 32000000) throw new Error("Use a smaller image of the fee chart.");
    var scale = Math.min(4, 2600 / Math.max(image.naturalWidth, image.naturalHeight));
    var canvas = document.createElement("canvas"), padding = 24;
    canvas.width = Math.round(image.naturalWidth * scale) + padding * 2;
    canvas.height = Math.round(image.naturalHeight * scale) + padding * 2;
    var context = canvas.getContext("2d");
    context.fillStyle = "white";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, padding, padding, canvas.width - padding * 2, canvas.height - padding * 2);
    var cleaned = document.createElement("canvas");
    cleaned.width = canvas.width;
    cleaned.height = canvas.height;
    var cleanContext = cleaned.getContext("2d");
    cleanContext.putImageData(cleanTablePixels(context.getImageData(0, 0, canvas.width, canvas.height), canvas.width, canvas.height), 0, 0);
    var jobs = [{ image: cleaned, mode: "6" }, { image: cleaned, mode: "11" }, { image: canvas, mode: "6" }, { image: canvas, mode: "11" }];
    var worker, best = { rows: [], warnings: [], text: "" }, bestScore = -Infinity;
    async function timed(promise) {
      var timer;
      try {
        return await Promise.race([promise, new Promise(function (_, reject) {
          timer = setTimeout(function () { reject(new Error("Image reader timed out. Try again.")); }, 60000);
        })]);
      } finally { clearTimeout(timer); }
    }
    function checkCancelled() { if (cancelled()) throw new Error("Import cancelled."); }
    try {
      checkCancelled();
      var pendingWorker = reader.createWorker("eng", 1, { logger: function (message) { if (!cancelled()) onProgress(message); } });
      try { worker = await timed(pendingWorker); }
      catch (error) { pendingWorker.then(function (lateWorker) { return lateWorker.terminate(); }).catch(function () {}); throw error; }
      for (var pass = 0; pass < jobs.length; pass += 1) {
        checkCancelled();
        if (pass >= 2 && (best.totalMatches || (best.rows.length === phases.length && !best.warnings.length))) break;
        await worker.setParameters({ tessedit_pageseg_mode: jobs[pass].mode, preserve_interword_spaces: "1" });
        var result = await timed(worker.recognize(jobs[pass].image.toDataURL("image/png")));
        checkCancelled();
        var data = result.data || {};
        [parseText(data.text, labels), parseWords(data.words, labels)].forEach(function (parsed) {
          var value = score(parsed);
          if (value > bestScore) { bestScore = value; best = Object.assign({}, parsed, { text: data.text || "" }); }
        });
      }
      return best;
    } finally { if (worker) await worker.terminate(); }
  }

  return { phases: phases, parseText: parseText, parseWords: parseWords, recognize: recognize, cleanTablePixels: cleanTablePixels };
}));
