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
  <path d="M30.64,22.64H1.36V7c0-0.904,0.736-1.64,1.64-1.64h14V4.64H3C1.699,4.64,0.64,5.699,0.64,7v18	c0,1.302,1.059,2.36,2.36,2.36h12.641v3.279H11v0.721h10v-0.72h-4.64v-3.28H29c1.302,0,2.36-1.059,2.36-2.36v-8h-0.72V22.64z M30.64,25c0,0.904-0.735,1.64-1.64,1.64H3c-0.904,0-1.64-0.735-1.64-1.64v-1.64h29.28C30.64,23.36,30.64,25,30.64,25z M25,1.598	l-6.36,3.18V12c0,3.507,2.854,6.36,6.36,6.36s6.36-2.854,6.36-6.36V4.777L25,1.598z M30.64,12c0,3.11-2.529,5.64-5.64,5.64	s-5.64-2.53-5.64-5.64V5.223L25,2.402l5.64,2.82V12z"></path>
</svg>