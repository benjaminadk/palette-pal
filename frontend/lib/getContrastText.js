export const getContrastText = color => {
  let str = color.slice(1)
  let r = parseInt(str.slice(0, 2), 16)
  let g = parseInt(str.slice(2, 4), 16)
  let b = parseInt(str.slice(4, 6), 16)
  let c = [r / 255, g / 255, b / 255].map(col => {
    if (col <= 0.03928) {
      return col / 12.92
    }
    return Math.pow((col + 0.055) / 1.055, 2.4)
  })
  let L = 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]
  return L > 0.179 ? '#000000' : '#FFFFFF'
}
