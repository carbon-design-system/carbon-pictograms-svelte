/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface JavaProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Java extends SvelteComponentTyped<JavaProps, {}, {}> {}
