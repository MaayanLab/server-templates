# server-templates

These server templates are here to get you started fast with some best-practices baked in. To setup the template you'll need `cookiecutter`.

## Installing Cookiecutter
Whether or not you will be developing a python application, `cookiecutter` uses python. Assuming you already have python already installed, you can use the following command to install `cookiecutter`.
```
pip3 install --user cookiecutter
```

You can verify that this worked by ensuring you have the `cookiecutter` binary available (i.e. `which cookiecutter` should not have an error).

## Installing our server template library
```
# Installation
git clone http://github.com/MaayanLab/server-templates.git ~/.cookiecutter/

# Update
git pull ~/.cookiecutter/
```

## Using a template
Replacing `template-name` here with your template of choice:
```
# NOTE: You can use ~/.cookiecutter/<TAB> to auto-complete the templates
cookiecutter ~/.cookiecutter/<template-name>
```
Answer all the prompts and a directory with your application ready to go will be generated. Read the generated `README.md` for more information on moving forward with the template.

## Templates
Each template is labeled by the technologies it uses. The technologies are described below:

- `debian`: A well-established linux distribution often used as the base for docker images
- `flask`: A light-weight, web application framework for tiny python-driven applications
- `nginx`: A high-performance yet light-weight web server and load balancer
- `python`: The python **3** programming language; version 2 is deprecated
