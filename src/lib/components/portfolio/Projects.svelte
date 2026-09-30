<script lang="ts">
  import { ArrowUpRight, BrainCircuit, Database, Eye, Server, Sparkles } from '@lucide/svelte';
  import { projects } from '$lib/portfolio/data';
  import type { Project } from '$lib/portfolio/types';
  import CaseStudyModal from './CaseStudyModal.svelte';
  let selectedProject: Project | null = $state(null);
  function iconFor(project: Project) { const c=project.category.toLowerCase(); if(c.includes('vision')) return Eye; if(c.includes('backend')) return Server; if(c.includes('recommend')) return Database; if(c.includes('deep')) return BrainCircuit; return Sparkles; }
</script>
<section id="projects" class="section-shell" aria-labelledby="projects-heading">
  <div class="section-rule"><h2 id="projects-heading" class="section-title">Projects</h2><span class="section-kicker">03 / Selected work</span></div>
  <div class="grid grid-cols-1 border-l border-t border-border md:grid-cols-2">
    {#each projects as project, index (project.id)}
      {@const ProjectIcon=iconFor(project)}
      <article class="group flex min-h-72 flex-col border-b border-r border-border bg-card p-5 transition-colors hover:bg-muted">
        <div class="flex items-start justify-between gap-3"><div class="flex items-start gap-3"><span class="flex h-8 w-8 shrink-0 items-center justify-center border border-border bg-background"><ProjectIcon size={15}/></span><div><p class="section-kicker">{project.category}</p><h3 class="mt-1 text-base font-extralight">{project.title}</h3></div></div><span class="section-kicker">{String(index+1).padStart(2,'0')}</span></div>
        <p class="mt-5 text-xs font-extralight leading-6 text-muted-foreground">{project.shortDescription}</p>
        <div class="mt-4 flex flex-wrap gap-1.5">{#each project.technologies.slice(0,5) as tech}<span class="border border-border px-2 py-1 text-[.56rem] font-extralight">{tech}</span>{/each}</div>
        <div class="mt-auto flex items-center justify-between gap-3 border-t border-border pt-4"><button type="button" onclick={() => selectedProject=project} class="inline-flex items-center gap-1.5 text-xs font-extralight hover:text-muted-foreground">Case study <ArrowUpRight size={13}/></button><span class="text-[.56rem] font-extralight text-muted-foreground">{project.github || project.demo ? 'External links' : 'Technical case study'}</span></div>
      </article>
    {/each}
  </div>
</section>
<CaseStudyModal project={selectedProject} onclose={() => selectedProject=null}/>
