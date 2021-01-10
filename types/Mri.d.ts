/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface MriProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Mri extends SvelteComponentTyped<MriProps, {}, {}> {}
