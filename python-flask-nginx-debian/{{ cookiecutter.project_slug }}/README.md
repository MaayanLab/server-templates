# {{ cookiecutter.project_name }}

{{ cookiecutter.project_short_description }}

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
python run.py
```

And visit <http://localhost:8080/{{ cookiecutter.project_slug }}>.

### Installing new dependencies

#### Python dependencies
Ensure you update `requirements.txt` whenever installing a new dependency with `pip`.

#### System dependencies
In the case of extra (debian) system dependencies, add them to `deps.txt`.

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
