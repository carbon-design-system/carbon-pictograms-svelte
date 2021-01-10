/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface QuestionProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Question extends SvelteComponentTyped<
  QuestionProps,
  {},
  {}
> {}
