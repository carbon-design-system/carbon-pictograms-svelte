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
  <path d="M28.36,29.64v-5.28h2v-2.72h-2.72V22v2.36v5.279h-3.28V24.36h2v-2.72h-2.72V22v2.36v5.279	h-3.28V24.36h2v-2.72h-2.72V22v2.36v5.279h-1.28V5c0-0.056-0.014-0.111-0.038-0.161l-2-4c-0.121-0.244-0.522-0.244-0.644,0l-2,4	C13.653,4.889,13.64,4.944,13.64,5v24.64h-3.28v-5.28h2v-2.72H9.64V22v2.36v5.279H6.36V24.36h2v-2.72H5.64V22v2.36v5.279H2.36V24.36	h2v-2.72H1.64V22v2.36v5.279H1v0.721h30v-0.72H28.36z M29.64,23.64h-1.28v-1.28h1.279L29.64,23.64L29.64,23.64z M25.64,23.64h-1.28	v-1.28h1.279L25.64,23.64L25.64,23.64z M21.64,23.64h-1.28v-1.28h1.279L21.64,23.64L21.64,23.64z M11.64,23.64h-1.28v-1.28h1.28	V23.64z M7.64,23.64H6.36v-1.28h1.28C7.64,22.36,7.64,23.64,7.64,23.64z M3.64,23.64H2.36v-1.28h1.28	C3.64,22.36,3.64,23.64,3.64,23.64z M14.36,5.085L16,1.805l1.64,3.28V29.64h-3.28V5.085z"></path>
</svg>