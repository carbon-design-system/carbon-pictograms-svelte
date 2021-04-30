/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface AiEthicsProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class AiEthics extends SvelteComponentTyped<
  AiEthicsProps,
  {},
  {}
> {}
