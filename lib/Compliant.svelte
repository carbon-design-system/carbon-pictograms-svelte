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
  <path d="M16,31.36C7.53,31.36,0.64,24.47,0.64,16	S7.53,0.64,16,0.64c2.889,0,5.689,0.801,8.123,2.321C24.36,2.761,24.666,2.64,25,2.64c0.75,0,1.36,0.61,1.36,1.36	c0,0.197-0.042,0.384-0.118,0.553C29.499,7.468,31.36,11.623,31.36,16C31.36,24.47,24.47,31.36,16,31.36z M16,1.36	C7.927,1.36,1.36,7.927,1.36,16c0,8.072,6.567,14.64,14.64,14.64c8.072,0,14.64-6.567,14.64-14.64c0-4.162-1.765-8.112-4.854-10.89	c-0.322,0.227-0.777,0.309-1.162,0.196l-9.632,15.763C15.22,21.312,15.36,21.641,15.36,22c0,0.75-0.61,1.36-1.36,1.36	s-1.36-0.61-1.36-1.36c0-0.354,0.136-0.679,0.36-0.921l-3.61-5.776C9.266,15.34,9.135,15.36,9,15.36c-0.75,0-1.36-0.61-1.36-1.36	S8.25,12.64,9,12.64s1.36,0.61,1.36,1.36c0,0.355-0.137,0.678-0.36,0.921l3.61,5.776c0.243-0.073,0.522-0.075,0.767-0.004	L24.009,4.93C23.78,4.687,23.64,4.359,23.64,4c0-0.156,0.026-0.306,0.075-0.445C21.402,2.118,18.742,1.36,16,1.36z M14,21.36	c-0.353,0-0.64,0.287-0.64,0.64s0.287,0.64,0.64,0.64s0.64-0.287,0.64-0.64S14.353,21.36,14,21.36z M9,13.36	c-0.353,0-0.64,0.287-0.64,0.64S8.647,14.64,9,14.64S9.64,14.353,9.64,14S9.353,13.36,9,13.36z M25,3.36	c-0.353,0-0.64,0.287-0.64,0.64S24.647,4.64,25,4.64S25.64,4.353,25.64,4S25.353,3.36,25,3.36z"></path>
</svg>