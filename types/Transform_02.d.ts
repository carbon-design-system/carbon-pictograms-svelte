/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface Transform_02Props
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Transform_02 extends SvelteComponentTyped<
  Transform_02Props,
  {},
  {}
> {}
