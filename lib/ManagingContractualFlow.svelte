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
  <path d="M16,31.36c-4.529,0-8.716-1.933-11.64-5.338V30H3.64v-5.36H9v0.721H4.743	C7.536,28.725,11.598,30.64,16,30.64c8.072,0,14.64-6.567,14.64-14.64h0.721C31.36,24.47,24.47,31.36,16,31.36z M1.36,16H0.64	C0.64,7.53,7.53,0.64,16,0.64c4.529,0,8.716,1.933,11.64,5.337V2h0.721v5.36H23V6.64h4.257C24.464,3.275,20.401,1.36,16,1.36	C7.927,1.36,1.36,7.927,1.36,16z M22.255,11.746l-4-4C18.188,7.678,18.096,7.64,18,7.64h-8C9.801,7.64,9.64,7.801,9.64,8v15	c0,0.199,0.161,0.36,0.36,0.36h12c0.199,0,0.36-0.161,0.36-0.36V12C22.36,11.904,22.322,11.813,22.255,11.746z M18.36,8.87	l2.771,2.771H18.36V8.87z M10.36,22.64V8.36h7.28V12c0,0.199,0.161,0.36,0.36,0.36h3.64v10.28H10.36z M20,16.64h-8v0.72h8V16.64z M20,18.64h-8v0.721h8V18.64z M20,14.64h-8v0.72h8V14.64z"></path>
</svg>