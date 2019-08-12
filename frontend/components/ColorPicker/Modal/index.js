import { Backdrop, ModalWrapper } from './styles'

const Modal = ({ modal, show, setShow, children }) => {
  return (
    <>
      <Backdrop show={show} onClick={() => setShow(false)} />
      <ModalWrapper ref={modal} show={show}>
        {children}
      </ModalWrapper>
    </>
  )
}

export default React.memo(Modal)
