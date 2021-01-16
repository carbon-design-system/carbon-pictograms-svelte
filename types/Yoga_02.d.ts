/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface Yoga_02Props
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Yoga_02 extends SvelteComponentTyped<
  Yoga_02Props,
  {},
  {}
> {}
