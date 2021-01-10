/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface NetworkProtectionProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class NetworkProtection extends SvelteComponentTyped<
  NetworkProtectionProps,
  {},
  {}
> {}
