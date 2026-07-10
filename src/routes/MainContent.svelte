<script>
  import Experience from './Experience.svelte';
  import Skills from './Skills.svelte';
  import Interests from './Interests.svelte';
  import LanguageSwitcher from '$lib/components/LanguageSwitcher.svelte';
</script>

<div class="right">
  <div class="language-switcher-desktop">
    <LanguageSwitcher />
  </div>
  <div class="inner">
    <Experience />
    <Skills />
    <Interests />
  </div>
</div>

<style>
  .right {
    float: right;
    height: 100%;
    position: relative;
    width: 65%;
  }

  .inner {
    margin: 0 auto;
    max-width: 1075px;
    padding: 4em;
  }

  :global(.inner h1) {
    font-size: 1.75em;
  }

  :global(.inner p) {
    color: var(--inner-p-color);
  }

  :global(.inner p em) {
    color: var(--inner-p-em-color);
    font-style: normal;
  }

  :global(.inner ul li) {
    color: var(--inner-li-color);
    font-style: normal;
  }

  :global(.inner section) {
    margin: 0 auto;
  }

  .language-switcher-desktop {
    position: absolute;
    top: 1rem;
    right: 1rem;
    z-index: 10;
  }

  /* Mobile: stack main content under the sidebar */
  @media (max-width: 768px) {
    .right {
      float: none;
      width: 100%;
    }

    .inner {
      padding: 2em;
    }

    .language-switcher-desktop {
      display: none; /* Hide on mobile, shown in LeftSidebar */
    }
  }
</style>
