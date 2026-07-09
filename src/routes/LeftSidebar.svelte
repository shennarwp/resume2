<script>
  import shennaImg from '$lib/assets/shenna.webp';
</script>

<div class="left">
  <div class="name-hero">
    <div class="me-img" style="background-image: url({shennaImg})"></div>
    <div class="name-text">
      <h1>Shenna Risqianto Wilfred <em>Piri</em></h1>
      <p>Saarbrücken</p>
      <p>
        <a href="https://shenna.rwpiri.com" target="_blank" class="link-text-color">
          shenna.rwpiri.com
        </a>&ensp;
      </p>
      <p>
        <a href="mailto:shenna@rwpiri.com" class="link-text-color">
          shenna@rwpiri.com
        </a>&ensp;
      </p>
      <p>
        <a href="tel:+49 1525 7523364" class="link-text-color">
          +49 1525 7523364
        </a>&ensp;
      </p>
      <div class="icon-center">
        <a href="https://github.com/shennarwp/" target="_blank" title="github link">
          <i class="fa fa-github link-text-color" aria-hidden="true"></i>
        </a>&ensp;
        <a href="https://www.linkedin.com/in/shennarwp/" target="_blank" title="linkedin link">
          <i class="fa fa-linkedin-square link-text-color" aria-hidden="true"></i>
        </a>&ensp;
        <a href="https://instagram.com/shennarwp/" target="_blank" title="instagram link">
          <i class="fa fa-instagram link-text-color" aria-hidden="true"></i>
        </a>&ensp;
      </div>
    </div>
  </div>
</div>

<style>
  .left {
    background-color: var(--left-sidebar-bg);
    border-right: var(--left-sidebar-border);
    float: right;
    height: 100%;
    margin-left: -1px;
    min-width: 150px;
    position: fixed;
    width: 35%;
  }

  .name-hero {
    background: var(--name-hero-bg);
    inset: 0;
    height: 290px;
    margin: auto;
    position: absolute;
    width: 85%;
  }

  .me-img {
    background-size: 100%;
    background-position: center center;
    background-repeat: no-repeat;
    border-radius: 100%;
    height: 150px;
    margin: 0 auto;
    position: relative;
    width: 150px;
    border-color: var(--me-img-border);
    border-style: solid;
    border-width: medium;
  }

  .name-hero h1 {
    font-family: "EB Garamond", serif;
    font-size: 2em;
    text-align: center;
  }

  .name-hero h1 em {
    color: var(--name-hero-em-color);
    font-style: normal;
    font-weight: 700;
  }

  .name-hero p {
    color: var(--name-hero-p-color);
    font-size: 0.85em;
    line-height: 1.5;
    margin: 0 8px 0 0;
    text-align: center;
  }

  .name-hero .name-text {
    margin: 0 auto;
    width: 85%;
  }

  .link-text-color {
    color: var(--link-text-color);
  }

  .icon-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* Mobile: move sidebar to top and make it full-width */
  @media (max-width: 768px) {
    .left {
      position: relative;
      width: 100%;
      float: none;
      border-right: none;
      border-bottom: 1px solid rgba(0,0,0,0.05);
      min-width: auto;
      margin-left: 0;
    }

    .name-hero {
      position: relative;
      inset: auto;
      height: auto;
      width: 100%;
      margin: 0;
      padding: 4rem 2rem;
    }

    .me-img {
      height: 120px;
      width: 120px;
    }

    .name-hero .name-text {
      width: 100%;
    }

    /* ensure main content stacks below */
    :global(.right) {
      float: none;
      width: 100%;
    }
  }
</style>