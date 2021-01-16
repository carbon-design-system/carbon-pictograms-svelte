/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface Feedback_01Props
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Feedback_01 extends SvelteComponentTyped<
  Feedback_01Props,
  {},
  {}
> {}
