/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ThisSideUpProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class ThisSideUp extends SvelteComponentTyped<
  ThisSideUpProps,
  {},
  {}
> {}
