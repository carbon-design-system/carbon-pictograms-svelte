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
  <path d="M15,28.36c-0.001,0-0.002,0-0.003,0H12	c-0.199,0-0.36-0.161-0.36-0.36v-8.999c0-0.001,0-0.001,0-0.002V7.001c0-0.001,0-0.002,0-0.003V4c0-0.199,0.161-0.36,0.36-0.36	h2.997c0.002,0,0.004,0,0.006,0H20c0.199,0,0.36,0.161,0.36,0.36v24c0,0.199-0.161,0.36-0.36,0.36h-4.997	C15.002,28.36,15.001,28.36,15,28.36z M18.36,27.64h1.279V4.36H18.36v8.639c0,0.001,0,0.002,0,0.003V25c0,0.001,0,0.001,0,0.002	V27.64z M15.869,27.64h1.771v-1.771L15.869,27.64z M12.36,27.64h2.28v-5.28h-2.28V27.64z M15.36,22.869v4.262L17.491,25	L15.36,22.869z M15.869,22.36l1.771,1.771V22.36H15.869z M15.36,21.64h2.28v-5.28h-2.28V21.64z M12.36,21.64h1.771l-1.771-1.771	V21.64z M12.509,19l2.131,2.131v-4.262L12.509,19z M12.36,16.36v1.771l1.771-1.771H12.36z M15.869,15.64h1.771v-1.771L15.869,15.64z M12.36,15.64h2.28v-5.28h-2.28V15.64z M15.36,10.869v4.262L17.491,13L15.36,10.869z M15.869,10.36l1.771,1.771V10.36H15.869z M15.36,9.64h2.28V4.36h-2.28V9.64z M12.36,9.64h1.771L12.36,7.869V9.64z M12.509,7l2.131,2.131V4.869L12.509,7z M12.36,4.36v1.771	l1.771-1.771H12.36z"></path>
</svg>