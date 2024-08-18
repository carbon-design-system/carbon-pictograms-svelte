declare module "@carbon/pictograms" {
  import { toString } from "@carbon/icon-helpers";

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
      content: Parameters<typeof toString>[0][];
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
