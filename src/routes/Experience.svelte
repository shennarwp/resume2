<script lang="ts">
  import { t, json } from 'svelte-i18n';

  const experiences = ['fourEnergy', 'exxeta_2026', 'exxeta_2025', 'exxeta_2021', 'dillinger'];

  const education = ['hstw'];
</script>

<section>
  <h1>{$t('experience.title')}</h1>
  {#each experiences as exp, idx (exp)}
    <p>
      {$t(`experience.${exp}.period`)}
      <em>
        {$t(`experience.${exp}.company`)} | {$t(`experience.${exp}.position`)}{$t(
          `experience.${exp}.subtitle`,
          {
            default: '',
          },
        )
          ? ' | ' + $t(`experience.${exp}.subtitle`)
          : ''}
      </em>
    </p>
    {#if $t(`experience.${exp}.branch`, { default: '' })}
      <p>{$t('experience.branch_label')}: {$t(`experience.${exp}.branch`)}</p>
    {/if}
    {#if ($json(`experience.${exp}.items`) as string[]).length > 0}
      <ul>
        {#each $json(`experience.${exp}.items`) as string[] as item (item)}
          <li>{item}</li>
        {/each}
      </ul>
    {/if}
    {#if idx < experiences.length - 1}
      <hr class="solid" />
    {/if}
  {/each}

  <h1>{$t('education.title')}</h1>
  {#each education as edu (edu)}
    <p>{$t(`education.${edu}.period`)} <em> {$t(`education.${edu}.school`)}</em></p>
    <p>{$t(`education.${edu}.degree`)}</p>
    <p>{$t(`education.${edu}.description`)}</p>
    <ul>
      {#each $json(`education.${edu}.items`) as string[] as item (item)}
        <li>{item}</li>
      {/each}
    </ul>
  {/each}
</section>

<style>
  section {
    margin: 0px auto;
  }

  hr.solid {
    border: var(--hr-solid-border);
    margin: 1.5em 0;
  }

  ul {
    margin-top: 0.5em;
    padding-left: 1.5em;
  }

  li {
    margin-bottom: 0.5em;
  }
</style>
