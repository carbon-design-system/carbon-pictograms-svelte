/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ColombiaCathedralOfLasLajasProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class ColombiaCathedralOfLasLajas extends SvelteComponentTyped<
  ColombiaCathedralOfLasLajasProps,
  {},
  {}
> {}
