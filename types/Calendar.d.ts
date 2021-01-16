/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CalendarProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Calendar extends SvelteComponentTyped<
  CalendarProps,
  {},
  {}
> {}
