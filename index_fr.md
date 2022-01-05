---
layout: page
lang: fr
ref: index
title: Jerome Cavailles 
sections:
  - type: grid_section
    grid_items:
      - content: >-
          <iframe style="border:none; zoom:0.7; -ms-zoom: 0.7;-moz-transform: scale(0.7);-moz-transform-origin: 0.7;-o-transform: scale(0.7);-o-transform-origin: 0.7;-webkit-transform: scale(0.7);-webkit-transform-origin: 0 ; width: 1100px; height: 900px" src="//netlogoweb.org/web?http://netlogoweb.org/assets/modelslib/Sample%20Models/Earth%20Science/Fire.nlogo" ></iframe>
      - title: Géométrie d'un arbre
        subtitle: Comment modéliser mathématiquement la forme d'un arbre ?
        content: >-
          On peut remarquer que la structure d'un arbre se repete lorqu'on zoome sur une partie de celui-ci. C'est cette propriete que l'on va exploiter pour generer des arbres. 
        actions:
          - label: Plus
            url: /posts/fractales/
            style: primary
    grid_cols: two
    grid_gap_horiz: medium
    grid_gap_vert: large
    align: center
    background_color: primary
    background_image_repeat: repeat
    background_image_size: contain
    background_image_opacity: 8
  - type: features_section
    features:
      - title: Predation
        subtitle:
        content: >-
          Ici, on va simulation la predation des moutons par des loups ...... detailler ...
        actions:
          - label: Simulation
            url: /posts/Lotka-Volterra
            style: primary
        image: images/predation.png
        image_alt: plant interaction
        media_position: right
        media_width: fifty
    feature_padding_vert: large
    align: center
    background_color: none
  - type: blog_feed_section
    title: Blog
    subtitle: Autres articles
    show_recent: true
    recent_count: 6
seo:
  title: Jerome Cavailles
  description: The preview of the Personal theme
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
