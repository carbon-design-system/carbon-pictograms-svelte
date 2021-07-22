/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface MachineLearning_02Props
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

export default class MachineLearning_02 extends SvelteComponentTyped<
  MachineLearning_02Props,
  {},
  {}
> {}
