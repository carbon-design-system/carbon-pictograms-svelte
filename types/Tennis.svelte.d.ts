/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TennisProps
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

export default class Tennis extends SvelteComponentTyped<TennisProps, {}, {}> {}
