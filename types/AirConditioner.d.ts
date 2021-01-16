/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface AirConditionerProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class AirConditioner extends SvelteComponentTyped<
  AirConditionerProps,
  {},
  {}
> {}
