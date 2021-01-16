/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CloudPakForSecurityProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class CloudPakForSecurity extends SvelteComponentTyped<
  CloudPakForSecurityProps,
  {},
  {}
> {}
