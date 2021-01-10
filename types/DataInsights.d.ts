/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface DataInsightsProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class DataInsights extends SvelteComponentTyped<
  DataInsightsProps,
  {},
  {}
> {}
