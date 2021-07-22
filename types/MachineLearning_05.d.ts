/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface MachineLearning_05Props
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

export default class MachineLearning_05 extends SvelteComponentTyped<
  MachineLearning_05Props,
  {},
  {}
> {}
