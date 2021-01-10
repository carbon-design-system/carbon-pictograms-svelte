/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SliderProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Slider extends SvelteComponentTyped<SliderProps, {}, {}> {}
