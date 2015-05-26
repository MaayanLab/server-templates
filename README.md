# hip
Hip is a template for web applications using [Flask](http://flask.pocoo.org/), [Apache HTTP Server](http://httpd.apache.org/), and [Docker](https://www.docker.com/).

### To use:
- Clone this repo
- Modify the repo's remote--this repo is just a template.
- Then...

**...in development**

- Install Flask.
- Run `python run.py`

**...in production**

- Run `docker build -t <TAG NAME> .`
- Run `docker run -p 80:80 -d <IMAGE ID>`.
