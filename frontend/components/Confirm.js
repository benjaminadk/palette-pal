import styled from 'styled-components'
import { Backdrop, Modal } from './Register/styles'

export const ConfirmWrapper = styled.div`
  width: 400px;
  padding: 30px;
  h2 {
    font-family: ${p => p.theme.fontBold};
    font-size: 30px;
    text-align: center;
  }
  p {
    color: ${p => p.theme.grey[7]};
    font-size: 14px;
    text-align: justify;
  }
  button {
    display: grid;
    align-items: center;
    justify-items: center;
    background: ${p => p.theme.primary};
    color: ${p => p.theme.white};
    border: 0;
    border-radius: 2px;
    outline: 0;
    font-family: ${p => p.theme.fontBold};
    font-size: 16px;
    padding: 12px;
    margin: 30px auto 0;
    cursor: pointer;
  }
`

const Confirm = ({ show }) => {
  return (
    <>
      <Backdrop show={show} />
      <Modal show={show}>
        <ConfirmWrapper>
          <h2>Confirm Your Email</h2>
          <p>
            Please check your inbox for a confirmation email. Click the link in the email to confirm
            your email address.
          </p>
          <button>Re-send confirmation email</button>
        </ConfirmWrapper>
      </Modal>
    </>
  )
}

export default Confirm
