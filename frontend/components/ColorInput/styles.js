import styled from 'styled-components'

export const ColorSwatch = styled.div.attrs(p => ({
  style: {
    height: p.height,
    background: p.color
  }
}))`
  border-top-left-radius: ${p => (p.position === 'first' ? '2px' : '0')};
  border-top-right-radius: ${p => (p.position === 'first' ? '2px' : '0')};
  border-bottom-left-radius: ${p => (p.position === 'last' ? '2px' : '0')};
  border-bottom-right-radius: ${p => (p.position === 'last' ? '2px' : '0')};
`
