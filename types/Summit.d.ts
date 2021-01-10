/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SummitProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Summit extends SvelteComponentTyped<SummitProps, {}, {}> {}
