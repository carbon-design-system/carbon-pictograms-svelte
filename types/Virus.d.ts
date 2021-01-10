/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface VirusProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Virus extends SvelteComponentTyped<VirusProps, {}, {}> {}
