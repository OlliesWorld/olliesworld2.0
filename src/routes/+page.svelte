<script>
  import { onMount } from 'svelte';
  import { animateCounters } from '$lib/utils.js';
  import Footer from '$lib/components/Footer.svelte';

  onMount(() => {
    setTimeout(() => animateCounters(), 400);
  });
</script>

<svelte:head>
  <title>OlliesWorld — Marketing Agency</title>
</svelte:head>

<!-- Hero -->
<section class="home-hero">
  <div class="home-hero-left">
    <div class="hero-badge reveal">
      <div class="hero-badge-dot"></div>
      <span class="hero-badge-txt">Est. from 2ft off the ground</span>
    </div>
    <div class="label reveal" data-delay="1">Content Marketing Agency</div>
    <h1 class="home-h1 reveal" data-delay="2">Big ideas.<br/><em>Ground-level</em><br/>thinking.</h1>
    <p class="home-sub reveal" data-delay="3">Hi. I'm Ollie. I'm a marketing strategist, content visionary, and enthusiastic treat-seeker. I see the world differently — mostly knees and table legs — and that perspective? Pure gold.</p>
    <div class="hero-btns reveal" data-delay="4">
      <a href="/work" class="btn-amber">See Our Work</a>
      <a href="/about" class="btn-outline">Meet Ollie →</a>
    </div>
  </div>
  <div class="hero-right">
    <div class="hero-img-fill placeholder-box stripe-bg">
     <img src="/img/ollie-hero.webp" alt="Ollie" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;" />
    </div>
    <div class="hero-amber-wash"></div>
    <div class="hero-quote-overlay">
      <p>"Life is either a daring adventure or nothing at all." — Helen Keller</p>
    </div>
  </div>
</section>

<!-- Marquee -->
<div class="home-marquee">
  <div class="home-marquee-inner">
    <span class="marquee-item">Belly Rub Strategy</span><span class="marquee-div">…</span>
    <span class="marquee-item">Treat-Driven Growth</span><span class="marquee-div">…</span>
    <span class="marquee-item">Low-to-the-Ground SEO</span><span class="marquee-div">…</span>
    <span class="marquee-item">Sniff-First Research</span><span class="marquee-div">…</span>
    <span class="marquee-item">Tail-Wagging Copy</span><span class="marquee-div">…</span>
    <span class="marquee-item">Fetch-and-Iterate</span><span class="marquee-div">…</span>
    <span class="marquee-item">Belly Rub Strategy</span><span class="marquee-div">…</span>
    <span class="marquee-item">Treat-Driven Growth</span><span class="marquee-div">…</span>
    <span class="marquee-item">Low-to-the-Ground SEO</span><span class="marquee-div">…</span>
    <span class="marquee-item">Sniff-First Research</span><span class="marquee-div">…</span>
    <span class="marquee-item">Tail-Wagging Copy</span><span class="marquee-div">…</span>
    <span class="marquee-item">Fetch-and-Iterate</span><span class="marquee-div">…</span>
  </div>
</div>

<!-- Stats -->
<div class="home-stats">
  <div class="inner">
    <div class="stats-row">
      <div class="stat-item reveal"><div class="stat-big" data-count="47">0</div><div class="stat-desc">Clients who gave us<br/>belly rubs after</div></div>
      <div class="stat-item reveal" data-delay="1"><div class="stat-big" data-count="312">0</div><div class="stat-desc">Articles written from<br/>ground level up</div></div>
      <div class="stat-item reveal" data-delay="2"><div class="stat-big" data-count="8">0</div><div class="stat-desc">Years sniffing out<br/>great content</div></div>
      <div class="stat-item reveal" data-delay="3"><div class="stat-big">∞</div><div class="stat-desc">Treats consumed<br/>during strategy</div></div>
    </div>
  </div>
</div>

