/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface MachineLearning_03Props
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class MachineLearning_03 extends SvelteComponentTyped<
  MachineLearning_03Props,
  {},
  {}
> {}
