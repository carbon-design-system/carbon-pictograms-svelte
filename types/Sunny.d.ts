/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SunnyProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Sunny extends SvelteComponentTyped<SunnyProps, {}, {}> {}
