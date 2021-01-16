/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface MobileAddProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class MobileAdd extends SvelteComponentTyped<
  MobileAddProps,
  {},
  {}
> {}
