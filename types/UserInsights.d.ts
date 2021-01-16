/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface UserInsightsProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class UserInsights extends SvelteComponentTyped<
  UserInsightsProps,
  {},
  {}
> {}
