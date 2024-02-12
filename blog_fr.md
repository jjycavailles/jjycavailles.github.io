---
layout: body
title:
lang: fr
ref: blog
subtitle: Differents articles
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

