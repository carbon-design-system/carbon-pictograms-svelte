/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TemperatureLowProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class TemperatureLow extends SvelteComponentTyped<
  TemperatureLowProps,
  {},
  {}
> {}
