/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface Export_02Props
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Export_02 extends SvelteComponentTyped<
  Export_02Props,
  {},
  {}
> {}
