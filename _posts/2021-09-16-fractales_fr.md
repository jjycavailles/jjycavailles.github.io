---
layout: page
title:  "Géométrie des arbres"
date:   2022-04-18 21:21:21 +0530
categories: ["simulation"]
image: ../../images/Fractal_canopy.svg.png
description: "Modélisation de la géométrie d'un arbre à l'aide de fractales."
ref: fractales
lang: fr
---



Nous tenterons ici de reproduire la forme d'un arbre de la manière la plus simple possible. L'astuce consiste à tirer parti de la similitude du processus de ramification à différentes échelles. Je m'explique. Si nous observons un arbre, nous pouvons voir qu'à partir du tronc, plusieurs branches émergent, et à partir de ces branches, plusieurs branches plus petites émergent. D'une certaine manière, chaque branche est comme un petit tronc à partir duquel des branches plus petites peuvent émerger.

Par exemple, dans la première image ci-dessous, on peut voir un tronc avec trois branches. 
Dans la deuxième image, il y a un arbre avec trois branches, et maintenant chacune de ces trois branches a également trois sous-branches. Il est intéressant de noter que la dernière image montre que la structure entre chaque branche et ses sous-branches est la même qu'entre le tronc et ses branches.

<img src="/images/tree_1.png" width="200"/>
<img src="/images/tree_2.png" width="200"/>
<img src="/images/tree_3.png" width="270"/>


En utilisant ce principe, nous pouvons itérer l'opération pour créer des branches de plus en plus petites. 
Dans l'animation ci-dessous, vous pouvez augmenter le curseur appelé "itérations" pour dessiner plus de branches. 
Le deuxième paramètre, "diminution", indique la différence d'échelle entre chaque niveau. Le dernier paramètre, "angle", détermine l'angle entre les branches.

<iframe frameBorder="0" width="650" height="700" src="../../simulations/tree_fr.html"></iframe>

Vous pouvez expérimenter différentes valeurs de "diminution" et "angle" pour modifier les formes des arbres. 
Certaines valeurs de paramètres peuvent produire des résultats plus réalistes que d'autres. Essayez de reproduire la forme d'un sapin. 
Dans ce modèle initial, la longueur de chaque branche au même niveau est identique, ce qui diffère d'un vrai sapin. 
Améliorons maintenant le modèle en introduisant deux paramètres de "diminution" différents : un pour la branche centrale et un autre pour les branches latérales. 
Dans les animations ci-dessous, vous pouvez tenter de recréer la forme d'un sapin.

<iframe frameBorder="0" width="650" height="800" src="../../simulations/tree_central_fr.html"></iframe>

Nous disposons maintenant d'un modèle amélioré, mais les arbres semblent encore quelque peu artificiels. 
Pour les rendre plus naturels, nous allons introduire un peu d'aléatoire dans la construction des arbres. 
Nous ajouterons une petite quantité de bruit aux paramètres d'angle et de diminution pour chaque niveau. 
Cet ajustement permet d'obtenir des arbres plus naturels.


<iframe frameBorder="0" width="650" height="800" src="../../simulations/tree_noise_fr.html"></iframe>


Nous avons étudié comment utiliser de multiples itérations de règles simples pour générer des arbres. 
Le concept utilisé ici est appelé "fractales" et peut être appliqué à la création de divers objets.


##### Pour aller plus loin

- Dans cette vidéo, MicMaths explique de la manière la plus simple possible, comme à son habitude, ce magnifique objet mathématique qu'est la fractale.

<iframe width="280" height="157" src="https://www.youtube.com/embed/iFA3g_4myFw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

- Autre billet de blog sur la modélisation des plantes : [interstices, Cultivons notre jardin](https://interstices.info/cultivons-notre-jardin/).

- Visualisation des fougères :
<iframe width="560" height="315" src="https://www.youtube.com/embed/Zh4oVYty61M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



