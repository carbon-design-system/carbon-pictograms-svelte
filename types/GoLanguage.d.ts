/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface GoLanguageProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class GoLanguage extends SvelteComponentTyped<
  GoLanguageProps,
  {},
  {}
> {}
