import styled from 'styled-components'
import { PaletteContext } from '../Layout'

export const RadioButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const Radio = styled.div`
  display: flex;
  align-items: center;
  label {
    font-size: 12px;
  }
`

const options = [
  { name: 'Newest', value: 'createdAt_DESC' },
  { name: 'Popularity', value: 'totalLikes_DESC' }
]

const RadioButtons = () => {
  return (
    <PaletteContext.Consumer>
      {({ orderBy, setOrderBy }) => (
        <RadioButtonsWrapper>
          {options.map(option => (
            <Radio key={option.name}>
              <input
                type='radio'
                checked={option.value === orderBy}
                value={option.value}
                onChange={e => setOrderBy(e.target.value)}
              />
              <label>{option.name}</label>
            </Radio>
          ))}
        </RadioButtonsWrapper>
      )}
    </PaletteContext.Consumer>
  )
}

export default RadioButtons
