<script>
  import LeftSidebar from './LeftSidebar.svelte';
  import MainContent from './MainContent.svelte';
</script>

<svelte:head>
  <title>Shenna RWP's résumé</title>
  <meta name="description" content="Shenna RWP's résumé" />
  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Shenna Risqianto Wilfred Piri",
      "url": "https://shenna.rwpiri.com",
      "email": "shenna@rwpiri.com",
      "telephone": "+4915257523364",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Saarbrücken",
        "addressCountry": "DE"
      },
      "jobTitle": "Senior IT-Consultant",
      "worksFor": {
        "@type": "Organization",
        "name": "FourEnergy GmbH"
      },
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "Hochschule für Technik und Wirtschaft des Saarlandes"
      },
      "sameAs": [
        "https://github.com/shennarwp/",
        "https://www.linkedin.com/in/shennarwp/",
        "https://instagram.com/shennarwp/"
      ]
    }
  </script>
</svelte:head>

<div class="resume-grid">
  <LeftSidebar />
  <MainContent />
</div>
