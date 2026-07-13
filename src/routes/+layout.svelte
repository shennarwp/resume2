<script lang="ts">
  import favicon from '$lib/assets/favicon.png';
  import '../app.css';
  let { children, data } = $props(); // Destructure data from $props()
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  {#if data.includeAnalytics}
    <script defer src="https://stats.rwpiri.com/script.js" data-website-id="23f4fff2-9f2f-45c6-b6e9-b76ab166753d"></script>
  {/if}
</svelte:head>

<div class="app">
  <main>
    {@render children()}
  </main>
</div>