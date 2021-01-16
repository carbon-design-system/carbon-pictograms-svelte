/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface JavascriptProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Javascript extends SvelteComponentTyped<
  JavascriptProps,
  {},
  {}
> {}
