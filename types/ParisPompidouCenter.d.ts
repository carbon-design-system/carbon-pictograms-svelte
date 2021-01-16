/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ParisPompidouCenterProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class ParisPompidouCenter extends SvelteComponentTyped<
  ParisPompidouCenterProps,
  {},
  {}
> {}
