/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface LockedNetwork_01Props
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

export default class LockedNetwork_01 extends SvelteComponentTyped<
  LockedNetwork_01Props,
  {},
  {}
> {}
