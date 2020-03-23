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

# Make sure you're on the cookiecutter branch and update
cd ~/.cookecutter/
git checkout cookiecutter
git pull
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
- `javascript`: Javascript server (nodejs) / client (browser)
- `nginx`: A high-performance yet light-weight web server and load balancer
- `python`: The python **3** programming language; version 2 is deprecated
- `react`: A javascript framework for HTML in Javascript

## Developing a cookiecutter (from [cookiecutter docs](https://cookiecutter.readthedocs.io/en/latest/overview.html))
### Input
This is the directory structure for a simple cookiecutter::

    cookiecutter-something/
    ├── {{ cookiecutter.project_name }}/  <--------- Project template
    │   └── ...
    ├── blah.txt                      <--------- Non-templated files/dirs
    │                                            go outside
    │
    └── cookiecutter.json             <--------- Prompts & default values

You must have:

* A `cookiecutter.json` file.
* A `{{ cookiecutter.project_name }}/` directory, where
  `project_name` is defined in your `cookiecutter.json`.

Beyond that, you can have whatever files/directories you want.


### Output

This is what will be generated locally, in your current directory::

    mysomething/  <---------- Value corresponding to what you enter at the
    │                         project_name prompt
    │
    └── ...       <-------- Files corresponding to those in your
                            cookiecutter's `{{ cookiecutter.project_name }}/` dir
