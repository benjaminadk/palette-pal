import { formatDistanceStrict } from 'date-fns'

export const formatDistance = date => formatDistanceStrict(new Date(date), new Date()).toUpperCase()
