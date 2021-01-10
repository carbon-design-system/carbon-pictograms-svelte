/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface DubaiSkyscraperProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class DubaiSkyscraper extends SvelteComponentTyped<
  DubaiSkyscraperProps,
  {},
  {}
> {}
