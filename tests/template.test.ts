import type { PictogramOutput } from "@carbon/pictograms";
import { describe, expect, test } from "bun:test";
import { template } from "../src/template.js";

describe("template", () => {
  test("should generate correct Svelte component template with minimal input", () => {
    const input: PictogramOutput = {
      moduleName: "TestPictogram",
      filepath: "test-pictogram/index.js",
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
              d: "M16 2l14 28H2L16 2z",
            },
          },
        ],
        name: "test-pictogram",
      },
    };

    const result = template(input);
    
    expect(result).toContain("<svg");
    expect(result).toContain('xmlns="http://www.w3.org/2000/svg"');
    expect(result).toContain('viewBox="0 0 32 32"');
    expect(result).toContain('width="64"');
    expect(result).toContain('height="64"');
    expect(result).toContain('fill="currentColor"');
    expect(result).toContain('preserveAspectRatio="xMidYMid meet"');
    expect(result).toContain('d="M16 2l14 28H2L16 2z"');
  });

  test("should handle empty descriptor content", () => {
    const input: PictogramOutput = {
      moduleName: "EmptyPictogram",
      filepath: "empty-pictogram/index.js",
      descriptor: {
        elem: "svg",
        attrs: {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 32 32",
          fill: "currentColor",
          width: 64,
          height: 64,
        },
        content: [],
        name: "empty-pictogram",
      },
    };

    const result = template(input);
    expect(result).toContain("<svg");
    expect(result).not.toContain("path");
    expect(result).toContain('preserveAspectRatio="xMidYMid meet"');
  });

  test("should handle complex content structures", () => {
    const input: PictogramOutput = {
      moduleName: "ComplexPictogram",
      filepath: "complex-pictogram/index.js",
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
            attrs: { d: "M0 0h16v16H0z" }
          },
          {
            elem: "path",
            attrs: { d: "M16 16h16v16H16z" }
          }
        ],
        name: "complex-pictogram",
      },
    };

    const result = template(input);
    expect(result).toContain('d="M0 0h16v16H0z"');
    expect(result).toContain('d="M16 16h16v16H16z"');
  });
}); 