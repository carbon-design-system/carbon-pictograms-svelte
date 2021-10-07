/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SocialWork_01Props
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

export default class SocialWork_01 extends SvelteComponentTyped<
  SocialWork_01Props,
  {},
  {}
> {}
