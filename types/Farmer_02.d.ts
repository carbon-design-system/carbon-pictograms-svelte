/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface Farmer_02Props
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Farmer_02 extends SvelteComponentTyped<
  Farmer_02Props,
  {},
  {}
> {}
