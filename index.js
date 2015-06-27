var fonts = require('./fonts')

module.exports = function(text, font){
  if(!font){
    font = Object.keys(fonts)[~~(Math.random() * Object.keys(fonts).length)]
  }
  var alphabet = "abcdefghijklmnopqrstuvwxyz".split("")
  var alph = fonts[font]
  var mappy = {}
  alphabet.forEach(function(l, i){
    mappy[l] = alph[i]
  })

  return text.split("").map(function(w){
    return mappy[w.toLowerCase()] || w
  }).join("")
}

module.exports.fonts = fonts
