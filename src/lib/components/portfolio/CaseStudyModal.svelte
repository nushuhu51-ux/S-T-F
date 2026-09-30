<script lang="ts">
  import { ArrowUpRight, X } from '@lucide/svelte';
  import type { Project } from '$lib/portfolio/types';

  interface Props { project: Project | null; onclose: () => void; }
  let { project, onclose }: Props = $props();

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape') onclose();
  }
  function handleBackdropClick(e: MouseEvent) {
    if ((e.target as HTMLElement).dataset.backdrop === 'true') onclose();
  }

  const sections = $derived(
    project
      ? [
          { label: 'Problem', content: project.problem },
          { label: 'Goal', content: project.goal },
          { label: 'Approach', content: project.approach },
          { label: 'Architecture', content: project.architecture },
          { label: 'Challenges', content: project.challenges },
          { label: 'Implementation', content: project.implementation },
          { label: 'Result', content: project.result },
          { label: 'Lessons', content: project.lessons }
        ]
      : []
  );
</script>

<svelte:window onkeydown={handleKeydown} />

{#if project}
  <div
    data-backdrop="true"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black/55 p-3 sm:p-6"
    onclick={handleBackdropClick}
    role="presentation"
  >
    <div class="sma-card flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden bg-background shadow-2xl" role="dialog" aria-modal="true" aria-labelledby="case-study-title">
      <header class="flex items-start justify-between gap-4 border-b border-border p-5 sm:p-6">
        <div>
          <p class="section-kicker">Case study · {project.category}</p>
          <h2 id="case-study-title" class="mt-2 text-xl font-light tracking-[-.02em]">{project.title}</h2>
          <p class="mt-1 text-xs font-light text-muted-foreground">{project.shortDescription}</p>
        </div>
        <button type="button" onclick={onclose} aria-label="Close case study" class="flex h-8 w-8 shrink-0 items-center justify-center border border-border transition-colors hover:border-foreground"><X size={15} strokeWidth={1.5} /></button>
      </header>

      <div class="overflow-y-auto p-5 sm:p-6">
        <div class="grid gap-5 lg:grid-cols-[.7fr_1.3fr]">
          <aside class="lg:sticky lg:top-0 lg:self-start">
            <div class="border border-border p-4">
              <p class="section-kicker">Technologies</p>
              <div class="mt-3 flex flex-wrap gap-1.5">
                {#each project.technologies as tech}<span class="tech-chip">{tech}</span>{/each}
              </div>
            </div>
            <div class="mt-4 border border-border p-4">
              <p class="section-kicker">Highlights</p>
              <ul class="mt-3 flex list-none flex-col gap-2 p-0">
                {#each project.highlights as highlight}
                  <li class="flex items-start gap-2 text-xs font-light leading-5 text-muted-foreground"><span class="text-foreground">—</span>{highlight}</li>
                {/each}
              </ul>
            </div>
          </aside>

          <div class="flex flex-col gap-6">
            {#each sections as section}
              <section class="border-b border-border pb-5 last:border-b-0 last:pb-0">
                <p class="section-kicker">{section.label}</p>
                <p class="mt-2 text-sm font-light leading-7 text-muted-foreground">{section.content}</p>
              </section>
            {/each}
          </div>
        </div>

        {#if project.github || project.demo}
          <div class="mt-6 flex flex-wrap gap-4 border-t border-border pt-4">
            {#if project.github}<a href={project.github} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 text-xs font-light no-underline hover:text-muted-foreground">GitHub <ArrowUpRight size={13} strokeWidth={1.5} /></a>{/if}
            {#if project.demo}<a href={project.demo} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 text-xs font-light no-underline hover:text-muted-foreground">Live demo <ArrowUpRight size={13} strokeWidth={1.5} /></a>{/if}
          </div>
        {/if}
      </div>
    </div>
  </div>
{/if}
