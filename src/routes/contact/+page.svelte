<script>
  import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
  <title>Contact — OlliesWorld</title>
</svelte:head>

<section class="contact-hero">
  <div class="inner">
    <div class="label reveal">Get in Touch</div>
    <h1 class="about-h1 reveal" data-delay="1">Let's work<br/><em>together.</em></h1>
    <p class="about-hero-sub reveal" data-delay="2" style="margin-top:20px;">Whether you need a full content strategy or just want to tell me I'm a good boy — I respond faster than I respond to "treat."</p>
  </div>
</section>

<section class="contact-body">
  <div class="inner">
    <div class="contact-layout">
      <div class="reveal-left">
        <div class="label" style="margin-bottom:32px;">Contact Details</div>
        <div class="contact-info-item">
          <div class="ci-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="#c4762a" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="1"/><polyline points="3,5 12,13 21,5"/></svg>
          </div>
          <div><div class="ci-label">Email</div><div class="ci-val"><a href="mailto:woof@olliesworld.co">woof@olliesworld.co</a></div></div>
        </div>
        <div class="contact-info-item">
          <div class="ci-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="#c4762a" stroke-width="2"><circle cx="12" cy="10" r="3"/><path d="M12 2C7 2 4 6.5 4 10c0 5.5 8 12 8 12s8-6.5 8-12c0-3.5-3-8-8-8z"/></svg>
          </div>
          <div><div class="ci-label">Based</div><div class="ci-val">Somewhere low to the ground</div></div>
        </div>
        <div class="contact-info-item">
          <div class="ci-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="#c4762a" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>
          </div>
          <div><div class="ci-label">Response Time</div><div class="ci-val">Within 24hrs (or one nap)</div></div>
        </div>
        <div class="contact-callout">
          "I may take a moment to reply if I'm mid-wrestle or awaiting a belly rub. Bear with me. I always come back."
        </div>
        <div style="margin-top:40px;">
          <div class="label" style="margin-bottom:18px;">New Business</div>
          <p style="font-size:0.9rem;line-height:1.75;color:#5a7080;">We take on 4–6 new clients per year. We're selective — not because we're precious, but because good work takes full attention. If you're reading this, you're probably already our kind of people.</p>
        </div>
      </div>
      <div class="reveal-right">
        <form name="contact" method="POST" netlify>
          <input type="hidden" name="form-name" value="contact" />
          <div class="form-row-2">
            <div><label class="form-label" for="fname">First Name</label><input id="fname" name="fname" type="text" class="form-control" placeholder="Your name" /></div>
            <div><label class="form-label" for="company">Company</label><input id="company" name="company" type="text" class="form-control" placeholder="Your company" /></div>
          </div>
          <div class="form-row"><label class="form-label" for="email">Email</label><input id="email" name="email" type="email" class="form-control" placeholder="you@company.com" /></div>
          <div class="form-row">
            <label class="form-label" for="service">What do you need?</label>
            <select id="service" name="service" class="form-control">
              <option value="">Select a service...</option>
              <option>Content Strategy</option>
              <option>Brand Voice &amp; Tone</option>
              <option>SEO &amp; Distribution</option>
              <option>Editorial &amp; Copywriting</option>
              <option>Social &amp; Community</option>
              <option>Analytics &amp; Reporting</option>
              <option>Belly Rubs (non-commercial)</option>
            </select>
          </div>
          <div class="form-row">
            <label class="form-label" for="budget">Budget Range</label>
            <select id="budget" name="budget" class="form-control">
              <option value="">Select a range...</option>
              <option>Under $5k/month</option>
              <option>$5k–$10k/month</option>
              <option>$10k–$20k/month</option>
              <option>$20k+/month</option>
              <option>One bag of treats (let's talk)</option>
            </select>
          </div>
          <div class="form-row"><label class="form-label" for="message">Tell me more</label><textarea id="message" name="message" class="form-control" placeholder="What's the challenge? What are you working toward? Any treats involved?"></textarea></div>
          <button type="submit" class="form-submit">Send it →</button>
          <p class="form-note">No spam. Just good-boy energy and a prompt reply.</p>
        </form>
      </div>
    </div>
  </div>
</section>

<Footer />
