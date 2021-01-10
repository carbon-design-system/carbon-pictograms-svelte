/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface AlchemyLanguageProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class AlchemyLanguage extends SvelteComponentTyped<
  AlchemyLanguageProps,
  {},
  {}
> {}
