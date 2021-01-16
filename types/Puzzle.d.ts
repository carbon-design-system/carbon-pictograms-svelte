/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PuzzleProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Puzzle extends SvelteComponentTyped<PuzzleProps, {}, {}> {}
