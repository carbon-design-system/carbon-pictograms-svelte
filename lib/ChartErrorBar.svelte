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
  <path d="M31,31.36H1c-0.199,0-0.36-0.161-0.36-0.36V1h0.72v29.64h2.28V24c0-0.199,0.161-0.36,0.36-0.36	h2.64v-2.28H4v-0.72h6v0.721H7.36v2.279H10c0.199,0,0.36,0.161,0.36,0.36v6.64h2.28V18c0-0.199,0.161-0.36,0.36-0.36h2.64v-3.28H13	v-0.72h6v0.72h-2.64v3.28H19c0.199,0,0.36,0.161,0.36,0.36v12.64h2.279V12c0-0.199,0.161-0.36,0.36-0.36h2.64V7.36H22V6.64h6v0.72	h-2.64v4.28H28c0.199,0,0.36,0.161,0.36,0.36v18.64H31V31.36z M22.36,30.64h5.279V17.36H22.36V30.64z M13.36,30.64h5.28v-8.28h-5.28	C13.36,22.36,13.36,30.64,13.36,30.64z M4.36,30.64h5.28v-3.28H4.36V30.64z M7.36,26.64h2.28v-2.28H7.36V26.64z M4.36,26.64h2.28	v-2.28H4.36V26.64z M16.36,21.64h2.28v-3.28h-2.28V21.64z M13.36,21.64h2.28v-3.28h-2.28V21.64z M25.36,16.64h2.279v-4.28H25.36	V16.64z M22.36,16.64h2.279v-4.28H22.36V16.64z"></path>
</svg>