/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface MelbourneProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Melbourne extends SvelteComponentTyped<
  MelbourneProps,
  {},
  {}
> {}
