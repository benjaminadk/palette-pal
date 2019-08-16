import { Avatar, NavLink } from './styles'

const UserRegister = ({ user, onAvatarClick, onSignupClick }) => {
  if (user) {
    return <Avatar src={user.image} alt={user.name} onClick={onAvatarClick} />
  } else {
    return <NavLink onClick={onSignupClick}>Sign Up</NavLink>
  }
}

export default UserRegister
