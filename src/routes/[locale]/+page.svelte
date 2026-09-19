<script lang="ts">
  import LeftSidebar from '../LeftSidebar.svelte';
  import MainContent from '../MainContent.svelte';
  import { renderPersonJsonLd } from '$lib/profile';
  import { getMetadata } from '$lib/site-metadata';
  import { locale } from 'svelte-i18n';

  let { data } = $props();
  const metadata = $derived(getMetadata($locale || data.locale));
</script>

<svelte:head>
  <title>{metadata.title}</title>
  <meta name="description" content={metadata.description} />
  <link rel="canonical" href={metadata.canonical} />
  <meta property="og:type" content="profile" />
  <meta property="og:title" content={metadata.title} />
  <meta property="og:description" content={metadata.description} />
  <meta property="og:url" content={metadata.canonical} />
  <meta property="og:locale" content={metadata.locale} />
  <meta property="og:image" content="https://shenna.rwpiri.com/og-image.svg" />
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content={metadata.title} />
  <meta name="twitter:description" content={metadata.description} />
  <meta name="twitter:image" content="https://shenna.rwpiri.com/og-image.svg" />
  <!-- eslint-disable svelte/no-at-html-tags -- JSON-LD is generated solely from static first-party profile data. -->
  {@html renderPersonJsonLd()}
  <!-- eslint-enable svelte/no-at-html-tags -->
</svelte:head>

<div class="resume-grid">
  <LeftSidebar />
  <MainContent />
</div>
