<script lang="ts">
  const skills: string[] = [
    'Java',
    'Kotlin',
    'Spring Boot',
    'Angular',
    'Vue',
    'Bash',
    'Hibernate',
    'Kafka',
    'SQL',
    'GitHub / GitLab Pipeline',
    'Azure',
    'Jenkins',
    'IntelliJ',
    'Elastic-Stack',
    'Docker',
    'Kubernetes',
    'HTML / CSS / Java- / Typescript'
  ];
</script>

<section>
  <h1>Tools & Skills</h1>
  <ul class="skill-set">
    {#each skills as skill (skill)}
      <li>{skill}</li>
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