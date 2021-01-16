/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface UniversityProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class University extends SvelteComponentTyped<
  UniversityProps,
  {},
  {}
> {}
