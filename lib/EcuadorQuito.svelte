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
  <path d="M16.5,22.5c0,0.276-0.224,0.5-0.5,0.5s-0.5-0.224-0.5-0.5S15.724,22,16,22	C16.276,22,16.5,22.224,16.5,22.5z M29.36,28c0-0.199-0.161-0.36-0.36-0.36h-0.695l-0.949-5.699	c-0.029-0.173-0.18-0.301-0.355-0.301h-2c-0.176,0-0.326,0.128-0.355,0.301l-0.885,5.311l-1.409-1.409L21.359,9.978	C21.348,9.788,21.19,9.64,21,9.64H11c-0.19,0-0.348,0.147-0.359,0.337L9.649,25.842L8.24,27.251L7.355,21.94	c-0.029-0.172-0.179-0.3-0.355-0.3H5c-0.176,0-0.326,0.128-0.355,0.301l-0.95,5.699H3c-0.199,0-0.36,0.161-0.36,0.36v3h0.72v-2.64H8	c0.096,0,0.187-0.038,0.254-0.105l1.895-1.895h11.702l1.895,1.895c0.067,0.067,0.159,0.105,0.255,0.105h4.64V31h0.721v-3H29.36z M25.305,22.36h1.391l0.88,5.279h-3.15L25.305,22.36z M5.305,22.36h1.39l0.88,5.279h-3.15L5.305,22.36z M11.338,10.36h9.324	l0.955,15.28H10.383L11.338,10.36z M23,29.64H9v0.721h14V29.64z M21,27.64H11v0.721h10V27.64z M18.36,20v-7	c0-0.199-0.161-0.36-0.36-0.36h-4c-0.199,0-0.36,0.161-0.36,0.36v7c0,0.199,0.161,0.36,0.36,0.36h4	C18.199,20.36,18.36,20.199,18.36,20z M14.36,13.36h3.28v6.28h-3.28V13.36z M19.36,8c0-0.199-0.161-0.36-0.36-0.36h-6	c-0.199,0-0.36,0.161-0.36,0.36v1h0.72V8.36h5.28V9h0.721V8H19.36z M18.36,6c0-0.199-0.161-0.36-0.36-0.36h-4	c-0.199,0-0.36,0.161-0.36,0.36v1h0.72V6.36h3.28V7h0.721V6H18.36z M18.36,3c0-1.301-1.059-2.36-2.36-2.36S13.64,1.699,13.64,3	S14.699,5.36,16,5.36C17.302,5.36,18.36,4.301,18.36,3z M17.64,3c0,0.904-0.735,1.64-1.64,1.64S14.36,3.904,14.36,3	S15.096,1.36,16,1.36C16.904,1.36,17.64,2.096,17.64,3z"></path>
</svg>