/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BuildProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Build extends SvelteComponentTyped<BuildProps, {}, {}> {}
