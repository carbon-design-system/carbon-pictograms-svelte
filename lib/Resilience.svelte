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
  <path d="M31,31.36H1v-0.72h30V31.36z M16,28.36	c-5.037,0-10.681-0.753-15.099-2.015l0.197-0.691C5.456,26.897,11.026,27.64,16,27.64s10.544-0.742,14.901-1.985l0.197,0.691	C26.681,27.607,21.036,28.36,16,28.36z M16,25.36c-6.223,0-11.769-1.484-15.216-4.072l0.433-0.576C4.542,23.208,9.93,24.64,16,24.64	s11.459-1.432,14.784-3.928l0.432,0.576C27.769,23.876,22.223,25.36,16,25.36z M16,22.509l-6.254-6.254l0.509-0.509l5.386,5.385V1	h0.72v20.131l5.385-5.385l0.51,0.509L16,22.509z"></path>
</svg>