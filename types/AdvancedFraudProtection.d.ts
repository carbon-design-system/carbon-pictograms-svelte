/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface AdvancedFraudProtectionProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class AdvancedFraudProtection extends SvelteComponentTyped<
  AdvancedFraudProtectionProps,
  {},
  {}
> {}
