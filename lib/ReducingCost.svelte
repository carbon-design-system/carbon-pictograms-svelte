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
  <path d="M19.64,7.5c0-1.025,0.835-1.86,1.86-1.86h1.14V4	h0.721v1.64H26v0.72h-4.5c-0.629,0-1.14,0.512-1.14,1.14s0.511,1.14,1.14,1.14h3c1.025,0,1.86,0.834,1.86,1.86	s-0.835,1.86-1.86,1.86h-1.14V14h-0.72v-1.64H20v-0.72h4.5c0.629,0,1.14-0.512,1.14-1.14s-0.511-1.14-1.14-1.14h-3	C20.475,9.36,19.64,8.525,19.64,7.5z M14.64,9c0-4.61,3.75-8.36,8.36-8.36S31.36,4.39,31.36,9s-3.751,8.36-8.36,8.36	S14.64,13.61,14.64,9z M15.36,9c0,4.213,3.427,7.64,7.64,7.64s7.64-3.427,7.64-7.64S27.213,1.36,23,1.36S15.36,4.787,15.36,9z M30.64,27.13l-7.385-7.385C23.188,19.678,23.096,19.64,23,19.64H12.149L1.36,8.851V1H0.64v30c0,0.199,0.161,0.36,0.36,0.36h30	v-0.72H1.36V9.869l10.386,10.386c0.067,0.067,0.159,0.105,0.254,0.105h10.851l7.279,7.279H28v0.721h3.36V25h-0.72	C30.64,25,30.64,27.13,30.64,27.13z"></path>
</svg>