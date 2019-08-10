import { Query } from 'react-apollo'
import { CURRENT_USER_QUERY } from '../apollo/query/currentUser'

const User = props => <Query query={CURRENT_USER_QUERY}>{payload => props.children(payload)}</Query>

export default User
