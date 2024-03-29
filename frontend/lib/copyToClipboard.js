export const copyToClipboard = input => {
  const el = document.createElement('textarea')
  el.value = input
  el.setAttribute('readonly', '')
  el.style.contain = 'strict'
  el.style.position = 'absolute'
  el.style.left = '-9999px'
  el.style.fontSize = '12pt'

  const selection = document.getSelection()
  let originalRange = false
  if (selection.rangeCount > 0) {
    originalRange = selection.getRangeAt(0)
  }

  document.body.appendChild(el)
  el.select()
  el.selectionStart = 0
  el.selectionEnd = input.length

  let success = false
  try {
    success = document.execCommand('copy')
  } catch (err) {}

  document.body.removeChild(el)

  if (originalRange) {
    selection.removeAllRanges()
    selection.addRange(originalRange)
  }

  return success
}
