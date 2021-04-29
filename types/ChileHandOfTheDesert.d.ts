/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ChileHandOfTheDesertProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class ChileHandOfTheDesert extends SvelteComponentTyped<
  ChileHandOfTheDesertProps,
  {},
  {}
> {}
