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
  <path d="M2,16.36h7v-0.72H2.36V3.36h11.28	V5c0,0.199,0.161,0.36,0.36,0.36h4c0.199,0,0.36-0.161,0.36-0.36V3.36h11.771l-1.386,1.386l0.51,0.509L31.509,3l-2.254-2.254	l-0.51,0.509l1.386,1.386H18.36V1c0-0.199-0.161-0.36-0.36-0.36h-4c-0.199,0-0.36,0.161-0.36,0.36v1.64H2	C1.801,2.64,1.64,2.801,1.64,3v13C1.64,16.199,1.801,16.36,2,16.36z M14.36,1.36h3.28v3.28h-3.28V1.36z M13,15.64h6v0.72h-6V15.64z M30,15.64h-7v0.72h6.64v12.28H18.333c-0.174-1.131-1.154-2-2.333-2s-2.159,0.869-2.333,2H3.312c-0.158-0.575-0.686-1-1.312-1	c-0.75,0-1.36,0.61-1.36,1.36S1.25,30.36,2,30.36c0.625,0,1.153-0.425,1.312-1h10.356c0.174,1.131,1.154,2,2.333,2	s2.159-0.869,2.333-2H30c0.199,0,0.36-0.161,0.36-0.36V16C30.36,15.801,30.199,15.64,30,15.64z M2,29.64	c-0.353,0-0.64-0.287-0.64-0.64S1.647,28.36,2,28.36S2.64,28.647,2.64,29S2.353,29.64,2,29.64z M16,30.64	c-0.904,0-1.64-0.735-1.64-1.64s0.736-1.64,1.64-1.64c0.904,0,1.64,0.735,1.64,1.64S16.904,30.64,16,30.64z M6,22.64h20v0.721H6	V22.64z M25,11.36c0.177,0,0.327-0.128,0.355-0.302s-0.074-0.343-0.241-0.399l-9-3c-0.074-0.025-0.153-0.025-0.228,0l-9,3	c-0.167,0.056-0.27,0.225-0.242,0.399S6.823,11.36,7,11.36h2.64v9.28H8v0.721h16V20.64h-1.64v-9.28H25z M11.64,20.64h-1.28v-9.28	h1.28V20.64z M19.64,20.64h-2.28V17h-0.72v3.64h-1.28V17h-0.72v3.64h-2.28v-9.28h2.28V15h0.72v-3.64h1.28V15h0.72v-3.64h2.279	L19.64,20.64L19.64,20.64z M21.64,20.64h-1.28v-9.28h1.279L21.64,20.64L21.64,20.64z M9.218,10.64L16,8.379l6.781,2.261	C22.781,10.64,9.218,10.64,9.218,10.64z"></path>
</svg>