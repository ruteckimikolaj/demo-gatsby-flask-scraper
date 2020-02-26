import json
import os
import logging

from flask import Flask
from flask_cors import CORS
from flask_restful import Api, Resource

app = Flask(__name__)
api = Api(app)
from app import views

logger = logging.getLogger()

basedir = os.path.abspath(os.path.dirname(__file__))
CORS(app)


class TestApi(Resource):
    def get(self):
        try:
            with open(basedir + '/file.json', 'r') as file:
                return json.load(file)
        except (IOError, FileNotFoundError):
            logger.error("File not found", exc_info=True)
        return {'file': 'not found'}


api.add_resource(TestApi, '/api')

