/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface MadridStatueProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class MadridStatue extends SvelteComponentTyped<
  MadridStatueProps,
  {},
  {}
> {}
