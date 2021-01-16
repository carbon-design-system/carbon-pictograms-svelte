/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface RecycleProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Recycle extends SvelteComponentTyped<
  RecycleProps,
  {},
  {}
> {}
