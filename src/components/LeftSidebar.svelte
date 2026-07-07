<script>
  import shennaImg from '../assets/shenna.jpg';
</script>

<div class="left">
  <div class="name-hero">
    <div class="me-img" style="background-image: url({shennaImg})"></div>
    <div class="name-text">
      <h1>Shenna Risqianto Wilfred <em>Piri</em></h1>
      <p>Saarbrücken</p>
      <p>https://shennarwp.com/cv/</p>
      <p>shenna@rwpiri.com</p>
      <p>shennawew@outlook.com</p>
      <p>+49 1525 7523364</p>
    </div>
  </div>
</div>

<style>
  .left {
    background-color: rgb(0 0 0 / 2.5%);
    border-right: 1px solid rgb(0 0 0 / 5%);
    float: right;
    height: 100%;
    margin-left: -1px;
    min-width: 150px;
    position: fixed;
    width: 20%;
  }

  .name-hero {
    background: rgb(0 0 0 / 0.1%);
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
  }

  .name-hero h1 {
    font-family: "EB Garamond", serif;
    font-size: 2em;
    text-align: center;
  }

  .name-hero h1 em {
    color: rgb(0 0 0 / 30%);
    font-style: normal;
    font-weight: 700;
  }

  .name-hero p {
    color: rgb(0 0 0 / 75%);
    font-size: 0.85em;
    line-height: 1.5;
    margin: 0 8px 0 0;
    text-align: center;
  }

  .name-hero .name-text {
    margin: 0 auto;
    width: 85%;
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