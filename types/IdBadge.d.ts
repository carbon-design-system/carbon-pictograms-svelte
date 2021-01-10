/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface IdBadgeProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class IdBadge extends SvelteComponentTyped<
  IdBadgeProps,
  {},
  {}
> {}
