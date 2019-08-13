export const createGradient = (colors, gradient, direction) => {
  let mid = colors.reduce((acc, val, idx, arr) => (acc += `${val},`), '')
  if (gradient === 'linear') {
    return `linear-gradient(${direction},` + mid.slice(0, mid.length - 1) + ')'
  } else {
    return `radial-gradient(` + mid.slice(0, mid.length - 1) + ')'
  }
}
