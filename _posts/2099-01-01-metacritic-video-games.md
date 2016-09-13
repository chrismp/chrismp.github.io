---
layout: post
title: 
author: Chris Persaud
---

I learned some interesting facts after downloading more than 14,000 video game reviews from game ratings website [Metacritic.com](http://metacritic.com).

- Video games released in the past few years are the worst of this century so far -- or at least, that's what gamers think.
- Players and game critics disagree more than ever since Metacritic began averaging scores from critics and fans.
- **Mobile phone games** are the most overrated. Critics think they are great. Players think they are either bad or just OK.
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

I also collected each critic's assigned Metascore for each game and put them in a database separate from the first. Altogether, it is 366,949 critic ratings.

I excluded from my analysis any games with user scores overrun by trolls. Games based on the *Shrek* movie series were the biggest victims of insincere votes by trolls on Metacritic. "[Shrek Swamp Kart Speedway](http://www.metacritic.com/game/game-boy-advance/shrek-swamp-kart-speedway)", a 2002 racing game for the Game Boy Advance, got a Metascore of 27, but a user score of 8.9. One troll wrote, "I'm shrekened because I fear I can not give enough rating to this shrektacular game. I've had an ogregasm. Thank you my ogrelord."

Two PC games from 2003 seemed overrun by insincere votes: "[Navy SEALs: Weapons of Mass Destruction](http://www.metacritic.com/game/pc/navy-seals-weapons-of-mass-destruction/user-reviews)" and "[Gods and Generals](http://www.metacritic.com/game/pc/gods-and-generals/user-reviews)." Both received low marks from critics, but have high user ratings. A closer look at the user reviews reveal that most of the high votes came on June 11, 2012 by a handful of users writing near-identical reviews with memes and bad English.

AVERAGES/MEDIANS FOR GAME GENRES, CONSOLES, YEARS

CRITIC SCORES VS GAMING SCORES FOR YEARS, CONSOLES

CRITICS THAT OUR MOST/LEAST IN SYNC WITH PLAYER OPINIONS

BEST/WORST-RATED GAMES FOR SYSTEMS, PUBLISHERS, DEVS
