/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface HighRiskUsersProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class HighRiskUsers extends SvelteComponentTyped<
  HighRiskUsersProps,
  {},
  {}
> {}
