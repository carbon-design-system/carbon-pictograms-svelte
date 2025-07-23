import type { PictogramOutput } from "@carbon/pictograms";
import { expect, test } from "bun:test";
import { buildPictograms } from "../src";
import { template } from "../src/template";

test("imports", async () => {
  const pictograms = await buildPictograms();
  expect(pictograms.length).toEqual(1378);
  expect(pictograms).toMatchSnapshot();
}, 30_000);

test("template", () => {
  const props: PictogramOutput = {
    moduleName: "ActiveServer",
    filepath: "active--server/index.js",
    descriptor: {
      elem: "svg",
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 32 32",
        fill: "currentColor",
        width: 64,
        height: 64,
      },
      content: [
        {
          elem: "path",
          attrs: {
            d: "M30.396,20.229l-1.933-0.518l0.186-0.695l1.933,0.518L30.396,20.229z M1.604,20.229l-0.187-0.695\tl1.932-0.518l0.187,0.695L1.604,20.229z M31,16.36h-2v-0.72h2V16.36z M3,16.36H1v-0.72h2V16.36z M28.649,12.983l-0.186-0.695\tl1.933-0.518l0.186,0.695L28.649,12.983z M3.35,12.983l-1.932-0.518l0.187-0.695l1.932,0.518L3.35,12.983z M24,31.36H8\tc-0.199,0-0.36-0.161-0.36-0.36V1c0-0.199,0.161-0.36,0.36-0.36h16c0.199,0,0.36,0.161,0.36,0.36v30\tC24.36,31.199,24.199,31.36,24,31.36z M8.36,30.64h15.28V1.36H8.36V30.64z M20,11.36h-8v-0.72h8V11.36z M20,8.36h-8V7.64h8V8.36z M20,5.36h-8V4.64h8V5.36z",
          },
        },
      ],
      name: "active--server",
    },
  };

  expect(template(props).replace(/\n/g, "")).toMatchSnapshot();
});
