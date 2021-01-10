/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface Yoga_01Props
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Yoga_01 extends SvelteComponentTyped<
  Yoga_01Props,
  {},
  {}
> {}
