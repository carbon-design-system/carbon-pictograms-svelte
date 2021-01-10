/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface OilPumpProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class OilPump extends SvelteComponentTyped<
  OilPumpProps,
  {},
  {}
> {}
