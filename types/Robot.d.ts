/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface RobotProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Robot extends SvelteComponentTyped<RobotProps, {}, {}> {}
