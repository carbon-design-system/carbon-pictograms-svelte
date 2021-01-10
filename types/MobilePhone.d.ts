/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface MobilePhoneProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class MobilePhone extends SvelteComponentTyped<
  MobilePhoneProps,
  {},
  {}
> {}
