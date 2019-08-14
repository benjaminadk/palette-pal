import { formatDistanceStrict, format } from 'date-fns'

export const formatDistance = date => formatDistanceStrict(new Date(date), new Date()).toUpperCase()

export const formatDate = date => format(new Date(date), 'MM/dd/yyyy')
