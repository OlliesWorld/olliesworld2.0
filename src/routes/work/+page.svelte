<script>
  import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
  <title>Work — OlliesWorld</title>
</svelte:head>

<section class="work-hero">
  <div class="inner">
    <div class="label reveal">Selected Work</div>
    <h1 class="about-h1 reveal" data-delay="1">Sniffed out.<br/>Fetched. <em>Delivered.</em></h1>
    <p class="about-hero-sub reveal" data-delay="2" style="margin-top:20px;">Every project starts with a problem worth chasing and ends with work worth showing.</p>
  </div>
</section>

<section class="work-grid-full">
  <div class="inner">
    <div class="work-mosaic">

      <div class="wm-card big reveal">
        <div class="wm-bg placeholder-box stripe-bg" style="background:var(--slate-l);"></div>
        <div class="wm-overlay">
          <div class="wm-cat">Brand Strategy & Content · 2025</div>
          <div class="wm-title">The Backyard Collective — From scrappy to scroll-stopping</div>
          <div class="wm-meta">12-month content transformation · 3× organic growth · 47 published pieces</div>
          <div class="wm-tags"><span class="wm-tag">Content Strategy</span><span class="wm-tag">Editorial</span><span class="wm-tag">SEO</span></div>
        </div>
      </div>

      <div class="wm-card tall reveal" data-delay="1">
        <div class="wm-bg placeholder-box stripe-bg" style="background:#2d5060;"></div>
        <div class="wm-overlay">
          <div class="wm-cat">SEO & Editorial · 2024</div>
          <div class="wm-title">PawsFirst Nutrition — Found where it counts</div>
          <div class="wm-meta">62 ranked keywords · 8× domain traffic</div>
          <div class="wm-tags"><span class="wm-tag">SEO</span><span class="wm-tag">Long-form</span></div>
        </div>
      </div>

      <div class="wm-card tall reveal" data-delay="2">
        <div class="wm-bg placeholder-box stripe-bg" style="background:#3a5540;"></div>
        <div class="wm-overlay">
          <div class="wm-cat">Voice & Tone · 2024</div>
          <div class="wm-title">MuddyBoots Market — A brand that sounds like a friend</div>
          <div class="wm-meta">Full brand voice system · launched in 6 weeks</div>
          <div class="wm-tags"><span class="wm-tag">Brand Voice</span><span class="wm-tag">Tone Guidelines</span></div>
        </div>
      </div>

      <div class="wm-card wide reveal" data-delay="1">
        <div class="wm-bg placeholder-box stripe-bg" style="background:#4a3a5a;"></div>
        <div class="wm-overlay">
          <div class="wm-cat">Social & Community · 2024</div>
          <div class="wm-title">Fernwood Coffee — Built from the ground beans up</div>
          <div class="wm-meta">Community grew 400% in 9 months</div>
          <div class="wm-tags"><span class="wm-tag">Social Strategy</span><span class="wm-tag">Community</span></div>
        </div>
      </div>

      <div class="wm-card wide reveal" data-delay="2">
        <div class="wm-bg placeholder-box stripe-bg" style="background:#3a4a3a;"></div>
        <div class="wm-overlay">
          <div class="wm-cat">Analytics & Content · 2023</div>
          <div class="wm-title">TerraFirm — Measuring what matters, ignoring what doesn't</div>
          <div class="wm-meta">Custom dashboard · 20% increase in content ROI</div>
          <div class="wm-tags"><span class="wm-tag">Analytics</span><span class="wm-tag">Strategy</span></div>
        </div>
      </div>

    </div>
  </div>
</section>

<Footer />
