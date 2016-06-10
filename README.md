# hip-flask

Hip is a template for web applications using [Flask](http://flask.pocoo.org/), [Apache HTTP Server](http://httpd.apache.org/), and [Docker](https://www.docker.com/).

## Deploying a Flask application to production

So you have a Flask application, and you want to deploy it, but then you read [this](http://flask.pocoo.org/docs/0.11/deploying/):

> While lightweight and easy to use, **Flask’s built-in server is not suitable for production** as it doesn’t scale well and by default serves only one request at a time. 

What does that mean? Flask is two things: a web framework and a development server. The server has useful features for developers such as auto-restart on file change and a debugging interface that appears when your code throws an exception. But it is not designed for use in production. For example, it is single-threaded, meaning it only responds to a single HTTP request at a time.

The part of Flask that matters in production is the web framework, the glue between your Python program and the HTTP request/response cycle. For example, the routes that map HTTP requests to functions in your program and the utility classes like the `request` object that contain the HTTP method type and arguments.

You need a WSGI-compliant web server—here we'll use Apache—in order to deploy your Flask application.

#### What is WSGI?

When Flask claims to be "WSGI 1.0 compliant", it means that it adheres to Python's [Web Server Gateway Interface](https://www.python.org/dev/peps/pep-3333/). WSGI exists because (1) there are a lot of different web frameworks to choose from and (2) the choice of web framework can limit the choice of web server. In other words, WSGI is an interface that, if both framework and server developers adhere to, allows Python programmers to port WSGI-compliant applications to any server of their choice. To deploy your Flask application to production, you can use any WSGI-compliant server. This project uses Apache.

#### What is the relationshiop between Apache and Flask?

You can think of Apache as wrapping your Flask application. Apache, which is a popular, open-source, and robust web server, responds to HTTP requests. It then delegates the requests to your application. What actually happens is that Apache creates a new Flask application for every HTTP request. This is a nice abstraction; you can imagine your Flask application as running in a completely isolated environment, responding to a single HTTP request. Apache handles multi-threading your application when there are simultaneous requests.

#### What is mod_wsgi?

Out of the box, Apache is not WSGI-compliant. But Apache has a flexible architecture that allows users to install additional _modules_, and mod_wsgi is a module for making Apache WSGI-compliant. Notice in this project's Dockerfile, we install `apache2-prefork-dev`:

```
RUN apt-get -y install apache2
RUN apt-get -y install apache2-prefork-dev
RUN pip install mod_wsgi
```

This allows us to build Apache from source with the mod_wsgi module.

## Using this project

This project is a template. We recommend the following workflow:

- Clone this repository.
- Start the Docker container:

```
$ docker build -t <TAG NAME> .
$ docker run -p 80:80 -d <IMAGE ID>.
```

- Verify that `<IP address of Docker machine>/hip` works, i.e. that Apache is properly delegating to Hip.
- Move your code into the Hip application, renaming things as needed.

#### Developing locally

Nothing changes when you develop locally. Just use:

```
$ python run.py
```
