/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CollegeProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class College extends SvelteComponentTyped<
  CollegeProps,
  {},
  {}
> {}
