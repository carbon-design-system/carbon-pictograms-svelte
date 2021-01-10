/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TelephoneProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Telephone extends SvelteComponentTyped<
  TelephoneProps,
  {},
  {}
> {}
