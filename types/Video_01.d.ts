/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface Video_01Props
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Video_01 extends SvelteComponentTyped<
  Video_01Props,
  {},
  {}
> {}
