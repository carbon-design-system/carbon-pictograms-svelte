/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface MqaProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Mqa extends SvelteComponentTyped<MqaProps, {}, {}> {}
