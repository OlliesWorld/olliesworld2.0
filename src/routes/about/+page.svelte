<script>
  import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
  <title>About — OlliesWorld</title>
</svelte:head>

<section class="about-hero">
  <div class="inner">
    <div class="about-hero-grid">
      <div>
        <div class="about-eyebrow reveal">About OlliesWorld</div>
        <h1 class="about-h1 reveal" data-delay="1">The world looks<br/><em>different</em> from<br/>down here.</h1>
        <p class="about-hero-sub reveal" data-delay="2">I'm Ollie. Strategist, sniff-tester, enthusiast of belly rubs and the underdog perspective. I started OlliesWorld because I noticed what everyone else was stepping over.</p>
      </div>
      <div class="reveal-right">
        <div class="about-hero-img placeholder-box stripe-bg">
           <img src="/img/ollie_cute.webp" alt="Ollie" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;" />
        </div>
      </div>
    </div>
  </div>
</section>

<section class="about-story">
  <div class="inner">
    <div class="about-story-grid">
      <div class="reveal-left">
        <div class="label" style="margin-bottom:32px;">Timeline</div>
        <div class="timeline-item">
          <div class="timeline-year">Year One</div>
          <div class="timeline-txt">Discovered that the world contains treats, belly rubs, and an alarming number of people who don't capitalize on either.</div>
        </div>
        <div class="timeline-item">
          <div class="timeline-year">Year Three</div>
          <div class="timeline-txt">Developed the foundational Sniff-First research methodology. Tested extensively on park benches, hiking trails, and the backs of couches.</div>
        </div>
        <div class="timeline-item">
          <div class="timeline-year">Year Five</div>
          <div class="timeline-txt">First client. A scrappy outdoor brand who needed someone willing to get low, go deep, and keep chasing the story past where everyone else gave up.</div>
        </div>
        <div class="timeline-item">
          <div class="timeline-year">Today</div>
          <div class="timeline-txt">47 clients. 312 published pieces. One very confident 4-inch vantage point. Still looking for belly rubs.</div>
        </div>
      </div>
      <div class="reveal-right">
        <div class="label">The Story</div>
        <h2 class="h2" style="margin-bottom:32px;">Started low.<br/>Aimed high.</h2>
        <div class="about-story-body">
          <p>Most marketing agencies are built on lofty vision statements and standing desks. OlliesWorld was built from <strong>much closer to the floor</strong> — and we think that's our greatest advantage.</p>
          <p>Being short isn't a limitation. It's a perspective. When you're small, you notice what tall people step over: the details, the texture, the tiny moments that actually connect with real humans. <strong>That's where the best content lives.</strong></p>
          <p>I started this agency because I believed that great marketing requires curiosity above all else. The willingness to sniff out a story even when others have moved on. The persistence to chase a good idea across a muddy field. The enthusiasm to greet every new brief like it's the best brief you've ever seen.</p>
          <p>That's the OlliesWorld way. <strong>Curious. Persistent. Deeply motivated by treats and the occasional wrestling match.</strong></p>
        </div>
        <div class="about-tags" style="margin-top:28px;">
          <span class="tag">Content Strategy</span>
          <span class="tag">Brand Voice</span>
          <span class="tag">Very Good Boy</span>
          <span class="tag">SEO</span>
          <span class="tag">Belly Rub Theory</span>
          <span class="tag">Treat Procurement</span>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="about-values">
  <div class="inner">
    <div class="label">How We Work</div>
    <h2 class="h2 light">Values that guide every project.</h2>
    <div class="values-grid">
      <div class="value-card reveal" data-delay="1">
        <!-- <div class="value-icon">🐾</div> -->
         <div class="value-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="IconChangeColor" height="40" width="40"><rect width="256" height="256" fill="none"></rect><path d="M240,108a28,28,0,1,1-28-28A28.1,28.1,0,0,1,240,108ZM72,108a28,28,0,1,0-28,28A28.1,28.1,0,0,0,72,108ZM92,88A28,28,0,1,0,64,60,28.1,28.1,0,0,0,92,88Zm72,0a28,28,0,1,0-28-28A28.1,28.1,0,0,0,164,88Zm23.1,60.8a35.3,35.3,0,0,1-16.9-21.1,43.9,43.9,0,0,0-84.4,0A35.5,35.5,0,0,1,69,148.8,40,40,0,0,0,88,224a40.5,40.5,0,0,0,15.5-3.1,64.2,64.2,0,0,1,48.9-.1A39.6,39.6,0,0,0,168,224a40,40,0,0,0,19.1-75.2Z" fill="#ffffff"></path></svg></div>
        <div class="value-title">Sniff First</div>
        <p class="value-desc">Every project starts with research so thorough it borders on obsessive. We find the scent of a real story before we write a single word.</p>
      </div>
      <div class="value-card reveal" data-delay="2">
        <div class="value-icon">🦴</div>
        <div class="value-title">Chase the Good Stuff</div>
        <p class="value-desc">We don't settle for the easy angle. We pursue the idea worth having, even when it means running harder than everyone else to get there.</p>
      </div>
      <div class="value-card reveal" data-delay="3">
        <div class="value-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="IconChangeColor" height="40" width="40"> <g> <path fill="none" d="M0 0h24v24H0z" ></path> <path d="M4 18h5.5v1.25a2.75 2.75 0 1 1-5.5 0V18zM8 6.12c2 0 3 2.88 3 4.88 0 1-.5 2-1 3.5L9.5 16H4c0-1-.5-2.5-.5-5S5.498 6.12 8 6.12zm12.054 7.978l-.217 1.231a2.75 2.75 0 0 1-5.417-.955l.218-1.23 5.416.954zM18.178 1.705c2.464.434 4.018 3.124 3.584 5.586-.434 2.463-1.187 3.853-1.36 4.838l-5.417-.955-.232-1.564c-.232-1.564-.55-2.636-.377-3.62.347-1.97 1.832-4.632 3.802-4.285z" fill="#ffffff"></path> </g> </svg></div>
        <div class="value-title">Leave a Trail</div>
        <p class="value-desc">Great content should be findable, followable, and worth following. We build content ecosystems that keep paying off long after we deliver.</p>
      </div>
      <div class="value-card reveal" data-delay="4">
        <div class="value-icon">🤼</div>
        <div class="value-title">Wrestle With It</div>
        <p class="value-desc">We take strategy seriously. We push back, we debate, we wrestle with ideas until the right one wins. Friendly. Fierce. Worth it.</p>
      </div>
      <div class="value-card reveal" data-delay="5">
        <div class="value-icon">🎯</div>
        <div class="value-title">Earn Every Treat</div>
        <p class="value-desc">Results matter. We hold ourselves to standards we can measure — traffic, conversion, engagement — because good work deserves good rewards.</p>
      </div>
      <div class="value-card reveal" data-delay="6">
        <div class="value-icon">❤️</div>
        <div class="value-title">Show Up Warm</div>
        <p class="value-desc">Every client, every brief, every email gets our full enthusiasm. We work with people we genuinely like, on things we genuinely care about.</p>
      </div>
    </div>
  </div>
</section>

<section class="about-team">
  <div class="inner">
    <div class="label">The Team</div>
    <h2 class="h2" style="margin-bottom: 56px;">A small pack.<br/>Big output.</h2>
    <div class="team-grid">
      <div class="reveal" data-delay="1">
        <div class="team-img placeholder-box stripe-bg"><img src="/img/ollie_cute.webp" alt="Ollie" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;" /></div>
        <div class="team-name">Ollie</div>
        <div class="team-role">Founder & Chief Strategist</div>
        <p class="team-bio">Visionary. Treat-seeker. Will wrestle you for a bad headline. 4 inches of pure strategy.</p>
      </div>
      <div class="reveal" data-delay="4">
        <div class="team-img placeholder-box stripe-bg"><img src="/img/me1k.webp" alt="Roni" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;" /></div>
        <div class="team-name">Roni</div>
        <div class="team-role">Designated Adult</div>
        <p class="team-bio">The human. Keeps the lights on, the bowl full, and the walks happening on time. Unofficially employed since day one.</p>
        <a href="https://roni.rocks/" target="_blank" rel="noopener" class="team-link">Portfolio →</a>
      </div>
    </div>
  </div>
</section>

<Footer />
