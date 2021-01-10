/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface QuestionAndAnswerProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class QuestionAndAnswer extends SvelteComponentTyped<
  QuestionAndAnswerProps,
  {},
  {}
> {}
