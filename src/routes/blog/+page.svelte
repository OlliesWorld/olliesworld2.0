<script>
  import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
  <title>Ollie's Corner — OlliesWorld</title>
</svelte:head>

<section class="blog-hero">
  <div class="inner">
    <div class="label reveal">Ollie's Corner</div>
    <h1 class="about-h1 reveal" data-delay="1">Thoughts from<br/>close to the <em>ground.</em></h1>
    <p class="about-hero-sub reveal" data-delay="2" style="margin-top:20px;">Marketing strategy, content wisdom, and occasional treatise on the art of the belly rub. Written from below desk level.</p>
  </div>
</section>

<section class="blog-featured">
  <div class="inner">
    <div class="label" style="margin-bottom:28px;">Featured Posts</div>
    <div class="blog-featured-grid reveal">
      <div class="blog-feat-main">
        <div class="blog-feat-bg placeholder-box stripe-bg"></div>
        <div class="blog-feat-overlay">
          <div class="blog-cat">Strategy</div>
          <div class="blog-title" style="font-family:var(--ff-head);font-size:1.6rem;font-weight:700;color:#fff;line-height:1.2;margin-bottom:8px;">Why your content strategy needs more belly rub energy</div>
          <div style="font-size:0.82rem;color:rgba(255,255,255,0.55);">Ollie · May 1, 2026 · 5 min read</div>
        </div>
      </div>
      <div class="blog-feat-side">
        <div class="blog-feat-sm">
          <div class="bfs-bg placeholder-box stripe-bg" style="background:var(--slate-l);"></div>
          <div class="bfs-overlay">
            <div class="blog-cat">SEO</div>
            <div style="font-family:var(--ff-head);font-size:1.05rem;font-weight:700;color:#fff;line-height:1.3;">Low-to-the-ground SEO: seeing what competitors miss</div>
          </div>
        </div>
        <div class="blog-feat-sm">
          <div class="bfs-bg placeholder-box stripe-bg" style="background:#3a5540;"></div>
          <div class="bfs-overlay">
            <div class="blog-cat">Brand Voice</div>
            <div style="font-family:var(--ff-head);font-size:1.05rem;font-weight:700;color:#fff;line-height:1.3;">The treat test: is your copy worth chasing?</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="blog-all">
  <div class="inner">
    <div class="label" style="margin-bottom:40px;">All Posts</div>
    <div class="blog-grid">
      <div class="blog-card reveal" data-delay="1">
        <div class="blog-card-img placeholder-box stripe-bg"></div>
        <div class="blog-card-body">
          <div class="blog-cat">Strategy</div>
          <div class="blog-title">Why your content strategy needs more belly rub energy</div>
          <p class="blog-excerpt">The best brands make you feel something. Here's what I've learned from years of requesting belly rubs with varying degrees of success.</p>
          <div class="blog-meta"><div class="blog-avatar">O</div><div class="blog-meta-txt">Ollie · May 1, 2026 · 5 min</div></div>
        </div>
      </div>
      <div class="blog-card reveal" data-delay="2">
        <div class="blog-card-img placeholder-box stripe-bg" style="background:var(--slate-l);"></div>
        <div class="blog-card-body">
          <div class="blog-cat">SEO</div>
          <div class="blog-title">Low-to-the-ground SEO: seeing what your competitors miss</div>
          <p class="blog-excerpt">Keywords hiding at ankle height. Stories dropped in the corner. The view from down here is full of opportunity your taller competitors stepped over.</p>
          <div class="blog-meta"><div class="blog-avatar">O</div><div class="blog-meta-txt">Ollie · Apr 22, 2026 · 7 min</div></div>
        </div>
      </div>
      <div class="blog-card reveal" data-delay="3">
        <div class="blog-card-img placeholder-box stripe-bg" style="background:#3a5540;"></div>
        <div class="blog-card-body">
          <div class="blog-cat">Brand Voice</div>
          <div class="blog-title">The treat test: how to know if your copy is worth chasing</div>
          <p class="blog-excerpt">Would I chase it across a muddy field? That's my filter. Here's the full framework for evaluating whether your content has real pull.</p>
          <div class="blog-meta"><div class="blog-avatar">O</div><div class="blog-meta-txt">Ollie · Apr 10, 2026 · 4 min</div></div>
        </div>
      </div>
      <div class="blog-card reveal" data-delay="1">
        <div class="blog-card-img placeholder-box stripe-bg" style="background:#4a3a5a;"></div>
        <div class="blog-card-body">
          <div class="blog-cat">Operations</div>
          <div class="blog-title">Running a creative agency when you can't see over the desk</div>
          <p class="blog-excerpt">Height is a state of mind. Also a physical fact I work around daily. Here's how being small has made OlliesWorld a better business.</p>
          <div class="blog-meta"><div class="blog-avatar">O</div><div class="blog-meta-txt">Ollie · Mar 28, 2026 · 6 min</div></div>
        </div>
      </div>
      <div class="blog-card reveal" data-delay="2">
        <div class="blog-card-img placeholder-box stripe-bg" style="background:#5a4535;"></div>
        <div class="blog-card-body">
          <div class="blog-cat">Community</div>
          <div class="blog-title">On wrestling: what competitive play teaches us about brand loyalty</div>
          <p class="blog-excerpt">I wrestle. I love it. And it turns out the psychology of a good play-fight maps remarkably well onto community-building strategy.</p>
          <div class="blog-meta"><div class="blog-avatar">O</div><div class="blog-meta-txt">Ollie · Mar 15, 2026 · 8 min</div></div>
        </div>
      </div>
      <div class="blog-card reveal" data-delay="3">
        <div class="blog-card-img placeholder-box stripe-bg" style="background:#2d4a40;"></div>
        <div class="blog-card-body">
          <div class="blog-cat">Analytics</div>
          <div class="blog-title">I tracked 12 months of content performance so you don't have to</div>
          <p class="blog-excerpt">The patterns, the surprises, and the one data point that changed how we write everything. With a bonus section on treat-based incentive programs.</p>
          <div class="blog-meta"><div class="blog-avatar">O</div><div class="blog-meta-txt">Ollie · Mar 3, 2026 · 10 min</div></div>
        </div>
      </div>
    </div>
  </div>
</section>

<Footer />
