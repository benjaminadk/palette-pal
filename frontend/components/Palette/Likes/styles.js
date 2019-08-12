import styled from 'styled-components'

export const LikesWrapper = styled.div.attrs(p => ({
  style: {
    cursor: p.pathname === '/palettes' ? 'pointer' : 'auto'
  }
}))`
  justify-self: flex-start;
  display: flex;
  align-items: center;
  border-radius: 2px;
  padding: 8px 12px;
  &:hover {
    background: ${p => p.pathname === '/palettes' && '#f5f5f5'};
  }
  &:hover .total {
    color: ${p => p.pathname === '/palettes' && p.theme.grey[10]};
  }
  &:hover .direction {
    opacity: ${p => (p.pathname === '/palettes' ? 1 : 0)};
  }
  svg {
    width: 16px;
    margin-right: 4px;
  }
  .total {
    color: ${p => p.theme.grey[5]};
    font-family: ${p => p.theme.fontBold};
    font-size: 14px;
    margin-right: 4px;
  }
  .direction {
    opacity: 0;
    color: ${p => (p.isLiked ? '#e64343' : '#399e39')};
    font-size: 10px;
  }
`
