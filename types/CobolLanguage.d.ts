/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CobolLanguageProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class CobolLanguage extends SvelteComponentTyped<
  CobolLanguageProps,
  {},
  {}
> {}
