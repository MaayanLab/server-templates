import ReactDOM from 'react-dom'
import React from 'react'
import Component from './{{ cookiecutter.component_name }}'

export function {{ cookiecutter.component_name }}(container, props: React.ComponentProps<typeof Component>) {
  ReactDOM.render(
    <Component {...props} />,
    container
  )
}
