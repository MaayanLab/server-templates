# Flask-Nginx

This is a template for web applications using [Nginx](https://www.nginx.com/), and [Docker](https://www.docker.com/).

## Deploying a Static web application to production

So you have a static webpage, and you want to deploy it, but then you look at Apache's configuration. Your static content is well served by nginx!

## Using this project

This project is a template. We recommend the following workflow:

- Clone this repository.
- Start the Docker container:

```
$ docker build -t <TAG NAME> .
$ docker run -p 80:80 -d <IMAGE ID>.
```

- Verify that `<IP address of Docker machine>/static-nginx` works, i.e. that Nginx is properly delegating to static-nginx.
- Move your code into the static-nginx application, renaming things as needed.

#### Developing locally

Nothing changes when you develop locally.
