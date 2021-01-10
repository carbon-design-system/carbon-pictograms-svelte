/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FireAlarmProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class FireAlarm extends SvelteComponentTyped<
  FireAlarmProps,
  {},
  {}
> {}
