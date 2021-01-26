/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface IbmZAndLinuxoneMultiFrameProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class IbmZAndLinuxoneMultiFrame extends SvelteComponentTyped<
  IbmZAndLinuxoneMultiFrameProps,
  {},
  {}
> {}
