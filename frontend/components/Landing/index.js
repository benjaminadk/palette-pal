import AmbientBackground from './AmbientBackground'
import QuadraticCurve from './QuadraticCurve'
import SearchInput from './SearchInput'
import { LandingWrapper, InnerWrapper, Welcome } from './styles'

const Landing = () => (
  <LandingWrapper>
    <AmbientBackground />
    <InnerWrapper>
      <Welcome>
        <h1>Palette Pal</h1>
        <p>An open source - source of color</p>
        <SearchInput />
      </Welcome>
      <QuadraticCurve />
    </InnerWrapper>
  </LandingWrapper>
)

export default Landing
