<script>
  import { t } from 'svelte-i18n';

  const interests = ['aviation', 'self_hosting', 'travelling', 'cooking'];
</script>

<section>
  <h1>{$t('interests.title')}</h1>
  <ul class="skill-set">
    {#each interests as interest (interest)}
      <li>{$t(`interests.items.${interest}`)}</li>
    {/each}
  </ul>
</section>

<style>
  ul.skill-set {
    list-style-type: none;
    margin-top: -10px;
    padding: 0;
  }

  .skill-set li {
    background: var(--skill-set-bg);
    border-radius: 5px;
    color: var(--skill-set-color);
    display: inline-block;
    list-style: none;
    margin: 5px 5px 0 0;
    padding: 5px;
    text-align: justify;
    transition: background 0.2s ease;
  }

  .skill-set li:hover {
    background: var(--skill-set-hover-bg);
  }
</style>
