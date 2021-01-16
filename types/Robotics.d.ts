/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface RoboticsProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Robotics extends SvelteComponentTyped<
  RoboticsProps,
  {},
  {}
> {}
