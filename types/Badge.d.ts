/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BadgeProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Badge extends SvelteComponentTyped<BadgeProps, {}, {}> {}
