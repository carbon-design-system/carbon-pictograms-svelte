/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface AiTransparencyProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class AiTransparency extends SvelteComponentTyped<
  AiTransparencyProps,
  {},
  {}
> {}
