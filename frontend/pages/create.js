import { useState } from 'react'
import styled from 'styled-components'
import { AppContext } from '../components/Layout'
import TextInput from '../components/TextInput'
import ColorPicker from '../components/ColorPicker'
import { getColorHeight } from '../lib/getColorHeight'

export const CreateWrapper = styled.div`
  height: calc(100vh - ${p => p.theme.headerHeight}px);
  display: grid;
  grid-template-rows: 80% 20%;
  align-items: center;
  justify-items: center;
`

export const CreatePalette = styled.div`
  width: 300px;
  height: 400px;
  display: grid;
  grid-template-rows: 15% 85%;
  background: ${p => p.theme.white};
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.3);
`

export const CreateTitle = styled.div`
  justify-self: center;
  align-self: flex-end;
  width: 90%;
  input {
    margin-bottom: 0;
  }
`

export const CreateColors = styled.div`
  justify-self: center;
  align-self: center;
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
`

export const CreateButton = styled.button`
  justify-self: center;
  align-self: flex-start;
  background: ${p => p.theme.primary};
  color: ${p => p.theme.white};
  border: 0;
  border-radius: 2px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  outline: 0;
  font-family: ${p => p.theme.fontRegular};
  font-size: 14px;
  padding: 12px 24px;
  cursor: pointer;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.3);
`

export const ColorSwatch = styled.div.attrs(p => ({
  style: {
    height: p.height,
    background: p.color
  }
}))`
  border-top-left-radius: ${p => (p.position === 'first' ? '2px' : '0')};
  border-top-right-radius: ${p => (p.position === 'first' ? '2px' : '0')};
  border-bottom-left-radius: ${p => (p.position === 'last' ? '2px' : '0')};
  border-bottom-right-radius: ${p => (p.position === 'last' ? '2px' : '0')};
`

const ColorInput = ({ height, index, colors, color, setColors }) => {
  const [show, setShow] = useState(false)

  function onChange(c) {
    setColors(curr => {
      let newColors = curr.slice()
      newColors[index] = c
      return newColors
    })
  }

  function onClick() {
    if (index === 0 || colors[index - 1]) {
      setShow(true)
    }
  }

  return (
    <>
      <ColorSwatch
        position={index === 0 ? 'first' : index === 5 ? 'last' : 'middle'}
        height={height}
        color={color || initialColors[index]}
        onClick={onClick}
      />
      <ColorPicker
        index={0}
        show={show}
        initialColor='#000000'
        onChange={onChange}
        onClose={() => setShow(false)}
      />
    </>
  )
}

const initialColors = ['#F0F0F0', '#E0E0E0', '#CFCFCF', '#BFBFBF', '#B0B0B0', '#A1A1A1']

export default props => {
  const [title, setTitle] = useState('')
  const [colors, setColors] = useState(() => Array.from({ length: 6 }, (_, i) => ''))

  return (
    <AppContext.Consumer>
      {({ user, setShowConfirm, setShowRegister }) => {
        if (!user) return setShowRegister(true)
        if (!user.confirmed) return setShowConfirm(true)
        return (
          <CreateWrapper>
            <CreatePalette>
              <CreateTitle>
                <TextInput
                  type='text'
                  placeholder='Palette Title'
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                />
              </CreateTitle>
              <CreateColors>
                {colors.map((color, i) => (
                  <ColorInput
                    key={i}
                    height={getColorHeight(6, i)}
                    index={i}
                    colors={colors}
                    color={color}
                    setColors={setColors}
                  />
                ))}
              </CreateColors>
            </CreatePalette>
            <CreateButton>Create New Palette</CreateButton>
          </CreateWrapper>
        )
      }}
    </AppContext.Consumer>
  )
}
