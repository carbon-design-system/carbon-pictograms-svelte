/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface DeveloperZOsProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class DeveloperZOs extends SvelteComponentTyped<
  DeveloperZOsProps,
  {},
  {}
> {}
