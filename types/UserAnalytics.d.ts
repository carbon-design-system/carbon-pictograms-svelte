/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface UserAnalyticsProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class UserAnalytics extends SvelteComponentTyped<
  UserAnalyticsProps,
  {},
  {}
> {}
