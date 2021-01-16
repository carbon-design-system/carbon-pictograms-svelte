/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface StockholmProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Stockholm extends SvelteComponentTyped<
  StockholmProps,
  {},
  {}
> {}
