import json
import sqlite3
import logging

from datetime import datetime

from bs4 import BeautifulSoup
import requests
from requests_html import HTMLSession


class ScrapNBA:
    def __init__(self):
        self.url = self.get_current_url()

    @classmethod
    def get_current_url(cls):
        date_now = datetime.now().date()
        date_str = date_now.strftime('%Y%m%d')
        return 'https://www.espn.com/nba/scoreboard/_/date/{}'.format(date_str)

    def render_js(self):
        session = HTMLSession()
        r = session.get(self.url)
        r.html.render()
        return r.html

    def get_soup(self):
        source = requests.get(self.url).text
        soup = BeautifulSoup(source, features="lxml")
        return soup.find('div', {'id': 'events'})

    def get_soup_from_template(self):
        template = self.render_js().html
        soup = BeautifulSoup(template, features="lxml")
        return soup.find('div', {'id': 'events'})

    def get_all_articles(self, article_section):
        articles = article_section.contents
        return articles

    def get_away_home(self, soup_element, name):
        result = {
            'image': soup_element.find('img').attrs['src'],
            'team': soup_element.find('span', {'class': 'sb-team-short'}).text,
            'record_overall': soup_element.find('p', {'class': 'record overall'}).text,
            'away_record': soup_element.find('span', {'class': '{}-record'.format(name)}).text[2:-5]
        }
        return result

    def save_to_db(self, data):
        pass

    def get_all_data(self, articles):
        json_result = {}
        for idx, article in enumerate(articles):
            away = article.find('tbody').find('tr', {'class': 'away'})
            home = article.find('tbody').find('td', {'class': 'home'})
            json_result.update({idx: {'home': {}, 'away': {}}})
            json_result[idx]['home'] = self.get_away_home(home, 'home')
            json_result[idx]['away'] = self.get_away_home(away, 'away')

        with open('file.json', 'w', encoding='UTF-8') as new_file:
            json.dump(json_result, new_file)
        self.save_to_db(json_result)
        self.get_all_data(articles)




if __name__ == '__main__':
    # print(get_soup(get_current_url()))
    scraper = ScrapNBA()
    events = scraper.get_soup_from_template()
    art = scraper.get_all_articles(events)
    print(scraper.get_all_data(art))
