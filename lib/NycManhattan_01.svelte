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
  <path d="M22.36,31h-0.72v-9.64H8.36V31H7.64V21c0-0.199,0.161-0.36,0.36-0.36h7.64V5.36H1V4.64h15	c0.199,0,0.36,0.161,0.36,0.36v15.64h5.28V14c0-0.199,0.161-0.36,0.36-0.36h2.64v-3.28H24c-0.199,0-0.36-0.161-0.36-0.36V4	c0-0.121,0.061-0.233,0.161-0.299l3-2c0.119-0.081,0.279-0.081,0.398,0l3,2C30.3,3.767,30.36,3.879,30.36,4v6	c0,0.199-0.161,0.36-0.36,0.36h-0.64v3.28H31v0.72h-8.64V31z M25.36,13.64h3.279v-3.28H25.36V13.64z M24.36,9.64h5.279V4.193	L27,2.433l-2.64,1.76V9.64z M29.36,30h-0.72v-2h0.721L29.36,30L29.36,30z M25.36,30h-0.72v-2h0.721L25.36,30L25.36,30z M16.36,30	h-0.72v-2h0.72V30z M12.36,30h-0.72v-2h0.72V30z M29.36,25h-0.72v-2h0.721L29.36,25L29.36,25z M25.36,25h-0.72v-2h0.721L25.36,25	L25.36,25z M16.36,25h-0.72v-2h0.72V25z M12.36,25h-0.72v-2h0.72V25z M29.36,20.002h-0.72v-2h0.721L29.36,20.002L29.36,20.002z M25.36,20.002h-0.72v-2h0.721L25.36,20.002L25.36,20.002z M12.36,19.002h-0.72v-2h0.72V19.002z M8.36,19.002H7.64v-2h0.72V19.002z M4.36,19.002H3.64v-2h0.72V19.002z M12.36,14h-0.72v-2h0.72V14z M8.36,14H7.64v-2h0.72V14z M4.36,14H3.64v-2h0.72V14z M12.36,9	h-0.72V7h0.72V9z M8.36,9H7.64V7h0.72V9z M4.36,9H3.64V7h0.72V9z"></path>
</svg>