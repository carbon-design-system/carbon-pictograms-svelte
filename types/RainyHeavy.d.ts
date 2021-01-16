/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface RainyHeavyProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class RainyHeavy extends SvelteComponentTyped<
  RainyHeavyProps,
  {},
  {}
> {}
