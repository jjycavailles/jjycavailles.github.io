---
layout: page
lang: fr
ref: index
title: Jerome Cavailles 
sections:
  - type: grid_section
    grid_items:
      - content: >-
          <iframe style="border:none; width: 450px; height: 720px ; frameborder: 0" scrolling="no" src="../../simulations/predation_home.html" ></iframe>
      - title: Moutons et Loups
        subtitle: Comment modéliser mathématiquement les populations de moutons et de loups ?
        content: >-
          Ici, je vais vous parler d’un des premiers modeles mathematiques en ecologie des populations, il s’agit du systeme de Lotka Volterra. Pour lancer la simulation, cliquer sur "setup", puis sur "go". 


          On peut distinguer deux populations, les loups et les moutons. Les moutons mangent l'herbe et se reproduisent regulierement. Ils peuvent etre manger par des loups. Les loups ont besoin de manger des moutons pour pouvoir eux-aussi se reproduirent, et si ils ne mengent pas assez, ils finissent par mourir.
        actions:
          - label: Plus
            url: /posts/Lotka-Volterra
            style: primary
    grid_cols: two
    grid_gap_horiz: medium
    grid_gap_vert: large
    align: center
    background_color: primary
    background_image_repeat: repeat
    background_image_size: contain
    background_image_opacity: 8
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
