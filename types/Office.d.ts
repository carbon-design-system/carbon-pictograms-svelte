/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface OfficeProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Office extends SvelteComponentTyped<OfficeProps, {}, {}> {}
