<script>
  import { page } from '$app/stores';

  $: p = $page.url.pathname;
  let menuOpen = false;

  function toggle() { menuOpen = !menuOpen; }
  function close() { menuOpen = false; }
</script>

<nav id="main-nav">
  <a href="/" class="nav-logo" on:click={close}>OlliesWorld</a>

  <button class="nav-toggle" on:click={toggle} aria-label="Toggle menu" aria-expanded={menuOpen}>
    {#if menuOpen}
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M3 3L19 19M19 3L3 19" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
    {:else}
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M2 6H20M2 11H20M2 16H20" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
    {/if}
  </button>

  <ul class="nav-links" class:nav-open={menuOpen}>
    <li><a href="/" class:active={p === '/'} on:click={close}>Home</a></li>
    <li><a href="/about" class:active={p === '/about'} on:click={close}>About</a></li>
    <li><a href="/services" class:active={p === '/services'} on:click={close}>Services</a></li>
    <li><a href="/work" class:active={p === '/work'} on:click={close}>Work</a></li>
    <li><a href="/blog" class:active={p === '/blog'} on:click={close}>Ollie's Corner</a></li>
    <li><a href="/contact" class="nav-cta-btn" class:active={p === '/contact'} on:click={close}>Get in Touch</a></li>
  </ul>
</nav>
