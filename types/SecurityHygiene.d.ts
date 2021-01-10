/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SecurityHygieneProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class SecurityHygiene extends SvelteComponentTyped<
  SecurityHygieneProps,
  {},
  {}
> {}
