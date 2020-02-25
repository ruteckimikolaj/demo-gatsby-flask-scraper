import json
import os

from flask import Flask
app = Flask(__name__)
from app import views
from flask_restful import Api, Resource

api = Api(app)
basedir = os.path.abspath(os.path.dirname(__file__))


class TestApi(Resource):
    def get(self):
        with open(basedir + '/file.json', 'r') as file:
            return json.load(file)


api.add_resource(TestApi, '/api')

