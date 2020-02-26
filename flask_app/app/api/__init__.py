
from flask import Blueprint, Config, Flask
from app.api import receiver, sender, tokens

bp = Blueprint('api', __name__)


def create_app(config_class=Config):
    app = Flask(__name__)

    # ...

    from app.api import bp as api_bp
    app.register_blueprint(api_bp, url_prefix='/api')
