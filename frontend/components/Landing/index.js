import AmbientBackground from '../AmbientBackground'
import styled from 'styled-components'

export const LandingWrapper = styled.div`
  position: relative;
`

const Landing = () => (
  <LandingWrapper>
    <AmbientBackground />
  </LandingWrapper>
)

export default Landing
