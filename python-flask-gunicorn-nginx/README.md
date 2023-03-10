# python-flask-gunicorn-nginx

This template is for building a Python Flask application. This is mostly useful for pure APIs, most frontend work should be done with a javascript framework like Next.js.

- flask: is the web server for python
- nginx: serves static files and passes remaining requests to gunicorn
- gunicorn: serves requests with python functions

## Quick start
```
cookiecutter gh:maayanlab/server-templates --directory python-flask-gunicorn-nginx
```
