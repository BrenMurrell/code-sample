import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ buttonFunc, buttonText, buttonStyle }) => {
  return (
    <button className={`btn btn--${buttonStyle}`} onClick={ buttonFunc }>{buttonText}</button>
  )
}

Button.propTypes = {
  buttonText: PropTypes.string,
  buttonStyle: PropTypes.string,
  buttonFunc: PropTypes.func
}

Button.defaultProps = {
  buttonText: 'Click me',
  buttonStyle: 'primary',
  buttonFunc: () => { console.log('No function assigned') }
}

export default Button
