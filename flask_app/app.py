import sqlite3

from flask import send_from_directory, render_template, g

from flask_app import app, basic_route
apiRoute = '/api/v1'


@app.route('/dist/<path:path>')
def send_js(path):
    return send_from_directory('webkit-build', path)


@app.route('/')
@app.route('/<section>')
def home(section="top"):
    return render_template('Hello NBA', section=section)


# Register REST API routes
app.register_blueprint(basic_route, url_prefix=apiRoute)


class DatabaseConnection:
    def __init__(self):
        self.db_dir = app.root_dir

    def get_db(self):
        db = getattr(g, '_database', None)
        if db is None:
            db = g._database = sqlite3.connect(self.db_dir)
        return db

    @app.teardown_appcontext
    def close_connection(self, exception):
        db = getattr(g, '_database', None)
        if db is not None:
            db.close()