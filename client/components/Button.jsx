import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ buttonFunc, buttonText, buttonType }) => {
  return (
    <button className={`btn btn--${buttonType}`} onClick={ buttonFunc }>{buttonText}</button>
  )
}

Button.propTypes = {
  buttonText: PropTypes.string,
  buttonType: PropTypes.string,
  buttonFunc: PropTypes.func
}

Button.defaultProps = {
  buttonText: 'Click me',
  buttonType: 'primary',
  buttonFunc: () => { console.log('No function assigned') }
}

export default Button
