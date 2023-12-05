---
lang: en
ref: index
title: "Home"
sections:
  - type: grid_section
    grid_items:
      - content: >-
          <iframe style="background: white; border:none; width: 700px; height: 900px ; frameborder: 0 ; zoom: 0.8; -moz-transform: scale(0.8); -moz-transform-origin: 0 0;" scrolling="no" src="../../simulations/tree_central_en.html" ></iframe>
      - title: Tree geometry
        subtitle: Modeling the geometry of a tree using fractals.
        content: >-
          Here, we aim to replicate a tree's shape by capitalizing on the similarity in branching processes across different scales. By observing a tree, we note that from the trunk, multiple branches emerge, each akin to a small trunk giving rise to smaller branches. This recursive principle guides the iterative operation, creating progressively smaller branches. 


          The animation allows adjusting parameters like "iterations" to draw more branches, "decay" to signify scale differences, and "angle" to specify the branching angle.

        actions:
          - label: More
            url: /posts/fractales_en
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
    langue: en
    show_recent: true
    recent_count: 6
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
