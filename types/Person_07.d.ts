/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface Person_07Props
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Person_07 extends SvelteComponentTyped<
  Person_07Props,
  {},
  {}
> {}
