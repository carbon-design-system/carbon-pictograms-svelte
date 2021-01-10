/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface IbmZProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class IbmZ extends SvelteComponentTyped<IbmZProps, {}, {}> {}
