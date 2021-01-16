/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TrainProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Train extends SvelteComponentTyped<TrainProps, {}, {}> {}
