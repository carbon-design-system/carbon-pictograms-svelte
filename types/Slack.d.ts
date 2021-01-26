/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SlackProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Slack extends SvelteComponentTyped<SlackProps, {}, {}> {}
