import { useState } from 'react'
import { useMutation } from '@apollo/react-hooks'
import { CREATE_PALETTE_MUTATION } from '../../apollo/mutation/createPalette'
import TextInput from '../TextInput'
import ColorInput from '../ColorInput'
import ErrorMessage from '../ErrorMessage'
import { getColorHeight } from '../../lib/getColorHeight'
import Router from 'next/router'
import { CreateWrapper, CreateForm, CreateTitle, CreateColors, CreateButton } from './styles'

const initalColors = ['', '', '', '', '', '', '']

const CreatePalette = props => {
  const [title, setTitle] = useState('')
  const [colors, setColors] = useState(() => initalColors)

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
  return (
    <>
      <CreateWrapper>
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
                index={i}
                colors={colors}
                color={color}
                setColors={setColors}
              />
            ))}
          </CreateColors>
        </CreateForm>
        <CreateButton onClick={onCreatePalette}>Create New Palette</CreateButton>
      </CreateWrapper>
      <ErrorMessage error={error} />
    </>
  )
}

export default CreatePalette
