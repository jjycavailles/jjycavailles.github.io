---
layout: page
title:
lang: fr
ref: blog
subtitle: Differents articles
sections:
  - type: grid_section
    title: Articles de blog
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
layout: advanced
---




<!-- Posts Index

mettre le layout en body pour elargir !

================================================== -->
<section class="recent-posts">
	
	{% assign count = 0 %}

	{% for post in site.posts %}

		{% if post.lang == "fr" %}
			{% assign count = 1 | plus: count %}

			<div class="column">		
				{% include postbox.html %}
			</div>
			
			{% assign remainder = count | modulo:3 %}
			
			{% if remainder == 1 %} 
				<div class="spacecol">   <p>  </p>   </div>
			{% endif %}
			{% if remainder == 2 %} 
				<div class="spacecol">   <p>  </p>   </div>
			{% endif %}

		{% endif %}

	{% endfor %}

</section>

<!-- Pagination
================================================== -->
<div class="bottompagination">
<div class="pointerup"><i class="fa fa-caret-up"></i></div>
<span class="navigation" role="navigation">
    {% include pagination.html %}

