# server-templates

These server templates are here to get you started fast with some best-practices baked in. To setup the template you'll need `cookiecutter`.

## Installing Cookiecutter
Whether or not you will be developing a python application, `cookiecutter` uses python. Assuming you already have python already installed, you can use the following command to install `cookiecutter`.
```
pip3 install --user cookiecutter
# confirm cookiecutter is available
cookiecutter
```

On macOS you might need to add ```/Library/Frameworks/Python.framework/Versions/{your-current-Python-version}/bin/``` to ```$PATH```

## Installing a template from the library
```
cookiecutter gh:maayanlab/server-templates --directory [some-template-directory-name]
```

Answer all the prompts and a directory with your application ready to go will be generated. Open the generated folder and read the `README.md` for more information on moving forward with the template.

## Selecting a Template
Each template is labeled by the technologies it uses. More information can be found by clicking the template directory and reviewing the README, and additional information will be in the README you get once your project is created. Some of the technologies used are described briefly below:

- `flask`: A light-weight, web application framework for tiny python-driven applications
- `javascript`: Javascript server (nodejs) / client (browser)
- `nginx`: A high-performance yet light-weight web server and load balancer
- `python`: The python **3** programming language; version 2 is deprecated
- `react`: A javascript frontend framework for HTML in Javascript
- `typescript`: A type-safe variant of javascript with improved developer experience
- `nextjs`: A full-stack javascript framework for joint frontend-backend development using `react`

## Developing a cookiecutter (from [cookiecutter docs](https://cookiecutter.readthedocs.io/en/latest/overview.html))
_This is general how-it's-made information. You don't need to follow any of these steps to develop a project._

### Input
This is the directory structure for a simple cookiecutter::

    cookiecutter-something/
    ├── {{ cookiecutter.project_name }}/  <--------- Project template
    │   └── ...
    ├── README.md                     <--------- A helpful README
    │
    │
    └── cookiecutter.json             <--------- Prompts & default values

You must have:

* A `cookiecutter.json` file.
* A `{{ cookiecutter.project_name }}/` directory, where
  `project_name` is defined in your `cookiecutter.json`.

Beyond that, you can have whatever files/directories you want.


### Output

This is what will be generated locally, in your current directory:

    mysomething/  <---------- Value corresponding to what you enter at the
    │                         project_name prompt
    │
    └── ...       <-------- Files corresponding to those in your
                            cookiecutter's `{{ cookiecutter.project_name }}/` dir
