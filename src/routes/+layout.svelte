<script lang="ts">
  import '../global.css';
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  import { Volume2, VolumeX, Moon, Sun, Keyboard, X } from '@lucide/svelte';

  let { children } = $props();
  let themeDark = $state(false);
  let soundOn = $state(true);
  let shortcutsOpen = $state(false);

  onMount(() => {
    themeDark = document.documentElement.classList.contains('dark');
    soundOn = localStorage.getItem('portfolio-sound') !== 'off';

    const handleKeydown = (event: KeyboardEvent) => {
      if ((event.key === 'k' && (event.metaKey || event.ctrlKey)) || event.key === '?') {
        event.preventDefault();
        shortcutsOpen = !shortcutsOpen;
      }
      if (event.key === 'Escape') shortcutsOpen = false;
    };

    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  });

  function playUiSound() {
    if (!browser || !soundOn) return;
    try {
      const AudioContextClass = window.AudioContext;
      if (!AudioContextClass) return;
      const context = new AudioContextClass();
      const oscillator = context.createOscillator();
      const gain = context.createGain();
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(620, context.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(880, context.currentTime + 0.07);
      gain.gain.setValueAtTime(0.0001, context.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.035, context.currentTime + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 0.11);
      oscillator.connect(gain);
      gain.connect(context.destination);
      oscillator.start();
      oscillator.stop(context.currentTime + 0.12);
      oscillator.addEventListener('ended', () => void context.close());
    } catch {
      // Audio is a progressive enhancement.
    }
  }

  function toggleSound() {
    soundOn = !soundOn;
    localStorage.setItem('portfolio-sound', soundOn ? 'on' : 'off');
    if (soundOn) playUiSound();
  }

  function toggleTheme() {
    document.documentElement.classList.toggle('dark');
    themeDark = document.documentElement.classList.contains('dark');
    localStorage.theme = themeDark ? 'dark' : 'light';
    playUiSound();
  }
</script>

<div class="portfolio-ground min-h-screen text-foreground">
  <div class="portfolio-gutter">
    <main class="portfolio-column">
      {#if browser}
        <header class="portfolio-chrome" aria-label="Site controls">
          <div class="portfolio-controls">
            <button type="button" class="chrome-icon" onclick={toggleSound} aria-label={soundOn ? 'Turn sound off' : 'Turn sound on'} title={soundOn ? 'Sound on' : 'Sound off'}>
              {#if soundOn}<Volume2 size={18} strokeWidth={1.35} />{:else}<VolumeX size={18} strokeWidth={1.35} />{/if}
            </button>
            <button type="button" class="chrome-icon" onclick={toggleTheme} aria-label="Toggle theme" title="Toggle theme">
              {#if themeDark}<Sun size={18} strokeWidth={1.35} />{:else}<Moon size={18} strokeWidth={1.35} />{/if}
            </button>
            <button type="button" class="chrome-icon" onclick={() => (shortcutsOpen = !shortcutsOpen)} aria-label="Open keyboard shortcuts" title="Keyboard shortcuts">
              <Keyboard size={18} strokeWidth={1.35} />
            </button>
          </div>
        </header>

        {#if shortcutsOpen}
          <div class="shortcut-popover" role="dialog" aria-label="Keyboard shortcuts">
            <div class="shortcut-heading"><span>Shortcuts</span><button type="button" onclick={() => (shortcutsOpen = false)} aria-label="Close shortcuts"><X size={15} /></button></div>
            <div class="shortcut-row"><span>Theme</span><kbd>click moon</kbd></div>
            <div class="shortcut-row"><span>Shortcuts</span><kbd>⌘ K</kbd><kbd>Ctrl K</kbd></div>
            <div class="shortcut-row"><span>Close</span><kbd>Esc</kbd></div>
          </div>
        {/if}
      {/if}

      {@render children?.()}
    </main>
  </div>
</div>
