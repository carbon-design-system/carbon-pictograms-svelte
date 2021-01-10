/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface DuplicateFileProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class DuplicateFile extends SvelteComponentTyped<
  DuplicateFileProps,
  {},
  {}
> {}
