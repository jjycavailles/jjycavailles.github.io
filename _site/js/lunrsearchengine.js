
var documents = [{
    "id": 0,
    "url": "http://localhost:4000/blog/",
    "title": "",
    "body": "																	                                                                                         Youtube channels      :       Selection of interesting ressources               						selection						                18 Apr 2022        		            										 		     																					                                                                                         Forest fires      :       How to optimise the production of wood without risking a wildfire?               						simulation						                18 Apr 2022        		            												 		     											  "
    }, {
    "id": 1,
    "url": "http://localhost:4000/blog_fr/",
    "title": "Blog",
    "body": "																	                                                                                         Ressources interessantes      :       Sélection de livres, moosc, chaines youtubes               						selection						                18 Apr 2022        		            															 				     																										                                                                                         Geometrie des arbres      :       Modelisation de la geometrie d'un arbre               						simulation						                18 Apr 2022        		            																		 				     																							                                                                                         Feux de forêt      :       Modélisation d'un feux de forêt               						simulation						                18 Apr 2022        		            																																			                                                                                         Moutons et loups      :       Article interactif pour comprendre l'interet des modeles mathematiques               						simulation						                18 Apr 2022        		            															 				     									  "
    }, {
    "id": 2,
    "url": "http://localhost:4000/",
    "title": "Home",
    "body": ""
    }, {
    "id": 3,
    "url": "http://localhost:4000/index_fr/",
    "title": "Accueil",
    "body": ""
    }, {
    "id": 4,
    "url": "http://localhost:4000/js/lunrsearchengine.js",
    "title": "",
    "body": "{% assign counter = 0 %}var documents = [{% for page in site. pages %}{% if page. url contains ‘. xml’ or page. url contains ‘assets’ or page. url contains ‘category’ or page. url contains ‘tag’ %}{% else %}{  “id”: {{ counter }},  “url”: “{{ site. url }}{{site. baseurl}}{{ page. url }}”,  “title”: “{{ page. title }}”,  “body”: “{{ page. content | markdownify | replace: ‘. ’, ‘. ‘ | replace: ‘&lt;/h2&gt;’, ‘: ‘ | replace: ‘&lt;/h3&gt;’, ‘: ‘ | replace: ‘&lt;/h4&gt;’, ‘: ‘ | replace: ‘&lt;/p&gt;’, ‘ ‘ | strip_html | strip_newlines | replace: ‘ ‘, ‘ ‘ | replace: ‘”’, ‘ ‘ }}”{% assign counter = counter | plus: 1 %}  }, {% endif %}{% endfor %}{% for page in site. without-plugin %}{  “id”: {{ counter }},  “url”: “{{ site. url }}{{site. baseurl}}{{ page. url }}”,  “title”: “{{ page. title }}”,  “body”: “{{ page. content | markdownify | replace: ‘. ’, ‘. ‘ | replace: ‘&lt;/h2&gt;’, ‘: ‘ | replace: ‘&lt;/h3&gt;’, ‘: ‘ | replace: ‘&lt;/h4&gt;’, ‘: ‘ | replace: ‘&lt;/p&gt;’, ‘ ‘ | strip_html | strip_newlines | replace: ‘ ‘, ‘ ‘ | replace: ‘”’, ‘ ‘ }}”{% assign counter = counter | plus: 1 %}  }, {% endfor %}{% for page in site. posts %}{  “id”: {{ counter }},  “url”: “{{ site. url }}{{site. baseurl}}{{ page. url }}”,  “title”: “{{ page. title }}”,  “body”: “{{ page. date | date: “%Y/%m/%d” }} - {{ page. content | markdownify | replace: ‘. ’, ‘. ‘ | replace: ‘&lt;/h2&gt;’, ‘: ‘ | replace: ‘&lt;/h3&gt;’, ‘: ‘ | replace: ‘&lt;/h4&gt;’, ‘: ‘ | replace: ‘&lt;/p&gt;’, ‘ ‘ | strip_html | strip_newlines | replace: ‘ ‘, ‘ ‘ | replace: ‘”’, ‘ ‘ }}”{% assign counter = counter | plus: 1 %}  }{% if forloop. last %}{% else %}, {% endif %}{% endfor %}]; var idx = lunr(function () {  this. ref(‘id’)  this. field(‘title’)  this. field(‘body’) documents. forEach(function (doc) {  this. add(doc)}, this) }); function lunr_search(term) {document. getElementById('lunrsearchresults'). innerHTML = '&lt;ul&gt;&lt;/ul&gt;';if(term) {  document. getElementById('lunrsearchresults'). innerHTML =  &lt;p&gt;Search results for '  + term +  '&lt;/p&gt;  + document. getElementById('lunrsearchresults'). innerHTML;  //put results on the screen.   var results = idx. search(term);  if(results. length&gt;0){    //console. log(idx. search(term));    //if results    for (var i = 0; i &lt; results. length; i++) {      // more statements      var ref = results[i]['ref'];      var url = documents[ref]['url'];      var title = documents[ref]['title'];      var body = documents[ref]['body']. substring(0,160)+'. . . ';      document. querySelectorAll('#lunrsearchresults ul')[0]. innerHTML = document. querySelectorAll('#lunrsearchresults ul')[0]. innerHTML +  &lt;li class='lunrsearchresult'&gt;&lt;a href='  + url +  '&gt;&lt;span class='title'&gt;  + title +  &lt;/span&gt;&lt;br /&gt;&lt;span class='body'&gt; + body + &lt;/span&gt;&lt;br /&gt;&lt;span class='url'&gt; + url + &lt;/span&gt;&lt;/a&gt;&lt;/li&gt; ;    }  } else {    document. querySelectorAll('#lunrsearchresults ul')[0]. innerHTML =  &lt;li class='lunrsearchresult'&gt;No results found. . . &lt;/li&gt; ;  }}return false; }function lunr_search(term) {  $(‘#lunrsearchresults’). show( 400 );  $( “body” ). addClass( “modal-open” ); document. getElementById('lunrsearchresults'). innerHTML = '&lt;div id= resultsmodal  class= modal fade show d-block  tabindex= -1  role= dialog  aria-labelledby= resultsmodal &gt; &lt;div class= modal-dialog shadow-lg  role= document &gt; &lt;div class= modal-content &gt; &lt;div class= modal-header  id= modtit &gt; &lt;button type= button  class= close  id= btnx  data-dismiss= modal  aria-label= Close &gt; &amp;times; &lt;/button&gt; &lt;/div&gt; &lt;div class= modal-body &gt; &lt;ul class= mb-0 &gt; &lt;/ul&gt;  &lt;/div&gt; &lt;div class= modal-footer &gt;&lt;button id= btnx  type= button  class= btn btn-danger btn-sm  data-dismiss= modal &gt;Close&lt;/button&gt;&lt;/div&gt;&lt;/div&gt; &lt;/div&gt;&lt;/div&gt;';if(term) {  document. getElementById('modtit'). innerHTML =  &lt;h5 class='modal-title'&gt;Search results for '  + term +  '&lt;/h5&gt;  + document. getElementById('modtit'). innerHTML;  //put results on the screen.   var results = idx. search(term);  if(results. length&gt;0){    //console. log(idx. search(term));    //if results    for (var i = 0; i &lt; results. length; i++) {      // more statements      var ref = results[i]['ref'];      var url = documents[ref]['url'];      var title = documents[ref]['title'];      var body = documents[ref]['body']. substring(0,160)+'. . . ';      document. querySelectorAll('#lunrsearchresults ul')[0]. innerHTML = document. querySelectorAll('#lunrsearchresults ul')[0]. innerHTML +  &lt;li class='lunrsearchresult'&gt;&lt;a href='  + url +  '&gt;&lt;span class='title'&gt;  + title +  &lt;/span&gt;&lt;br /&gt;&lt;small&gt;&lt;span class='body'&gt; + body + &lt;/span&gt;&lt;br /&gt;&lt;span class='url'&gt; + url + &lt;/span&gt;&lt;/small&gt;&lt;/a&gt;&lt;/li&gt; ;    }  } else {    document. querySelectorAll('#lunrsearchresults ul')[0]. innerHTML =  &lt;li class='lunrsearchresult'&gt;Sorry, no results found. Close &amp; try a different search!&lt;/li&gt; ;  }}return false; }$(function() {  $(“#lunrsearchresults”). on(‘click’, ‘#btnx’, function () {    $(‘#lunrsearchresults’). hide( 5 );    $( “body” ). removeClass( “modal-open” );  });}); "
    }, {
    "id": 5,
    "url": "http://localhost:4000/css/main.css",
    "title": "",
    "body": "// Abstracts@import “abstracts/functions”;@import “abstracts/mixins”;@import “abstracts/variables”; // Base@import “base/reset”;@import “base/base”; // Utilities@import “utilities/grid”;@import “utilities/flex”;@import “utilities/spacing”;@import “utilities/sizing”;@import “utilities/typography”;@import “utilities/accessibility”;@import “utilities/clearing”; // Components@import “components/buttons”;@import “components/icons”;@import “components/forms”;@import “components/tables”;@import “components/menus”;@import “components/avatars”;@import “components/cover”;@import “components/cards”;@import “components/containers”;@import “components/banner”;@import “components/text-block”; // Layouts@import “layouts/site”;@import “layouts/header”;@import “layouts/footer”;@import “layouts/announcement”;@import “layouts/section”;@import “layouts/post”;@import “layouts/page”; // Color variations@import “variations/modes”; span. post-date,span. post-read {  color: rgba(0, 0, 0, . 44);} span. categories {				color: rgba(0, 0, 100, . 9				);} . article-post {  font-family: Merriweather;  font-size: 1. 1rem;  line-height: 1. 84;  color: rgba(0, 0, 0, . 8);} . post-top-meta. authorpage . btn. follow {  padding: 7px 20px;  margin-top: 10px;  margin-left: 0;  font-size: 0. 9rem;} . bottompagination span. navigation {  display: block;  font-size: 0. 93rem;  padding: 15px 0 0 0;  text-align: center;  margin-bottom: 0rem;  color: #999;  border-top: 1px solid #ddd;} . pointerup {  margin-bottom: -17px;  margin-left: 49%;  font-size: 30px;} . pointerup i. fa {  color: #eaeaea;} . bottompagination span. navigation i {  display: inline-block;} span. navigation {  display: inline-block;  font-size: 0. 93rem;  font-weight: 700;  text-align: center;} . pagination {  display: block;} . column {  float: left;				@media(min-width: 460px) {				width: 30%;				}@media(max-width: 460px) {				width: 100%;				}  height: 500px;  grid-column-gap: 5%;  column-gap: 5%;  display: inline-block; } . spacecol {				@media(min-width: 460px) {				width: 5%;				}@media(max-width: 460px) {				width: 1px;				}				float: left;				grid-column-gap: 5%;  column-gap: 5%;} . column:after {				width: 5%;				float: left;} . row {width: 100%;height: 1800px;} "
    }, {
    "id": 6,
    "url": "http://localhost:4000/me/",
    "title": "Me",
    "body": ""
    }, {
    "id": 7,
    "url": "http://localhost:4000/merci/",
    "title": "Merci !",
    "body": ""
    }, {
    "id": 8,
    "url": "http://localhost:4000/moi/",
    "title": "Moi",
    "body": ""
    }, {
    "id": 9,
    "url": "http://localhost:4000/thank-you/",
    "title": "Thank You",
    "body": ""
    }, {
    "id": 10,
    "url": "http://localhost:4000/posts/selection_fr/",
    "title": "Ressources interessantes",
    "body": "2022/04/18 - Voici une selection de mes chaines Youtube favorites. Le contenu est, en general, accessible pour tout les publics. C’est pas sorcier: Fouloscopie: Science4all: Hygiène Mentale: Micmaths: Comprendre et Agir: Greenletter Club: Passe-Science: ScienceEtonnante: Espace des sciences: Podcast:    podcast science     Science en questions  Mes livres français préférés. : Bien que specifiques, ces livres sont accessibles au grand public.    De Rosnay, Joël. Le Macroscope. Vers une vision globale. Seuil, 1975 Malgre presque 50 ans, ce livre a plutot bien viellit. Il offre une introduction claire et complete de la therorie des systemes.     Sélosse, Marc-André. Jamais seul: ces microbes qui construisent les plantes, les animaux et les civilisations. Éditions Actes Sud, 2017.     Morin, Edgar. Introduction à la pensée complexe. Média Diffusion, 2015.     Martin, Francis. Sous la forêt: pour survivre il faut des alliés. HumenSciences, 2019.     Prigogine, Ilya, and Isabelle Stengers. La fin des certitudes: temps, chaos et les lois de la nature. Vol. 77. Odile Jacob, 1996.  Moocs: Voici une sélection de MOOCs en francais que j'ai apprecies. Mooc est l'acronyme de  Massive open online course , qui se traduit en francais par  cours en ligne massif . Ma vision de ces cours est qu'ils offrent une complementarite avec les cours classiques enseignes dans les etablissement traditionels. En effet, les MOOCs sont bien souvent des introductions et ne vont pas en profondeur. Toutefois, grace a la grande diversite de MOOCs accessible sur le net, cette characteristique peut etre un avantage, car elle permet a tout un chacun d'explorer differents sujets. Comprendre la gestion forestière Cours donnant un appercu de la gestion forestiere. Ce cours, facile d’accees, est a mon avis interessant pour toute personnes s’interessant de pres ou de loin a la foret. Questions stratégiques : comprendre et décider dans un monde en mutation Ce mooc traite des relations geopolitiques de facon theorique. Il comporte notament une breve section sur la theorie des jeux. Acteurs, leviers, outils pour mener les transitions du système alimentaire Tout le monde mangeant quelques fois par jour, le sujet concerne tout le monde. En particulier, ce cours permet d’expliquer les difficultes et les leviers d’une transition agro alimentaire. Abeilles et environnement Ce cours en ligne se concentre sur la relation entre les abeilles ?melliferes? et leurs environements. On y apprant qu’elles sont sensibles a differents facteurs, comme la bacterie vareola ou les changements de temperatures. Exercer son esprit critique : données et raisonnements fallacieux Sans etre exhaustif, ce cours nous alerte sur les biais cognitifs, en nous livrant quelques exemples. Un liste similaire de Mooc en anglais est presentes ici. Revoir les moocsSelection de site:    Interactif : Experimentarium Digitale . . En francais     interstices     breves de maths     images des mathematiques     adnaturam     cafe des sciences     Le journal du CNRS     Association Française pour l’Information Scientifique  Pour aller plus loin :: Sélection de chaînes Youtube en Anglais "
    }, {
    "id": 11,
    "url": "http://localhost:4000/posts/selection_en/",
    "title": "Youtube channels",
    "body": "2022/04/18 - 3Blue1Brown: Stockholm Resilience Centre TV: Santa Fe Institute: Podcast:  complexity by the Santa Fe InstituteSelection of moocs:    Game theory     Different moocs about complexity provided by the Santa Fe Institute, such as:      Introduction to Complexity   Fractals and Scaling   Introduction to Dynamical Systems and Chaos   Nonlinear Dynamics: Mathematical and Computational Approaches   Selection of interactive website:    Website of Nicky Case In particular the evolution of trust about Game theory. However, this simulation do not explore all possible solution.     explorables     Website of Dirk Brockmann     complexity explained This website is coordinated by Manlio De Domenico and Hiroki Sayama, the last one is a wellknown complexity scientist.     myphysicslab     euclidea Nice and addictive game to reconstruct geometry.     seeing-theory To visualize probability theory and statistics.     climate interactive  Selection of website/Blog Philosoph’s blog:    Johannes Jaeger     Leonardo Bich     Xabier Barandiaran  (https://outonomy. net/) ?? Academic life:    phd comics     Cal Newport He essentially gives advice about productivity by being deeply focused.     A consise and helpful guide from Jonathan Newton to reread from time to time.  Research: If you want to conduct your own research, here is some website that could be handy.    [Google schoolar]     [Research Gate]  Film: A Beautiful Mind The Imitation Game The big short To see after:: Selection of interesting ressources in French "
    }, {
    "id": 12,
    "url": "http://localhost:4000/posts/fractales/",
    "title": "Geometrie des arbres",
    "body": "2022/04/18 - Arbres avec des fractales: Ici, on va essayer de reproduire la geometrie d’un arbre de la facon la plus simple possible. On peut remarquer que les arbres sont formee de facon auto similaire …. expliquer la formation fractales des arbres commencer par juste le tronc et 3 branches: mettre une photo: ensuite on reitere: mettre une photo avec 3 niveaux puis a cote (a droite) avec 4 niveaux, puis dessous 5 et 6 niveaux: (simulation deterministe)param:  taille ratio (entre le tronc et les premieres branches) ecart entre les branches (angle)(expliquer et demander a l’utilisateur de faire varier les parametres) demander a l’utilisateur d’essayer de reproduire la geometrie des arbres suivants: (simulation probabiliste)On probleme de ce modele, c’est que c’est un peu “sec”. Afin de rendre notre modele plus realiste, on va introduire des probabilites.  introduire des probaLe nouveau modele Meme chose pour les fougeres comme dans l’exemple suivant Conclusion: On peut reproduire assez fidelement la geometrie d’un arbre avec de simples regles. Introduire du hasard dans le modele peut le rendre plus realiste. Pour aller plus loin code inspired from : https://notebook. community/relopezbriega/mi-python-blog/content/notebooks/fractalAutre simulation sur l’excellent site de Dirk Brockmann interstices, Cultivons notre jardin Le livre : “The Algorithmic Beauty of Plants” "
    }, {
    "id": 13,
    "url": "http://localhost:4000/posts/fires/",
    "title": "Forest fires",
    "body": "2022/04/18 - In this article we will study a simple model that represents the spread of a forest fire. This model has been adapted from the example provided on the official site of NetLogo. We represent a piece of forest with green dots for the trees and black dots for the rocks.  Then, a fire is started on the left part of the forest. The lights are represented by red dots. Fire can only burn trees (green dots). Thus the black dots prevent the fires from spreading.  Depending on the tree density (the proportion of green dots) the fires may or may not spread to the right of the forest. To launch the simulation, click on “setup” then on “go”. What tree density will you choose, to maximize the production of wood without risking that a fire burns the whole forest? Try to restart the simulation (setup) with different densities (density) to maximize the final value of “money”. It can be seen that there is a critical density beyond which the forest will almost always burn to the right. Indeed, for a density above 65% the forest to the right. On the other hand, for a density below 55%, the fires are quickly stopped due to the lack of trees side by side. "
    }, {
    "id": 14,
    "url": "http://localhost:4000/posts/feux/",
    "title": "Feux de forêt",
    "body": "2022/04/18 - Dans cet article on va etudier un modèle simple qui représente la propagation d’un feux de forêt. Ce modèle a ete adapte de l’exemple fourni sur le site officiel de NetLogo. On représente un morceau de forêt avec des points verts pour les arbres et des points noirs pour les rochers. s Ensuite, un feux est déclenché sur la partie gauche de la foret. Le feux est représenté par des points rouges. Le feux peut seulement brûler les arbres (points vert). Ainsi les points noirs empêchent le feux de se propager.  En fonction de la densité d’arbre (la proportion de points verts) le feux arrive ou non a se propager jusqu’à la droite de la foret. Pour lancer la simulation, il faut cliquer sur “setup” puis sur “go”. Quelle densité d’arbre allez vous choisir, pour maximiser la production de bois sans risquer qu’un feux brûle toute la foret ? Essaye de relancer la simulation (setup) avec différentes densité (density) pour maximiser la valeur finale de “money”. On peut remarquer qu’il existe une densité critique au delà du quel la foret va presque toujours brûler jusqu’à la droite. En effet, pour une densité au dessus de 65% la foret jusqu’a la droite. En revanche pour une densité en dessous de 55%, le feux est rapidement arrêté par manque d’arbre cote a cote. "
    }, {
    "id": 15,
    "url": "http://localhost:4000/posts/Lotka-Volterra/",
    "title": "Moutons et loups",
    "body": "2022/04/18 - Ici, je vais vous parler d’un des premiers modeles mathematiques en ecologie des populations, il s’agit du systeme de Lotka Volterra. La simluation ci-dessous a ete adapte d’un exemple cree par NetLogo. Pour lancer la simulation, cliquer sur “setup”, puis sur “go”. On peut distinguer deux populations, les loups et les moutons. Les moutons mangent l’herbe et se reproduisent regulierement. Ils peuvent etre manger par des loups. Les loups ont besoin de manger des moutons pour pouvoir eux-aussi se reproduirent, et si ils ne mengent pas assez, ils finissent par mourir. On peut simplifier l’etude de ces deux populations en utilisant le systeme dynamique suivant, avec x la population de moutons et y celle des loups. dx/dt est la vitesse a laquelle la population de moutons evolue, meme chose avec dy/dt pour les loups. L’acroissement de la population de mouton est proportionnel a alpha, et les montons meurent lorsqu’ils rencontrent un loups, ce qui se produit avec une probabilite proportionnelle a xy. De meme, les loups s’acroissent lorsqu’ils rencontrent des montons (puisqu’ils les mangent) et ils meurent avec une probabilite gamma.  La resolution de ce systeme d’equations differentielles permet d’etudier directement l’evolution de ces deux populations. Pour activer la resolution, cliquer sur “show widget” et attendez. L’avantage de ce second modele est qu’on ne considere ni l’espace, ni chaque individu, mais simplement le nombre d’individu pour chaque population. On peut verifier que ce modele peut lui aussi predire des cycles de croissance et decroissance de plus en plus fort. "
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow-lg" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-danger btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><small><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});