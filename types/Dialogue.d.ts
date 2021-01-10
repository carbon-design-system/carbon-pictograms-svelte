/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface DialogueProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Dialogue extends SvelteComponentTyped<
  DialogueProps,
  {},
  {}
> {}
