import { useState } from 'react'
import { Mutation } from 'react-apollo'
import { SIGNIN_MUTATION } from '../../apollo/mutation/signin'
import { CURRENT_USER_QUERY } from '../../apollo/query/currentUser'
import TextInput from '../TextInput'
import ErrorMessage from '../ErrorMessage'
import { Modal, Form, Submit, HintText } from './styles'

const Signin = ({ show, onHintClick, onClose }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function onSubmit(e, signin) {
    e.preventDefault()

    await signin({
      variables: { email, password }
    })

    onClose()
  }

  return (
    <Mutation mutation={SIGNIN_MUTATION} refetchQueries={[{ query: CURRENT_USER_QUERY }]}>
      {(signin, { loading, error }) => (
        <>
          <ErrorMessage error={error} />
          <Modal show={show}>
            <Form onSubmit={e => onSubmit(e, signin)}>
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
      )}
    </Mutation>
  )
}

export default Signin
