/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface AmsterdamWindmillProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class AmsterdamWindmill extends SvelteComponentTyped<
  AmsterdamWindmillProps,
  {},
  {}
> {}
