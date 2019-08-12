import styled, { keyframes } from 'styled-components'

const fade = keyframes`
  from {
    transform: scale(0) translate(-50%, -50%);
  }
  to {
    transform: scale(1) translate(-50%, -50%);
  }
`

export const Backdrop = styled.div`
  position: fixed;
  z-index: 3;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: ${p => (p.show ? 'block' : 'none')};
  background: ${p => p.theme.backdrop};
`

export const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 4;
  transform: translate(-50%, -50%);
  transform-origin: left top;
  max-width: 100%;
  height: auto;
  display: ${p => (p.show ? 'block' : 'none')};
  animation: ${fade} 0.5s;
`
