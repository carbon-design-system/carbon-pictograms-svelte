/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SingaporeProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Singapore extends SvelteComponentTyped<
  SingaporeProps,
  {},
  {}
> {}
