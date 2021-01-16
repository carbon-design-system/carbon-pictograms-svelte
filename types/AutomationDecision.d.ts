/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface AutomationDecisionProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class AutomationDecision extends SvelteComponentTyped<
  AutomationDecisionProps,
  {},
  {}
> {}
