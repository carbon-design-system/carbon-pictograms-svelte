/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface MachineLearning_06Props
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

export default class MachineLearning_06 extends SvelteComponentTyped<
  MachineLearning_06Props,
  {},
  {}
> {}
