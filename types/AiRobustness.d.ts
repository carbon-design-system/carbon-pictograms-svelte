/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface AiRobustnessProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class AiRobustness extends SvelteComponentTyped<
  AiRobustnessProps,
  {},
  {}
> {}
