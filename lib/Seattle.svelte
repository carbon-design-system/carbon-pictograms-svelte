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
  <path d="M31,15.64h-2.64v-2h-4v-2h-2.211L20.36,9.851V7.64h-3v-2h-1V1c0-0.199-0.161-0.36-0.36-0.36	S15.64,0.801,15.64,1v4.64h-1v2h-3v2.211L9.851,11.64H7.64v2h-4v2H1v0.72h2.64v2h4v2h2v2h2V31h0.72v-8.64h1.28V31h0.72v-8.64h1.28	V31h0.72v-8.64h1.28V31h0.721v-8.64h1.279V31h0.721v-8.64h2v-2h2v-2h4v-2H31V15.64z M23.64,13.64h-1.28v-1.28h1.279L23.64,13.64	L23.64,13.64z M20.36,13.64v-1.28h1.279v1.28H20.36z M18.36,13.64v-1.28h1.279v1.28H18.36z M16.36,13.64v-1.28h1.28v1.28H16.36z M14.36,13.64v-1.28h1.28v1.28H14.36z M12.36,13.64v-1.28h1.28v1.28H12.36z M10.36,13.64v-1.28h1.28v1.28H10.36z M15.36,6.36h1.28	v1.28h-1.28V6.36z M12.36,10.149V8.36h2.28h2.72h2.279v1.789l1.491,1.491H10.869L12.36,10.149z M8.36,12.36h1.28v1.28H8.36V12.36z M4.36,14.36h23.28v1.28H4.36V14.36z M8.36,18.36h1.28v1.279H8.36V18.36z M11.64,18.36v1.279h-1.28V18.36H11.64z M13.64,18.36v1.279	h-1.28V18.36H13.64z M15.64,18.36v1.279h-1.28V18.36H15.64z M17.64,18.36v1.279h-1.28V18.36H17.64z M19.64,18.36v1.279h-1.28V18.36	H19.64z M21.64,18.36v1.279h-1.28V18.36H21.64z M10.36,21.64v-1.28h11.28v1.279L10.36,21.64L10.36,21.64z M23.64,19.64h-1.28v-1.28	h1.279L23.64,19.64L23.64,19.64z M27.64,17.64H4.36v-1.28h23.28C27.64,16.36,27.64,17.64,27.64,17.64z"></path>
</svg>