/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface KnowsDarkDataProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class KnowsDarkData extends SvelteComponentTyped<
  KnowsDarkDataProps,
  {},
  {}
> {}
