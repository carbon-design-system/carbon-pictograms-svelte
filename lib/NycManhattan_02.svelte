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
  <path d="M24.36,31h-0.72V19.36h-7.28V31h-0.72V12.36H1v-0.72h3.64V8.36H4C3.801,8.36,3.64,8.199,3.64,8	V3c0-0.121,0.06-0.233,0.16-0.299l3-2c0.121-0.081,0.278-0.081,0.399,0l3,2C10.3,2.767,10.36,2.879,10.36,3v5	c0,0.199-0.161,0.36-0.36,0.36H9.36v3.28H16c0.199,0,0.36,0.161,0.36,0.36v6.64h7.28V8c0-0.199,0.161-0.36,0.36-0.36h7v0.72h-6.64	C24.36,8.36,24.36,31,24.36,31z M5.36,11.64h3.28V8.36H5.36V11.64z M4.36,7.64h5.28V3.193L7,1.433l-2.64,1.76	C4.36,3.193,4.36,7.64,4.36,7.64z M21.86,27h-0.72v-2h0.721L21.86,27L21.86,27z M18.86,27h-0.72v-2h0.721L18.86,27L18.86,27z M21.86,23h-0.72v-2h0.721L21.86,23L21.86,23z M18.86,23h-0.72v-2h0.721L18.86,23L18.86,23z M11.36,23h-0.72v-2h0.72V23z M7.36,23	H6.64v-2h0.72C7.36,21,7.36,23,7.36,23z M3.36,23H2.64v-2h0.72C3.36,21,3.36,23,3.36,23z M29.86,17h-0.72v-2h0.721L29.86,17	L29.86,17z M26.86,17h-0.72v-2h0.721L26.86,17L26.86,17z M11.36,17h-0.72v-2h0.72V17z M7.36,17H6.64v-2h0.72	C7.36,15,7.36,17,7.36,17z M3.36,17H2.64v-2h0.72C3.36,15,3.36,17,3.36,17z M29.86,13h-0.72v-2h0.721L29.86,13L29.86,13z M26.86,13	h-0.72v-2h0.721L26.86,13L26.86,13z"></path>
</svg>