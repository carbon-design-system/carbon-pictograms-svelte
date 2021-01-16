/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BulldozerProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Bulldozer extends SvelteComponentTyped<
  BulldozerProps,
  {},
  {}
> {}
