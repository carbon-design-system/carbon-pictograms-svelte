/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface HeadphonesProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Headphones extends SvelteComponentTyped<
  HeadphonesProps,
  {},
  {}
> {}
