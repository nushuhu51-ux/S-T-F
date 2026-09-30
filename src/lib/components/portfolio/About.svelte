<script lang="ts">
  import { Github, Linkedin, Mail } from '@lucide/svelte';
  import { personalInfo } from '$lib/portfolio/data';
</script>
<section id="about" class="section-shell" aria-labelledby="about-heading">
  <div class="section-rule"><h2 id="about-heading" class="section-title">About</h2><span class="section-kicker">01 / Profile</span></div>
  <div class="grid gap-6 md:grid-cols-[1fr_2fr]">
    <div class="border-border bg-card p-5">
      <p class="section-kicker">Profile</p><h3 class="mt-3 text-lg font-extralight">{personalInfo.name}</h3><p class="mt-1 text-xs font-extralight text-muted-foreground">{personalInfo.location}</p>
      <div class="mt-5 flex flex-col border-t border-border pt-4">{#each personalInfo.titles as title}<span class="border-b border-border py-2 text-xs font-extralight last:border-b-0">{title}</span>{/each}</div>
      <div class="mt-5 flex flex-wrap gap-3 border-t border-border pt-4">
        <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 text-xs font-extralight no-underline hover:text-muted-foreground"><Github size={13}/>GitHub</a>
        <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 text-xs font-extralight no-underline hover:text-muted-foreground"><Linkedin size={13}/>LinkedIn</a>
        <a href="mailto:{personalInfo.email}" class="inline-flex items-center gap-1.5 text-xs font-extralight no-underline hover:text-muted-foreground"><Mail size={13}/>Email</a>
      </div>
    </div>
    <div class="flex flex-col justify-center gap-5">{#each personalInfo.about as paragraph}<p class="text-sm font-extralight leading-7 text-muted-foreground md:text-base">{paragraph}</p>{/each}</div>
  </div>
</section>
