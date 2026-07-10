<script lang="ts">
  import favicon from '$lib/assets/favicon.png';
  import '../app.css';
  // import { i18nReady } from '$lib/i18n'; // No longer needed here

  let { children } = $props();

  // await i18nReady; // Removed this line
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<div class="app">
  <main>
    {@render children()}
  </main>
</div>