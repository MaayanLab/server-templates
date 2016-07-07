import flask
import os

app = flask.Flask(__name__)

@app.route('/', methods=['GET'])
def index():
    return 'hello world'
