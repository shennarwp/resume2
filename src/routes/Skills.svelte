<script>
  import { t } from 'svelte-i18n';

  const skillKeys = [
    'java',
    'kotlin',
    'spring_boot',
    'angular',
    'vue',
    'bash',
    'hibernate',
    'kafka',
    'sql',
    'cicd',
    'azure',
    'jenkins',
    'intellij',
    'elastic_stack',
    'docker',
    'kubernetes',
    'web',
  ];
</script>

<section>
  <h1>{$t('skills.title')}</h1>
  <ul class="skill-set">
    {#each skillKeys as key (key)}
      <li>{$t(`skills.items.${key}`)}</li>
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
