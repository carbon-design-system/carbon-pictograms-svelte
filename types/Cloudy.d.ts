/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CloudyProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Cloudy extends SvelteComponentTyped<CloudyProps, {}, {}> {}
