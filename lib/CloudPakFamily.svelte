<script>
  /**
   * Specify the pictogram title.
   * @type {string}
   */
  export let title = undefined;

  $: labelled =  $$props["aria-label"] || $$props["aria-labelledby"] || $$props["title"];
  $: attributes = {
    "aria-hidden": labelled ? undefined : true,
    role: labelled ? "img" : undefined,
    focusable: Number($$props["tabindex"]) === 0  ? true : undefined,
  };
</script>

<svg
  preserveAspectRatio="xMidYMid meet"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 32 32"
  width="64"
  height="64"
  fill="currentColor"
  {title}
  {...attributes}
  {...$$restProps}>
  <path d="M16,31.36c-0.059,0-0.117-0.015-0.171-0.043l-13-7C2.713,24.254,2.64,24.133,2.64,24V8	c0-0.132,0.073-0.254,0.189-0.317l13-7c0.107-0.058,0.234-0.058,0.342,0l13,7C29.287,7.746,29.36,7.868,29.36,8v16	c0,0.133-0.073,0.254-0.189,0.317l-13,7C16.117,31.346,16.059,31.36,16,31.36z M3.36,23.785L16,30.591l12.64-6.806V8.215L16,1.409	L3.36,8.215V23.785z M20,23.36c-0.055,0-0.11-0.013-0.161-0.038L16,21.403l-3.839,1.919c-0.102,0.051-0.221,0.051-0.322,0l-4-1.999	c-0.122-0.062-0.199-0.186-0.199-0.322V16c0-0.136,0.077-0.261,0.199-0.322l3.801-1.901V9c0-0.136,0.077-0.261,0.199-0.322l3.996-2	c0.102-0.051,0.221-0.05,0.322,0l4.004,2C20.283,8.738,20.36,8.863,20.36,9v4.778l3.801,1.901c0.122,0.061,0.199,0.186,0.199,0.322	v5.001c0,0.137-0.077,0.261-0.199,0.322l-4,1.999C20.11,23.348,20.055,23.36,20,23.36z M16.36,20.778l3.64,1.82l3.64-1.819v-4.556	L20,14.402l-3.64,1.82V20.778z M8.36,20.778l3.64,1.82l3.64-1.819v-4.556L12,14.402l-3.64,1.82V20.778z M12.36,13.777l3.64,1.82	l3.64-1.82V9.222l-3.644-1.82l-3.636,1.82V13.777z"></path>
</svg>