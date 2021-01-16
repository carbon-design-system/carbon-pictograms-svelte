/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ListBulletProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class ListBullet extends SvelteComponentTyped<
  ListBulletProps,
  {},
  {}
> {}
