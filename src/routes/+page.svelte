<script lang="ts">
  import LeftSidebar from './LeftSidebar.svelte';
  import MainContent from './MainContent.svelte';
  import { profile, renderPersonJsonLd } from '$lib/profile';
</script>

<svelte:head>
  <title>{profile.siteTitle}</title>
  <meta name="description" content={profile.headline} />
  <meta property="og:type" content="profile" />
  <meta property="og:title" content={profile.siteTitle} />
  <meta property="og:description" content={profile.headline} />
  <meta property="og:url" content={profile.website} />
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content={profile.siteTitle} />
  <meta name="twitter:description" content={profile.headline} />
  <!-- eslint-disable svelte/no-at-html-tags -- renderPersonJsonLd() serializes static first-party profile data; no user input involved. -->
  {@html renderPersonJsonLd()}
  <!-- eslint-enable svelte/no-at-html-tags -->
</svelte:head>

<div class="resume-grid">
  <LeftSidebar />
  <MainContent />
</div>
