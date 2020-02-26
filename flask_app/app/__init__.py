import json
import os

from flask import Flask
from flask_cors import CORS
from flask_restful import Api, Resource

app = Flask(__name__)
api = Api(app)
from app import views

basedir = os.path.abspath(os.path.dirname(__file__))
CORS(app)


class TestApi(Resource):
    def get(self):
        with open(basedir + '/file.json', 'r') as file:
            return json.load(file)


api.add_resource(TestApi, '/api')

