# {{ cookiecutter.project_name }}

{{ cookiecutter.project_short_description }}

## Development

The entrypoint of the application is in `{{ cookiecutter.project_slug }}/app.py`; do not change the name of the file.

Routes must be added to `openapi.yaml` in OpenAPI 3 syntax, the operationId corresponds to the function registered in `app.py`.

### Getting Started
```bash
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

### Running in development
```bash
source venv/bin/activate
python app.py
```

And visit <http://localhost:5000/>.

### Installing new dependencies

#### Python dependencies
Ensure you update `requirements.txt` whenever installing a new dependency with `pip`.

#### System dependencies
In the case of extra (alpine) system dependencies, add them to `deps.txt`.

## Deployment

### Build for deployment
```bash
docker-compose build app
```

### Deploy
```bash
docker-compose push app
```

### Execute locally
```
docker-compose run app
```
