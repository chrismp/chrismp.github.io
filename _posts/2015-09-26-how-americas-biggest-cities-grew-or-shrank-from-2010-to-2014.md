---
layout: post
title: How America's biggest cities grew or shrank from 2010 to 2014
author: Chris Persaud
---

I noticed the U.S. Census released 2014 population estimates for each city. I also noticed no one made a grouped bar chart comparing the biggest cities' populations for 2014 to 2010. So I decided to solve this problem.

Here's a chart showing how cities with at least 500,000 people grew or shrank from 2010 to 2014. 

Every city on the list except Detroit grew from 2010 to 2014, the data shows. The motor city lost 33,496 people.

New York City grew the most, with 315,946 more people than it had at the start of the decade. But that's small for the city of 8.4 million. Only about one in 27 people are new in town.

Austin, Texas' population grew from 790,390 to 912,798. That means around one in seven people there are new.

I used data from the 2010 U.S. Census and the 2014 American Community Survey. I made the chart with [D3.js](http://d3js.org/). You can download the data from [this Github repo of mine](https://github.com/chrismp/chrismp.github.io/tree/master/public/datasets).

{% include charts/US-big-cities-population-2010-to-2014.html %}

### Log vs. linear

Data geeks may notice I've used a logrithmic scale for population instead of a linear one. For those who don't know the difference, here's an oversimplistic explanation. If the population scale was linear, the numbers on the lines might be 500k, 1M, 1.5M, 2M, 2.5M -- evenly spaced by 500,000. Instead, the number on each line is twice as big as the last: 500k doubles to 1M doubles to 2M and so on. It's a log scale. 

I chose a log scale for two reasons.

First, if I chose a linear scale, New York City's population bar would look huge. Los Angeles' and Chicago's would look tiny. And the others would barely cross the half-inch mark on a mobile phone. 

And like every web developer in 2015, I want this to look good on mobile.

Second, it's a fair way to show how each city's population changed from 2010 to 2014. Compare New York and Austin. New York's population grew by 315,946. Austin's by 122,408. Yet New York's 2014 bar looks barely wider than it's 2010 bar, while Austin's 2014 bar is much wider than it's 2010 bar, despite gaining fewer people than the Big Apple. 

On a linear scale, all gains and losses look the same. On a log scale, moving 100 points on a scale's low end looks way more dramatic than moving the same distance on the high end. That's why Austin's population change looks bigger than New York's.

I figured a log scale is a fast way to show the population change from 2010 to 2014, as a percentage of 2010's population. For New York, gaining 315,946 meant its population grew only about four percent. For Austin, gaining 122,408 people meant 15 percent growth. So 315,946 is small for the most populated city in America, while 122,408 is big for Texas' capital. The log scale bar chart reflects this.