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
  <path d="M16,31.36c-0.059,0-0.117-0.015-0.171-0.043l-13-7C2.713,24.254,2.64,24.133,2.64,24V8	c0-0.132,0.073-0.254,0.189-0.317l13-7c0.107-0.058,0.234-0.058,0.342,0l13,7C29.287,7.746,29.36,7.868,29.36,8v16	c0,0.133-0.073,0.254-0.189,0.317l-13,7C16.117,31.346,16.059,31.36,16,31.36z M3.36,23.785L16,30.591l12.64-6.806V8.215L16,1.409	L3.36,8.215V23.785z M16,24.36c-3.507,0-6.36-2.854-6.36-6.36v-7.223L16,7.598l6.36,3.18V18C22.36,21.507,19.507,24.36,16,24.36z M10.36,11.223V18c0,3.11,2.53,5.64,5.64,5.64c1.416,0,2.712-0.524,3.704-1.39l-3.865-1.928l0.321-0.645l4.081,2.036	c0.432-0.492,0.779-1.061,1.02-1.681l-5.422-2.711l0.322-0.644l5.318,2.66c0.105-0.43,0.16-0.877,0.16-1.338v-0.777l-5.801-2.901	l0.322-0.644l5.479,2.739v-2.195l-5.801-2.901l0.322-0.644l5.479,2.739V11.22L16,8.402L10.36,11.223z"></path>
</svg>