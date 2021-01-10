/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SaoPauloProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class SaoPaulo extends SvelteComponentTyped<
  SaoPauloProps,
  {},
  {}
> {}
