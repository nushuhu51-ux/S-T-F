<script lang="ts">
  import { BrainCircuit, Code2, Database, Eye, Layers, Server } from '@lucide/svelte';
  import { skillCategories } from '$lib/portfolio/data';
</script>
<section id="skills" class="section-shell" aria-labelledby="skills-heading">
  <div class="section-rule"><h2 id="skills-heading" class="section-title">Technical Stack</h2><span class="section-kicker">02 / Systems</span></div>
  <div class="grid grid-cols-1 border-l border-t border-border sm:grid-cols-2 lg:grid-cols-3">
    {#each skillCategories as category, i}
      <article class="border-b border-r border-border bg-card p-5 transition-colors hover:bg-muted" aria-label={category.name}>
        <div class="flex items-center justify-between gap-3"><div class="flex items-center gap-3"><span class="flex h-8 w-8 items-center justify-center border border-border bg-background">
          {#if category.icon === 'code'}<Code2 size={15}/>{:else if category.icon === 'brain'}<BrainCircuit size={15}/>{:else if category.icon === 'eye'}<Eye size={15}/>{:else if category.icon === 'layers'}<Layers size={15}/>{:else}<Server size={15}/>{/if}
        </span><h3 class="text-sm font-extralight">{category.name}</h3></div><span class="section-kicker">0{i+1}</span></div>
        <div class="mt-4 flex flex-wrap gap-1.5">{#each category.skills as skill}<span class="border border-border px-2 py-1 text-[.56rem] font-extralight">{skill}</span>{/each}</div>
      </article>
    {/each}
  </div>
</section>
