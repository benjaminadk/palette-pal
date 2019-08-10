import { InputWrapper } from './styles'

const TextInput = ({ type, placeholder, value, onChange }) => (
  <InputWrapper type={type} placeholder={placeholder} value={value} onChange={onChange} />
)

export default TextInput
