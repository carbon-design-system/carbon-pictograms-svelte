/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface EmbedProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Embed extends SvelteComponentTyped<EmbedProps, {}, {}> {}
