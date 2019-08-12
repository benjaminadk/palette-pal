import { useState } from 'react'
import styled from 'styled-components'
import { AppContext } from '../components/Layout'
import ColorPicker from '../components/ColorPicker'

export const CreateWrapper = styled.div`
  height: calc(100vh - ${p => p.theme.headerHeight}px);
`

export const ColorSwatch = styled.div.attrs(p => ({
  style: {
    background: p.color
  }
}))`
  width: 100px;
  height: 100px;
`

const ColorInput = () => {
  const [color, setColor] = useState('#000000')
  const [show, setShow] = useState(false)
  return (
    <>
      <ColorSwatch color={color} onClick={() => setShow(true)} />
      <ColorPicker
        index={0}
        show={show}
        initialColor='#000000'
        onChange={setColor}
        onClose={() => setShow(false)}
      />
    </>
  )
}

export default props => {
  return (
    <AppContext.Consumer>
      {({ user, setShowConfirm, setShowRegister }) => {
        if (!user) return setShowRegister(true)
        if (!user.confirmed) return setShowConfirm(true)
        return (
          <CreateWrapper>
            <ColorInput />
          </CreateWrapper>
        )
      }}
    </AppContext.Consumer>
  )
}
