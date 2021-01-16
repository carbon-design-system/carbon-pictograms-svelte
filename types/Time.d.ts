/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TimeProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Time extends SvelteComponentTyped<TimeProps, {}, {}> {}
