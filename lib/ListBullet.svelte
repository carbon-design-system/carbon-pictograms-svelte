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
  <path d="M4,31.36c-1.853,0-3.36-1.508-3.36-3.36S2.147,24.64,4,24.64S7.36,26.147,7.36,28S5.853,31.36,4,31.36	z M4,25.36c-1.456,0-2.64,1.184-2.64,2.64S2.544,30.64,4,30.64S6.64,29.456,6.64,28S5.456,25.36,4,25.36z M31,28.36H11v-0.72h20	V28.36z M4,19.36c-1.853,0-3.36-1.508-3.36-3.36S2.147,12.64,4,12.64S7.36,14.147,7.36,16S5.853,19.36,4,19.36z M4,13.36	c-1.456,0-2.64,1.185-2.64,2.64c0,1.456,1.185,2.64,2.64,2.64S6.64,17.456,6.64,16S5.456,13.36,4,13.36z M31,16.36H11v-0.72h20	V16.36z M4,7.36C2.147,7.36,0.64,5.853,0.64,4S2.147,0.64,4,0.64S7.36,2.147,7.36,4S5.853,7.36,4,7.36z M4,1.36	C2.544,1.36,1.36,2.544,1.36,4S2.544,6.64,4,6.64S6.64,5.456,6.64,4S5.456,1.36,4,1.36z M31,4.36H11V3.64h20V4.36z"></path>
</svg>