declare module "@carbon/pictograms" {
  import { IconContent } from "@carbon/icon-helpers";

  interface PictogramAttrs {
    xmlns: "http://www.w3.org/2000/svg";
    viewBox: "0 0 48 48";
    width: "48";
    height: "48";
  }

  export interface PictogramOutput {
    moduleName: string;
    filepath: string;
    descriptor: {
      elem: "svg";
      attrs: PictogramAttrs;
      content: IconContent[];
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
