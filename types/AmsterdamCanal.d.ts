/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface AmsterdamCanalProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class AmsterdamCanal extends SvelteComponentTyped<
  AmsterdamCanalProps,
  {},
  {}
> {}
