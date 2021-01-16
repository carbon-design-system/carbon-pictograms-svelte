/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SecureHybridCloudProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class SecureHybridCloud extends SvelteComponentTyped<
  SecureHybridCloudProps,
  {},
  {}
> {}
