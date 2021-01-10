/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface RaleighNcProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class RaleighNc extends SvelteComponentTyped<
  RaleighNcProps,
  {},
  {}
> {}
