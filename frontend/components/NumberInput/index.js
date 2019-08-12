import { useRef, useState } from 'react'
import { Container } from './styles'

export default function NumberInput({ label, value, max, min, fallback, disabled, setter }) {
  const input = useRef(null)

  const [focused, setFocused] = useState(false)

  function onFocus() {
    if (disabled) {
      return
    }
    setFocused(true)
    input.current.select()
  }

  function onBlur(e) {
    if (disabled) {
      return
    }
    if (e.target.value === '') {
      setter(fallback)
    } else if (e.target.value < min) {
      setter(min)
    }
    setFocused(false)
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
    <Container focused={focused}>
      <label>{label}</label>
      <input
        ref={input}
        value={value}
        readOnly={disabled}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        autoFocus={false}
      />
    </Container>
  )
}
