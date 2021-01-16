/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface WreckingBallProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class WreckingBall extends SvelteComponentTyped<
  WreckingBallProps,
  {},
  {}
> {}
