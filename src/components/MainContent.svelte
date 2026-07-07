<script>
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
    width: 80%;
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
    color: rgb(0 0 0 / 50%);
  }

  :global(.inner p em) {
    color: rgb(0 0 0 / 100%);
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
