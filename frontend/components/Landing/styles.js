import styled from 'styled-components'

export const LandingWrapper = styled.div`
  position: relative;
`

export const InnerWrapper = styled.div`
  position: absolute;
  z-index: 2;
  width: 100%;
  height: calc(100vh);
  display: grid;
  align-items: center;
  justify-items: center;
`

export const Welcome = styled.div`
  width: 50%;
  height: 50%;
  h1 {
    color: ${p => p.theme.white};
    font-family: ${p => p.theme.fontBold};
    font-size: 50px;
    text-shadow: 2px 2px 2px ${p => p.theme.black};
    margin: 0;
  }
  p {
    color: ${p => p.theme.white};
    font-size: 20px;
    margin: 10px 0 15px;
    text-shadow: 1px 1px 2px ${p => p.theme.black};
  }
`
