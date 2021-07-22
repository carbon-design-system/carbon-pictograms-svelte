/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface Language_02Props
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

export default class Language_02 extends SvelteComponentTyped<
  Language_02Props,
  {},
  {}
> {}
