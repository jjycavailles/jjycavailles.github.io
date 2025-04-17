---
lang: en
ref: index
title: "Home"
sections:
  - type: grid_section
    title: Hi, I am Jérôme Cavaillès!
    grid_items:
      - title:
        content: >-
          <div style="text-align: justify">I am a mathematician by training currently doing a postdoc in biology/ecology. I develop mathematical models to understand how ecosystems are structured to cope with environmental changes. My ultimate goal is to contribute to a transdisciplinary theory that elucidates the behavior of organisms in changing environments. My main inquiry is: What strategies do organisms employ to thrive in dynamic environments? My approach involves modeling specific puzzles within relevant fields like ecology, ideally with practical applications for everyday life. Step by step, I aim to assimilate different concepts, such as disturbances or self-regulations, into a more general formal framework.</div>
        actions:
          - label: About me
            url: ../me
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
          <iframe style="background: white; border:none; width: 700px; height: 900px ; frameborder: 0 ; zoom: 0.8; -moz-transform: scale(0.8); -moz-transform-origin: 0 0;" scrolling="no" src="../../simulations/tree_central_en.html" ></iframe>
      - title: Tree geometry
        content: >-
          <div style="text-align: justify">On this blog, I want to share different concepts about mathematical modeling, ecology theory and complex system. For example, on the right, we aim to replicate a tree's shape by capitalizing on the similarity in branching processes across different scales. By observing a tree, we note that from the trunk, multiple branches emerge, each akin to a small trunk giving rise to smaller branches. This recursive principle guides the iterative operation, creating progressively smaller branches.<br/><br/>The animation allows adjusting parameters like "iterations" to draw more branches, "decay" to signify scale differences, and "angle" to specify the branching angle.</div>
        actions:
          - label: More
            url: /posts/fractales_en
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
    title: Blog
    subtitle: Other articles
    langue: en
    grid_items_reverse:
      - title: Epidemic model
        subtitle: An interactive guide showcasing the importance of differential equations.
        content: >- 
          <a href="/posts/SIR_en"><img src="images/virus.png" alt="epidemy"></a>
      - title: Forest fires
        subtitle: How to optimize wood production without risking a wildfire?
        content: >- 
          <a href="/posts/fires"><img src="images/feux_milieu.png" alt="forest fire"></a>
      - title: Scientific resources
        subtitle: Selection of interesting ressources.
        content: >- 
          <a href="/posts/selection_en"><img src="images/website.jpg" alt="ressources"></a>
      - title: Tree geometry
        subtitle: Modeling the geometry of a tree using fractals.
        content: >- 
          <a href="/posts/fractales_en"><img src="images/Fractal_canopy.svg.png" alt="tree fractal"></a>
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


      <div style="text-align: justify">This site is under construction, and I greatly appreciate all opinions, remarks and advice to improve its clarity and pedagogy. Please feel free to share your ideas for articles or new simulations. I'd be delighted to interact with you to integrate them into the site. Thank you in advance for your valuable contribution! </div>

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
        label: Name
        default_value: Your name
        is_required: true
      - input_type: email
        name: email
        label: Email
        default_value: Your email address
        is_required: true
      - input_type: textarea
        name: message
        label: Message
        default_value: Your message
      - input_type: checkbox
        name: consent
        label: >-
          I understand that this form is storing my submitted information so I
          can be contacted.
        is_required: true
    submit_label: Send Message
    align_vert: top
    padding_top: medium
    padding_bottom: medium
    background_color: primary
seo:
  title: Home
  description: Academic blog
  extra:
    - name: 'og:type'
      value: website
      keyName: property
    - name: 'og:title'
      value: me
      keyName: property
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
