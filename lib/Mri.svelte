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
  <path d="M17,30.36c-3.732,0-7.257-1.42-9.944-4H3.36v3.279H5v0.721H1v-0.72h1.64v-3.28h-2v-4.72h3.15	C3.026,19.857,2.64,17.963,2.64,16C2.64,8.082,9.082,1.64,17,1.64S31.36,8.082,31.36,16S24.918,30.36,17,30.36z M8.126,26.36	c2.471,2.121,5.588,3.279,8.874,3.279c7.521,0,13.64-6.118,13.64-13.64c0-7.521-6.118-13.64-13.64-13.64	C9.479,2.36,3.36,8.479,3.36,16c0,1.97,0.409,3.865,1.217,5.64h3.731C7.214,19.962,6.64,18.026,6.64,16	c0-5.712,4.647-10.36,10.36-10.36S27.36,10.287,27.36,16S22.713,26.36,17,26.36v-0.72c2.881,0,5.471-1.27,7.238-3.279H1.36v3.279H17	v0.721L8.126,26.36L8.126,26.36z M9.181,21.64h15.632c1.148-1.587,1.826-3.535,1.826-5.64c0-5.315-4.324-9.64-9.64-9.64	S7.36,10.685,7.36,16C7.36,18.045,7.989,19.991,9.181,21.64z M19,4.36h-4V3.64h4V4.36z"></path>
</svg>