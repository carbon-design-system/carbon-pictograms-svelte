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
  <path d="M31,31.36H1v-0.72h0.64V20c0-0.199,0.161-0.36,0.36-0.36h5.64V19c0-0.199,0.161-0.36,0.36-0.36h16	c0.199,0,0.36,0.161,0.36,0.36v0.64H30c0.199,0,0.36,0.161,0.36,0.36v10.64H31V31.36z M24.36,30.64h5.279V20.36H24.36V30.64z M8.36,30.64h15.28V19.36H8.36V30.64z M2.36,30.64h5.28V20.36H2.36V30.64z M27.36,30h-0.72v-3h0.721L27.36,30L27.36,30z M20.36,30	h-0.72v-3h0.721L20.36,30L20.36,30z M16.36,30h-0.72v-3h0.72V30z M12.36,30h-0.72v-3h0.72V30z M5.36,30H4.64v-3h0.72	C5.36,27,5.36,30,5.36,30z M27.36,25h-0.72v-3h0.721L27.36,25L27.36,25z M20.36,25h-0.72v-3h0.721L20.36,25L20.36,25z M16.36,25	h-0.72v-3h0.72V25z M12.36,25h-0.72v-3h0.72V25z M5.36,25H4.64v-3h0.72C5.36,22,5.36,25,5.36,25z M22.36,17h-0.72v-3.64H10.36V17	H9.64v-4c0-3.386,2.66-6.163,6-6.35V2c0-0.199,0.161-0.36,0.36-0.36h3c0.199,0,0.36,0.161,0.36,0.36v2c0,0.199-0.161,0.36-0.36,0.36	h-2.64v2.29c3.34,0.188,6,2.964,6,6.35V17z M10.372,12.64h11.257C21.442,9.697,18.989,7.36,16,7.36S10.558,9.697,10.372,12.64z M16.36,3.64h2.28V2.36h-2.28V3.64z M19.36,17h-0.72v-2h0.721L19.36,17L19.36,17z M16.36,17h-0.72v-2h0.72V17z M13.36,17h-0.72v-2	h0.72V17z"></path>
</svg>