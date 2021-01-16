/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface IdeateProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Ideate extends SvelteComponentTyped<IdeateProps, {}, {}> {}
