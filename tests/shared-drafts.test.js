const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs/promises");
const os = require("node:os");
const path = require("node:path");
const { createSharedDraftStore } = require("../shared-drafts");

test("saved projects persist, preserve images, and reject stale changes", async () => {
  const directory = await fs.mkdtemp(path.join(os.tmpdir(), "proposal-bot-drafts-test-"));
  try {
    const store = createSharedDraftStore(directory);
    const original = {
      meta: { id: "draft-test", updatedAt: "2026-09-29" },
      project: { projectName: "Test project" },
      photos: [{ id: "photo-1", dataUrl: "data:image/png;base64,AAAA" }]
    };
    const revision = await store.save("draft-test", original, "");
    const reloaded = createSharedDraftStore(directory);
    const snapshot = await reloaded.list();
    assert.deepEqual(snapshot.drafts["draft-test"], original);
    assert.equal(snapshot.revisions["draft-test"], revision);
    await assert.rejects(store.save("draft-test", { ...original, project: { projectName: "Stale" } }, ""), { status: 409 });
    const changed = { ...original, project: { projectName: "Updated" } };
    const nextRevision = await store.save("draft-test", changed, revision);
    await assert.rejects(store.remove("draft-test", revision), { status: 409 });
    assert.equal(await store.remove("draft-test", nextRevision), true);
    assert.deepEqual((await store.list()).drafts, {});
  } finally {
    await fs.rm(directory, { recursive: true, force: true });
  }
});

test("concurrent writes with the same revision cannot overwrite each other", async () => {
  const directory = await fs.mkdtemp(path.join(os.tmpdir(), "proposal-bot-drafts-test-"));
  try {
    const store = createSharedDraftStore(directory);
    const first = { meta: { id: "draft-race" }, project: { projectName: "First" } };
    const second = { meta: { id: "draft-race" }, project: { projectName: "Second" } };
    const results = await Promise.allSettled([
      store.save("draft-race", first, ""),
      store.save("draft-race", second, "")
    ]);
    assert.equal(results.filter((result) => result.status === "fulfilled").length, 1);
    assert.equal(results.filter((result) => result.status === "rejected" && result.reason.status === 409).length, 1);
  } finally {
    await fs.rm(directory, { recursive: true, force: true });
  }
});
