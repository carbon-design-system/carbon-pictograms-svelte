/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface LightningProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Lightning extends SvelteComponentTyped<
  LightningProps,
  {},
  {}
> {}
