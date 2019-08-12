import { createGlobalStyle } from 'styled-components'
import { THEME } from '../config'

export default createGlobalStyle`
  @font-face {
    font-family: 'Roboto-Regular';
    src: url('/static/Roboto-Regular.ttf') format('opentype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Roboto-Bold';
    src: url('/static/Roboto-Bold.ttf') format('opentype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'RobotoMono';
    src: url('/static/RobotoMono-Medium.ttf') format('opentype');
    font-weight: normal;
    font-style: normal;
  }

  html {
    box-sizing: border-box;
    font-size: 10px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }
  
  body {
    padding: 0;
    margin: 0;
    font-family: ${THEME.fontRegular};
    font-size: 1.5rem;
    line-height: 1.5;
  }

  a {
    text-decoration: none;
  }

  hr {
    height: 0;
    border: 0;
    border-top: 1px solid ${THEME.grey[2]};
  }
`
