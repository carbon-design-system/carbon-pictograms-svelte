/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface EducationProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Education extends SvelteComponentTyped<
  EducationProps,
  {},
  {}
> {}
