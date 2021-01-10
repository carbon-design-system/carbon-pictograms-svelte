/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CognosAnalyticsProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class CognosAnalytics extends SvelteComponentTyped<
  CognosAnalyticsProps,
  {},
  {}
> {}
