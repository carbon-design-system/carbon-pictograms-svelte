/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ClientFinancing_01Props
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class ClientFinancing_01 extends SvelteComponentTyped<
  ClientFinancing_01Props,
  {},
  {}
> {}
