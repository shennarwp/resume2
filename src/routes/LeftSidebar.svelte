<script>
  import shennaImg from '$lib/assets/shenna.avif';
  import githubIcon from '$lib/assets/github.svg';
  import linkedinIcon from '$lib/assets/linkedin.svg';
  import instagramIcon from '$lib/assets/instagram.svg';
  import LanguageSwitcher from '$lib/components/LanguageSwitcher.svelte';
</script>

<div class="left">
  <div class="name-hero">
    <div class="language-switcher-mobile">
      <LanguageSwitcher />
    </div>
    <img src={shennaImg} alt="Portrait of Shenna Piri" class="me-img" />
    <div class="name-text">
      <h1>Shenna Risqianto Wilfred <em>Piri</em></h1>
      <p>Saarbrücken</p>
      <p>
        <a href="https://shenna.rwpiri.com" target="_blank" class="link-text-color">
          shenna.rwpiri.com
        </a>&ensp;
      </p>
      <p>
        <a href="mailto:shenna@rwpiri.com" class="link-text-color"> shenna@rwpiri.com </a>&ensp;
      </p>
      <p>
        <a href="tel:+4915257523364" class="link-text-color"> +49 1525 7523364 </a>&ensp;
      </p>
      <div class="icon-center">
        <a
          href="https://github.com/shennarwp/"
          target="_blank"
          title="github link"
          aria-label="GitHub profile"><img src={githubIcon} alt="github" class="link-icon" /></a
        ><!--
        --><a
          href="https://www.linkedin.com/in/shennarwp/"
          target="_blank"
          title="linkedin link"
          aria-label="LinkedIn profile"
          ><img src={linkedinIcon} alt="linkedin" class="link-icon" /></a
        ><!--
        --><a
          href="https://instagram.com/shennarwp/"
          target="_blank"
          title="instagram link"
          aria-label="Instagram profile"
          ><img src={instagramIcon} alt="instagram" class="link-icon" /></a
        >
      </div>
    </div>
  </div>
</div>

<style>
  .left {
    background-color: var(--left-sidebar-bg);
    border-right: var(--left-sidebar-border);
    min-width: 150px;
    position: sticky;
    top: 0;
    height: 100vh;
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
    border-color: var(--me-img-border);
    border-radius: 100%;
    border-style: solid;
    border-width: medium;
    display: block;
    height: 150px;
    margin: 0 auto;
    object-fit: cover;
    width: 150px;
  }

  .name-hero h1 {
    font-family: 'EB Garamond', serif;
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

  .link-icon {
    height: 0.9em;
    width: 0.9em;
    vertical-align: middle;
  }

  .icon-center {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5em;
    margin-top: 0.75em;
  }

  .language-switcher-mobile {
    display: none; /* Hidden by default */
  }

  /* Mobile: move sidebar to top and make it full-width */
  @media (max-width: 768px) {
    .left {
      position: relative;
      height: auto;
      width: 100%;
      border-right: none;
      border-bottom: 1px solid rgba(0, 0, 0, 0.05);
      min-width: auto;
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

    .language-switcher-mobile {
      display: block; /* Show on mobile */
      position: absolute;
      top: 1rem;
      right: 1rem;
      z-index: 10;
    }
  }
</style>