<!-- Intro -->
<div class="home-intro">
  <div class="inner">
    <div class="home-intro-grid">
      <div class="reveal-left">
        <div class="home-intro-img placeholder-box stripe-bg">
         <img src="/img/ollie_pink.webp" alt="Ollie" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;" />
        </div>
        <div class="home-intro-accent"></div>
        <div class="home-intro-pill">
          <div class="pill-num">4"</div>
          <div class="pill-lbl">from the ground</div>
        </div>
      </div>
      <div class="reveal-right">
        <div class="label">About OlliesWorld</div>
        <h2 class="h2">A different kind<br/>of agency founder.</h2>
        <br/>
        <p class="body-lg">Most agencies are run by people staring at screens all day. I've spent years staring at ankles — and honestly? <strong style="color:var(--slate-d)">The view down here is underrated.</strong></p>
        <p class="body-lg">We work close to the ground so your brand can reach new heights. Curious, persistent, treat-motivated — that's the OlliesWorld method.</p>
        <div class="home-callout">"I may not be able to see over the desk, but I can absolutely see through a weak content strategy."</div>
        <div style="margin-top:36px;">
          <a href="/about" class="btn-amber">Read Ollie's Story →</a>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Services Preview -->
<div class="home-services-prev">
  <div class="inner">
    <div class="section-hdr">
      <div>
        <div class="label">What We Do</div>
        <h2 class="h2">Services built for<br/>brands worth chasing.</h2>
      </div>
      <a href="/services" class="btn-amber">All Services →</a>
    </div>
    <div class="home-services-grid">
      <div class="home-svc-card reveal" data-delay="1">
        <div class="svc-num">01</div>
        <div class="svc-title">Content Strategy</div>
        <p class="svc-desc">A content plan so sniff-tested, your audience can't resist. Like a great fetch route — varied terrain, consistent direction.</p>
        <div class="svc-pov">"I once found a treat behind a couch cushion 3 days after it fell. That's SEO."</div>
      </div>
      <div class="home-svc-card reveal" data-delay="2">
        <div class="svc-num">02</div>
        <div class="svc-title">Brand Voice & Tone</div>
        <p class="svc-desc">Your brand should sound like someone your audience wants to wrestle with — in the good, loyal, keep-coming-back way.</p>
        <div class="svc-pov">"I have three distinct barks. Each is perfectly calibrated. That's brand voice."</div>
      </div>
      <div class="home-svc-card reveal" data-delay="3">
        <div class="svc-num">03</div>
        <div class="svc-title">SEO & Distribution</div>
        <p class="svc-desc">Persistence. I have been trying to get belly rubs from one particular human for six months. I will get there. Your content will rank.</p>
        <div class="svc-pov">"Every walk is a reconnaissance mission. So is every keyword audit."</div>
      </div>
    </div>
  </div>
</div>

<!-- Featured Work -->
<div class="home-work">
  <div class="inner">
    <div class="section-hdr" style="margin-bottom:56px;">
      <div>
        <div class="label">Selected Work</div>
        <h2 class="h2">Sniffed out.<br/>Fetched. Delivered.</h2>
      </div>
      <a href="/work" class="btn-amber">All Work →</a>
    </div>
    <div class="home-work-strip reveal">
      <div class="hw-card hw-card-main">
        <div class="hw-card-bg placeholder-box stripe-bg" style="background:var(--slate-l);"></div>
        <div class="hw-card-overlay">
          <div class="hw-cat">Brand Strategy & Content</div>
          <div class="hw-title">The Backyard Collective — From scrappy to scroll-stopping</div>
          <div class="hw-sub">12-month content transformation · 3× organic growth</div>
        </div>
      </div>
      <div class="hw-card-side">
        <div class="hw-card">
          <div class="hw-card-bg placeholder-box stripe-bg" style="background:#2d5060;"></div>
          <div class="hw-card-overlay">
            <div class="hw-cat">SEO & Editorial</div>
            <div class="hw-title">PawsFirst Nutrition</div>
            <div class="hw-sub">62 ranked keywords · 8× traffic</div>
          </div>
        </div>
        <div class="hw-card">
          <div class="hw-card-bg placeholder-box stripe-bg" style="background:#3a5540;"></div>
          <div class="hw-card-overlay">
            <div class="hw-cat">Voice & Tone</div>
            <div class="hw-title">MuddyBoots Market</div>
            <div class="hw-sub">Full brand voice system · 6 weeks</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Journey Band -->
<div class="journey-band">
  <div class="inner">
    <div class="journey-grid reveal">
      <div>
        <div class="jb-label">The Full Story</div>
        <h2 class="jb-h2">Follow Ollie's journey<br/>from the very start.</h2>
        <p class="jb-sub">Before the agency, before the strategy decks, before even the first treat — there was a story. See how OlliesWorld began, one sniff at a time.</p>
      </div>
      <a href="/olliesworld2.0/index.html" class="btn-white">See the Journey →</a>
    </div>
  </div>
</div>

<Footer />
