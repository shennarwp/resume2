<script lang="ts">
  import favicon from '$lib/assets/favicon.png';
  import '../app.css';
  import '$lib/i18n'; // Import to initialize svelte-i18n

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<div class="app">
  <main>
    {@render children()}
  </main>
</div>