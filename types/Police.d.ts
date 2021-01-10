/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PoliceProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Police extends SvelteComponentTyped<PoliceProps, {}, {}> {}
