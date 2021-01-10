/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface Person_02Props
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Person_02 extends SvelteComponentTyped<
  Person_02Props,
  {},
  {}
> {}
