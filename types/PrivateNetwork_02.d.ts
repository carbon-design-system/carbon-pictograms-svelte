/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PrivateNetwork_02Props
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class PrivateNetwork_02 extends SvelteComponentTyped<
  PrivateNetwork_02Props,
  {},
  {}
> {}
