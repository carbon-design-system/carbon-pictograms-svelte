/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface AdvocateProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Advocate extends SvelteComponentTyped<
  AdvocateProps,
  {},
  {}
> {}
