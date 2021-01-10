/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface DnaProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Dna extends SvelteComponentTyped<DnaProps, {}, {}> {}
