import flask

app = flask.Flask(__name__)


@app.route('/api', methods=['GET'])
def index():
	return 'hello world'


if __name__ == '__main__':
	app.debug=True
	app.run(port=8090, host='0.0.0.0')
