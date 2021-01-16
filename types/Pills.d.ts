/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PillsProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Pills extends SvelteComponentTyped<PillsProps, {}, {}> {}
