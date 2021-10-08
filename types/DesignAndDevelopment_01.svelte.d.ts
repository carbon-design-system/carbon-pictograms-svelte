/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface DesignAndDevelopment_01Props
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

export default class DesignAndDevelopment_01 extends SvelteComponentTyped<
  DesignAndDevelopment_01Props,
  {},
  {}
> {}
