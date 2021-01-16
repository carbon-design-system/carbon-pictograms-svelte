/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface Download_01Props
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Download_01 extends SvelteComponentTyped<
  Download_01Props,
  {},
  {}
> {}
