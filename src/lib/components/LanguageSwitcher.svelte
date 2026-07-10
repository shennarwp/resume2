<script lang="ts">
  import { locale } from 'svelte-i18n';

  function setLocale(newLocale: string) {
    locale.set(newLocale);
  }
</script>

<div class="language-switcher">
  <button onclick={() => setLocale('de')} class:active={$locale === 'de'}><b>de</b></button>
  <button onclick={() => setLocale('en')} class:active={$locale === 'en'}><b>en</b></button>
  <button onclick={() => setLocale('id')} class:active={$locale === 'id'}><b>id</b></button>
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
    padding: 4px 4px;
    cursor: pointer;
    color: var(--language-switcher-button-text-color, #333);
    transition:
      background-color 0.2s,
      color 0.2s;
    font-size: 0.8em;
  }
  .language-switcher button:hover {
    background-color: var(--language-switcher-button-hover-bg, #e0e0e0);
  }
  .language-switcher button.active {
    background-color: var(--language-switcher-button-active-bg, #404040);
    color: var(--language-switcher-button-active-text-color, white);
  }
</style>
