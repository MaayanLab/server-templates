# python-aiohttp-rororo-nginx

This template is for building a Python aiohttp application with `rororo`. This is for building an openapi-first python API.

- aiohttp: is a web server for python which uses asyncio
- rororo: maps endpoints in openapi-first documentation to aiohttp routes
- nginx: serves static files and passes remaining requests to aiohttp/rororo

## Quick start
```
cookiecutter gh:maayanlab/server-templates --directory python-aiohttp-rororo-nginx
```
