---
layout: post
title: Palm Beach County schools punished black kids three times more than white students in 2016-17
author: Chris Persaud
---

<style type="text/css">
	img {
		width: 60%;
		height: auto;
		margin-left: auto;
		margin-right: auto;
	}

	@media screen and (max-width: 426px) {
		img {
			width: 100%;
		}
	}
</style>

Schools across Florida and in Palm Beach County punished black students far more than their peers durign the 2016-17 school year, state education data shows. Statewide, more than one in four (27 percent) of black children attending K-12 schools in Florida received discipline -- mostly suspensions and expulsions -- compared to 11 percent of their white peers. In Palm Beach County, the black-white disparity was 18-6 percent. Black kids and teens were less likely to be punished than their counterparts outside the county, but still more likely than white and Hispanic students. 

<img src="{{site.baseurl}}/charts/pbc-school-punishment/PBCvFL.png" class="simple-chart">

Full-size chart [here]({{site.baseurl}}/charts/pbc-school-punishment/PBCvFL.png).

For Palm Beach County schools, there is a relationship between punishment rates for whites students and black students. When white students are punished at high rates, a bigger portion of their black peers are punished. 

<img src="{{site.baseurl}}/charts/pbc-school-punishment/PBC-black-white-punishment-scatter.png" class="simple-chart">

Full-size chart [here]({{site.baseurl}}/charts/pbc-school-punishment/PBC-black-white-punishment-scatter.png).

One big outlier during the 2016-17 school year was Boca Raton Community Middle School, which punished 64 percent of black students versus 18 percent of whites. Boca Raton Middle had 1,509 enrolled in 2016-17, with 192 black students and 815 who were white. Another outlier was Renaissance Charter School At Cypress, a K-8 charter school in West Palm Beach that is 65 percent black. Renaissance punished 16 percent of its black pupils. 

Comparing punishment rates for nonblack and black students may mean a school's overall punishment rate is linked to how often it punished black kids and teens. The link between punishment rates for these two groups is even stronger than between black and white students. Check the next chart.

<img src="{{site.baseurl}}/charts/pbc-school-punishment/PBC-black-nonblack-punishment-scatter.png" class="simple-chart">

Full-size chart [here]({{site.baseurl}}/charts/pbc-school-punishment/PBC-black-nonblack-punishment-scatter.png).

Once again, Boca Community Middle stands out. But most other schools are closer to the trend line. 

This analysis is by no means a complete one. I looked at the racial makeup of each school's teachers and their student bodies. I also compared student-teacher ratios to punishment rates for each demographic group. But none of those factors had any bearing on what percent of black students received punishment in 2016-17. But since punishment rates for other racial groups are closely linked to punishment rates for black students, there may be a reason for a school's overall punishment rate. If you have any ideas of what else to look for, email me at <a href="mailto:{{ site.author.email }}">{{ site.author.email }}</a>.

The final chart shows the difference in punishment rates for black and white students for each school. The data, which came from the Florida Department of Education, did not easily distinguish between elementary, middle and high schools. But looking at the chart, it seems that middle and high schools are far more likely than elemantary schools to disproportionately punish black kids. In the interest of transparency, I kept in the chart those schools where punishment rates for black and white kids were near even, which is why some schools appear to lack data. Full-size image [here]({{site.baseurl}}/charts/pbc-school-punishment/rates-by-school-diverging-bar.png).

<img src="{{site.baseurl}}/charts/pbc-school-punishment/rates-by-school-diverging-bar.png">

I used data available from the Florida Dept. of Education's [web page](http://www.fldoe.org/accountability/data-sys/edu-info-accountability-services/pk-12-public-school-data-pubs-reports/archive.stml) for archived data, as well as by requesting specific data from the agency. I used R to analyze data and make charts. [This Github repository](https://github.com/chrismp/PBC-school-discipline-analysis) contains the data and code I wrote.