/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface Transform_01Props
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Transform_01 extends SvelteComponentTyped<
  Transform_01Props,
  {},
  {}
> {}
