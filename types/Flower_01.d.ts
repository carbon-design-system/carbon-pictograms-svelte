/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface Flower_01Props
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Flower_01 extends SvelteComponentTyped<
  Flower_01Props,
  {},
  {}
> {}
