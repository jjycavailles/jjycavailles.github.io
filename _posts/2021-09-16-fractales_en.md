---
layout: page
title:  "Tree geometry"
date:   2022-04-18 21:21:21 +0530
categories: ["simulation"]
image: ../../images/Fractal_canopy.svg.png
description: "Modeling the geometry of a tree using fractals."
ref: fractales
lang: en
---

Here, we will attempt to replicate the shape of a tree in the simplest way possible.
The trick is to leverage the similarity of the branching process at different scales. 
Let me explain this. 
If we observe a tree, we can see that from the trunk, several branches emerge, and from these branches, several smaller branches emerge. 
In a way, each branch is like a small trunk from which smaller branches can emerge.


For example, in the first image below, we can see a trunk with three branches. 
In the second image, there is a tree with three branches, and now each of these three branches also has three sub-branches. 
Interestingly, the last picture shows that the structure between each branch and its sub-branches is the same as between the trunk and its branches.


<img src="/images/tree_1.png" width="200"/>
<img src="/images/tree_2.png" width="200"/>
<img src="/images/tree_3.png" width="270"/>


Using this principle, we can iterate the operation to create smaller and smaller branches. 
In the animation below, you can increase the slider called "iterations" to draw more branches. 
The second parameter, "decay," indicates the difference in scale between each level. 
The last parameter is "angle," which determines the angle between branches.


<iframe frameBorder="0" width="650" height="700" src="../../simulations/tree_en.html"></iframe>


You can experiment with different values of "decay" and "angle" to alter the shapes of the trees. 
Some parameter values may produce more realistic results than others. 
Try reproducing the shape of a fir tree. 
In this initial model, the length of each branch at the same level is identical, which differs from a real fir tree. 
Now, let's enhance the model by introducing two different decay parameters: one for the central branch and another for the lateral branches. 
In the animations below, you can attempt to recreate the shape of a fir tree.


<iframe frameBorder="0" width="650" height="800" src="../../simulations/tree_central_en.html"></iframe>


We now have an improved model, but the trees still appear somewhat artificial. 
To make them look more natural, we'll introduce a bit of randomness in the construction of trees. 
We'll add a small amount of noise to the angle and decay parameters for each level. 
This adjustment results in trees that appear more natural.


<iframe frameBorder="0" width="650" height="800" src="../../simulations/tree_noise_en.html"></iframe>


We explored how to use multiple iterations of simple rules to generate trees. 
The concept used here is referred as "fractals" and can be applied to create various objects.


##### Further

- Another simulation on [Dirk Brockmann's excellent website](https://www.complexity-explorables.org/explorables/weeds-and-trees/). 
After you've had your fun with the "Weeds & Trees" simulation, now you can have fun with other simulations. 
Click on "Explorables" in the top right-hand corner. 
This site uses simulations to explain concepts from complex systems theory. 
Among other things, I recommend "double-trouble", which visualizes chaos theory using a double pendulum.

- The book "The Algorithmic Beauty of Plants" describes the structure of plants in mathematical terms.

- Visualization of ferns:
<iframe width="560" height="315" src="https://www.youtube.com/embed/Zh4oVYty61M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>





