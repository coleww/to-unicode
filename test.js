var tap = require('tape')
var toUnicode = require('./')

tap.test('converts letters', function(t){
  t.equal(toUnicode('boop', 'fullWidth'), 'ｂｏｏｐ')
  t.end()
})

tap.test('ignores stuff it dont know about', function(t){
  t.equal(toUnicode('beep_*boop', 'fullWidth'), 'ｂｅｅｐ_*ｂｏｏｐ')
  t.end()
})

tap.test('takes upper case too', function(t){
  t.equal(toUnicode('BOOP', 'fullWidth'), 'ｂｏｏｐ')
  t.end()
})

tap.test('returns fonts too', function(t){
  var type = typeof toUnicode.fonts
  t.equal(type, 'object')
  t.end()
})
