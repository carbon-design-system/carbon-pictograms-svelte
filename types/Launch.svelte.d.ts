/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface LaunchProps
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

export default class Launch extends SvelteComponentTyped<LaunchProps, {}, {}> {}
