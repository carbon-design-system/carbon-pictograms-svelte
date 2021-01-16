/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface MachineLearning_04Props
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class MachineLearning_04 extends SvelteComponentTyped<
  MachineLearning_04Props,
  {},
  {}
> {}
