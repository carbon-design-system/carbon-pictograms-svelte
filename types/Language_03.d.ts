/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface Language_03Props
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Language_03 extends SvelteComponentTyped<
  Language_03Props,
  {},
  {}
> {}
