/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface RioDeJaneiroProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class RioDeJaneiro extends SvelteComponentTyped<
  RioDeJaneiroProps,
  {},
  {}
> {}
