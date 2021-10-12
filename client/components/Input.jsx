import React from 'react'
import PropTypes from 'prop-types'

const Input = (props) => {
  const { type, name, id, label, changeHandler, value, placeholder, required } = props
  return (
    <div className='field'>
      <label className='field__label' htmlFor={id}>
        {label}
        {required && ' *'}
      </label>
      <input
        className='field__input'
        value={value}
        type={type}
        name={name}
        id={id}
        onChange={changeHandler}
        placeholder={placeholder}
        required={required} />
    </div>
  )
}

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  changeHandler: PropTypes.func,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool
}

Input.defaultProps = {
  type: 'text',
  changeHandler: () => { console.log('No function assigned') },
  required: false
}

export default Input
