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
  <path d="M25.635,7.64l0.005,22h-2.28V9l-1.229-2.541l-4.556,3.314l0.063,12.226l-0.021,7.641H15.36V7	c0-1.786-5.72-1.786-5.72,0v22.64H6.36v-3.28h1v-5.72h-1v-1.301h1V16.36v-0.72v-2.021h-1v-1.28h1V6.64h-1v-3H1.64v3h-1v2v0.72v2.979	h1v1.28h-1v5.72h1v1.301h-1v3v0.721v2h1v3.279h-1v0.721H31l0.36-0.021V7.64H25.635z M21.484,7.82l-1.051,5.776H19v0.72h1.302	l-1.95,10.715l0.008-3.033l-0.062-11.859L21.484,7.82z M18.341,29.041l0.013,0.002l3.807-20.916l0.479,0.958V24.64H21v0.721h1.64	v4.279h-4.3L18.341,29.041z M14.64,18.639H13v0.721l1.64,0.001v2.28L13,21.64v0.721l1.64,0.001v7.279h-2.28V10.36h2.28V18.639z M10.36,7c0-0.186,0.75-0.64,2.14-0.64S14.64,6.814,14.64,7v2.64h-3v20h-1.28C10.36,29.64,10.36,7,10.36,7z M6.64,7.36v4.259h-1	v2.72h1v1.302h-1v0.72h1v2.258h-1v2.742h1v4.279h-1v4H4.36V4.36h1.28v3H6.64z M1.36,25.64v-1.28h1v-0.72h-1v-2.28h1v-2.742h-1v-4.28	h1v-2.72h-1V9.36h1V8.64h-1V7.36h1v-3h1.28v25.28H2.36v-4C2.36,25.64,1.36,25.64,1.36,25.64z M26.356,12.64v-1.28H28v-0.72h-1.644	l-0.001-2.28h4.272c-0.064,4.024-1.146,6.613-2.301,9.335c-0.723,1.705-1.451,3.457-1.968,5.603l-0.002-9.938H28v-0.72H26.356z M30.64,24.64H29v0.721h1.64v4.279h-4.28v-0.006h0.006c0-5.466,1.334-8.613,2.624-11.657c0.613-1.447,1.208-2.853,1.649-4.452	L30.64,24.64L30.64,24.64z"></path>
</svg>