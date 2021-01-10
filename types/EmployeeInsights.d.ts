/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface EmployeeInsightsProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class EmployeeInsights extends SvelteComponentTyped<
  EmployeeInsightsProps,
  {},
  {}
> {}
