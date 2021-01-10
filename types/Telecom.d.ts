/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TelecomProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Telecom extends SvelteComponentTyped<
  TelecomProps,
  {},
  {}
> {}
