/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface DesignResearchProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class DesignResearch extends SvelteComponentTyped<
  DesignResearchProps,
  {},
  {}
> {}
