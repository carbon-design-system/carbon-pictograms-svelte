/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface EarthProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Earth extends SvelteComponentTyped<EarthProps, {}, {}> {}
