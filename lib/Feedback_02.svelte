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
  <path d="M16,19.36c-1.853,0-3.36-1.508-3.36-3.36s1.507-3.36,3.36-3.36s3.36,1.507,3.36,3.36	S17.853,19.36,16,19.36z M16,13.36c-1.456,0-2.64,1.185-2.64,2.64c0,1.456,1.185,2.64,2.64,2.64c1.456,0,2.64-1.184,2.64-2.64	S17.456,13.36,16,13.36z M16.36,9.131V1h-0.72v8.131l-2.386-2.385l-0.509,0.509L16,10.509l3.255-3.255l-0.51-0.509L16.36,9.131z M9.349,8.995l0.873,3.258L3.18,8.188L2.82,8.812l7.042,4.065L6.603,13.75l0.187,0.695l4.446-1.191l-1.191-4.446L9.349,8.995z M6.603,18.25l3.258,0.873L2.82,23.188l0.36,0.623l7.042-4.065l-0.873,3.259l0.695,0.186l1.191-4.445l-4.446-1.19L6.603,18.25z M12.746,24.745l0.509,0.51l2.386-2.386V31h0.72v-8.131l2.385,2.386l0.51-0.51L16,21.491L12.746,24.745z M25.396,18.25l-0.186-0.695	l-4.445,1.19l1.19,4.445l0.695-0.186l-0.873-3.259l7.042,4.066l0.359-0.623l-7.041-4.065L25.396,18.25z M25.396,13.75l-3.258-0.873	l7.041-4.065L28.82,8.188l-7.042,4.066l0.873-3.259l-0.695-0.187l-1.19,4.446l4.445,1.191L25.396,13.75z"></path>
</svg>