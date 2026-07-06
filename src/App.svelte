<script>
  import LeftSidebar from './components/LeftSidebar.svelte';
  import MainContent from './components/MainContent.svelte';
</script>

<div class="wrapper clearfix">
  <LeftSidebar />
  <MainContent />
</div>

<style>
  :global(body) {
    -webkit-font-smoothing: antialiased;
    color: #333332;
    font-family: "EB Garamond", serif;
    font-size: 22px;
    font-optical-sizing: auto;
    font-weight: 450;
    font-style: normal;
    line-height: 1.4;
    text-rendering: optimizelegibility;
    margin: 0;
  }

  :global(*),
  :global(*::before),
  :global(*::after) {
    box-sizing: border-box;
  }

  :global(html) {
    font-size: 100%;
  }

  :global(h1) {
    color: rgb(0 0 0 / 75%);
  }

  .wrapper {
    height: 100%;
  }

  .clearfix::after {
    content: " ";
    visibility: hidden;
    display: block;
    height: 0;
    clear: both;
  }

  @media screen and (width <= 48em) {
    :global(.right),
    :global(.left) {
      float: none;
      position: relative !important;
      width: 100%;
      min-height: 500px;
    }
  }

  @media screen and (width <= 75em) {
    :global(body) {
      font-size: 16px;
    }
  }

  @media screen and (width <= 60em) {
    :global(body) {
      font-size: 14px;
    }
  }
</style>
