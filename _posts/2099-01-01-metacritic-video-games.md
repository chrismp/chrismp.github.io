---
layout: post
title: 
author: Chris Persaud
---



I learned some interesting facts after downloading more than 14,000 video game reviews from game ratings website [Metacritic.com](http://metacritic.com).

- Video games released in the past few years are the worst of this century so far -- or at least, that's what gamers think.
- Players and game critics disagree more than ever since Metacritic began averaging scores from critics and fans.
- **Apple iPhone games** are the most overrated. Critics think they are great. Players think they are either bad or just OK.
- For the newest consoles, gamers and critics disagree most on the quality of games for the **Xbox One** and **Playstation**...
- ...But critics and gamers generally agree that **Wii-U** games are pretty good.
- For the biggest video game publishers of the 2010s so far: **Activision**, **Electronic Arts** and **Deep Silver** have the worst ratings from players. **Valve Software**, **Rockstar Games** and **Telltale Games** have the best.
- For the biggest developers of the 2010s so far: **Infinity Ward**, **Sledgehammer Games** and **Treyarch** have the worst ratings from players. **CD Projekt Red Studio**, **Naughty Dog** and **Irrational Games** have the best.
- The most underrated game is **Counter-Strike: Condition Zero**, released for PC in 2004. The most overrated game is **Company of Heroes 2**, released for PC in 2013. Second place goes to **Call of Duty: Modern Warfare 3**, released in 2011 for Playstation 3, Xbox360 and PC.

When it comes to video games, critics' ratings matter. Game studio Obsidian Entertainment lost out on a $1 million bonus when the [Metacritic ratings](http://www.metacritic.com/game/pc/fallout-new-vegas) for its 2012 game *Fallout: New Vegas* failed to reach 85 by one point, gaming news site *[Kotaku](http://kotaku.com/a-look-at-metacritics-many-problems-16849849440)* reported in 2013. Big publishers also consider a studio's Metascore before agreeing to pay it millions of dollars to make a video game.

But over the past 16 years, the Metacritic ratings of game critics have increasingly failed to reflect the ratings of Metacritic users. Players and critics disagree more than ever since Metacritic started in 2001 with the [stated mission](http://www.metacritic.com/about-metacritic) to "help consumers make an informed decision about how to spend their time and money on entertainment."

What follows is my analysis of more than 14,000 video games ratings from Metacritic and 321,000 critic scores. This post shows the increasing divergence between consumers and critics, which critics best reflect gamers' opinions, which critics do not, which developers and publishers consistently make the best games, and which ones consistently do the opposite. Players' opinions are defined here as Metacritic user scores.


## How Metacritic works 

Metacritic's goal is to make it easy for gamers to see what critics think of a game using a simple score instead of a bunch of different scales and ratings. This number is called a Metascore.

Metacritic takes scores from many gaming critics with different scoring systems and converts them into an easy-to-understand Metascore. Example: If a critic uses a four-star scale where zero stars is worst and four is best, one star means a Metascore of 25, Metacritic's website [states](http://www.metacritic.com/about-metascores).

A Metascore of 75 or greater means critics' ratings of a game are generally positice. A score of 50 to 74 means reviews are mixed, and a Metascore of 49 or less means critics dislike the game. A game needs at [least three critic reviews](http://www.metacritic.com/faq#item13) before Metacritic assigns it a Metascore. 

Metacritic does not weigh all critics equally when averaging their scores. Some critics influence a game's Metascore more than others. Metacritic does not say how much each critic's rating influences a Metascore.

A game's user score shows what Metacritic's users think of it. A score of 7.5 or more means users generally like the game. A score of five to 7.4 means reviews are mixed. If a game score less than five, it means users generally dislike it.


## What I analyzed

I scraped 14,458 reviews from Metacritic using [this Ruby script](https://github.com/chrismp/Metacritic-video-games-scanner) I wrote.

I collected just about every piece of data I saw from each game's Metacritic page. This includes but is not limited to a game's title, summary, console, developer, publisher, genre, release date, number of critic reviews on Metacritic, user score, number of user score, and ESRB rating. 

The oldest game analyzed is "Doom II", released September 30, 1994 for PC. The newest is "Bound", released Aug 16, 2016 for PS4.

I also collected each critic's assigned Metascore for each game and put them in a database separate from the first. The total is 366,949 critic ratings.

I excluded from my analysis any games with user scores overrun by trolls. Games based on the "[Shrek](https://en.wikipedia.org/wiki/Shrek_(franchise))" movie series were the biggest victims of insincere votes by trolls on Metacritic. "[Shrek Swamp Kart Speedway](http://www.metacritic.com/game/game-boy-advance/shrek-swamp-kart-speedway)", a 2002 racing game for the Game Boy Advance, got a Metascore of 27, but a user score of 8.9. One troll wrote, "I'm shrekened because I fear I can not give enough rating to this shrektacular game. I've had an ogregasm. Thank you my ogrelord."

Two PC games from 2003 seemed overrun by insincere votes: "[Navy SEALs: Weapons of Mass Destruction](http://www.metacritic.com/game/pc/navy-seals-weapons-of-mass-destruction/user-reviews)" and "[Gods and Generals](http://www.metacritic.com/game/pc/gods-and-generals/user-reviews)." Both received low marks from critics, but have high user ratings. A closer look at the user reviews reveal that most of the high votes came on June 11, 2012 by a handful of users writing near-identical reviews with memes and bad English.


## Players dislike one in eight video games

---
{% include charts/Metacritic-videogames/chart-metascore-group-by-year.html %}
---
---
{% include charts/Metacritic-videogames/chart-user-score-group-by-year.html %}
---
The most interesting fact I found was that players believe video games nowadays are worse than ever. Half of games released from 1999-2006 were rated "Good" by Metacritic's users, getting scores of at least 7.5. But from 2007 onwards, players' ratings steadily dropped. At least 50 percent of games released in 2015 and 2016 so far have been rated at a 7.0 or below, which means ratings of "bad" or "mixed." (For this part of the analysis, I included only the years 1999 to 2016, since Metacritic has user scores for at least 50 games in each of those years.)

What's more, the share of games users rate as "bad" nearly tripled over the past 16 years. Only about one in 22 games released in 2000 had a user score of 4.9 or less on Metacritic. **For 2016 so far, about one in eight games were considered terrible.**


## IPhone games are really bad, Wii-U games are pretty good

[CRITIC-USER SPLIT BY CONSOLE CHART]

Since older games have higher user ratings, it follows that players rate games released on older game consoles higher than games for the current systems. The **Playstation** and **Nintendo 64**, released in 1994 and 1996, have the **best-rated games**, with median user scores of 8.1 and 8.3. 

But games for the **Xbox One** and **Playstation 4**, both released in 2013, have the **worst-rated games**, with median user scores of 6.8 and 6.9. The **Nintendo Wii-U** is the exception among the newest gaming consoles, with half of its games getting user scores of at least 7.3 -- better than games for the Playstation 3, Xbox360 and Wii, which made up the previous generation of consoles.

By far, Metacritic users rate games for iPhones and iPads worse than any system listed on the site. But critics like them more than games for any system besides the Nintendo 64 and Sega Dreamcast. Half of mobile games received user scores of 6.5 or less, but Metascores of 79 or more. This is the biggest split between players and critics for all gaming systems on Metacritic.

PC games also fail to escape the "older was better, newer is worse" phenomenon. PC games released in 2000 listed on Metacritic are considered amazing by users, with half the games receiving user scores of at least eight. But for 2016 so far, seven is the median user score for PC games.


## Big developers getting worse

[CHART COMPARING METASCORE/USER-SCORES FOR BIG 2000s DEVs]

Players' distaste for new games goes beyond gaming systems. Metacritic users believe game developers big and small put out worse games each year. This was made clear when I compared ratings for the biggest developers in the 2000s and 2010s. I define big developers in each decade as the 20 with the most votes from Metacritic users and who have made at least five games.

**Valve** was the highest-rated big developer in the first decade of the 21st century. Thanks to PC games like its "Half-Life" series, "Counter-Strike" series, and "Team Fortress 2" and "Portal", Valve earned a median user rating of 8.6 and a median Metascore of 89. But for 2010 to July 2016, half of its games garnered user scores of 8.1 or less and Metascores of 80 or less. Although Valve made near-universally-acclaimed games like "Left 4 Dead 2" and "Portal 2" during this time, players nevertheless rated those games as less great than the ones released in the previous decade. While "Portal" earned a 9.3 in 2007, its 2011 sequel earned an 8.8. Worse still, 2013's "Dota 2" earned a mediocre 6.2 -- despite universal acclaim from critics.

**Infinity Ward** fell hardest. The studio known for its "Call of Duty" action/shooter series earned a median user rating of 7.7 from players and a median Metascore of 89 in the 2000s. But all its games this decade got user scores ranging from 1.8 to 5.1. Last decade, most of Infinity Ward's "Call of Duty" games, from 2003's "Call of Duty" to 2009's "Call of Duty 4: Modern Warfare," earned scores ranging from 8.1 to 8.5. This started changing with 2009's "Call of Duty 4: Modern Warfare 2," which earned user scores of 4.2 on PC and 6.3 on both Xbox 360 and PS3. [INSERT QUOTES HERE]. Depsite this, the game earned critical acclaim, with Metascores in the 80s and 90s. The player-critic disagreement widened with each new "Call of Duty" game. While critics rated 2013's "Call of Duty: Ghosts" lower than previous entries in the franchise, players tore it a new one. The game earned abysmal player ratings of 4.2 on Xbox One, 3.5 on Playstation 4, 2.6 on Xbox 360, 2.5 on PS3, and 2.0 for PC. [MORE QUOTES].

None of the big developers of this decade or the previous one improved its standing among players on Metacritic. At best, their user ratings barely fell. **Naughty Dog** and **Square Enix** are the best examples of this.

Known for its popular "Crash Bandicoot" games for the Sony Playstation in the 1990s, Naughty Dog earned high marks from players and critics in the 2000s with its "Jak and Daxter" series for the Playstation 2. During this decade, all of Naughty Dog's games got user scores ranging from 7.7 to 8.7, well above the 7.5 needed for a game to be considered "good" by Metacritic users. Naughty Dog continued to receive high marks this decade with its "Uncharted" and "The Last of Us" series. The 2013 release of "The Last of Us" for PS3 was the company's highest-rated game on Metacritic, earning critical acclaim with a Metascore of 95 and a player score of 9.1.

Square Enix also retained relatively high ratings from players from 2000 to 2016, but not as much as Naughty Dog. Known for its popular "Final Fantasy" series, which started with a game of the same name in 1987, Square Enix's median user score fell from 7.6 in the 2000s to 7.5 for the 2010s so far. This means half the games the company has made so far have been rated "good" by players.


## Smaller developers getting worse

[2000S-2010s CHART COMPARING METASCORES/USER SCORES BY DEV SIZES]

Big developers are not the only targets for players' increasing dislike for video games. Smaller game makers also earned lower Metacritic user scores this decade compared to the 2000s.

I grouped developers into four categories based on how many user votes they got on Metacritic: 5,000+ votes, 1,000-4,999, 500-999, and less than 500.

Across all my developer size categories, user ratings dropped between the 2000s and 2010s. The median user score for developers who got 5,000+ votes 8.2 in the 2000s, 7.3 this decade. For developers that got 1,000-4,999 votes, the median score dropped from 7.8 to seven.


## Weak correlation between critic and user scores

[SCATTERPLOT OF METASCORE VS USER SCORE, FILTER BY YEAR?]

My analysis of 321,518 critic Metascores has led me to a simple conclusion. Most critics rarely see eye-to-eye with players, no matter how big or small the critic. The correlation between each critic's Metascore and a game's user score is weak.

Look at the scatterplot below. You can choose a critic from the dropdown to see how weak the relationship is between their game ratings and those of Metacritic users. The chart covers review data from 2010 through July 2016.

[CHART HERE]

Despite the unreliability of most critic ratings, a few exist that have a somewhat strong relationship with users' scores. I calculated the Pearson R-squared number between each critic's Metascores and the user scores for the games the critic rated. Pearson's R-squared is a number that ranges from -1 to 1. If it is close to -1, this means that when the critic gives a game a high score, Metacritic users give it a low one. If Pearson's R is close to 1, this means a critic's scores line up almost perfectly with players' scores. But scores closer to zero than either of those numbers means the relationship between the scores of critics and users is weak. For this analysis, I included critics who rated at least 10 games this decade.

Most critics for the previous and current decade had an R-squared number between zero and 0.39. Few this decade achieved a correlation coefficient of more then 0.4. Even fewer had Metascores close to user scores. (Even if a critic-user R-squared score is close to one, it could just mean the critic consistently overrates games).

Most critics whose scores match up with those of players are officially or unofficially Nintendo-related: *Nintendo Enthusiast*, *Nintendo Life*, *Official Nintendo Magazine UK* and *Nintendo Power*. Most of the other non-Nintendo critics on the list no longer exist.

[SCATTERPLOT WITH TOP R2 CRITICS]

*FiringSquad* was the most consistent critic in my analysis of 2010-2016 data, but shut down after 2011.

After FiringSquad was *IGN AU* and *IGN UK*, the Australian and British editions of *IGN*, the critic with the most reviews on Metacritic. Interestingly, the correlation between *IGN* and player scores was weak.

*Kikizo* was another critic whose scores had a rather strong correlation with players' this decade. But they stopped reviewing games after 2011.


## Most underrated/overrated games

Finally, I've made two interactive charts. The first shows games that critics liked much more than players and vice versa. You can filter by year to see which games were the most overrated or underrated from 2000 to 2016. I included only games with at least 10 votes from Metacritic users.

The second chart is similar to above, but only for developers. And it does not filter by year. 

[MOST OVERRATED/UNDERRATED DEVS]


{% include charts/Metacritic-videogames/include.html %}