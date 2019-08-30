import React from 'react'
import PropTypes from 'prop-types'

class {{ cookiecutter.project_component }} extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      example: 'Hello'
    }
  }

  render = () => (
    <div>
      {this.state.example} {this.props.example}!
    </div>
  )
}

// Type annotations for your component's properties
{{ cookiecutter.project_component }}.propTypes = {
  example: PropTypes.string,
}

export default {{ cookiecutter.project_component }}