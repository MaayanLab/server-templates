import React from 'react'
import {{ cookiecutter.project_component }} from '../src/index'

export default class Demo extends React.Component {
  render = () => (
    <{{ cookiecutter.project_component }}
      example="world"
    />
  )
}
