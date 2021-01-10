/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface Flower_02Props
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Flower_02 extends SvelteComponentTyped<
  Flower_02Props,
  {},
  {}
> {}
