/* Page-specific text boundaries and measured continuation pages. */
(function (global) {
  "use strict";
  var COPY = ".northline-content-model,.northline-landscape-content,.structured-page-copy,.studio-copy-column";
  var SECTIONS = ["projectSummary", "process", "conceptDesignPage", "schematicDesignPage", "designDevelopmentPage", "constructionDocumentsPage", "biddingConstructionAdministration", "generalConditionsPage", "consultantsPage"];

  function normalize(settings) {
    var result = {};
    Object.keys(settings || {}).forEach(function (key) {
      var value = Number(settings[key]);
      if (key.length < 180 && Number.isFinite(value) && value > 0) result[key] = Math.max(0.5, Math.min(10.4, Math.round(value * 100) / 100));
    });
    return result;
  }

  function prefix(theme, section, landscape) {
    return theme + ":" + (landscape ? "wide" : "side") + ":" + section + ":";
  }

  function hasSettings(settings, theme, section, landscape) {
    var start = prefix(theme, section, landscape);
    return Object.keys(settings || {}).some(function (key) { return key.indexOf(start) === 0; });
  }

  function supported(page, theme) {
    return theme !== "modernLandscape" && page.sectionIds && page.sectionIds.length === 1 &&
      SECTIONS.indexOf(page.sectionIds[0]) >= 0 && !(theme === "studioPortrait" && page.sectionIds[0] === "process");
  }

  function setHeight(copy, height) {
    copy.style.setProperty("height", height + "px", "important");
    copy.style.setProperty("max-height", height + "px", "important");
    copy.style.setProperty("flex", "0 0 auto", "important");
  }

  function decorate(model, html) {
    if (!model.textFrame) return html;
    var host = document.createElement("div");
    host.innerHTML = html;
    var page = host.firstElementChild;
    var copy = page && page.querySelector(COPY);
    if (!copy || !copy.querySelector(".doc-copy")) return html;
    page.dataset.textFrameKey = model.textFrame.key;
    if (model.textFrame.height) setHeight(copy, model.textFrame.height);
    return host.innerHTML;
  }

  // Lists are split at item boundaries. Consecutive items are rejoined into the
  // original list, retaining numbering and inline formatting.
  function blocksFromHtml(html) {
    var host = document.createElement("div");
    host.innerHTML = html;
    var blocks = [];
    Array.from(host.childNodes).forEach(function (node, listId) {
      if (!node.textContent.trim() && node.nodeType !== 1) return;
      if (node.nodeType === 1 && /^(UL|OL)$/.test(node.tagName)) {
        Array.from(node.children).forEach(function (item, index) {
          blocks.push({ node: item.cloneNode(true), list: node.cloneNode(false), listId: listId, ordinal: Number(node.getAttribute("start") || 1) + index });
        });
      } else {
        blocks.push({ node: node.cloneNode(true), heading: node.nodeType === 1 && (/^H[1-6]$/.test(node.tagName) || (node.querySelector("strong,b") && node.querySelector("strong,b").textContent.trim() === node.textContent.trim())) });
      }
    });
    return blocks;
  }

  function blocksHtml(blocks) {
    var host = document.createElement("div"), previousList = null, list = null;
    blocks.forEach(function (block) {
      if (block.list) {
        if (previousList !== block.listId) {
          list = block.list.cloneNode(false);
          if (list.tagName === "OL") list.setAttribute("start", block.ordinal);
          host.appendChild(list);
        }
        list.appendChild(block.node.cloneNode(true));
        previousList = block.listId;
      } else {
        host.appendChild(block.node.cloneNode(true));
        previousList = null;
      }
    });
    return host.innerHTML;
  }

  function splitBlock(block, count) {
    var text = block.node.textContent;
    var words = Array.from(text.matchAll(/\S+\s*/g));
    if (count < 1 || count >= words.length || block.node.nodeType !== 1) return null;
    var offset = words[count].index;
    var walker = document.createTreeWalker(block.node, NodeFilter.SHOW_TEXT), node;
    while ((node = walker.nextNode())) {
      if (offset <= node.textContent.length) break;
      offset -= node.textContent.length;
    }
    if (!node) return null;
    var before = document.createRange(), after = document.createRange();
    before.selectNodeContents(block.node); before.setEnd(node, offset);
    after.selectNodeContents(block.node); after.setStart(node, offset);
    var first = block.node.cloneNode(false), second = block.node.cloneNode(false);
    first.appendChild(before.cloneContents()); second.appendChild(after.cloneContents());
    return [Object.assign({}, block, { node: first }), Object.assign({}, block, { node: second })];
  }

  function prepare(pages, options) {
    var settings = normalize(options.settings), theme = options.theme;
    var output = [], measure = null;
    function frame(model, index) {
      return Object.assign({}, model, { textFrame: { key: prefix(theme, model.sectionIds[0], model.landscapePhoto) + index } });
    }
    try {
      for (var index = 0; index < pages.length; index += 1) {
        var first = pages[index];
        if (!supported(first, theme)) { output.push(first); continue; }
        var group = [first];
        while (index + 1 < pages.length && supported(pages[index + 1], theme) && pages[index + 1].sectionIds[0] === first.sectionIds[0]) group.push(pages[++index]);
        if (!hasSettings(settings, theme, first.sectionIds[0], first.landscapePhoto)) {
          group.forEach(function (model, pageIndex) { output.push(frame(model, pageIndex)); });
          continue;
        }
        if (!measure) {
          measure = document.createElement("div");
          measure.className = "proposal-document theme-" + (theme === "maOg" ? "structured-portrait" : theme === "studioPortrait" ? "structured-portrait theme-studio-portrait" : "northline-portrait");
          measure.style.cssText = "position:fixed;left:-20000px;top:0;width:1100px;height:auto;overflow:visible;visibility:hidden;pointer-events:none;zoom:1;padding:0;display:block;";
          document.body.appendChild(measure);
        }
        var remaining = blocksFromHtml(group.map(function (model) { return model.content(); }).join(""));
        var pageIndex = 0;
        do {
          var template = group[Math.min(pageIndex, group.length - 1)];
          var key = pageIndex === 0 ? first.key : first.key.replace(/-\d+$/, "") + "-" + (pageIndex + 1);
          var model = frame(Object.assign({}, template, { key: key, content: function () { return ""; } }), pageIndex);
          measure.innerHTML = options.render(model, output.length + 2);
          var page = measure.querySelector(".proposal-page"), copy = page && page.querySelector(COPY);
          var doc = copy && copy.querySelector(".doc-copy");
          if (!doc) throw new Error("This layout has no adjustable text area.");
          page.style.contentVisibility = "visible";
          var pageRect = page.getBoundingClientRect(), copyRect = copy.getBoundingClientRect();
          var top = copyRect.top - pageRect.top;
          var maximum = Math.min(copyRect.bottom, copy.parentElement.getBoundingClientRect().bottom, pageRect.bottom - 0.6 * 96) - pageRect.top;
          var bottom = Math.max(top + 0.75 * 96, Math.min(maximum, (settings[model.textFrame.key] || maximum / 96) * 96));
          model.textFrame.height = Math.max(1, bottom - top);
          setHeight(copy, model.textFrame.height);
          var current = [];
          function fits(blocks) {
            doc.innerHTML = blocksHtml(blocks);
            return copy.scrollHeight <= copy.clientHeight + 1;
          }
          while (remaining.length) {
            var next = remaining[0];
            if (fits(current.concat(next))) { current.push(remaining.shift()); continue; }
            var headingOnly = current.length === 1 && current[0].heading;
            if (current.length && !headingOnly) {
              if (current.length > 1 && current[current.length - 1].heading) remaining.unshift(current.pop());
              break;
            }
            // An unusually long paragraph can span pages without dropping its
            // inline emphasis or links. Ordinary bullets move as whole items.
            var low = 1, high = (next.node.textContent.match(/\S+/g) || []).length - 1, best = null;
            while (low <= high) {
              var middle = Math.floor((low + high) / 2), parts = splitBlock(next, middle);
              if (parts && fits(current.concat(parts[0]))) { best = parts; low = middle + 1; } else high = middle - 1;
            }
            if (best) { current.push(best[0]); remaining[0] = best[1]; }
            else {
              // Keep indivisible content (e.g. a rate table) intact. Expand this
              // frame up to its normal space rather than silently clipping it.
              current.push(remaining.shift());
              doc.innerHTML = blocksHtml(current);
              model.textFrame.height = Math.max(model.textFrame.height, Math.min(maximum - top, copy.scrollHeight + 1));
            }
            break;
          }
          var html = blocksHtml(current);
          model.content = (function (value) { return function () { return value; }; }(html));
          output.push(model);
          pageIndex += 1;
        } while (remaining.length);
      }
      return output;
    } finally { if (measure) measure.remove(); }
  }

  function geometry(page, copy) {
    var pageRect = page.getBoundingClientRect(), copyRect = copy.getBoundingClientRect();
    var scale = pageRect.height / page.offsetHeight;
    return { scale: scale, left: (copyRect.left - pageRect.left) / scale, top: (copyRect.top - pageRect.top) / scale, width: copyRect.width / scale, bottom: (copyRect.bottom - pageRect.top) / scale };
  }

  function mount(preview) {
    preview.querySelectorAll("[data-text-frame-key]").forEach(function (page) {
      var copy = page.querySelector(COPY);
      if (!copy) return;
      var handle = document.createElement("div");
      handle.className = "text-frame-resize-handle";
      handle.tabIndex = 0;
      handle.setAttribute("role", "separator");
      handle.setAttribute("aria-orientation", "horizontal");
      handle.setAttribute("aria-label", "Resize text area; drag to move text to the next page, arrow keys to adjust, Home to reset");
      handle.title = "Drag up to move text to the next page. Drag down to fit more text. Double-click to reset.";
      handle.innerHTML = "<span>Drag to adjust text flow</span>";
      page.appendChild(handle);
      // Defer geometry for offscreen pages so content-visibility can still save
      // layout work. A handle is positioned when its page approaches the viewport.
      function position() {
        page.style.contentVisibility = "visible";
        var g = geometry(page, copy);
        if (!copy.style.height) {
          var doc = copy.querySelector(".doc-copy");
          g.bottom = Math.min(g.bottom, (doc.getBoundingClientRect().bottom - page.getBoundingClientRect().top) / g.scale + 4);
        }
        handle.style.left = g.left + "px"; handle.style.width = g.width + "px"; handle.style.top = g.bottom + "px";
        handle.setAttribute("aria-valuenow", (g.bottom / 96).toFixed(2));
        handle.setAttribute("aria-valuetext", (g.bottom / 96).toFixed(2) + " inches from page top");
      }
      if (typeof IntersectionObserver === "function") {
        var observer = new IntersectionObserver(function (entries) {
          if (entries.some(function (entry) { return entry.isIntersecting; })) { position(); observer.disconnect(); }
        }, { root: preview, rootMargin: "600px" });
        observer.observe(page);
        // The observer is owned by this render, and is disconnected when pages
        // are replaced by the next render.
        preview._textFrameObservers.push(observer);
      } else position();
      handle._positionTextFrame = position;
    });
  }

  function install(preview, options) {
    var session = null;
    preview._textFrameObservers = [];
    function save(page, bottom, reset) {
      var settings = normalize(options.settings());
      if (reset) delete settings[page.dataset.textFrameKey]; else settings[page.dataset.textFrameKey] = bottom / 96;
      var scrollTop = preview.scrollTop, scrollLeft = preview.scrollLeft, key = page.dataset.textFrameKey;
      options.commit(normalize(settings));
      preview.scrollTop = scrollTop; preview.scrollLeft = scrollLeft;
      var replacement = Array.from(preview.querySelectorAll("[data-text-frame-key]")).find(function (p) { return p.dataset.textFrameKey === key; });
      if (replacement) { var handle = replacement.querySelector(".text-frame-resize-handle"); if (handle) handle.focus({ preventScroll: true }); }
    }
    function limits(page, copy) {
      var original = copy.style.cssText;
      copy.style.removeProperty("height"); copy.style.removeProperty("max-height"); copy.style.removeProperty("flex");
      var normal = geometry(page, copy);
      copy.style.cssText = original;
      return { min: normal.top + 0.75 * 96, max: Math.min(normal.bottom, page.offsetHeight - 0.6 * 96) };
    }
    preview.addEventListener("pointerdown", function (event) {
      var handle = event.target.closest(".text-frame-resize-handle");
      if (!handle || event.button !== 0) return;
      handle._positionTextFrame();
      var page = handle.closest(".proposal-page"), copy = page.querySelector(COPY), g = geometry(page, copy);
      session = { handle: handle, page: page, copy: copy, pointerId: event.pointerId, startY: event.clientY, start: parseFloat(handle.style.top), bottom: parseFloat(handle.style.top), top: g.top, scale: g.scale, originalStyle: copy.style.cssText, limits: limits(page, copy) };
      handle.setPointerCapture(event.pointerId);
      page.classList.add("is-text-frame-resizing");
      event.preventDefault(); event.stopPropagation();
    });
    document.addEventListener("pointermove", function (event) {
      if (!session || event.pointerId !== session.pointerId) return;
      session.bottom = Math.max(session.limits.min, Math.min(session.limits.max, session.start + (event.clientY - session.startY) / session.scale));
      setHeight(session.copy, session.bottom - session.top);
      session.handle.style.top = session.bottom + "px";
      session.handle.setAttribute("aria-valuenow", (session.bottom / 96).toFixed(2));
      event.preventDefault();
    });
    function finish(event, cancel) {
      if (!session || event.pointerId !== session.pointerId) return;
      var ended = session; session = null;
      ended.page.classList.remove("is-text-frame-resizing");
      if (ended.handle.hasPointerCapture(ended.pointerId)) ended.handle.releasePointerCapture(ended.pointerId);
      if (cancel) { ended.copy.style.cssText = ended.originalStyle; ended.handle._positionTextFrame(); }
      else if (Math.abs(ended.bottom - ended.start) > 0.5) save(ended.page, ended.bottom, false);
    }
    document.addEventListener("pointerup", function (event) { finish(event, false); });
    document.addEventListener("pointercancel", function (event) { finish(event, true); });
    preview.addEventListener("lostpointercapture", function (event) { finish(event, false); });
    preview.addEventListener("dblclick", function (event) {
      var handle = event.target.closest(".text-frame-resize-handle");
      if (handle) { event.preventDefault(); save(handle.closest(".proposal-page"), 0, true); }
    });
    preview.addEventListener("keydown", function (event) {
      var handle = event.target.closest(".text-frame-resize-handle");
      if (!handle || !/^(ArrowUp|ArrowDown|Home)$/.test(event.key)) return;
      event.preventDefault();
      handle._positionTextFrame();
      var page = handle.closest(".proposal-page"), copy = page.querySelector(COPY), bounds = limits(page, copy);
      var bottom = parseFloat(handle.style.top) + (event.key === "ArrowUp" ? -1 : 1) * (event.shiftKey ? 0.5 : 0.1) * 96;
      save(page, Math.max(bounds.min, Math.min(bounds.max, bottom)), event.key === "Home");
    });
  }

  global.ProposalTextFlow = { normalize: normalize, hasSettings: hasSettings, prepare: prepare, decorate: decorate, mount: mount, install: install };
}(typeof window === "undefined" ? globalThis : window));
