---
layout: post
title: Music fans think music has gotten worse, critics think music has gotten better
author: Chris Persaud
---

Music lovers love music of the past more than music of today, Metacritic data shows.

<a href="http://metacritic.com" target="_blank">Metacritic</a> averages professional music critics' scores for each album. The score is called a Metascore. I wrote <a href="https://github.com/chrismp/Metacritic-music-scanner">this Ruby/Shell program</a> that scraped this data from Metacritic's <a href="http://www.metacritic.com/music">music section</a>.

Metacritic explains <a href="http://www.metacritic.com/about-metascores" target="_blank">here</a> in more detail how an album's Metascore is determined. If an album's Metascore is between 61 and 100, critics generally consider it a good album. If the score is between 40 and 60, critics think it's OK, but not great. Any score less than 40 means critics think the album is bad. The scoring scale if similar for user scores, which range from 0 to 10. A score of 6.1 to 10 means users like the album, four through six means users think it's OK, and zero to 3.9 means users hate it.

After scraping and analyzing the data, I found that <b>listeners think music is getting worse</b> while <b>critics think music is getting better</b>.