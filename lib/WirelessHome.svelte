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
  <path d="M31,31.36H1v-0.72h1.64V19h0.72v11.64h25.28V19h0.721v11.64H31V31.36z M20.169,23.875	c-1.166-0.978-2.646-1.515-4.17-1.515c-1.522,0-3.002,0.536-4.167,1.512l-0.462-0.553c1.295-1.083,2.939-1.68,4.629-1.68	c1.692,0,3.337,0.598,4.633,1.683L20.169,23.875z M22.285,21.749c-1.733-1.54-3.966-2.389-6.287-2.389	c-2.319,0-4.551,0.848-6.284,2.387l-0.479-0.539c1.865-1.656,4.267-2.568,6.763-2.568c2.498,0,4.9,0.913,6.766,2.572L22.285,21.749z M24.392,19.626c-2.296-2.1-5.276-3.256-8.393-3.256c-3.115,0-6.095,1.156-8.391,3.254l-0.485-0.531	c2.429-2.22,5.582-3.443,8.876-3.443c3.297,0,6.451,1.223,8.879,3.445L24.392,19.626z M30.745,16.254L16,1.509L1.254,16.254	l-0.509-0.509l15-15c0.141-0.141,0.368-0.141,0.509,0L28.64,13.131V9h0.721v4.851l1.895,1.895L30.745,16.254z"></path>
</svg>