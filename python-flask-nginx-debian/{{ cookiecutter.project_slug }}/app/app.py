import os
import flask
from dotenv import load_dotenv

load_dotenv(verbose=True)
# Load any additional configuration parameters via
#  environment variables--`../.env` can be used
#  for sensitive information!

main = flask.Blueprint('app', __name__, template_folder='templates', static_folder='static', static_url_path='')

@main.route('/', methods=['GET'])
def index():
    return flask.render_template('index.html')

# Add the rest of your routes....


app = flask.Flask(__name__)
app.register_blueprint(main)
