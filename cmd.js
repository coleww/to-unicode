#!/usr/bin/env node

var toUnicode = require('./')
var fs = require('fs')
var argv = require('yargs')
  .alias('h', 'help')
  .help('help')
  .usage('convert text to unicode fonts')
  .example('toUnicode weird')
  .example('toUnicode -t fullWidth oh yeah, wow this is amazing')
  .example('toUnicode -t circled -f presentation.txt')
  .example('node test.js | toUnicode')
  .alias('t', 'font')
  .alias('f', 'file')
  .describe('t', 'font to render text in. if one is not passed, a font will be assigned to you at random.')
  .describe('f', 'path to file containing text to convert')
  .argv

if(process.stdin.isTTY) {

  var text = argv.f ? fs.readFileSync(argv.f).toString() : argv._.join(" ")

  process.stdout.write(toUnicode(text, argv.t))
  process.stdout.write("\n")
} else {

  var data = ''
  process.stdin.resume()
  process.stdin.setEncoding('utf8')
  process.stdin.on('data', function(chunk) {
    data += chunk
  })

  process.stdin.on('end', function() {
    process.stdout.write(toUnicode(data, argv.t))
    process.stdout.write("\n")
  })
}