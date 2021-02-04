/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface UserExperienceDesignProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class UserExperienceDesign extends SvelteComponentTyped<
  UserExperienceDesignProps,
  {},
  {}
> {}
