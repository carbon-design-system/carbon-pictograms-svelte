/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface EscalatorDownProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class EscalatorDown extends SvelteComponentTyped<
  EscalatorDownProps,
  {},
  {}
> {}
