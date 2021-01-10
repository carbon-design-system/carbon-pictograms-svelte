/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface AlarmProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Alarm extends SvelteComponentTyped<AlarmProps, {}, {}> {}
