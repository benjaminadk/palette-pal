import { useState } from 'react'
import Link from 'next/link'
import { Mutation } from 'react-apollo'
import { SIGNUP_MUTATION } from '../../apollo/mutation/signup'
import TextInput from '../TextInput'
import ErrorMessage from '../ErrorMessage'
import { Modal, Form, CheckboxWrapper, Submit, HintText } from './styles'

const Signup = ({ show, onHintClick, onClose }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [agree, setAgree] = useState(false)

  async function onSubmit(e, signup) {
    e.preventDefault()

    await signup({
      variables: { agree, name, email, password }
    })

    onClose()
  }

  return (
    <Mutation mutation={SIGNUP_MUTATION}>
      {(signup, { loading, error }) => (
        <>
          <ErrorMessage error={error} />
          <Modal show={show}>
            <Form onSubmit={e => onSubmit(e, signup)}>
              <h2>Sign Up</h2>
              <p>Please fill out this form to create an account!</p>
              <hr />
              <fieldset disabled={loading}>
                <TextInput
                  type='text'
                  placeholder='Username'
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
                <TextInput
                  type='email'
                  placeholder='Email'
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
                <TextInput
                  type='password'
                  placeholder='Password'
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
                <CheckboxWrapper>
                  <input type='checkbox' checked={agree} onChange={() => setAgree(!agree)} />
                  <p>
                    I accept the{' '}
                    <Link href='/terms-of-use'>
                      <a>Terms of Use</a>
                    </Link>{' '}
                    &{' '}
                    <Link href='/privacy-policy'>
                      <a>Privacy Policy</a>
                    </Link>
                  </p>
                </CheckboxWrapper>
              </fieldset>
              <Submit type='submit'>Sign Up</Submit>
            </Form>
            <HintText>
              Already have an account?{' '}
              <span className='action' onClick={onHintClick}>
                Sign In Here
              </span>
            </HintText>
          </Modal>
        </>
      )}
    </Mutation>
  )
}

export default Signup
