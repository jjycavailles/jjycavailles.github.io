---
layout: page
title:  "Moutons et loups"
date:   2022-04-18 21:21:21 +0530
categories: ["simulation"]
image: ../../images/predation.png
description: "Article interactif pour comprendre l'interet des modeles mathematiques"
ref: lotka-volterra
lang: fr
---




Ici, je vais vous parler d'un des premiers modeles mathematiques en ecologie des populations, il s'agit du systeme de Lotka Volterra.

La simluation ci-dessous a ete adapte d'un exemple cree par [NetLogo](http://netlogoweb.org/launch#http://netlogoweb.org/assets/modelslib/Sample%20Models/Earth%20Science/Fire.nlogo){:target="_blank" }.
Pour lancer la simulation, cliquer sur "setup", puis sur "go".

On peut distinguer deux populations, les loups et les moutons. Les moutons mangent l'herbe et se reproduisent regulierement. Ils peuvent etre manger par des loups. Les loups ont besoin de manger des moutons pour pouvoir eux-aussi se reproduirent, et si ils ne mengent pas assez, ils finissent par mourir.

<iframe width="1000" height="920" frameBorder="0" marginheight="100px" scrolling="no" src="../../simulations/Wolf Sheep Predation.html"></iframe>

On peut simplifier l'etude de ces deux populations en utilisant le systeme dynamique suivant, avec x la population de moutons et y celle des loups. dx/dt est la vitesse a laquelle la population de moutons evolue, meme chose avec dy/dt pour les loups.
L'acroissement de la population de mouton est proportionnel a alpha, et les montons meurent lorsqu'ils rencontrent un loups, ce qui se produit avec une probabilite proportionnelle a xy.
De meme, les loups s'acroissent lorsqu'ils rencontrent des montons (puisqu'ils les mangent) et ils meurent avec une probabilite gamma.

<img width="200" src="../../images/lotka_volterra.png" />

La resolution de ce systeme d'equations differentielles permet d'etudier directement l'evolution de ces deux populations. Pour activer la resolution, cliquer sur "show widget" et attendez.
L'avantage de ce second modele est qu'on ne considere ni l'espace, ni chaque individu, mais simplement le nombre d'individu pour chaque population.

<iframe width="900" height="600" frameBorder="0" src="https://jjycavailles.github.io/lotka-volterra/Lotka-Volterra.html"></iframe>

On peut verifier que ce modele peut lui aussi predire des cycles de croissance et decroissance de plus en plus fort.





