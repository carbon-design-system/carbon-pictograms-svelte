/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TemporaryBadgeProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class TemporaryBadge extends SvelteComponentTyped<
  TemporaryBadgeProps,
  {},
  {}
> {}
