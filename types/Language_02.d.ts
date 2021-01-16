/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface Language_02Props
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Language_02 extends SvelteComponentTyped<
  Language_02Props,
  {},
  {}
> {}
