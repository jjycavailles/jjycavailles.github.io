---
layout: page
title: 
lang: en
ref: blog
subtitle: Different articles
---



<!-- Posts Index
================================================== -->
<section class="recent-posts">
	
	{% assign count = 0 %}

	{% for post in site.posts %}

		{% if post.lang == "en" %}
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
