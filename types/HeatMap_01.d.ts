/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface HeatMap_01Props
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class HeatMap_01 extends SvelteComponentTyped<
  HeatMap_01Props,
  {},
  {}
> {}
