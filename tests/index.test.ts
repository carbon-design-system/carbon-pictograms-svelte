import { test, expect } from "vitest";
import * as API from "../lib";
import pkg from "../package.json";

test("Library has 0 dependencies", () => {
  // @ts-expect-error
  expect(Object.keys(pkg.dependencies ?? {}).length).toEqual(0);
});

test("Library has exports", () => {
  expect(Object.keys(API)).toMatchSnapshot();
});
