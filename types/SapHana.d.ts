/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SapHanaProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class SapHana extends SvelteComponentTyped<
  SapHanaProps,
  {},
  {}
> {}
