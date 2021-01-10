/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CalendarEventProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class CalendarEvent extends SvelteComponentTyped<
  CalendarEventProps,
  {},
  {}
> {}
