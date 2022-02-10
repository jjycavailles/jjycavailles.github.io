---
lang: en
ref: index
title: Jerome Cavailles (website building)
sections:
  - type: grid_section
    grid_items:
      - content: >-
          <iframe style="border:none; width: 450px; height: 720px ; frameborder: 0" scrolling="no" src="../../simulations/predation_home.html" ></iframe>
      - title: Sheep and Wolves
        subtitle: How to mathematically model the populations of sheep and wolves?
        content: >-
          Here, I will tell you about one of the first mathematical models in population ecology, it is the Lotka Volterra system. To launch the simulation, click on "setup", then on "go".


          Two populations can be distinguished, wolves and sheep. Sheep eat grass and breed regularly. They can be eaten by wolves. Wolves need to eat sheep to be able to reproduce themselves, and if they don't eat enough, they end up dying.
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
    subtitle: Other articles
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
