/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface OkinawaProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Okinawa extends SvelteComponentTyped<
  OkinawaProps,
  {},
  {}
> {}
