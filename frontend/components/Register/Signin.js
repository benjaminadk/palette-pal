import { useState } from 'react'
import { useMutation } from '@apollo/react-hooks'
import { SIGNIN_MUTATION } from '../../apollo/mutation/signin'
import { CURRENT_USER_QUERY } from '../../apollo/query/currentUser'
import TextInput from '../TextInput'
import ErrorMessage from '../ErrorMessage'
import { Modal, Form, Submit, HintText } from './styles'

const Signin = ({ show, onHintClick, onClose }) => {
  const [signin, { loading, error }] = useMutation(SIGNIN_MUTATION)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function onSubmit(e) {
    e.preventDefault()

    await signin({
      variables: { email, password },
      refetchQueries: [{ query: CURRENT_USER_QUERY }]
    })

    onClose()
  }

  return (
    <>
      <ErrorMessage error={error} />
      <Modal show={show}>
        <Form onSubmit={onSubmit}>
          <h2>Sign In</h2>
          <p>Fill out this form to sign in to your account!</p>
          <hr />
          <fieldset disabled={loading}>
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
          </fieldset>
          <Submit type='submit'>Sign In</Submit>
        </Form>
        <HintText>
          Don't have an account?{' '}
          <span className='action' onClick={onHintClick}>
            Sign Up Here
          </span>
        </HintText>
      </Modal>
    </>
  )
}

export default Signin
