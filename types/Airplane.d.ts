/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface AirplaneProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Airplane extends SvelteComponentTyped<
  AirplaneProps,
  {},
  {}
> {}
