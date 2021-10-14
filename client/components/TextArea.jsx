import React from 'react'
import PropTypes from 'prop-types'

const TextArea = (props) => {
  const { name, id, label, changeHandler, value, placeholder, required } = props

  return (
    <div className='field'>
      <label className='field__label' htmlFor={id}>
        {label}
        {required && ' *'}
      </label>
      <textarea
        className='field__input field__input--textarea'
        id={id}
        name={name}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={changeHandler}
      >
      </textarea>
    </div>
  )
}

TextArea.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  changeHandler: PropTypes.func,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool
}

TextArea.defaultProps = {
  changeHandler: () => { console.log('No function assigned') },
  required: false
}

export default TextArea
