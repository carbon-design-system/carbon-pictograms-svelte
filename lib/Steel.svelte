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
  <path d="M31,31.36H1c-0.199,0-0.36-0.161-0.36-0.36v-2c0-0.199,0.161-0.36,0.36-0.36h0.64v-1.28H1	c-0.199,0-0.36-0.161-0.36-0.36v-2c0-0.199,0.161-0.36,0.36-0.36h5.851l7.639-7.639c-1.096-0.554-1.85-1.691-1.85-3.001	c0-1.731,1.316-3.161,3-3.341V1h0.72v10c0,0.199-0.161,0.36-0.36,0.36c-1.456,0-2.64,1.185-2.64,2.64	c0,1.115,0.695,2.071,1.674,2.457l0.712-0.711c0.141-0.141,0.368-0.141,0.509,0l0.712,0.711c0.979-0.386,1.673-1.342,1.673-2.457	h0.721c0,1.31-0.754,2.447-1.851,3.001l7.64,7.639H31c0.199,0,0.36,0.161,0.36,0.36v2c0,0.199-0.161,0.36-0.36,0.36h-0.64v1.279H31	c0.199,0,0.36,0.161,0.36,0.36v2C31.36,31.199,31.199,31.36,31,31.36z M1.36,30.64h29.28v-1.28H1.36V30.64z M2.36,28.64h27.28v-1.28	H2.36V28.64z M30,26.64h0.64v-1.28H1.36v1.279L30,26.64L30,26.64z M7.869,24.64h16.262l-7.368-7.367	c-0.49,0.115-1.036,0.115-1.526,0L7.869,24.64z M15.872,16.637c0.085,0.005,0.171,0.005,0.256,0L16,16.509L15.872,16.637z"></path>
</svg>