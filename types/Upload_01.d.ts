/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface Upload_01Props
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Upload_01 extends SvelteComponentTyped<
  Upload_01Props,
  {},
  {}
> {}
