/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PriceProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Price extends SvelteComponentTyped<PriceProps, {}, {}> {}
