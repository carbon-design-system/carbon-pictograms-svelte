/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface EndpointProtectionProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class EndpointProtection extends SvelteComponentTyped<
  EndpointProtectionProps,
  {},
  {}
> {}
