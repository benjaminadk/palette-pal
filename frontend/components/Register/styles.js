import styled from 'styled-components'

export const Backdrop = styled.div`
  display: ${p => (p.show ? 'block' : 'none')};
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 3;
  background: ${p => p.theme.primary}BB;
`

export const Modal = styled.div`
  display: ${p => (p.show ? 'block' : 'none')};
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 4;
  transform: translate(-50%, -50%);
  background: ${p => p.theme.white};
  border-radius: 2px;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.3);
`

export const Form = styled.form`
  width: 400px;
  padding: 30px;
  h2 {
    font-family: ${p => p.theme.fontBold};
    font-size: 30px;
    margin: 0 0 10px 0;
  }
  p {
    color: ${p => p.theme.grey[7]};
    font-size: 14px;
    margin: 0;
  }
  hr {
    margin: 10px 0;
  }
  fieldset {
    border: 0;
  }
`

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  input {
    margin-right: 10px;
  }
  a {
    color: ${p => p.theme.link};
    &:hover {
      text-decoration: underline;
    }
  }
`

export const Submit = styled.button`
  width: 150px;
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
  padding: 12px 0;
  margin-top: 10px;
  cursor: pointer;
`

export const HintText = styled.div`
  transform: translate(0, 30px);
  color: ${p => p.theme.white};
  text-align: center;
  .action {
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`
