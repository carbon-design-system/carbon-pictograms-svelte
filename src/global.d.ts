declare module "@carbon/pictograms" {
  interface PictogramAttrs {
    xmlns: "http://www.w3.org/2000/svg";
    viewBox: "0 0 32 32";
    fill: "currentColor";
    width: 64;
    height: 64;
  }

  export interface PictogramOutput {
    moduleName: string;
    filepath: string;
    descriptor: {
      elem: "svg";
      attrs: PictogramAttrs;
      content: { elem: string; attrs: object }[];
      name: string;
    };
  }

  export type BuildIcons = {
    icons: ReadonlyArray<{
      name: string;
      friendlyName: string;
      namespace: [];
      assets: [
        {
          filepath: string;
          source: string;
          optimized: {
            data: string;
            info: {};
            path: string;
          };
        }
      ];
      output: [PictogramOutput];
      category: string;
    }>;
  };
}

declare module "@carbon/pictograms/metadata.json" {
  import type { BuildIcons } from "@carbon/pictograms";
  const value: BuildIcons;
  export default value;
}
