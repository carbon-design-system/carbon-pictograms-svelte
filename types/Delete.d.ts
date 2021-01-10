/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface DeleteProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Delete extends SvelteComponentTyped<DeleteProps, {}, {}> {}
