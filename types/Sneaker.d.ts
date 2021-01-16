/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SneakerProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Sneaker extends SvelteComponentTyped<
  SneakerProps,
  {},
  {}
> {}
