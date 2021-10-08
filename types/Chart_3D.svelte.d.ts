/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface Chart_3DProps
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

export default class Chart_3D extends SvelteComponentTyped<
  Chart_3DProps,
  {},
  {}
> {}
