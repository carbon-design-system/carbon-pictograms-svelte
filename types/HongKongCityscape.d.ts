/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface HongKongCityscapeProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class HongKongCityscape extends SvelteComponentTyped<
  HongKongCityscapeProps,
  {},
  {}
> {}
