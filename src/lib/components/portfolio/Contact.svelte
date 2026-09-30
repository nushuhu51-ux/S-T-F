<script lang="ts">
  import { ArrowUpRight, Github, Linkedin, Mail, Send } from '@lucide/svelte';
  import { personalInfo } from '$lib/portfolio/data';

  let name = $state('');
  let email = $state('');
  let message = $state('');
  let submitState: 'idle' | 'submitting' | 'success' = $state('idle');
  let errors = $state<{ name?: string; email?: string; message?: string }>({});

  function validateEmail(value: string) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value); }
  function validate() {
    const e: typeof errors = {};
    if (!name.trim()) e.name = 'Required.';
    if (!email.trim()) e.email = 'Required.';
    else if (!validateEmail(email)) e.email = 'Enter a valid email.';
    if (!message.trim()) e.message = 'Required.';
    else if (message.trim().length < 10) e.message = 'At least 10 characters.';
    errors = e;
    return Object.keys(e).length === 0;
  }
  async function handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    if (!validate()) return;
    submitState = 'submitting';
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    submitState = 'success';
  }
</script>

<section id="contact" class="section-shell" aria-labelledby="contact-heading">
  <div class="section-rule">
    <h2 id="contact-heading" class="section-title">Contact</h2>
    <span class="section-kicker">08 / Collaboration</span>
  </div>

  <div class="grid gap-6 lg:grid-cols-[.8fr_1.2fr]">
    <div class="sma-card p-5">
      <p class="section-kicker">Open to opportunities</p>
      <h3 class="mt-3 text-xl font-light leading-tight">Let’s build useful intelligent systems.</h3>
      <p class="mt-4 text-sm font-light leading-6 text-muted-foreground">Open to opportunities in AI engineering, machine learning, backend development, and intelligent applications.</p>

      <div class="mt-6 flex flex-col gap-2">
        <a href="mailto:{personalInfo.email}" class="group flex items-center justify-between border border-border p-3 text-xs font-light no-underline transition-colors hover:border-foreground"><span class="flex items-center gap-2"><Mail size={14} strokeWidth={1.5} /> {personalInfo.email}</span><ArrowUpRight size={13} strokeWidth={1.5} /></a>
        <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" class="group flex items-center justify-between border border-border p-3 text-xs font-light no-underline transition-colors hover:border-foreground"><span class="flex items-center gap-2"><Linkedin size={14} strokeWidth={1.5} /> LinkedIn</span><ArrowUpRight size={13} strokeWidth={1.5} /></a>
        <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" class="group flex items-center justify-between border border-border p-3 text-xs font-light no-underline transition-colors hover:border-foreground"><span class="flex items-center gap-2"><Github size={14} strokeWidth={1.5} /> GitHub</span><ArrowUpRight size={13} strokeWidth={1.5} /></a>
      </div>
    </div>

    {#if submitState === 'success'}
      <div class="sma-card flex min-h-80 flex-col items-center justify-center p-6 text-center">
        <span class="flex h-10 w-10 items-center justify-center border border-foreground"><Send size={16} strokeWidth={1.5} /></span>
        <h3 class="mt-4 text-sm font-light">Message prepared.</h3>
        <p class="mt-2 max-w-sm text-xs font-light leading-6 text-muted-foreground">Your mail client should have opened. You can also email directly at {personalInfo.email}.</p>
        <button type="button" onclick={() => { submitState = 'idle'; name = ''; email = ''; message = ''; }} class="mt-5 text-xs font-light underline underline-offset-4">Send another</button>
      </div>
    {:else}
      <form onsubmit={handleSubmit} class="sma-card flex flex-col gap-4 p-5" novalidate aria-label="Contact form">
        <div class="grid gap-4 sm:grid-cols-2">
          <label class="flex flex-col gap-1.5">
            <span class="section-kicker">Name *</span>
            <input id="contact-name" type="text" bind:value={name} placeholder="Your name" autocomplete="name" aria-invalid={!!errors.name} class="border border-border bg-background px-3 py-2.5 text-xs font-light outline-none transition-colors focus:border-foreground" />
            {#if errors.name}<span class="text-xs text-destructive" role="alert">{errors.name}</span>{/if}
          </label>
          <label class="flex flex-col gap-1.5">
            <span class="section-kicker">Email *</span>
            <input id="contact-email" type="email" bind:value={email} placeholder="you@example.com" autocomplete="email" aria-invalid={!!errors.email} class="border border-border bg-background px-3 py-2.5 text-xs font-light outline-none transition-colors focus:border-foreground" />
            {#if errors.email}<span class="text-xs text-destructive" role="alert">{errors.email}</span>{/if}
          </label>
        </div>
        <label class="flex flex-col gap-1.5">
          <span class="section-kicker">Message *</span>
          <textarea id="contact-message" bind:value={message} rows="7" placeholder="What would you like to discuss?" aria-invalid={!!errors.message} class="resize-none border border-border bg-background px-3 py-2.5 text-xs font-light leading-6 outline-none transition-colors focus:border-foreground"></textarea>
          {#if errors.message}<span class="text-xs text-destructive" role="alert">{errors.message}</span>{/if}
        </label>
        <div class="flex items-center justify-between gap-4 border-t border-border pt-4">
          <span class="text-[.56rem] font-light text-muted-foreground">Response via email</span>
          <button type="submit" disabled={submitState === 'submitting'} class="inline-flex items-center gap-2 border border-foreground bg-foreground px-4 py-2.5 text-xs font-light text-background transition-all hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50">
            {submitState === 'submitting' ? 'Preparing…' : 'Send message'} <Send size={13} strokeWidth={1.5} />
          </button>
        </div>
      </form>
    {/if}
  </div>
</section>
