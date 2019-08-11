import { useState } from 'react'
import { Backdrop } from './styles'
import Signup from './Signup'
import Signin from './Signin'

const Register = ({ show, setShowRegister, setShowConfirm }) => {
  const [mode, setMode] = useState('signup')

  return (
    <>
      <Backdrop show={show} onClick={() => setShowRegister(false)} />
      {mode === 'signup' ? (
        <Signup
          show={show}
          onHintClick={() => setMode('signin')}
          onClose={() => {
            setShowRegister(false)
            setShowConfirm(true)
          }}
        />
      ) : (
        <Signin
          show={show}
          onHintClick={() => setMode('signup')}
          onClose={() => setShowRegister(false)}
        />
      )}
    </>
  )
}

export default Register
