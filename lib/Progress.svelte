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
  <path d="M31,31.36h-8c-0.199,0-0.36-0.161-0.36-0.36v-8c0-0.199,0.161-0.36,0.36-0.36h8	c0.199,0,0.36,0.161,0.36,0.36v8C31.36,31.199,31.199,31.36,31,31.36z M23.36,30.64h7.279v-7.28H23.36V30.64z M20,31.36h-8	c-0.125,0-0.241-0.065-0.306-0.171c-0.066-0.106-0.072-0.239-0.016-0.351l4-8c0.121-0.244,0.522-0.244,0.644,0l4,8	c0.056,0.111,0.05,0.244-0.016,0.351C20.24,31.295,20.125,31.36,20,31.36z M12.583,30.64h6.835L16,23.805L12.583,30.64z M5,31.36	c-2.404,0-4.36-1.956-4.36-4.36S2.596,22.64,5,22.64S9.36,24.596,9.36,27S7.404,31.36,5,31.36z M5,23.36	c-2.007,0-3.64,1.633-3.64,3.64S2.993,30.64,5,30.64S8.64,29.007,8.64,27S7.007,23.36,5,23.36z M31,20.36h-8v-0.72h7.64v-7.28H23	v-0.72h8c0.199,0,0.36,0.161,0.36,0.36v8C31.36,20.199,31.199,20.36,31,20.36z M20,20.36h-8v-0.72h7.418l-3.74-7.479l0.644-0.322	l4,8c0.056,0.111,0.05,0.244-0.016,0.351C20.24,20.295,20.125,20.36,20,20.36z M5,20.36c-2.404,0-4.36-1.956-4.36-4.36h0.72	c0,2.007,1.633,3.64,3.64,3.64S8.64,18.007,8.64,16S7.007,12.36,5,12.36v-0.72c2.404,0,4.36,1.956,4.36,4.36S7.404,20.36,5,20.36z M5,9.36V8.64c2.007,0,3.64-1.633,3.64-3.64S7.007,1.36,5,1.36V0.64c2.404,0,4.36,1.956,4.36,4.36S7.404,9.36,5,9.36z M19.678,9.161	l-4-8l0.644-0.322l4,8L19.678,9.161z M31.36,9h-0.72V1.36H23V0.64h8c0.199,0,0.36,0.161,0.36,0.36V9z"></path>
</svg>