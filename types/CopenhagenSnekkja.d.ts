/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CopenhagenSnekkjaProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class CopenhagenSnekkja extends SvelteComponentTyped<
  CopenhagenSnekkjaProps,
  {},
  {}
> {}
