/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface AgricultureProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Agriculture extends SvelteComponentTyped<
  AgricultureProps,
  {},
  {}
> {}
