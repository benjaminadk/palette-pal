const toHex = c => {
  const n = c.toString(16)
  return n.length == 1 ? '0' + n.toUpperCase() : n.toUpperCase()
}

export const convertHSLtoRGB = ([h, s, l, a]) => {
  var r, g, b
  var hue = h / 360
  var sat = s / 100
  var lit = l / 100

  if (s == 0) {
    r = g = b = lit
  } else {
    var hue2rgb = function hue2rgb(p, q, t) {
      if (t < 0) t += 1
      if (t > 1) t -= 1
      if (t < 1 / 6) return p + (q - p) * 6 * t
      if (t < 1 / 2) return q
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
      return p
    }

    var q = lit < 0.5 ? lit * (1 + sat) : lit + sat - lit * sat
    var p = 2 * lit - q
    r = hue2rgb(p, q, hue + 1 / 3)
    g = hue2rgb(p, q, hue)
    b = hue2rgb(p, q, hue - 1 / 3)
  }

  const red = Math.round(r * 255)
  const green = Math.round(g * 255)
  const blue = Math.round(b * 255)

  const rgb = `rgb(${red}, ${green}, ${blue})`
  const rgba = `rgba(${red}, ${green}, ${blue}, ${a === 1 ? 1 : a.toFixed(2)})`
  const hex = `#${toHex(red)}${toHex(green)}${toHex(blue)}`
  const hexa = `#${toHex(red)}${toHex(green)}${toHex(blue)}${toHex(Math.round(a * 255))}`

  return { rgb, rgba, hex, hexa }
}
