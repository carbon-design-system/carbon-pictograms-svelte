/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface Language_05Props
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

export default class Language_05 extends SvelteComponentTyped<
  Language_05Props,
  {},
  {}
> {}
