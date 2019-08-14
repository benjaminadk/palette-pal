import { useState } from 'react'
import { useMutation } from '@apollo/react-hooks'
import { CREATE_PALETTE_MUTATION } from '../../apollo/mutation/createPalette'
import TextInput from '../TextInput'
import ColorInput from '../ColorInput'
import Svg from '../Svg'
import ErrorMessage from '../ErrorMessage'
import { getColorHeight } from '../../lib/getColorHeight'
import Router from 'next/router'
import {
  CreateWrapper,
  CreateForm,
  CreateTitle,
  CreateColors,
  CreateBottom,
  CreateActions,
  CreateButton
} from './styles'

const initalColors = ['', '', '', '', '', '', '']

const CreatePalette = props => {
  const [title, setTitle] = useState('')
  const [colors, setColors] = useState(() => initalColors)
  const [gradient, setGradient] = useState('linear')
  const [gradientDirection, setGradientDirection] = useState('0deg')

  const [createPalette, { error }] = useMutation(CREATE_PALETTE_MUTATION, {
    variables: { title, colors }
  })

  function onTitleChange(e) {
    let value = e.target.value.slice(0, 30)
    setTitle(value)
  }

  async function onCreatePalette() {
    const res = await createPalette()

    if (res.data.createPalette.success) {
      setTitle('')
      setColors(() => initalColors)
      Router.push({ pathname: '/palette', query: { id: res.data.createPalette.palette.id } })
    }
  }

  function onDirection(deg) {
    setGradient('linear')
    setGradientDirection(deg)
  }

  return (
    <>
      <CreateWrapper
        colors={colors.filter(c => c)}
        gradient={gradient}
        gradientDirection={gradientDirection}
      >
        <CreateForm>
          <CreateTitle>
            <TextInput
              type='text'
              placeholder='Palette Title'
              value={title}
              onChange={onTitleChange}
            />
          </CreateTitle>
          <CreateColors>
            {colors.map((color, i) => (
              <ColorInput
                key={i}
                height={getColorHeight(6, i)}
                available={i === 0 || colors[i - 1]}
                index={i}
                color={color}
                setColors={setColors}
              />
            ))}
          </CreateColors>
          <CreateBottom>
            <CreateActions>
              <Svg name='radial' onClick={() => setGradient('radial')} />
              <Svg name='top-right' onClick={() => onDirection('-45deg')} />
            </CreateActions>
            <CreateButton onClick={onCreatePalette}>
              <Svg name='check' />
            </CreateButton>
          </CreateBottom>
        </CreateForm>
      </CreateWrapper>
      <ErrorMessage error={error} />
    </>
  )
}

export default React.memo(CreatePalette)
