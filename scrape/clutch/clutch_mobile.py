import csv
import json
import requests 
import socket
from bs4 import BeautifulSoup

class Agency(object):
    idNum = -1
    name = ""
    tagline = ""
    about = ""
    rating = -1
    num_reviews = -1
    price_tag = ""
    hourly_rate = -1
    team_size = -1
    location = ""
    service_focus = ""
    profile_url = ""
    site_url = ""

    def iter(self):
        return [
        self.idNum,
        self.name,
        self.tagline,
        self.about,
        self.rating,
        self.num_reviews,
        self.price_tag,
        self.hourly_rate,
        self.team_size,
        self.location,
        self.service_focus,
        self.profile_url,
        self.site_url
        ]

def make_agency(idNum, name, tagline, about, rating, num_reviews, price_tag, hourly_rate, team_size, location, service_focus, profile_url, site_url):
    agency = Agency()
    agency.idNum = idNum
    agency.name = name
    agency.tagline = tagline
    agency.about = about
    agency.rating = rating
    agency.num_reviews = num_reviews
    agency.price_tag = price_tag
    agency.hourly_rate = hourly_rate
    agency.team_size = team_size
    agency.location = location
    agency.service_focus = service_focus
    agency.profile_url = profile_url
    agency.site_url = site_url
    return agency

def get_page_agencies(url, count):
    page_agencies = []
    agency_count = count
    response = requests.get(url)
    html = response.content
    soup = BeautifulSoup(html)
    agencies_list = soup.findAll('div', attrs={'class': 'provider-row'})
    for item in agencies_list:
        try:
            name_h2 = item.find('h2')
            name = name_h2.find('a').text.strip()
            print name
            tagline = name_h2.find('small').text.strip()
            try:
                about_section = item.find('blockquote', attrs={'class': 'blockquote-in-module'})
                about = about_section.find('p').text.strip()
            except Exception as e:
                about = "none shown"
            #print about
            profile_url = 'https://clutch.co'+name_h2.find('a').get('href')
            try:
                reviews = item.find('span', attrs={'class': 'count'}).text.strip()
            except Exception as e:
                reviews = "none shown"
            #print reviews
            try:
                rating = item.find('span', attrs={'class': 'rating'}).text.strip()
            except Exception as e:
                rating = "none shown"
            #print rating
            list_data = item.find('ul', attrs={'class': 'module-list'})
            list_items = list_data.findAll('li')
            price_tag = list_items[0].text.strip()
            hourly_rate = list_items[1].text.strip()
            team_size = list_items[2].text.strip()
            location = list_items[3].text.strip()
            #service_data = item.find('div', attrs={'class': 'chart-label'})
            #service_items = service_data.findAll('div', attrs={'class': 'grid'})
            #print item
            link_li = item.find('li', attrs={'class': 'website-link website-link-a'})
            site_url = link_li.find('a').get('href')
            try:
                new_agency = make_agency(agency_count, name, tagline, about, rating, reviews, price_tag, hourly_rate, team_size, location, "service_focus", profile_url, site_url)
                page_agencies.append(new_agency)
                agency_count = agency_count + 1
            except Exception as e:
                print ("couldn't create new item")
        except Exception as e:
            print ("couldn't get item")
    return page_agencies


def get_page_urls():
    agency_array = []
    agency_count = 1
    url = 'https://clutch.co/directory/mobile-application-developers'
    print url
    try: 
        page_agencies = get_page_agencies(url, agency_count)
        for agency in page_agencies:
            agency_array.append(agency)
            agency_count = agency_count + 1
    except Exception as e:
        print (e.message)
    for i in range(1, 44):      # Number of pages plus one 
        try: 
            print "on page {}".format(i)
            url = 'https://clutch.co/directory/mobile-application-developers?field_pp_size_people_value=All&country=All&state=&distance[postal_code]=&distance[country]=us&distance[search_distance]=100&distance[search_units]=mile&field_pp_hrly_rate_range_value=All&field_pp_cs_small_biz_value=&field_pp_cs_midmarket_value=&field_pp_cs_enterprise_value=&field_pp_if_advertising_value=&field_pp_if_automotive_value=&field_pp_if_arts_value=&field_pp_if_bizservices_value=&field_pp_if_conproducts_value=&field_pp_if_education_value=&field_pp_if_natural_resources_value=&field_pp_if_finservices_value=&field_pp_if_gambling_value=&field_pp_if_gaming_value=&field_pp_if_government_value=&field_pp_if_healthcare_value=&field_pp_if_hospitality_value=&field_pp_if_it_value=&field_pp_if_legal_value=&field_pp_if_manufacturing_value=&field_pp_if_media_value=&field_pp_if_nonprofit_value=&field_pp_if_realestate_value=&field_pp_if_retail_value=&field_pp_if_telecom_value=&field_pp_if_transportation_value=&field_pp_if_utilities_value=&field_pp_if_other_value=&field_pp_min_project_size_value=All&sort_bef_combine=field_pp_page_sponsor_mapp_dev_value%20DESC&sort_by=field_pp_page_sponsor_mapp_dev_value&sort_order=DESC&page={}'.format(i)
            page_agencies = get_page_agencies(url, agency_count)
            for agency in page_agencies:
                agency_array.append(agency)
                agency_count = agency_count + 1
        except Exception as e:
            print (e.message)
    return agency_array

agency_array = get_page_urls()

outfile = open("./clutch_mobile.csv", "wb")
writer = csv.writer(outfile)
for agency in agency_array:
    try:
        writer.writerow(agency.iter())
    except Exception as e:
            print (e.message)

'''def get_ingredients(idNum, url):   
    try: 
        response = requests.get(url)
        html = response.content
        soup = BeautifulSoup(html)
        ingredient_title = soup.find('h1', attrs={'itemprop': 'name'}).text
        ingredient_ul = soup.find('ul', attrs={'class': 'ingredients'})
        ingredient_array = []
        for item in ingredient_ul.findAll('li'):
            text = item.text.encode()
            parsed = parse(text)
            ingredient_array.append(parsed)
        ingredient_array = filter(None, ingredient_array)
        newRecipe = make_recipe(idNum, ingredient_title.encode(), ingredient_array, "Epicurious.com", url)
        #print newRecipe
        return newRecipe
    except Exception as e:
        print (e.message)

def compile_recipes(url_array):
    recipe_array = []
    idNum = 0
    for url in url_array:      # Number of pages plus one 
        try: 
            recipe_array.append(get_ingredients(idNum, url))
            idNum = idNum + 1
        except Exception as e:
            print (e.message)
    return recipe_array


chowder_urls = get_chowder_urls()
recipe_array = compile_recipes(chowder_urls)
recipe_array = filter(None, recipe_array) # fastest'''
