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
  <path d="M20,31.36h-8c-0.199,0-0.36-0.161-0.36-0.36v-8c0-0.199,0.161-0.36,0.36-0.36h8	c0.199,0,0.36,0.161,0.36,0.36v8C20.36,31.199,20.199,31.36,20,31.36z M12.36,30.64h7.28v-7.28h-7.28	C12.36,23.36,12.36,30.64,12.36,30.64z M20,21.36h-8c-0.199,0-0.36-0.161-0.36-0.36v-8c0-0.199,0.161-0.36,0.36-0.36h8	c0.199,0,0.36,0.161,0.36,0.36v8C20.36,21.199,20.199,21.36,20,21.36z M12.36,20.64h7.28v-7.28h-7.28	C12.36,13.36,12.36,20.64,12.36,20.64z M17.5,19.36h-3v-0.72h2.64v-1.28H15.5v-0.72h1.64v-1.28H14.5v-0.72h3	c0.199,0,0.36,0.161,0.36,0.36v4C17.86,19.199,17.699,19.36,17.5,19.36z M21.745,13.254l-1.895-1.895h-7.702l-1.895,1.895	l-0.509-0.509l1.895-1.895V3.149L9.746,1.254l0.509-0.509L12.15,2.64h7.702l1.895-1.895l0.51,0.509L20.36,3.149v7.702l1.895,1.895	L21.745,13.254z M12.869,10.64h6.262L16,7.509L12.869,10.64z M16.509,7l3.13,3.131V3.869L16.509,7z M12.36,3.869v6.262L15.491,7	L12.36,3.869z M12.869,3.36L16,6.491l3.131-3.131C19.131,3.36,12.869,3.36,12.869,3.36z"></path>
</svg>