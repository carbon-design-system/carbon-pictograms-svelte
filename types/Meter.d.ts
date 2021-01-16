/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface MeterProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Meter extends SvelteComponentTyped<MeterProps, {}, {}> {}
