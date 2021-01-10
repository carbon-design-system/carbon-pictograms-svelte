/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface NaturalLanguageClassifierProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class NaturalLanguageClassifier extends SvelteComponentTyped<
  NaturalLanguageClassifierProps,
  {},
  {}
> {}
