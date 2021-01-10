/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SecurityShieldProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class SecurityShield extends SvelteComponentTyped<
  SecurityShieldProps,
  {},
  {}
> {}
