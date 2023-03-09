import React from 'react'
import './{{ cookiecutter.component_name }}.css'

/**
 * {{ cookiecutter.project_description }}
 */
const {{ cookiecutter.component_name }}: React.FC<{
  /**
   * documentation for your property
   */
  some_property: string,
}> = ({
  some_property,
}) => {
  return (
    <div>{some_property}</div>
  )
}

export default {{ cookiecutter.component_name }}
