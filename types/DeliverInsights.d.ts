/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface DeliverInsightsProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class DeliverInsights extends SvelteComponentTyped<
  DeliverInsightsProps,
  {},
  {}
> {}
