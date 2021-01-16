/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface WeatherProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Weather extends SvelteComponentTyped<
  WeatherProps,
  {},
  {}
> {}
