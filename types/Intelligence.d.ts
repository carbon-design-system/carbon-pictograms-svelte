/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface IntelligenceProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Intelligence extends SvelteComponentTyped<
  IntelligenceProps,
  {},
  {}
> {}
