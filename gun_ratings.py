#!/usr/bin/env python
# coding: utf-8

# In[7]:


import os
from bs4 import BeautifulSoup as bs
import requests
import pandas as pd


def gunratings():
    

    url= 'https://www.gunstocarry.com/gun-laws-state/'
    url1 = "https://www.50states.com/abbreviations.htm"
    response1 = requests.get(url1)
    response = requests.get(url)
    soup = bs(response.text,'lxml')
    soup1 = bs(response1.text,'lxml')
    
    gun_ratings_list =[]
    states=[]
    state_abr_list=[]
    ratings_list = []
    z = 0

    table = soup1.find("table", { "class" : "spaced stripedRows" })
    for row in table.findAll("tr"):
        cells = row.findAll("td")
        if len(cells) == 2:
            state_abbr = cells[1].find(text=True)
            state_abr_list.append(state_abbr)


    for state in state_abr_list : 
            try : 
                state_list1 = soup.find(id=str(state).lower()) 
                y=state_list1.find("span", {"class" : "x-acc-header-text"})
                ratings= state_list1.find("div", {"class" : "x-acc-content"})
                x= ratings.find_all("i",{"class":"x-icon x-icon-star"})
                z = str(len(x))
                ratings_list.append(z)
                states.append(y.text)
            except : 
                 continue



    new_dict = dict(zip(state_abr_list,ratings_list ))
    gun_ratings_list=[new_dict]

    return [gun_ratings_list,state_abr_list,ratings_list,states]


# In[6]:





# In[ ]:




