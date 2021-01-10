/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface Person_09Props
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Person_09 extends SvelteComponentTyped<
  Person_09Props,
  {},
  {}
> {}
