/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface MachineLearning_01Props
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class MachineLearning_01 extends SvelteComponentTyped<
  MachineLearning_01Props,
  {},
  {}
> {}
