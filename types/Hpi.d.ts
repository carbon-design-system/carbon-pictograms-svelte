/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface HpiProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Hpi extends SvelteComponentTyped<HpiProps, {}, {}> {}
