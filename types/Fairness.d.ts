/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FairnessProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Fairness extends SvelteComponentTyped<
  FairnessProps,
  {},
  {}
> {}
