/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface LondonBigBenProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class LondonBigBen extends SvelteComponentTyped<
  LondonBigBenProps,
  {},
  {}
> {}
