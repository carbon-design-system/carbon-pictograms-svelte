/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PrivateNetwork_01Props
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class PrivateNetwork_01 extends SvelteComponentTyped<
  PrivateNetwork_01Props,
  {},
  {}
> {}
