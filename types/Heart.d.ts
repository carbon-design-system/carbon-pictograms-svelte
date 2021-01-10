/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface HeartProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Heart extends SvelteComponentTyped<HeartProps, {}, {}> {}
