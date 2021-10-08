/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface OpenSourceProps
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

export default class OpenSource extends SvelteComponentTyped<
  OpenSourceProps,
  {},
  {}
> {}
