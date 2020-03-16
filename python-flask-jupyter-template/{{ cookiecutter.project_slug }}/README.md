# {{ cookiecutter.project_name }}

{{ cookiecutter.project_short_description }}

## Development
`{{ cookiecutter.project_slug }}.ipynb` is a jupyter notebook template, modify it as necessary to update the website. To improve styling, see [jupyter-template](https://github.com/maayanlab/jupyter-template/) documentation.

### Getting Started
```bash
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

### Running in development
To modify and test the jupyter notebook:
```bash
source venv/bin/activate
jupyter-notebook {{ cookiecutter.project_slug }}.ipynb
```

To test the resulting web-app:
```bash
source venv/bin/activate
jupyter-template {{ cookiecutter.project_slug }}.ipynb
```

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
