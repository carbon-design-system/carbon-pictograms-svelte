import { expect, test } from "bun:test";
import {
  assertRenameAliasTarget,
  buildPictograms,
} from "../src/index.js";

test("imports", async () => {
  const pictograms = await buildPictograms();
  expect(pictograms.length).toEqual(1578);
  expect(pictograms).toMatchSnapshot();

  const expandHorz = await Bun.file("lib/ExpandHorz.svelte").text();
  const expandVert = await Bun.file("lib/ExpandVert.svelte").text();
  expect(expandHorz).toContain(
    'import ExpandHorizontal from "./ExpandHorizontal.svelte"'
  );
  expect(expandVert).toContain(
    'import ExpandVertical from "./ExpandVertical.svelte"'
  );

  const index = await Bun.file("PICTOGRAM_INDEX.md").text();
  expect(index).toContain("1576 pictograms from @carbon/pictograms@12.85.0");
  expect(index).not.toMatch(/^- ExpandHorz$/m);
  expect(index).not.toMatch(/^- ExpandVert$/m);
});

test("removes stale files from lib", async () => {
  await Bun.write("lib/Stale.svelte", "");
  await Bun.write("lib/Stale.svelte.d.ts", "");

  await buildPictograms();

  expect(await Bun.file("lib/Stale.svelte").exists()).toBe(false);
  expect(await Bun.file("lib/Stale.svelte.d.ts").exists()).toBe(false);
  expect(await Bun.file("lib/ExpandHorizontal.svelte").exists()).toBe(true);
});

test("throws when rename alias target is missing", () => {
  expect(() => {
    assertRenameAliasTarget("OldName", "MissingName", {});
  }).toThrow("Rename alias target missing: MissingName for OldName");
});
