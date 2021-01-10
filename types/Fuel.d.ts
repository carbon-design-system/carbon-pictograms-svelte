/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FuelProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Fuel extends SvelteComponentTyped<FuelProps, {}, {}> {}
