import Router from 'next/router'
import { useQuery } from '@apollo/react-hooks'
import { TOTAL_PALETTES_QUERY } from '../../apollo/query/totalPalettes'
import { TotalPalettesWrapper } from './styles'

const TotalPalettes = () => {
  const { data, loading } = useQuery(TOTAL_PALETTES_QUERY)

  if (loading) return null
  const total = data.palettesConnection.edges.length

  return (
    <TotalPalettesWrapper onClick={() => Router.push('/palettes')}>
      <span>Palettes</span>
      <span className='total'>{total}</span>
    </TotalPalettesWrapper>
  )
}

export default TotalPalettes
