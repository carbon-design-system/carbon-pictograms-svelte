/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CompostBinProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class CompostBin extends SvelteComponentTyped<
  CompostBinProps,
  {},
  {}
> {}
