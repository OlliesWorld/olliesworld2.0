<script>
  import { page } from '$app/stores';

  $: p = $page.url.pathname;
</script>

<nav id="main-nav">
  <a href="/" class="nav-logo">OlliesWorld</a>
  <ul class="nav-links">
    <li><a href="/" class:active={p === '/'}>Home</a></li>
    <li><a href="/about" class:active={p === '/about'}>About</a></li>
    <li><a href="/services" class:active={p === '/services'}>Services</a></li>
    <li><a href="/work" class:active={p === '/work'}>Work</a></li>
    <li><a href="/blog" class:active={p === '/blog'}>Ollie's Corner</a></li>
    <li><a href="/contact" class="nav-cta-btn" class:active={p === '/contact'}>Get in Touch</a></li>
  </ul>
</nav>
