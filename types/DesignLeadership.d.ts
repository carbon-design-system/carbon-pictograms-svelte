/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface DesignLeadershipProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class DesignLeadership extends SvelteComponentTyped<
  DesignLeadershipProps,
  {},
  {}
> {}
