var toUnicode = require("../")


var fontSelect = document.getElementById('font')
Object.keys(toUnicode.fonts).forEach(function(font){
  var opt = document.createElement('option')
  opt.textContent = opt.value = font
  fontSelect.appendChild(opt)
})

var font = 'circled'
fontSelect.addEventListener("change", function(e){
  font = e.target.value
  document.getElementById('output').textContent = toUnicode(document.getElementById('input').value, font)
})

document.getElementById('input').addEventListener("keyup", function(e){
  document.getElementById('output').textContent = toUnicode(document.getElementById('input').value, font)
})