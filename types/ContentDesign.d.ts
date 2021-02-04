/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ContentDesignProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class ContentDesign extends SvelteComponentTyped<
  ContentDesignProps,
  {},
  {}
> {}
