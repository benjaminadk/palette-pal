export const getColorHeight = (total, index) => {
  if (total === 4) {
    if (index === 0) return '40%'
    if (index === 1) return '25%'
    if (index === 2) return '20%'
    if (index === 3) return '15%'
  } else if (total === 5) {
    if (index === 0) return '35%'
    if (index === 1) return '25%'
    if (index === 2) return '15%'
    if (index === 3) return '15%'
    if (index === 4) return '10%'
  } else {
    if (index === 0) return '30%'
    if (index === 1) return '20%'
    if (index === 2) return '15%'
    if (index === 3) return '15%'
    if (index === 4) return '10%'
    if (index === 5) return '10%'
  }
}
