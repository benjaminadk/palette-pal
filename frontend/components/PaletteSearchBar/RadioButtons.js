import styled from 'styled-components'
import { AppContext } from '../Layout'

export const RadioButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const Radio = styled.div`
  display: flex;
  align-items: center;
  margin-left: 4px;
  input {
    margin: 0;
    margin-right: 2px;
  }
  label {
    font-size: 12px;
    user-select: none;
  }
`

const options = [
  { name: 'Newest', value: 'createdAt_DESC' },
  { name: 'Popularity', value: 'totalLikes_DESC' }
]

const RadioButtons = () => {
  return (
    <AppContext.Consumer>
      {({ orderBy, onOrderByChange }) => (
        <RadioButtonsWrapper>
          {options.map(option => (
            <Radio key={option.name}>
              <input
                type='radio'
                id={option.name}
                checked={option.value === orderBy}
                value={option.value}
                onChange={e => onOrderByChange(e.target.value)}
              />
              <label htmlFor={option.name}>{option.name}</label>
            </Radio>
          ))}
        </RadioButtonsWrapper>
      )}
    </AppContext.Consumer>
  )
}

export default RadioButtons
