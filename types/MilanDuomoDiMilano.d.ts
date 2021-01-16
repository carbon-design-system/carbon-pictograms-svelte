/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface MilanDuomoDiMilanoProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class MilanDuomoDiMilano extends SvelteComponentTyped<
  MilanDuomoDiMilanoProps,
  {},
  {}
> {}
