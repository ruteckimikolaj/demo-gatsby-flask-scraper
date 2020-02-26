from flask_migrate import MigrateCommand, Manager

from app import app

manager = Manager(app)
manager.add_command('db', MigrateCommand)


if __name__ == '__main__':
    manager.run()
