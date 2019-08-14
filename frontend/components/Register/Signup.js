import { useState } from 'react'
import Router from 'next/router'
import { useMutation } from '@apollo/react-hooks'
import { SIGNUP_MUTATION } from '../../apollo/mutation/signup'
import TextInput from '../TextInput'
import ErrorMessage from '../ErrorMessage'
import { Modal, Form, CheckboxWrapper, Submit, HintText, LinkText } from './styles'

const Signup = ({ show, onHintClick, setShowRegister, setShowConfirm }) => {
  const [signup, { loading, error }] = useMutation(SIGNUP_MUTATION)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [agree, setAgree] = useState(false)

  async function onSubmit(e) {
    e.preventDefault()
    await signup({
      variables: { agree, name, email, password }
    })
    setShowRegister(false)
    setShowConfirm(true)
  }

  function onLinkClick(pathname) {
    Router.push(pathname)
    setShowRegister(false)
  }

  return (
    <>
      <ErrorMessage error={error} />
      <Modal show={show}>
        <Form onSubmit={onSubmit}>
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
                I accept the
                <LinkText onClick={() => onLinkClick('/terms-of-use')}>
                  Terms of Use
                </LinkText> &{' '}
                <LinkText onClick={() => onLinkClick('/privacy-policy')}>Privacy Policy</LinkText>
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
  )
}

export default Signup
