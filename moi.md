---
layout: page
title: Moi
lang: fr
ref: moi
sections:
  - type: grid_section
    title: Jérôme Cavaillès
    grid_items:
      - title: 
        content: >-
          <div style="text-align: justify">Je suis un mathématicien en doctorat en biologie/écologie. Ma recherche se concentre sur le développement de modèles mathématiques pour comprendre la structure des écosystèmes face aux changements environnementaux. <br/>Mon objectif ultime est de contribuer à une théorie transdisciplinaire des systèmes dans des environnements changeants. Mon approche consiste à résoudre des problèmes spécifiques dans des domaines comme l'écologie, idéalement avec des applications pratiques pour la vie quotidienne. Pas à pas, j'espère assimiler différents concepts, tels que les perturbations ou l'autorégulation, dans un cadre mathématique plus général.</div>
        actions:
          - label: jjycavailles@gmail.com
            url: mailto:jjycavailles@gmail.com
            style: primary
      - content: >-
          <img src="../images/moi.jpg" alt="moi" width="400"/>
    grid_cols: two
    grid_gap_horiz: large
    grid_gap_vert: large
    align: center
    background_color: primary
    background_image_repeat: repeat
    background_image_size: contain
    background_image_opacity: 8
  - type: grid_section
    title: Recherche
    subtitle: Ce que je fais en thèse
    grid_items:
      - title: J'étudie l'écologie ...
        content: >-
          <div style="text-align: justify">L'écologie, en tant que discipline scientifique, explore les interactions entre les êtres vivants et leur environnement. Je m'intéresse particulièrement à la manière dont les individus s'organisent en réponse aux changements environnementaux. Cela implique d'explorer les relations dynamiques entre les organismes et leur environnement, en mettant l'accent sur les stratégies d'adaptation et la résilience des systèmes écologiques face aux changements environnementaux.</div>
      - content: >-
          <img src="../images/interaction_plant.jpg" alt="interaction" width="400" align="left"> 
      - content: >-
          <img src="../images/Fractal_canopy.svg.png" alt="chess" width="300" align="right"> 
      - title: ... à l'aide de modèles mathématiques
        content: >-
          <div style="text-align: justify">Un modèle mathématique est une représentation abstraite d'un système tangible, utilisant des concepts et un langage mathématiques. Il permet d'expliquer le système, d'examiner l'impact des différents composants et de faire des prédictions sur son comportement. <br/>J'utilise diverses formes de modèles, notamment la théorie des jeux et les systèmes dynamiques. En outre, je m'intéresse vivement à l'exploration d'autres types de modèles tels que la théorie de l'information, la théorie des réseaux, la théorie de la décision, la théorie du contrôle et la théorie des catégories.</div>
        actions:
          - label: Plus
            url: /posts/theorie_des_jeux
            style: primary
            has_icon: true
            icon: arrow-right
            icon_position: right
    grid_cols: two
    grid_gap_horiz: large
    grid_gap_vert: large
    align: center
    background_color: secondary
    background_image_repeat: repeat
    background_image_size: contain
    background_image_opacity: 8
  - type: grid_section
    title: Stages
    subtitle: Mes précédentes expériences professionnelles
    grid_items:
      - title: CNRS (2019)
        subtitle: Effets déstabilisants du contrôle du comportement des écosystèmes
        content: >-
          <div style="text-align: justify">J'ai étudié les implications de l'intervention humaine dans la stabilisation de la dynamique des écosystèmes, en explorant la possibilité que certaines interventions, en particulier la réduction des mesures de stabilité communes telles que la variabilité temporelle, puissent par inadvertance augmenter le risque d'événements extrêmes, tels que l'effondrement de l'écosystème.</div>
        actions:
          - label: CBTM
            url: https://sete-moulis-cnrs.fr/fr/recherches/ctmb
            style: primary
      - content: >-
          <img src="../images/cbtm.jpeg" alt="cbtm" width="300" align="left"> 
      - content: >-
          <img src="../images/carre.png" alt="classification" width="300" align="right"> 
      - title: WeatherForce (2018)
        subtitle: Statistiques pour la météo
        content: >-
          <div style="text-align: justify">Étude de la classification en régimes de temps et de leurs impacts pour des utilisations métiers. Développement d'outils dédiés à la classification d'une journée. Évaluation de leurs impacts sur des variables utilisateurs.</div>
        actions:
          - label: WeatherForce
            url: https://weatherforce.org/
            style: primary
    grid_cols: two
    grid_gap_horiz: large
    grid_gap_vert: large
    align: center
    background_color: primary
    background_image_repeat: repeat
    background_image_size: contain
    background_image_opacity: 8
  - type: grid_section
    title: Formations
    grid_items:
      - title: INSA Toulouse
        subtitle: Ecole d'ingénieur
        content: >-
          <div style="text-align: justify">Lors de ma formation, j'ai principalement développé mes compétences dans les domaines de la modélisation, de la simulation et de l'optimisation. À droite, on peut voir une simulation réalisée en cours de mécanique des fluides, illustrant la pression au-dessus d'une aile d'avion.</div>
        actions:
          - label: Département de Mathématiques
            url: https://www.math.insa-toulouse.fr/fr/index.html
            style: primary
      - content: >-
          <img src="../images/b.jpg" alt="aile" width="300" align="center"/>
    grid_cols: two
    grid_gap_horiz: large
    grid_gap_vert: large
    align: center
    background_color: secondary
    background_image_repeat: repeat
    background_image_size: contain
    background_image_opacity: 8
seo:
  title: Moi
  description: Page personnelle
  extra:
    - name: 'og:type'
      value: website
      keyName: property
    - name: 'og:title'
      value: Stackbit Personal Theme
      keyName: property
    - name: 'og:description'
      value: The preview of the Personal theme
      keyName: property
    - name: 'og:image'
      value: images/personal-preview.png
      keyName: property
      relativeUrl: true
    - name: 'twitter:card'
      value: summary_large_image
    - name: 'twitter:title'
      value: Stackbit Personal Theme
    - name: 'twitter:description'
      value: The preview of the Personal theme
    - name: 'twitter:image'
      value: images/personal-preview.png
      relativeUrl: true
layout: advanced
---


<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-VPTWJKGKTG"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-VPTWJKGKTG');
</script>
