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
  <path d="M18.36,30h-0.72v-9c0-0.048,0.01-0.095,0.028-0.139l3.845-9.23c0.215-0.515,0.161-1.077-0.148-1.541	C21.055,9.626,20.558,9.36,20,9.36h-8c-0.558,0-1.055,0.266-1.364,0.73c-0.31,0.464-0.364,1.026-0.149,1.542l3.845,9.23	c0.018,0.044,0.027,0.091,0.027,0.139v9h-0.72v-8.928l-3.817-9.164c-0.305-0.73-0.225-1.56,0.214-2.218	C10.476,9.033,11.209,8.64,12,8.64h8c0.791,0,1.524,0.393,1.963,1.051s0.519,1.487,0.214,2.218l-3.816,9.164L18.36,30L18.36,30z M16,7.36c-1.577,0-2.86-1.283-2.86-2.86S14.423,1.64,16,1.64s2.86,1.283,2.86,2.86S17.577,7.36,16,7.36z M16,2.36	c-1.18,0-2.14,0.96-2.14,2.14S14.82,6.64,16,6.64s2.14-0.96,2.14-2.14S17.18,2.36,16,2.36z"></path>
</svg>