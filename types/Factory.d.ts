/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FactoryProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Factory extends SvelteComponentTyped<
  FactoryProps,
  {},
  {}
> {}
