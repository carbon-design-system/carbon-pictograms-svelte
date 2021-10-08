/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface Language_04Props
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  /**
   * Set a tabindex value
   */
  tabindex?: string;

  /**
   * Set a custom SVG fill color
   * @default "currentColor"
   */
  fill?: string;
}

export default class Language_04 extends SvelteComponentTyped<
  Language_04Props,
  {},
  {}
> {}
