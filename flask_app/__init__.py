import os

from flask_webpackext import FlaskWebpackExt
from flask import Flask

from flask_app.api.v1.basic import basic_route

app = Flask(__name__, static_url_path='')

app.config.update(
    DEBUG=True,
    WEBPACKEXT_MANIFEST_PATH='/home/app-user/app/webkit-build/manifest.json',
    ROOT_DIR=os.path.dirname(os.path.abspath(__file__))
)

FlaskWebpackExt(app)