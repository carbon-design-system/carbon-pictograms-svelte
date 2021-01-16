/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SecureDataProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class SecureData extends SvelteComponentTyped<
  SecureDataProps,
  {},
  {}
> {}
