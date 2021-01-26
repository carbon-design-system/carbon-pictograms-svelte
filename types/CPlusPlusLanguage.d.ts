/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CPlusPlusLanguageProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class CPlusPlusLanguage extends SvelteComponentTyped<
  CPlusPlusLanguageProps,
  {},
  {}
> {}
