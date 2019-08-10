import { useState } from 'react'
import { Backdrop } from './styles'
import Signup from './Signup'
import Signin from './Signin'

const Register = ({ show, toggleShowRegister, toggleShowConfirm }) => {
  const [mode, setMode] = useState('signup')

  return (
    <>
      <Backdrop show={show} onClick={() => toggleShowRegister(false)} />
      {mode === 'signup' ? (
        <Signup
          show={show}
          onHintClick={() => setMode('signin')}
          onClose={() => {
            toggleShowRegister(false)
            toggleShowConfirm(true)
          }}
        />
      ) : (
        <Signin
          show={show}
          onHintClick={() => setMode('signup')}
          onClose={() => toggleShowRegister(false)}
        />
      )}
    </>
  )
}

export default Register
