/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ChicagoProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Chicago extends SvelteComponentTyped<
  ChicagoProps,
  {},
  {}
> {}
