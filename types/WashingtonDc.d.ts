/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface WashingtonDcProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class WashingtonDc extends SvelteComponentTyped<
  WashingtonDcProps,
  {},
  {}
> {}
