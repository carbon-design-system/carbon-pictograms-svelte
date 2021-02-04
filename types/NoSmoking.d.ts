/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface NoSmokingProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class NoSmoking extends SvelteComponentTyped<
  NoSmokingProps,
  {},
  {}
> {}
