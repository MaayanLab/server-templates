import json
import yaml
import click
import rororo
import asyncio
import logging
from pathlib import Path
from aiohttp import web

## ROUTES ##
operations = rororo.OperationTableDef()

@operations.register('openapi')
@operations.register('openapi.json')
async def openapi_json(request):
  return web.json_response(rororo.get_openapi_schema(request.app))

@operations.register('openapi.yaml')
async def openapi_yaml(request):
  return web.Response(text=yaml.dump(rororo.get_openapi_schema(request.app)))

# TODO: Add your custom routes here, named after the operationId after you add them
#       to openapi.yaml
@operations.register
async def hello(request):
  ctx = rororo.get_openapi_context(request)
  await asyncio.sleep(0.5)
  return web.json_response({
    'greeting': f"Hello {ctx.parameters.query['name']}",
  })


## CLI ##
@click.command()
@click.option(
  '-l', '--listen', envvar='ARCHS4_LISTEN',
  default='5000',
  help='Port or unix socket to listen on'
)
@click.option(
  '-s', '--server-url', envvar='ARCHS4_SERVER_URL',
  default=None,
  help='The server_url'
)
@click.option(
  '-v', '--verbose', envvar='ARCHS4_VERBOSE',
  count=True, default=0,
  help='How verbose this should be, more -v = more verbose'
)
def cli(listen=5000, server_url=None, verbose=0):
  logging.basicConfig(level=30 - (verbose*10))
  app = web.Application()
  app = rororo.setup_openapi(app,
    Path(__file__).parent/'openapi.yaml',
    operations,
    server_url=server_url,
    use_error_middleware=False,
  )
  #
  try: listen = json.loads(listen)
  except: pass
  if type(listen) == int:
    web.run_app(app, port=listen)
  elif type(listen) == str:
    web.run_app(app, path=listen)

if __name__ == '__main__':
  from dotenv import load_dotenv
  load_dotenv()
  cli()
