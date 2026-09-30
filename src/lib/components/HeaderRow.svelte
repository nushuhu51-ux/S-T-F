<script lang="ts">
  import type { Snippet } from 'svelte';
  interface Props { children: Snippet; trailing?: Snippet; variant?: 'page'|'section'; last?: boolean; }
  let { children, trailing, variant='section', last=false }: Props = $props();
  const title = $derived(variant === 'page' ? 'font-display text-md font-semibold md:text-lg' : 'font-display text-sm font-semibold');
</script>

<div class="border-border flex w-full flex-row flex-wrap items-center justify-between gap-x-2 gap-y-1 px-4 py-2 {last ? '' : 'border-b'}">
  <div class="flex flex-auto flex-row flex-wrap items-center gap-2 {title}">{@render children()}</div>
  {#if trailing}<div class="text-muted-foreground flex shrink-0 flex-row flex-wrap items-center gap-2 text-xs">{@render trailing()}</div>{/if}
</div>
