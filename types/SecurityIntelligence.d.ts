/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SecurityIntelligenceProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class SecurityIntelligence extends SvelteComponentTyped<
  SecurityIntelligenceProps,
  {},
  {}
> {}
