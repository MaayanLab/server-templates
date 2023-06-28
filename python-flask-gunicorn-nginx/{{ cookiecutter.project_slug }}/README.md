# {{ cookiecutter.project_name }}

{{ cookiecutter.project_description }}

## Development

The entrypoint of the application is in `{{ cookiecutter.project_slug }}/app/app.py`; do not change the name of the file or directory.

### Getting Started
```bash
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

### Running in development
```bash
source venv/bin/activate
python -m flask -A app.app:app run --debug
```

And visit <http://localhost:5000>.

### Installing new dependencies

#### Python dependencies
Ensure you update `requirements.txt` whenever installing a new dependency with `pip`.

## Deployment

### Build for deployment
```bash
docker-compose build app
```

### Execute locally
```
docker-compose up -d app
```
