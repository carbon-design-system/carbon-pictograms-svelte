/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface MarketplaceProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Marketplace extends SvelteComponentTyped<
  MarketplaceProps,
  {},
  {}
> {}
