<script lang="ts">
  import { ArrowDown, ArrowUpRight, BrainCircuit, Download, Mail } from '@lucide/svelte';
  import { personalInfo, projects, certifications, achievements } from '$lib/portfolio/data';
</script>

<section id="hero" class="container mx-auto flex flex-col items-center justify-center gap-8 px-6 py-16 text-center sm:px-8 md:py-20" aria-labelledby="hero-heading">
  <div class="flex flex-col items-center justify-center gap-2">
    <span class="mb-2 inline-flex items-center gap-2 border border-border bg-muted px-2 py-1 text-[.56rem] font-light uppercase tracking-[.16em]">
      <BrainCircuit size={12} strokeWidth={1.4} /> AI Engineering Portfolio
    </span>
    <h1 id="hero-heading" class="relative font-display text-xl font-extralight transition-all sm:text-2xl md:text-3xl lg:text-4xl">
      Samuel Teshale Terefe
    </h1>
    <h2 class="text-md font-extralight md:text-lg lg:text-xl">AI Engineer · ML Engineer · Data Scientist</h2>
    <p class="mt-2 max-w-2xl text-sm font-extralight leading-7 text-muted-foreground md:text-base">{personalInfo.tagline}</p>
  </div>

  <div class="grid w-full max-w-3xl grid-cols-2 border border-border sm:grid-cols-4">
    <div class="border-b border-r border-border p-4 sm:border-b-0"><p class="section-kicker">Projects</p><p class="mt-1 text-lg font-extralight">{projects.length}</p></div>
    <div class="border-b border-border p-4 sm:border-b-0 sm:border-r"><p class="section-kicker">Skills</p><p class="mt-1 text-lg font-extralight">AI / ML</p></div>
    <div class="border-r border-border p-4"><p class="section-kicker">Credentials</p><p class="mt-1 text-lg font-extralight">{certifications.length}</p></div>
    <div class="p-4"><p class="section-kicker">Recognition</p><p class="mt-1 text-lg font-extralight">{achievements.length}</p></div>
  </div>

  <div class="flex flex-row flex-wrap items-start justify-center gap-4">
    <a href="#projects" class="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-xs no-underline transition-all hover:bg-primary/90">
      View Projects <ArrowUpRight size={16} strokeWidth={1.5} />
    </a>
    <a href="/samuel-teshale-cv.pdf" download class="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-background px-6 py-3 text-sm font-medium no-underline shadow-xs transition-all hover:bg-accent">
      <Download size={15} strokeWidth={1.5} /> CV
    </a>
    <a href="#contact" class="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-background px-6 py-3 text-sm font-medium no-underline shadow-xs transition-all hover:bg-accent">
      <Mail size={15} strokeWidth={1.5} /> Contact
    </a>
  </div>

  <div class="flex flex-wrap justify-center gap-1.5">
    {#each ['Python','PyTorch','TensorFlow','Scikit-learn','FastAPI','LLMs','RAG','Computer Vision'] as tech}
      <span class="border-border bg-muted px-2 py-1 text-[.56rem] font-light">{tech}</span>
    {/each}
  </div>

  <a href="#about" class="mt-3 inline-flex items-center gap-2 text-[.56rem] font-light uppercase tracking-[.16em] text-muted-foreground no-underline hover:text-foreground">
    Explore portfolio <ArrowDown size={13} strokeWidth={1.5} />
  </a>
</section>
