/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface Networking_01Props
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

export default class Networking_01 extends SvelteComponentTyped<
  Networking_01Props,
  {},
  {}
> {}
