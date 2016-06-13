import flask
import os

app = flask.Flask(__name__)

# Rename this.
ENTRY_POINT = '/flask-apache/'

# And this.
SERVER_ROOT = os.path.dirname(os.getcwd()) + '/flask-apache/app'


@app.route(ENTRY_POINT, methods=['GET'])
def index():
    return 'hello world'


@app.route(ENTRY_POINT + '<path:path>')
def send_css(path):
    print path
    return flask.send_from_directory(SERVER_ROOT, path)
