declare module "@carbon/pictograms" {
  import { IconAttributes, IconContent } from "@carbon/icon-helpers";

  export type BuildIcons = ReadonlyArray<{
    filename: string;
    basename: string;
    prefix: [];
    descriptor: {
      elem: "svg";
      attrs: IconAttributes & { width: string; height: string };
      content: IconContent;
      name: string;
    };
    moduleName: string;
    outputOptions: { file: string };
  }>;
}
