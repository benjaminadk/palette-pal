import { ProfileMenuWrapper, Menu, MenuItem } from './styles'

const tabs = ['Profile', 'Palettes', 'Likes', 'Signout']

const ProfileMenu = ({ menuRef, menuIndex, onMenuItemClick }) => (
  <ProfileMenuWrapper ref={menuRef}>
    <Menu>
      {tabs.map((tab, i) => (
        <MenuItem key={tab} active={menuIndex === i} onClick={() => onMenuItemClick(i)}>
          {tab}
        </MenuItem>
      ))}
    </Menu>
  </ProfileMenuWrapper>
)

export default ProfileMenu
