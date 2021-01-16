/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CloudyWindyProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class CloudyWindy extends SvelteComponentTyped<
  CloudyWindyProps,
  {},
  {}
> {}
