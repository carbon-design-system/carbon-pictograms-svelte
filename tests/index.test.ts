import { expect, test } from "bun:test";
import { buildPictograms } from "../src/index.js";

test("imports", async () => {
  const pictograms = await buildPictograms();
  expect(pictograms.length).toEqual(1264);
  expect(pictograms).toMatchSnapshot();
});

