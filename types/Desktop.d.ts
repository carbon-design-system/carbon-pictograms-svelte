/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface DesktopProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Desktop extends SvelteComponentTyped<
  DesktopProps,
  {},
  {}
> {}
