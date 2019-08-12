import styled from 'styled-components'

export const ColorWrapper = styled.div.attrs(p => ({
  style: {
    height: p.height,
    background: p.background
  }
}))`
  position: relative;
  cursor: pointer;
  user-select: none;
  /* border-top-left-radius: ${p => (p.position === 'first' ? '4px' : '0')};
  border-top-right-radius: ${p => (p.position === 'first' ? '4px' : '0')};
  border-bottom-left-radius: ${p => (p.position === 'last' ? '4px' : '0')};
  border-bottom-right-radius: ${p => (p.position === 'last' ? '4px' : '0')}; */
  &:hover .code,
  &:hover .name {
    opacity: 1;
  }
`

export const ColorCode = styled.div.attrs(p => ({
  className: 'code',
  style: {
    color: p.textColor,
    fontSize: ['/palettes'].includes(p.pathname) ? '12px' : '20px'
  }
}))`
  position: absolute;
  bottom: 0;
  left: 0;
  opacity: 0;
  background: rgba(255, 255, 255, 0.25);
  border-top-right-radius: 2px;
  font-family: ${p => p.theme.fontMono};
  padding: 0 4px;
  &:hover {
    background: rgba(255, 255, 255, 0.5);
  }
`

export const ColorName = styled.div.attrs(p => ({
  className: 'name',
  style: {
    visibility: ['/palettes'].includes(p.pathname) ? 'hidden' : 'visible',
    display: p.show ? 'block' : 'none',
    color: p.textColor,
    fontSize: ['/palettes'].includes(p.pathname) ? '12px' : '20px'
  }
}))`
  position: absolute;
  bottom: 0;
  right: 0;
  opacity: 0;
  background: rgba(255, 255, 255, 0.25);
  border-top-left-radius: 2px;
  font-family: ${p => p.theme.fontMono};
  padding: 1px 4px;
`

export const ColorCopied = styled.div.attrs(p => ({
  style: {
    display: p.show ? 'block' : 'none',
    color: p.textColor,
    fontSize: ['/palettes'].includes(p.pathname) ? '12px' : '20px'
  }
}))`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  background: rgba(255, 255, 255, 0.5);
  border-bottom-left-radius: 2px;
  font-family: ${p => p.theme.fontMono};
  padding: 1px 4px;
`
