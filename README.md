# hip
Hip is a template for web applications using [Flask](http://flask.pocoo.org/), [Apache HTTP Server](http://httpd.apache.org/), and [Docker](https://www.docker.com/).

### To use:
1. Clone this repo
2. Modify the repo's remote--this repo is just a template.

**...in development**
3a. Install Flask.
3b. Run `python run.py`

**...in production**
3b. Run `docker build -t <TAG NAME> .`
4b. Run `docker run -p 80:80 -d <IMAGE ID>`.
