/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface VisualInsightsProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class VisualInsights extends SvelteComponentTyped<
  VisualInsightsProps,
  {},
  {}
> {}
