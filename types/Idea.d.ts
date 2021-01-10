/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface IdeaProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Idea extends SvelteComponentTyped<IdeaProps, {}, {}> {}
