/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface Networking_04Props
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

export default class Networking_04 extends SvelteComponentTyped<
  Networking_04Props,
  {},
  {}
> {}
