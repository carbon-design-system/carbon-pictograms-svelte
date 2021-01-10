/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CloudServicesPricingProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class CloudServicesPricing extends SvelteComponentTyped<
  CloudServicesPricingProps,
  {},
  {}
> {}
