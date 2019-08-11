import styled from 'styled-components'
import Color from './Color'

export const PaletteWrapper = styled.div`
  width: 300px;
  height: 400px;
  display: grid;
  grid-template-rows: 10% 75% 15%;
  background: ${p => p.theme.white};
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.3);
`

export const PaletteTitle = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  justify-items: center;
  background: ${p => p.theme.white};
  color: ${p => p.theme.grey[12]};
  font-family: ${p => p.theme.fontBold};
  font-size: 16px;
`

export const PaletteColors = styled.div`
  justify-self: center;
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

const Palette = ({ palette }) => {
  const { title, colors, names } = palette

  const allColors = colors.filter(color => color)

  return (
    <PaletteWrapper>
      <PaletteTitle>{title}</PaletteTitle>
      <PaletteColors>
        {allColors.map((color, i) => (
          <Color
            key={i}
            index={i}
            size='small'
            color={color}
            name={names[i]}
            totalColors={allColors.length}
          />
        ))}
      </PaletteColors>
      <div>bottom</div>
    </PaletteWrapper>
  )
}

export default Palette
