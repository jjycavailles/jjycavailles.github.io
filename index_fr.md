---
layout: page
lang: fr
ref: index
title: "Accueil"
sections:
  - type: grid_section
    title: Bonjour, je suis Jérôme Cavaillès !
    grid_items:
      - title: 
        content: >-
          <div style="text-align: justify">Je suis mathématicien de formation et je suis actuellement en postdoctorat en biologie/écologie. Ma recherche se concentre sur le développement de modèles mathématiques pour comprendre la structure des écosystèmes face aux changements environnementaux. Mon objectif ultime est de contribuer à une théorie transdisciplinaire des systèmes dans des environnements changeants. Ma question principale est la suivante : quelles stratégies les organismes emploient-ils pour prospérer dans des environnements dynamiques ? Mon approche consiste à modeliser des problèmes spécifiques dans des domaines comme l'écologie, idéalement avec des applications pratiques pour la vie quotidienne. Pas à pas, j'espère assimiler différents concepts, tels que la résilience ou l'autorégulation, dans un cadre mathématique plus général.</div>
        actions:
          - label: A propos de moi
            url: ../moi
            style: primary
      - content: >-
          <img src="../images/moi.jpg" alt="moi" width="400"/>
    grid_cols: two
    grid_gap_horiz: large
    grid_gap_vert: large
    align: center
    background_color: secondary
    background_image_repeat: repeat
    background_image_size: contain
    background_image_opacity: 8
  - type: grid_section
    grid_items:
      - content: >-
          <iframe style="background: white; border:none; width: 700px; height: 900px ; frameborder: 0 ; zoom: 0.8; -moz-transform: scale(0.8); -moz-transform-origin: 0 0;" scrolling="no" src="../../simulations/tree_central_fr.html" ></iframe>
      - title: Géométrie des arbres
        subtitle: Modélisation de la géométrie d'un arbre à l'aide de fractales.
        content: >-
          Ici, nous cherchons à reproduire la forme d'un arbre en capitalisant sur la similitude des processus de ramification à différentes échelles. En observant un arbre, nous constatons qu'à partir du tronc, de multiples branches émergent, chacune s'apparentant à un petit tronc donnant naissance à des branches plus petites. Ce principe récursif guide l'opération itérative, créant des branches de plus en plus petites.


          L'animation permet d'ajuster des paramètres tels que "itérations" pour dessiner plus de branches, "décroissance" pour signifier les différences d'échelle, et "angle" pour spécifier l'angle de ramification.
        actions:
          - label: Plus
            url: /posts/fractales_fr
            style: primary
    grid_cols: two
    grid_gap_horiz: medium
    grid_gap_vert: large
    align: center
    background_color: primary
    background_image_repeat: repeat
    background_image_size: contain
    background_image_opacity: 8
  - type: grid_section
    title: Blog
    subtitle: Autres articles
    langue: fr
    grid_items_reverse:
      - title: Modèle épidémique
        subtitle: Un guide interactif qui montre l'importance des équations différentielles.
        content: >- 
          <a href="/posts/SIR_fr"><img src="../images/virus.png" alt="epidemy"></a>
      - title: Feux de forêt
        subtitle: Modélisation d'un feux de forêt
        content: >- 
          <a href="/posts/feux"><img src="../images/feux_milieu.png" alt="forest fire"></a>
      - title: Ressources scientifiques
        subtitle: Sélection de livres, moocs, chaines youtubes
        content: >- 
          <a href="/posts/selection_fr"><img src="../images/website.jpg" alt="ressources"></a>
      - title: Géométrie des arbres
        subtitle: Modélisation de la géométrie d'un arbre à l'aide de fractales.
        content: >- 
          <a href="/posts/fractales_fr"><img src="../images/Fractal_canopy.svg.png" alt="tree fractal"></a>
      - title: Colonies de fourmis
        subtitle: Comment les colonies de fourmis créent-elles des chemins intelligents ?
        content: >- 
          <a href="/posts/ant_colonies_fr"><img src="../images/ants.png" alt="ants"></a>
      - title: Nuée d'Oiseaux
        subtitle: Comment les oiseaux créent-ils des mouvements coordonnés ?
        content: >- 
          <a href="/posts/flocking_birds_fr"><img src="../images/A_Flock_of_Unity.png" alt="birds"></a>
    grid_cols: three
    grid_gap_horiz: small
    grid_gap_vert: large
    align: center
    background_color: secondary
    background_image_repeat: repeat
    background_image_size: contain
    background_image_opacity: 8
  - type: form_section
    content: >-
      # Feedback


      <div style="text-align: justify">Ce site est actuellement en construction, et j'apprécie grandement tous les opinions et conseils pour améliorer sa clarté et sa pédagogie. N'hésitez pas à partager vos idées d'articles ou de nouvelles simulations. Je serais enchanté d'interagir avec vous afin de les intégrer au site. Merci d'avance pour votre contribution !</div>      

      <br/>      


      <img src="../images/website_cas.png" alt="moi" width="500"/>

    content_align: left
    form_position: right
    form_width: fifty
    form_layout: stacked
    enable_card: true
    form_id: contact-form
    form_action: https://formspree.io/f/mpzbpvvy
    form_fields:
      - input_type: text
        name: name
        label: Nom
        default_value: Votre nom
        is_required: true
      - input_type: email
        name: email
        label: Email
        default_value: Votre addresse email
        is_required: true
      - input_type: textarea
        name: message
        label: Message
        default_value: Votre message
      - input_type: checkbox
        name: consent
        label: >-
          Je comprends que ce formulaire stocke mes informations soumises pour que je puisse être contacté.
        is_required: true
    submit_label: Envoyer le Message
    align_vert: top
    padding_top: medium
    padding_bottom: medium
    background_color: primary
seo:
  title: Accueil
  description: Academic blog
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
