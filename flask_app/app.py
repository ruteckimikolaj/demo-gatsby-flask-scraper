#!flask/bin/python
import os

import graphene

from datetime import datetime

from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_restful import Api, Resource
from graphene_sqlalchemy import SQLAlchemyObjectType, SQLAlchemyConnectionField


# Configs
app = Flask(__name__)
app.debug = True
basedir = os.path.abspath(os.path.dirname(__file__))
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'data.sqlite')
app.config['SQLALCHEMY_COMMIT_ON_TEARDOWN'] = True
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True

app = Flask(__name__)
api = Api(app)
STATIC_URL = '/static'
STATIC_PATH = '/static'


db = SQLAlchemy(app)
# db.Model.metadata.reflect(db.engine)
migrate = Migrate(app, db)

# TO-DO# Modules

@app.route('/')
def index():
    return '<p> NBA World</p>'

# Models


class ScrapedData(db.Model):
    # __table_args__ = {'extend_existing': True}
    # LOC_CODE = db.Column(db.Text, primary_key=True)
    id = db.Column(db.Integer, primary_key=True)
    article_id = db.Column(db.Integer)
    home_away = db.Column(db.String(128))
    img = db.Column(db.String(1024))
    team = db.Column(db.String(128), index=True)
    record_overall = db.Column(db.String(128))
    away_record = db.Column(db.String(128))



# TO-DO# Schema Objects


# TO-DO# Routes


# TO-DO


if __name__ == '__main__':
    app.run()

