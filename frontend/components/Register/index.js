import { useState } from 'react'
import { AppContext } from '../Layout'
import { Backdrop } from './styles'
import Signup from './Signup'
import Signin from './Signin'

const Register = () => {
  const [mode, setMode] = useState('signup')

  return (
    <AppContext.Consumer>
      {({ showRegister, setShowRegister, setShowConfirm }) => (
        <>
          <Backdrop show={showRegister} onClick={() => setShowRegister(false)} />
          {mode === 'signup' ? (
            <Signup
              show={showRegister}
              onHintClick={() => setMode('signin')}
              setShowRegister={setShowRegister}
              setShowConfirm={setShowConfirm}
            />
          ) : (
            <Signin
              show={showRegister}
              onHintClick={() => setMode('signup')}
              setShowRegister={setShowRegister}
            />
          )}
        </>
      )}
    </AppContext.Consumer>
  )
}

export default Register
