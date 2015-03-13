import json
from maraschino.helpers import xbmc_api
from flask import Blueprint

module = Blueprint('recent', __name__)

@module.route('/episodes/')
def recent():
    xbmc = xbmc_api()
    episodes = xbmc.VideoLibrary.GetRecentlyAddedEpisodes(properties = ['title', 'season', 'episode', 'showtitle', 'playcount', 'thumbnail', 'tvshowid'])['result']['episodes']
    return json.dumps(episodes)
