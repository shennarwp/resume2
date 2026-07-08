<script lang="ts">
  import Experience from './Experience.svelte';
  import Skills from './Skills.svelte';
  import Interests from './Interests.svelte';
</script>

<div class="right">
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
    margin: 0px auto;
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
  }
</style>