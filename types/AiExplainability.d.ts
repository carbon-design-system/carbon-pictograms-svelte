/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface AiExplainabilityProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class AiExplainability extends SvelteComponentTyped<
  AiExplainabilityProps,
  {},
  {}
> {}
