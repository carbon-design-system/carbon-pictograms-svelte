/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CloudAnalyticsProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class CloudAnalytics extends SvelteComponentTyped<
  CloudAnalyticsProps,
  {},
  {}
> {}
