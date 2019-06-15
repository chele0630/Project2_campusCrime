# College Campus Crimes- Project 2
#[![INSERT YOUR GRAPHIC HERE](https://calvin.edu/dotAsset/0fb469bb-8204-4e24-9d91-d14811252d39.jpg)]()


<!-- TABLE OF CONTENTS -->
## Table of Contents

* [Team Crime Project 2](#team-crime-project2)
* [Purpose of the Analysis](#purpose-of-the-analysis)
* [Key Documents](#key-documents)
* [Findings](#findings)
* [Coding Style](#coding-style)
* [API Calls](#api-calls)
* [Coding Documentation](#coding-documentation)
* [Authors](#authors)
* [Acknowledgments](#acknowledgments)


# Team Crime

Team Crime chose a project that would examine the occurances of crimes on college campuses in the US.  We will examine the number of crimes
committed on college camuses by state and the strictness of the gun control laws in those states to determine in there is a possible 
correlation between gun control and violence on US campuses.  Specifically, we are looking to answer the question: Do states with stricter 
gun laws have less crime?  

We will be using campus violence data from https://ope.ed.gov/campussafety.  This data will give information on and gun control data from www.gunstocarry.com/gun-laws-state/, we will create a product information table, a product review table, a product review stat table and a trending products table.  We will merge information from these various tables into one in order to create a data display that is easy to reference for the purpose of deciding which products to purchase.  


## Purpose of the Analysis

Our primary purpose is to gather data using the Walmart API to determine if the random items that were selected should be purchased by the consumer.  Shoppers look for a good value (we will information on prices/sales) and quality (we will use information on consumer product reviews).  This data will provide the pertinent information to the shopper when determining if they will make the purchase of the item. 


## Key Documents

The following data sets were used throughout the project.

### Campus Crime Data
[![INSERT YOUR GRAPHIC HERE](https://github.com/mabel912/ETL-Project-Shop-Smarter/blob/master/ProductList.png)]()


### Gun Control Data
[![INSERT YOUR GRAPHIC HERE](https://)]()


### Bar Chart
[![INSERT YOUR GRAPHIC HERE](https://)]()


### Heatmap
[![INSERT YOUR GRAPHIC HERE](https://)]()

### Base Map w/markers
[![INSERT YOUR GRAPHIC HERE](https://)]()



## Findings

*Findings here

## Coding Style

Jupyter notebooks was used. The list of dependencies are as follows:

```sh
import pandas as pd
import json
import requests

```

## API Calls

* Products API call:
	http://api.walmartlabs.com/v1/items/12417832?apiKey={apiKey}&lsPublisherId={Your LinkShare Publisher Id}&format=json
* Product Review API call:
	http://api.walmartlabs.com/v1/reviews/33093101?apiKey={apiKey}&lsPublisherId={Your LinkShare Publisher Id}&format=json
* Trending API call:
	http://api.walmartlabs.com/v1/trends?apiKey={apiKey}&lsPublisherId=xyz&format=json


## Authors

Ellise Carpenter - Initial Work - [SMU Team Crime- Project 2](https://github.com/ellisec)

Mabel Gutierrez- Initial Work - [SMU Team Crime- Project 2](https://github.com/mabel912)

Velindia Lucas - Initial Work - [SMU Team Crime- Project 2](https://github.com/chele0630)

Rohith  - Initial Work - [SMU Team Crime- Project 2](https://github.com/)

Zeinab Bhattaram - Initial Work - [SMU Team Crime- Project 2](https://github.com/)
