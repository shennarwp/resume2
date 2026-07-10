<script lang="ts">
  import { t } from 'svelte-i18n';

  const experiences = [
    {
      key: 'fourEnergy',
      period: 'Juli 2026 - jetzt', // This will be overridden by translation
      company: 'FourEnergy GmbH',
      branch: null,
    },
    {
      key: 'exxeta_2026',
      period: '2025 - Juni 2026',
      company: 'Exxeta AG',
    },
    {
      key: 'exxeta_2025',
      period: '2025',
      company: 'Exxeta AG',
    },
    {
      key: 'exxeta_2021',
      period: '2021 - 2024',
      company: 'Exxeta AG',
    },
    {
      key: 'dillinger',
      period: 'September 2019 - März 2020',
      company: 'AG der Dillinger Hüttenwerke',
    },
  ];

  const education = [
    {
      key: 'hstw',
      period: 'Oktober 2016 - September 2020',
      school: 'Hochschule für Technik und Wirtschaft des Saarlandes',
    },
  ];
</script>

<section>
  <h1>{$t('experience.title')}</h1>
  {#each experiences as exp, idx (idx)}
    <p>
      {$t(`experience.${exp.key}.period`)}
      <em>
        {exp.company} | {$t(`experience.${exp.key}.position`)}{$t(`experience.${exp.key}.subtitle`, {
          default: '',
        }) ? ' | ' + $t(`experience.${exp.key}.subtitle`) : ''}
      </em>
    </p>
    {#if $t(`experience.${exp.key}.branch`, { default: '' })}
      <p>{$t('experience.branch_label')}: {$t(`experience.${exp.key}.branch`)}</p>
    {/if}
    {#if $t(`experience.${exp.key}.items`, { default: [] }).length > 0}
      <ul>
        {#each $t(`experience.${exp.key}.items`) as item}
          <li>{item}</li>
        {/each}
      </ul>
    {/if}
    {#if idx < experiences.length - 1}
      <hr class="solid" />
    {/if}
  {/each}

  <h1>{$t('education.title')}</h1>
  {#each education as edu}
    <p>{$t(`education.${edu.key}.period`)} <em> {edu.school}</em></p>
    <p>{$t(`education.${edu.key}.degree`)}</p>
    <p>{$t(`education.${edu.key}.description`)}</p>
    <ul>
      {#each $t(`education.${edu.key}.items`) as item}
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