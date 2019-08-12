import { useRef } from 'react'
import { NumberInputWrapper } from './styles'

export default function NumberInput({ label, value, max, min, fallback, disabled, setter }) {
  const input = useRef(null)

  function onBlur(e) {
    if (disabled) {
      return
    }
    if (e.target.value === '') {
      setter(fallback)
    } else if (e.target.value < min) {
      setter(min)
    }
  }

  function onChange(e) {
    if (disabled) {
      return
    }
    const isDigit = /^\d*$/
    var newValue
    if (isDigit.test(e.target.value)) {
      if (Number(e.target.value) > max) {
        newValue = max
      } else {
        newValue = Number(e.target.value)
      }
    } else {
      newValue = fallback
    }
    setter(newValue)
  }

  return (
    <NumberInputWrapper>
      <label>{label}</label>
      <input
        ref={input}
        value={value}
        readOnly={disabled}
        onChange={onChange}
        onBlur={onBlur}
        autoFocus={false}
      />
    </NumberInputWrapper>
  )
}
