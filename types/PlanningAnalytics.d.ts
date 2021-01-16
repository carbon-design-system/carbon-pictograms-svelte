/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PlanningAnalyticsProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class PlanningAnalytics extends SvelteComponentTyped<
  PlanningAnalyticsProps,
  {},
  {}
> {}
