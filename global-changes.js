(function (root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory();
  else root.ProposalGlobalChanges = factory();
}(typeof globalThis !== "undefined" ? globalThis : this, function () {
  "use strict";
  var small = "zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split(" ");
  var tens = "zero ten twenty thirty forty fifty sixty seventy eighty ninety".split(" ");
  var scales = [[1000000000, "billion"], [1000000, "million"], [1000, "thousand"]];
  var numberTokens = small.concat(tens.slice(2), ["hundred", "thousand", "million", "billion"]);
  var word = "(?:" + numberTokens.join("|") + ")";
  var numberPattern = new RegExp("(?<![\\p{L}\\p{N}_])(?:\\d[\\d,]*(?:\\.\\d+)?|" + word + "(?:(?:[\\s\\u2011-]+|,\\s*)(?:and\\s+)?" + word + ")*)(?![\\p{L}\\p{N}_])", "giu");

  function escape(value) { return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); }
  function words(value, withAnd) {
    if (value < 20) return small[value];
    if (value < 100) return tens[Math.floor(value / 10)] + (value % 10 ? "-" + small[value % 10] : "");
    if (value < 1000) return small[Math.floor(value / 100)] + " hundred" + (value % 100 ? (withAnd ? " and " : " ") + words(value % 100, withAnd) : "");
    for (var pair of scales) {
      if (value >= pair[0]) return words(Math.floor(value / pair[0]), withAnd) + " " + pair[1] + (value % pair[0] ? (withAnd && value % pair[0] < 100 ? " and " : " ") + words(value % pair[0], withAnd) : "");
    }
  }
  function normalizeWords(value) { return value.toLowerCase().replace(/\band\b/g, " ").replace(/[,\s\u2011-]+/g, " ").trim(); }
  function number(value) {
    value = String(value).trim();
    if (/^(?:\d+|\d{1,3}(?:,\d{3})+)$/.test(value)) {
      var digitValue = Number(value.replace(/,/g, ""));
      return digitValue <= 999999999999 ? digitValue : null;
    }
    var tokens = normalizeWords(value).split(" "), group = 0, total = 0;
    for (var token of tokens) {
      if (small.indexOf(token) >= 0) group += small.indexOf(token);
      else if (tens.indexOf(token) >= 2) group += tens.indexOf(token) * 10;
      else if (token === "hundred") group *= 100;
      else {
        var scale = scales.find(function (item) { return item[1] === token; });
        if (!scale) return null;
        total += group * scale[0]; group = 0;
      }
    }
    total += group;
    return total <= 999999999999 && normalizeWords(words(total)) === normalizeWords(value) ? total : null;
  }
  function clean(value) { return String(value || "").trim().replace(/^["“']|["”']$/g, "").trim(); }
  function parseRequest(request) {
    var text = String(request || "").trim().replace(/[.!]$/, "").replace(/\s+(?:everywhere|throughout(?:\s+(?:the|this))?\s+proposal|in\s+(?:the|this)\s+proposal)$/i, "");
    var match = text.match(/^(?:please\s+)?(?:change|update|set)\s+(?:the\s+)?(?:number\s+of\s+)?(.+?)\s+from\s+(.+?)\s+to\s+(.+)$/i);
    if (match) return { subject: clean(match[1]), from: clean(match[2]), to: clean(match[3]) };
    match = text.match(/^(?:please\s+)?(?:change|update|replace|rename)\s+(.+?)\s+(?:to\s+read|to|with)\s+(.+)$/i);
    if (!match) throw new Error('Use “Change levels from 5 to 6” or “Replace Old Name with New Name”, or fill in the values below.');
    var from = clean(match[1]), to = clean(match[2]);
    // “Change 152 units to 160 units” is a quantity change scoped to units.
    var left = splitQuantity(from), right = splitQuantity(to);
    if (left && right && subjectPattern(left.subject).test(right.subject)) return { from: left.value, to: right.value, subject: left.subject };
    return { from: from, to: to, subject: "" };
  }
  function splitQuantity(value) {
    var matches = Array.from(value.matchAll(new RegExp(numberPattern.source, "giu")));
    if (!matches.length || matches[0].index !== 0 || number(matches[0][0]) === null) return null;
    var subject = value.slice(matches[0][0].length).trim();
    return subject ? { value: matches[0][0], subject: subject } : null;
  }
  function subjectPattern(subject) {
    var key = subject.toLowerCase().trim();
    var aliases = /^(?:levels?|floors?|storeys?|stories|story)$/.test(key) ? "levels?|floors?|storeys?|stories|story" :
      /^(?:units?|residential units?|apartments?|dwelling units?)$/.test(key) ? "(?:residential[\\s-]+|dwelling[\\s-]+|apartment[\\s-]+)?units?|apartments?" : escape(key).replace(/s$/, "") + "s?";
    return new RegExp("^(?:" + aliases + ")$", "i");
  }
  function inContext(text, start, end, subject) {
    if (!subject) return true;
    var alias = subjectPattern(subject).source.slice(1, -1);
    var after = text.slice(end), before = text.slice(0, start);
    var paired = "(?:\\s*\\([^()]*\\)|\\s*\\))?";
    var modifiers = "(?:(?:total|residential|apartment|dwelling|building|above[ -]grade|below[ -]grade|parking)[\\s-]+){0,3}";
    return new RegExp("^" + paired + "[\\s\\u2011-]+" + modifiers + alias + "(?![\\p{L}\\p{N}_])", "iu").test(after) ||
      new RegExp("(?<![\\p{L}\\p{N}_])" + alias + "(?:\\s+(?:count|total))?(?:\\s+(?:of|is|are|at|will be|shall be|equals|has been set to))?\\s*[:=]?\\s*(?:[^()]*\\(\\s*)?$", "iu").test(before.slice(-90));
  }
  function validate(rule) {
    var result = { from: clean(rule.from), to: clean(rule.to), subject: clean(rule.subject) };
    if (!result.from || !result.to) throw new Error("Enter both the current and new values.");
    if (result.from.toLowerCase() === result.to.toLowerCase()) throw new Error("The current and new values must differ.");
    result.oldNumber = number(result.from); result.newNumber = number(result.to);
    if ((result.oldNumber === null) !== (result.newNumber === null)) throw new Error("For a quantity change, enter a number in both value fields. For a name change, enter both full names.");
    if (result.oldNumber !== null && result.oldNumber === result.newNumber) throw new Error("Enter a different new number.");
    return result;
  }
  function replacementCase(source, target) {
    if (source === source.toUpperCase()) return target.toUpperCase();
    if (/^[A-Z]/.test(source)) return target[0].toUpperCase() + target.slice(1);
    return target;
  }
  function replaceText(text, inputRule) {
    var rule = validate(inputRule), matches = [];
    var pattern = rule.oldNumber === null ? new RegExp("(?<![\\p{L}\\p{N}_])" + escape(rule.from).replace(/\s+/g, "\\s+") + "(?![\\p{L}\\p{N}_])", "giu") : new RegExp(numberPattern.source, "giu");
    var output = String(text).replace(pattern, function (matched, offset) {
      if (rule.oldNumber !== null) {
        if (number(matched) !== rule.oldNumber) return matched;
        // Do not change pieces of decimals, addresses with embedded digits, or ranges.
        if (/[\d.,/]/.test(text[offset - 1] || "") || /^[.,/]\d/.test(text.slice(offset + matched.length))) return matched;
        if (!inContext(text, offset, offset + matched.length, rule.subject)) return matched;
      }
      var value = rule.to;
      if (rule.oldNumber !== null) {
        value = /^\d/.test(matched) ? rule.newNumber.toLocaleString("en-US") : words(rule.newNumber, /\band\b/i.test(matched));
        if (!/[\u2011-]/.test(matched)) value = value.replace(/-/g, " ");
        value = replacementCase(matched, value);
      } else if (matched === matched.toUpperCase()) value = value.toUpperCase();
      matches.push({ start: offset, end: offset + matched.length, before: matched, after: value });
      return value;
    });
    return { text: output, matches: matches };
  }

  // Only editable proposal copy belongs here. IDs, dates, assets, saved presets,
  // imported source files, layout settings, and financial values are excluded.
  var roots = ["project", "projectSummarySections", "legacySectionOverrides", "generatedTextOverrides", "sectionOverrides", "sectionTitleOverrides", "phaseLabels", "phaseScopeItems", "constructionAdministrationItems", "selectionListOrder", "schedule", "compensation", "feeStructures", "qualifications", "team", "signature", "generalConditions", "consultants", "deliverables", "attachments"];
  var blocked = /^(?:id|group|type|typology|photoTypologies|proposalDate|acceptedDate|amount|amountWords|concept|schematic|designDevelopment|constructionDocuments|bid|constructionObservation|image.*|photo.*|dataUrl|.*DataUrl|.*Stored|.*Source|.*Path|.*Url|orientation|mode|name)$/i;
  function contentEntries(proposal) {
    var entries = [];
    function visit(value, path) {
      if (typeof value === "string") { entries.push({ path: path, text: value }); return; }
      if (!value || typeof value !== "object") return;
      Object.keys(value).forEach(function (key) {
        var collection = path[0], isTextMap = /^(?:sectionOverrides|legacySectionOverrides|generatedTextOverrides|sectionTitleOverrides|phaseLabels|phaseScopeItems|projectSummarySections|deliverables)$/.test(collection) || path.indexOf("phaseLabels") >= 0;
        var allowName = key === "name" && /^(?:team|signature|consultants|deliverables|feeStructures)$/.test(collection);
        var scheduleValue = collection === "schedule" && typeof value[key] === "string";
        if (collection === "feeStructures" && typeof value[key] === "string" && !/^(?:name|heading|belowText|description|notes|title|label)$/.test(key) && path.indexOf("phaseLabels") < 0) return;
        if (isTextMap || allowName || scheduleValue || !blocked.test(key)) visit(value[key], path.concat(key));
      });
    }
    roots.forEach(function (key) { visit(proposal[key], [key]); });
    return entries;
  }
  function set(proposal, path, value) {
    var parent = proposal;
    path.slice(0, -1).forEach(function (key) {
      if (!parent[key] || typeof parent[key] !== "object") parent[key] = {};
      parent = parent[key];
    });
    parent[path[path.length - 1]] = value;
  }
  function plan(proposal, inputRule) {
    var rule = validate(inputRule), changes = [];
    contentEntries(proposal).forEach(function (entry) {
      var result = replaceText(entry.text, rule);
      if (result.matches.length && result.text !== entry.text) changes.push({ path: entry.path, before: entry.text, after: result.text, matches: result.matches });
    });
    return { rule: rule, changes: changes };
  }
  function apply(proposal, changes) { changes.forEach(function (change) { set(proposal, change.path, change.after); }); }
  return { number: number, words: words, parseRequest: parseRequest, validate: validate, replaceText: replaceText, contentEntries: contentEntries, plan: plan, apply: apply };
}));
