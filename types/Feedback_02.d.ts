/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface Feedback_02Props
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Feedback_02 extends SvelteComponentTyped<
  Feedback_02Props,
  {},
  {}
> {}
