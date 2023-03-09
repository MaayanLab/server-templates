''' {{ cookiecutter.project_description }}
'''

import uuid
import json
from pathlib import Path
from textwrap import dedent

from IPython.display import display, HTML, Javascript

def _js():
    return open(Path(__file__).parent/f'{{ cookiecutter.project_py_slug }}.js', 'r').read()

def _define_js(include_require=False, require_cdn=False, require_version='2.3.6'):
    if include_require:
        if require_cdn is True:
            require_cdn = f"https://cdnjs.cloudflare.com/ajax/libs/require.js/{require_version}/require.min.js"
        elif require_cdn is False:
            require_cdn = '/static/components/requirejs/require.js'
        display(HTML(f"<script src={repr(require_cdn)}></script>"))
    display(Javascript(_js()))

_defined = False

def {{ cookiecutter.component_name }}(props: dict, id=None, **kwargs):
    global _defined
    if force_define or not _defined:
        _define_js(**kwargs)
        _defined = True
    if id is None:
        id = str(uuid.uuid4())
    return HTML(dedent(f'''
        <div id="{id}"></div>
        <script>
            require(['{{ cookiecutter.project_py_slug }}'], function (m) {{ "{{" }}
                try {{ "{{" }}
                    var self = document.getElementById('{id}')
                    while (self.children.length > 0) self.children[0].remove()
                    m.{{ cookiecutter.component_name }}(
                        self,
                        {json.dumps(props)}
                    )
                {{ "}}" }} catch (e) {{ "{{" }}
                    console.error(e)
                    var self = document.getElementById('{id}')
                    self.innerHTML = '<b style="color:red">' + e + '</b>'
                {{ "}}" }}
            {{ "}}" }}, function (e) {{ "{{" }}
                console.error(e)
                var self = document.getElementById('{id}')
                self.innerHTML = '<b style="color:red">' + e + '</b>'
            {{ "}}" }})
        </script>
        '''))
