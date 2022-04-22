---
lang: en
ref: index
title: "Home"
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
    langue: en
    show_recent: true
    recent_count: 6
  - type: form_section
    content: >-
      # Feedback


      This site is under construction. I welcome with great pleasure any opinion, remarks on the site in general.
      If you have ideas for articles and new simulations, I will also be happy to receive suggestions.


      Thank you in advance for your assistance !


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
