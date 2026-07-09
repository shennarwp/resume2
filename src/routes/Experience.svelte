<script>
  const experiences = [
    {
      period: "Juli 2026 - jetzt",
      company: "FourEnergy GmbH",
      position: "Senior IT-Consultant",
      subtitle: "Full-Stack Entwickler",
      branch: null,
      items: []
    },
    {
      period: "2025 - Juni 2026",
      company: "Exxeta AG",
      position: "Full-Stack Entwickler",
      branch: "Bank / Investment",
      items: [
        "Arbeitet zusammen mit dem Kunden zur Implementierung von Features sowohl im Frontend als auch im Backend einer Investitionsplattform (SpringBoot, Java & Kotlin, Vue).",
        "Unterstützung des Kunden während der Testphase und Behebung von Fehlern während der Release."
      ]
    },
    {
      period: "2025",
      company: "Exxeta AG",
      position: "Full-Stack Entwickler",
      branch: "Versicherung",
      items: [
        "Behebung von Software-Schwachstellen durch Integration von Tools zur Codequalität und regelmäßige Aktualisierung von Abhängigkeiten.",
        "Migration der CI/CD-Infrastruktur und des Code-Repositorys von GitHub und Jenkins zu GitLab."
      ]
    },
    {
      period: "2021 - 2024",
      company: "Exxeta AG",
      position: "Full-Stack Entwickler und stellvertretender Projektleiter",
      branch: "Automobil",
      items: [
        "Implementierung neuer Funktionen auf Basis technischer Kundenanforderungen (Spring Boot, Angular).",
        "Integration des Systems mit dem externen Anbieter über eine gesicherte REST-Schnittstelle.",
        "Unterstützung und Beratung während des gesamten Softwareentwicklungszyklus bis zum täglichen Betrieb in Ländern in Europa, Asien und Amerika.",
        "Regelmäßige Aktualisierung der verwendeten Technologieplattform (Spring Boot, Java, Angular, Maven).",
        "Migration der Infrastruktur auf Azure und Wartung der laufenden Anwendung in einem Kubernetes-Cluster.",
        "Integration von Kafka/Azure Eventhub für die asynchrone Nachrichtenübertragung zwischen Microservices."
      ]
    },
    {
      period: "September 2019 - März 2020",
      company: "AG der Dillinger Hüttenwerke",
      position: "Bachelor Student",
      branch: "Stahlindustrie",
      items: [
        "Anpassung eines Subsystems, damit verschiedene Datenbanktypen (SQL und NoSQL) leicht ausgetauscht werden können.",
        "Vertiefung der Kenntnisse über die Anwendung von Unternehmensoftwarearchitekturen (Domain Driven Design, Hexagonal Architecture).",
        "Unterstützung von Arbeitskollegen bei der Migration verschiedener Tools und Infrastruktursoftware zu Docker."
      ]
    }
  ];

  const education = [
    {
      period: "Oktober 2016 - September 2020",
      school: "Hochschule für Technik und Wirtschaft des Saarlandes",
      degree: "B.Sc. in Praktische Informatik",
      grade: "2,5",
      description: "Gesamtnote 2,5. Legte eine solide Grundlage für die systematische Analyse und Behebung von Problemen. Zu den Fächern gehörten Datenbanken, Datenanalyse, verteilte Systeme und Information Retrieval. Beispielprojekte:",
      items: [
        "Ein kleines Client-Server-Terminkalenderprogramm. Verantwortlich für das Backend (REST-API, Datenbank). Geschrieben in Java.",
        "Eine Mini-Suchmaschine, die relevante Dokumente aus dem Artikelarchiv der New York Times zurückgeben kann. Mit Elasticsearch als Datenbank."
      ]
    }
  ];
</script>

<section>
  <h1>Berufserfahrung</h1>
  {#each experiences as exp, idx (idx)}
    <p>{exp.period} <em> {exp.company} | {exp.position}{exp.subtitle ? ' | ' + exp.subtitle : ''}</em></p>
    {#if exp.branch}
      <p>Branch: {exp.branch}</p>
    {/if}
    {#if exp.items.length > 0}
      <ul>
        {#each exp.items as item}
          <li>{item}</li>
        {/each}
      </ul>
    {/if}
    {#if idx < experiences.length - 1}
      <hr class="solid" />
    {/if}
  {/each}

  <h1>Ausbildung</h1>
  {#each education as edu}
    <p>{edu.period} <em> {edu.school}</em></p>
    <p>{edu.degree}</p>
    <p>{edu.description}</p>
    <ul>
      {#each edu.items as item}
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