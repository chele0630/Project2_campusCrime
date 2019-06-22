# College Campus Crimes- Project 2
#[![INSERT YOUR GRAPHIC HERE](https://www.greatschools.org/gk/wp-content/uploads/2012/12/How-can-we-stop-school-violence.jpg)]()


<!-- TABLE OF CONTENTS -->
## Table of Contents

* [Team Crime Project 2](#team-crime-project2)
* [Purpose of the Analysis](#purpose-of-the-analysis)
* [Methodology](#methodology)
* [Key Documents](#key-documents)
* [Findings](#findings)
* [Coding Style](#coding-style)
* [Coding Documentation](#coding-documentation)
* [API Calls](#API-calls)
* [Authors](#authors)
* [Acknowledgments](#acknowledgments)


# Team Crime

Team Crime chose a project that would examine the occurances of crimes on college campuses in the US.  We will examine the number of crimes committed on college camuses by state and the strictness of the gun control laws in those states to determine in there is a possible correlation between gun control and violence on US campuses.  Specifically, we are looking to answer the question: Do states with stricter gun laws have less crime?  

We will be using campus violence data from https://ope.ed.gov/campussafety to give us information on crime activity on US college campuses and www.gunstocarry.com/gun-laws-state/, to give information on the strictness of gun control laws by state. We will create 3 visualizations to answer our question.   One will be a bubble chart to compare the total number of crimes in each state for each of the 3 years.  This will allow us to find any notable trends.  Another visualization will be a heat map showing the frequency of crime on college campus in the US.  The final visualization will be a base map with markers that, when selected, will show the gun law scale.  


## Purpose of the Analysis

Our primary purpose is to gather data using our sources determine if there is a correlation between college campus violence and gun control laws in US states.   After evaluating this information, we will be able to determine the story being told through the data and answer our inital question.


## Methodology

We used data from https://ope.ed.gov/campussafety to determine the number of crimes occurring on US college campuses.  Our data source contained null values and information for campuses located internationally.  We are only considering US college campuses, and cleaned the data accordingly using the Javascript programming language.  We then used this information to calculate the total crimes for each campus according to the state it is located in. This data was used to create the bar graph showing the total crimes by state for years 2015-2017.  It was also used to create a heat map, using an API call to https://www.mapbox.com, showing which US states have the lowest to the highest crime rates on college campuses.  A bubble map was created to show the overall crime rate for each US college campus in comparison to the campus population. 

Python coding language was used along with Beautiful Soup was used to scrape data from https://www.gunstocarry.com/gun-laws-state/ and https://www.50states.com/abbreviations.htm.  The first website was used to get information on state gun control ratings and the second website was used to get state abbreviations.  This information was merged together using the Javascript programming language to create a data source that could be used to easily display data in our visualizations.  A base map was created using an API call to the website: https://www.mapbox.com/.  This map includes markers for each state and its gun control rating.



## Key Documents

The following data sets were used throughout the project.

### Campus Crime Data by State
[![INSERT YOUR GRAPHIC HERE](https://github.com/chele0630/Project2_campusCrime/blob/master/Project2_Updated/static/img/crimeDataSum.png)]()

### Gun Control Data
[![INSERT YOUR GRAPHIC HERE](https://)]()


### Bar Chart of Yearly Total College Campus Crimes by State
[![INSERT YOUR GRAPHIC HERE](https://github.com/chele0630/Project2_campusCrime/blob/master/Project2_Updated/static/img/barGraph.png)]()



### Heat Map of College Campus Crimes by State
[![INSERT YOUR GRAPHIC HERE](https://github.com/chele0630/Project2_campusCrime/blob/master/Project2_Updated/static/img/heatMap.png)]()



### Bubble Map of Overall Crime Rate by Student Population
[![INSERT YOUR GRAPHIC HERE](https://github.com/chele0630/Project2_campusCrime/blob/master/Project2_Updated/static/img/bubbleMap.png)]()



### Base Map of Gun Control Laws by State
[![INSERT YOUR GRAPHIC HERE](https://github.com/chele0630/Project2_campusCrime/blob/master/Project2_Updated/static/img/baseMap.png)]()




## Findings

Based on the information in the bar graph, some states have had an increase in college campus crime from 2015-2017, some have stayed about the same and few have decreased.  Our data would be more telling if our information went back a little further and included a larger span of time, such as a ten-year time frame.  This would give a more accurate picture of trends over time.  
The bubble map shows a relationship between population and crime rate.  The larger the population of the state, the higher the crime rate overall and vice versa.  This is also supported by our heat map.  The states with larger populations are a darker shade of red indicating that there is a larger number of campus crimes committed there.  Likewise, as the color shade progresses to a lighter shade of yellow, it indicates a lower number of crimes committed on college campuses and a smaller population.
The heat map shows most crimes being committed in states with larger populations such as Texas, California and New York.  However, when using our base map to look at the gun control laws of each of the states, they vary from strict (California) to open (Texas).  Similarly, states with smaller populations such as Wyoming, Montana, and South Dakota also have the lowest incidents of college campus crimes.  Montana has more open gun laws, while South Dakota & Montana are slightly more restrictive.  
The purpose of our research was to determine if there is a correlation between crimes on college campuses and gun control laws in US states.  Based on our research and findings we can conclude that there is not a correlation between college campus crimes and gun control laws.

## Next steps

A future feature we would like to have is to have the markers change color based on the Gun Law ratings.

## API Calls

Map API call: https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}


## Coding Style

Javascript programming language was used.

Python programming language was used, the list of dependencies are as follows:

```sh
import os
from bs4 import BeautifulSoup as bs
import requests
import pandas as pd

```


## Authors

Rohith Bhattaram- Initial Work - [SMU Team Crime- Project 2](https://github.com/rohithbhattaram)

Ellise Carpenter - Initial Work - [SMU Team Crime- Project 2](https://github.com/ellisec)

Mabel Gutierrez- Initial Work - [SMU Team Crime- Project 2](https://github.com/mabel912)

Velindia Lucas - Initial Work - [SMU Team Crime- Project 2](https://github.com/chele0630)

Zeinab Massudi - Initial Work - [SMU Team Crime- Project 2](https://github.com/Massudi09)
