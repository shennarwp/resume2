<script lang="ts">
  import { locale } from 'svelte-i18n';

  function setLocale(newLocale: string) {
    locale.set(newLocale);
  }
</script>

<div class="language-switcher">
  <button onclick={() => setLocale('de')} class:active={$locale === 'de'}><b>DE</b></button>
  <button onclick={() => setLocale('en')} class:active={$locale === 'en'}><b>EN</b></button>
  <button onclick={() => setLocale('id')} class:active={$locale === 'id'}><b>ID</b></button>
</div>

<style>
  .language-switcher {
    display: flex;
    align-items: center;
    gap: 0;
    border-radius: 4px;
    overflow: hidden;
  }
  .language-switcher button {
    background: none;
    border: none;
    padding: 2px 3px;
    cursor: pointer;
    color: var(--text-color, #333);
    transition:
      background-color 0.2s,
      color 0.2s;
    font-size: 0.6em;
  }
  .language-switcher button:hover {
    background-color: var(--button-hover-bg, #e0e0e0);
  }
  .language-switcher button.active {
    background-color: var(--primary-color, #404040);
    color: white;
  }
</style>
