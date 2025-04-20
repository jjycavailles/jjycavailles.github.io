---
layout: page
title:  "Colonies de fourmis"
date:   2025-04-18 21:21:21 +0530
categories: ["simulation"]
ref: ant
lang: fr
featured: true
hidden: true
---


#### Comment les fourmis créent-elles des chemins ?

Imaginez une colonie de fourmis tombant sur un morceau de sucre dans votre cuisine. En quelques minutes, vous voyez une ligne quasi parfaite de fourmis se déplacer entre le sucre et leur nid. Pas de GPS. Pas de patron. Pas de carte. Pas de Wi-Fi. Alors, comment font-elles ?

Dans cet article, nous explorerons comment une chose aussi simple qu'une fourmi peut contribuer à l'émergence de comportements complexes et efficaces. Au fil de l'expérience, vous interagirez avec une simulation et découvrirez par vous-même comment l'intelligence collective naît de la simplicité individuelle.

Les vraies fourmis n'ont pas beaucoup de matière grise. Leur comportement individuel est assez simple.
Nous montrerons comment le comportement apparemment complexe d'une colonie entière de fourmis peut émerger de quatre règles individuelles simples :

1. **Déambuler** au hasard jusqu'à trouver de la nourriture.
2. Retourner au nid en laissant une trace chimique (**phéromones**).
3. **Suivre** les traces de phéromones lorsqu'elles sont détectées.
4. Laisser les phéromones s'évaporer progressivement.

Malgré la simplicité de ces règles, nous verrons que le comportement collectif qui en découle est étonnamment sophistiqué.
Utilisons la simulation du site web officiel de [NetLogo](http://netlogoweb.org/launch#http://netlogoweb.org/assets/modelslib/Sample%20Models/Biology/Ants.nlogo){:target="_blank" }.
Considérons un monde en grille avec :
- Un nid (en violet), placé au centre.
- Trois sources de nourriture (en bleu), situées autour.

<img src="/images/ants_setup.png" width="400"/>

Commençons par libérer une seule fourmi du nid.
La fourmi à l'écran suivra les trois règles de base décrites précédemment.

Cliquez sur «**configurer**» puis sur «**lancer**» pour lancer la simulation.


<iframe width="1000" height="700" frameBorder="0" src="../../simulations/ants_1_ant_fr.html" ></iframe>


Observez-la errer au hasard dans son environnement. Lorsqu'elle trouve de la nourriture, elle retourne au nid, laissant derrière elle une traînée de phéromones (en vert). Vous remarquerez que cette traînée s'évaporera avec le temps si elle n'est pas renforcée.

Cette fourmi solitaire n'a pas l'air très efficace.
Prenons maintenant plusieurs fourmis.
Chacune suit les mêmes règles simples que celles décrites précédemment.

Cliquez à nouveau sur «**configurer**» puis sur «**lancer**» pour lancer la simulation.

<iframe width="1000" height="700" frameBorder="0" src="../../simulations/ants_fr.html" ></iframe>

Un phénomène remarquable se produit alors : des pistes commencent à se former ! Aucune fourmi n’a une vue d’ensemble de la carte. Aucune ne coordonne les autres. Pourtant, ensemble, elles construisent un réseau de transport efficace.
Comme vous pouvez le constater, chaque fourmi suit des règles locales simples. Mais collectivement, la colonie trouve les chemins les plus courts, répartit les ouvrières de manière dynamique et peut également s’adapter aux variations de l’approvisionnement alimentaire.
En effet, lorsqu’un nombre suffisant de fourmis renforcent le chemin des phéromones, un itinéraire efficace apparaît, attirant encore plus de fourmis.
Mais si la nourriture s’épuise, la piste disparaît. Les fourmis reprennent leur exploration et de nouvelles pistes peuvent apparaître, démontrant ainsi l’adaptabilité du système.

Il s’agit d’un exemple de [stigmergie](https://fr.wikipedia.org/wiki/Stigmergie) — un concept biologique qui décrit la coordination indirecte par le biais de traces environnementales. Chez les fourmis, l’environnement est marqué chimiquement par des phéromones. Mais l'idée est plus générale : un agent modifie l'environnement, et ce changement oriente les comportements futurs, créant ainsi une boucle de rétroaction.

Pour explorer ce phénomène plus en profondeur, utilisez les curseurs pour modifier les paramètres clés du modèle.
- **Population** : nombre de fourmis se déplaçant sur la grille. Lorsqu'elles sont peu nombreuses, elles n'explorent pas l'environnement en profondeur et les traces ne se forment souvent pas.
- **Taux de diffusion** : contrôle la dispersion des phéromones à partir de leur point de dépôt. Si la diffusion est très faible, les traces restent étroites.
En revanche, si le taux de diffusion est élevé, les phéromones se dispersent davantage et les traces deviennent floues. Si cela facilite la détection des traces par les fourmis à proximité, cela peut également entraîner la confusion de plusieurs traces ou les rendre moins significatives, rendant plus difficile pour les fourmis de s'engager dans une direction spécifique.
- **Taux d'évaporation** : détermine la durée d'activité des traces de phéromones. Lorsque l'évaporation est lente, les traces persistent plus longtemps. Ainsi, une fois trouvée, une voie a tendance à rester solide. Cela peut rendre le système très efficace, mais cela complique également l'adaptation de la colonie aux changements de conditions.
À l'inverse, lorsque l'évaporation est rapide, le système est plus flexible. Cela favorise l'adaptabilité, mais peut ralentir la formation de voies stables, car les bonnes voies ne durent pas assez longtemps pour être renforcées.

Ensemble, ces trois paramètres – le nombre de fourmis, la portée de leurs phéromones et leur durée de vie – façonnent la capacité de la colonie à explorer, apprendre et s'adapter. Il n'existe pas de paramètre « correct ».
Le comportement le plus efficace apparaît lorsque le système trouve un équilibre entre [exploration et exploitation](https://en.wikipedia.org/wiki/Exploration%E2%80%93exploitation_dilemma) :
- **Exploration** signifie vagabonder, essayer de nouveaux chemins, et parfois avoir de la chance. C'est ce qui permet au système de découvrir des sources de nourriture.
- L'**exploitation** consiste à renforcer et à s'appuyer sur des chemins efficaces connus. C'est ce qui rend le système efficace une fois les bons chemins découverts.

Trop d'exploration, et les fourmis ne s'arrêtent jamais sur un bon chemin.
Trop d'exploitation, et la colonie devient rigide ; elle cesse de s'adapter.
Cet équilibre n'est pas inhérent à chaque fourmi. Il résulte de l'interaction entre la chimie des phéromones, le mouvement et le temps.

Ce phénomène apparaît également dans les algorithmes d'optimisation, comme l'optimisation des colonies de fourmis, utilisés en robotique, en logistique et en informatique.


