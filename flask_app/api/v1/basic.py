from flask import Blueprint, render_template, jsonify

basic_route = Blueprint('basic_route', __name__)


@basic_route.route('/basic')
def basic():
    return jsonify()
