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
  <path d="M27,18.64c-1.302,0-2.36,1.059-2.36,2.36s1.059,2.36,2.36,2.36s2.36-1.059,2.36-2.36	S28.302,18.64,27,18.64z M27,22.64c-0.904,0-1.64-0.735-1.64-1.64s0.735-1.64,1.64-1.64s1.64,0.735,1.64,1.64S27.904,22.64,27,22.64	z M20,18.64c-1.302,0-2.36,1.059-2.36,2.36s1.059,2.36,2.36,2.36s2.36-1.059,2.36-2.36S21.302,18.64,20,18.64z M20,22.64	c-0.904,0-1.64-0.735-1.64-1.64s0.735-1.64,1.64-1.64s1.64,0.735,1.64,1.64S20.904,22.64,20,22.64z M20,25.64	c-1.302,0-2.36,1.059-2.36,2.36s1.059,2.36,2.36,2.36s2.36-1.059,2.36-2.36S21.302,25.64,20,25.64z M20,29.64	c-0.904,0-1.64-0.735-1.64-1.64s0.735-1.64,1.64-1.64s1.64,0.735,1.64,1.64S20.904,29.64,20,29.64z M13,23.36	c1.301,0,2.36-1.059,2.36-2.36s-1.059-2.36-2.36-2.36s-2.36,1.059-2.36,2.36S11.699,23.36,13,23.36z M13,19.36	c0.904,0,1.64,0.735,1.64,1.64s-0.736,1.64-1.64,1.64s-1.64-0.735-1.64-1.64S12.096,19.36,13,19.36z M10.746,5.746L12.491,4	l-1.746-1.746l0.509-0.509L13,3.491l1.746-1.746l0.509,0.509L13.509,4l1.746,1.746l-0.509,0.509L13,4.509l-1.746,1.746L10.746,5.746	z M17.745,15.746L19.491,14l-1.746-1.746l0.51-0.509L20,13.491l1.745-1.745l0.51,0.509L20.509,14l1.746,1.746l-0.51,0.509L20,14.509	l-1.745,1.745L17.745,15.746z M27,10.491l1.745-1.745l0.51,0.509L27.509,11l1.746,1.746l-0.51,0.509L27,11.509l-1.745,1.745	l-0.51-0.509L26.491,11l-1.746-1.746l0.51-0.509L27,10.491z M10,27.64h6v0.721h-6c-0.054,0-5.36-0.062-5.36-5.36V5.868L3.255,7.254	l-0.51-0.509L4.997,4.49l2.257,2.254l-0.509,0.51L5.36,5.87V23C5.36,27.587,9.811,27.64,10,27.64z M24.35,2.859l0.01,2.139	c0,2.66-2.198,3.362-3.36,3.362h-4c-3.584,0-3.64,3.492-3.64,3.641v5h-0.72v-5c0-0.043,0.05-4.36,4.36-4.36h4	c0.106,0,2.64-0.044,2.64-2.64l-0.01-2.12l-1.374,1.374l-0.51-0.509L24,1.491l2.255,2.255l-0.51,0.509L24.35,2.859z"></path>
</svg>