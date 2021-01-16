/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TeamAlignmentProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class TeamAlignment extends SvelteComponentTyped<
  TeamAlignmentProps,
  {},
  {}
> {}
