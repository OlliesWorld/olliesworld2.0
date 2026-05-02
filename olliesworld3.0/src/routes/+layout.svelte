<script>
  import '../app.css';
  import Nav from '$lib/components/Nav.svelte';
  import { afterNavigate } from '$app/navigation';
  import { page } from '$app/stores';
  import { fly } from 'svelte/transition';
  import { cubicOut } from 'svelte/easing';
  import { initReveals } from '$lib/utils.js';

  let { children } = $props();

  afterNavigate(() => {
    setTimeout(() => initReveals(), 80);
  });
</script>

<svelte:head>
  <title>OlliesWorld — Marketing Agency</title>
</svelte:head>

<Nav />

{#key $page.url.pathname}
  <div in:fly={{ y: 22, duration: 420, easing: cubicOut, delay: 80 }}>
    {@render children()}
  </div>
{/key}
