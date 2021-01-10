/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface Export_01Props
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Export_01 extends SvelteComponentTyped<
  Export_01Props,
  {},
  {}
> {}
