import { useState, useEffect } from 'react'
import styled from 'styled-components'

export const ErrorWrapper = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  z-index: 3;
  display: ${p => (p.show ? 'block' : 'none')};
  background: ${p => p.theme.white};
  border: 4px solid #ff6262;
  border-radius: 2px;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  p {
    margin: 0;
    padding: 12px 6px;
    text-align: center;
  }
`

const ErrorMessage = ({ error }) => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (error && error.message) {
      setShow(true)
    } else {
      setShow(false)
    }
    return () => {
      setShow(false)
    }
  }, [error])

  if (!error || !error.message) return null
  if (error.networkError && error.networkError.result && error.networkError.result.errors.length) {
    return error.networkError.result.errors.map((error, i) => (
      <ErrorWrapper key={i}>
        <p>Error: {error.message.replace('GraphQL error: ', '')}</p>
      </ErrorWrapper>
    ))
  }

  return (
    <ErrorWrapper show={show} onClick={() => setShow(false)}>
      <p>Error: {error.message.replace('GraphQL error: ', '')}</p>
    </ErrorWrapper>
  )
}

export default ErrorMessage
