import { test } from "node:test";
import assert from "node:assert/strict";
import {
  recommend,
  questions,
  readDraft,
  saveDraft,
  VERSION,
  STORAGE_KEY,
} from "../src/lib/assessment.js";
const valid = {
  industry: "home",
  goal: "margin",
  margin: "partial",
  retention: "partial",
  capacity: "spare",
  dependence: "partial",
};
test("incomplete or invalid answers never produce a recommendation", () => {
  assert.equal(recommend({}), null);
  assert.equal(recommend({ ...valid, goal: "injected" }), null);
});
test("tight capacity changes growth priority but cannot override acquisition or sale intent", () => {
  assert.equal(recommend({ ...valid, capacity: "tight" }).theme, "capacity");
  assert.equal(
    recommend({ ...valid, goal: "sale", capacity: "tight" }).theme,
    "readiness",
  );
  assert.equal(
    recommend({ ...valid, goal: "acquire", capacity: "tight" }).theme,
    "acquire",
  );
});
test("nonrecurring businesses are not told to diagnose retention", () => {
  assert.equal(
    recommend({ ...valid, goal: "retention", retention: "na" }).theme,
    "margin",
  );
});
test("every valid answer combination produces an explicit rule version", () => {
  let all = [{}];
  for (const q of questions)
    all = all.flatMap((a) => q.options.map(([v]) => ({ ...a, [q.key]: v })));
  for (const a of all) assert.equal(recommend(a).version, VERSION);
});
test("draft storage discards unapproved fields, expired values and corrupted input", () => {
  const storage = {
    getItem() {
      return this.value;
    },
    setItem(k, v) {
      assert.equal(k, STORAGE_KEY);
      this.value = v;
    },
  };
  assert.equal(saveDraft(storage, { ...valid, secret: "excluded" }), true);
  assert.deepEqual(readDraft(storage), valid);
  storage.value = JSON.stringify({
    version: VERSION,
    savedAt: 0,
    answers: valid,
  });
  assert.deepEqual(readDraft(storage), {});
  storage.value = "{";
  assert.deepEqual(readDraft(storage), {});
  assert.equal(saveDraft(null, valid), false);
  assert.deepEqual(readDraft(null), {});
});
