<script>
  const interests = [
    'Aviation',
    'Self-hosting',
    'Travelling',
    'Cooking'
  ];
</script>

<section>
  <h1>Persönliche Interessen</h1>
  <ul class="skill-set">
    {#each interests as interest (interest)}
      <li>{interest}</li>
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
    background: rgb(0 0 0 / 75%);
    border-radius: 5px;
    color: #fff;
    display: inline-block;
    list-style: none;
    margin: 5px 5px 0 0;
    padding: 5px;
    text-align: justify;
    transition: background 0.2s ease;
  }

  .skill-set li:hover {
    background: #3498db;
  }
</style>
