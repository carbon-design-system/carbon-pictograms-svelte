/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface DashboardProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Dashboard extends SvelteComponentTyped<
  DashboardProps,
  {},
  {}
> {}
