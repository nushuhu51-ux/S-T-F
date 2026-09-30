<script lang="ts">
  interface Props { label?: string; }
  let { label = 'AI / ML' }: Props = $props();
</script>

<span class="inline-flex items-stretch text-sm whitespace-nowrap" aria-label="Professional profile">
  <span class="border-border aspect-square border px-2 py-1" style="background: var(--color-sand-300)">ST</span>
  <span class="border-border border border-l-0 bg-muted px-2 py-1 text-xs font-light">{label}</span>
</span>
