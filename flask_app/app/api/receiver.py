from app.api import bp


@bp.route('/receiver', methods=['GET'])
def get_user():
    return "API IS HERE"
