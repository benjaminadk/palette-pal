import { Backdrop, ModalWrapper } from './styles'

const Modal = ({ modal, show, onClose, children }) => {
  return (
    <>
      <Backdrop show={show} onClick={onClose} />
      <ModalWrapper ref={modal} show={show}>
        {children}
      </ModalWrapper>
    </>
  )
}

export default React.memo(Modal)
