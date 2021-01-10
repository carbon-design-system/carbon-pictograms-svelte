/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface Video_02Props
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Video_02 extends SvelteComponentTyped<
  Video_02Props,
  {},
  {}
> {}
