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
  <path d="M23,31.36H9c-0.101,0-0.198-0.043-0.266-0.117c-0.068-0.075-0.102-0.175-0.093-0.275l0.834-9.181l0,0	c0.111-1.225,1.122-2.147,2.351-2.147h3.813V1h0.72v18.64h3.814c1.229,0,2.238,0.923,2.35,2.147l0.835,9.181	c0.01,0.101-0.024,0.2-0.093,0.275C23.197,31.317,23.102,31.36,23,31.36z M18.36,30.64h4.245l-0.662-7.279H10.056L9.394,30.64h5.246	V27h0.72v3.64h2.28V25h0.721L18.36,30.64L18.36,30.64z M10.122,22.64h11.756l-0.071-0.788c-0.077-0.851-0.779-1.491-1.633-1.491	h-8.347c-0.854,0-1.556,0.641-1.634,1.491L10.122,22.64z"></path>
</svg>