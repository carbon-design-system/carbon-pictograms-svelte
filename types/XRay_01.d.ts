/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface XRay_01Props
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

export default class XRay_01 extends SvelteComponentTyped<
  XRay_01Props,
  {},
  {}
> {}
