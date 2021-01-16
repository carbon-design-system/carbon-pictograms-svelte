/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ActiveServerProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class ActiveServer extends SvelteComponentTyped<
  ActiveServerProps,
  {},
  {}
> {}
