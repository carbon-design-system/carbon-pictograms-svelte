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
  <path d="M16,31.36c-6.108,0-11.636-3.618-14.082-9.216	l0.66-0.289C4.91,27.192,10.178,30.64,16,30.64c8.072,0,14.64-6.567,14.64-14.64S24.073,1.36,16,1.36C7.927,1.36,1.36,7.927,1.36,16	c0,1.456,1.185,2.64,2.64,2.64S6.64,17.456,6.64,16c0-5.161,4.199-9.36,9.36-9.36s9.36,4.199,9.36,9.36	c0,1.853-1.508,3.36-3.36,3.36s-3.36-1.508-3.36-3.36c0-1.456-1.184-2.64-2.64-2.64c-1.352,0-2.47,1.021-2.622,2.333	c0.566,0.164,0.982,0.688,0.982,1.307c0,0.75-0.61,1.36-1.36,1.36s-1.36-0.61-1.36-1.36c0-0.631,0.431-1.163,1.015-1.315	c0.16-1.706,1.599-3.044,3.345-3.044c1.853,0,3.36,1.507,3.36,3.36c0,1.456,1.184,2.64,2.64,2.64s2.64-1.184,2.64-2.64	c0-4.764-3.876-8.64-8.64-8.64s-8.64,3.876-8.64,8.64c0,1.853-1.507,3.36-3.36,3.36S0.64,17.853,0.64,16	C0.64,7.53,7.53,0.64,16,0.64S31.36,7.53,31.36,16S24.47,31.36,16,31.36z M13,16.36c-0.353,0-0.64,0.287-0.64,0.64	c0,0.353,0.287,0.64,0.64,0.64s0.64-0.287,0.64-0.64C13.64,16.647,13.353,16.36,13,16.36z"></path>
</svg>