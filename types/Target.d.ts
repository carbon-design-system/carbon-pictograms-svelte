/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TargetProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Target extends SvelteComponentTyped<TargetProps, {}, {}> {}
