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
  <path d="M31,31.36H1v-0.72h8.777l0.901-1.801c0.061-0.122,0.186-0.199,0.322-0.199h1.655L13.64,4.985	c0.002-0.051,0.015-0.101,0.038-0.146l2-4c0.121-0.244,0.522-0.244,0.644,0l2,4c0.022,0.045,0.035,0.095,0.037,0.146l0.986,23.655	H21c0.137,0,0.261,0.077,0.322,0.199l0.9,1.801H31V31.36z M10.583,30.64h10.835l-0.641-1.279h-9.555L10.583,30.64z M13.375,28.64	h5.25L17.644,5.092L16,1.805l-1.644,3.287L13.375,28.64z M17,24.36h-2v-0.72h2V24.36z M17,22.36h-2v-0.72h2V22.36z M17,20.36h-2	v-0.72h2V20.36z M16.36,7h-0.72V6h0.72V7z"></path>
</svg>