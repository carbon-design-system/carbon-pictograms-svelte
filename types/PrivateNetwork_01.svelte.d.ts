/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PrivateNetwork_01Props
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

export default class PrivateNetwork_01 extends SvelteComponentTyped<
  PrivateNetwork_01Props,
  {},
  {}
> {}
