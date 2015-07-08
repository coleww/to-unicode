# TO UNICODE!

![cheers](cheers.jpg)

----------------

[![NPM](https://nodei.co/npm/to-unicode.png)](https://nodei.co/npm/to-unicode/)

swaps out letters for unicodey equivalents.

you know, for giving your bot cooler text, or something.

[demo](http://coleww.github.io/to-unicode/) (TODO: why is it half-broken?)

### INSTALL

`npm install to-unicode`

### examples

```
var str = 'capitalism'
var unicody = toUnicode(str, 'inverted')
var flipper = '(╯°□°）╯︵ '
console.log(flipper + unicody.split("").reverse().join(""))
=> (╯°□°）╯ɯsıןɐʇıdɐɔ


var ransom_note = 'give me allll of the cookies, or else!'
var scrambled = ransom_note.split("").map(function(letter){
    return toUnicode(letter)
}).join("")
console.log(scrambled)
=> �ïᴠ� �� 🂇��ʟ �ｆ T�� ȼ��ᴋɨ�ṡ, o� 𝕵��!
// why is this so broken sometimes...
```



### API

`toUnicode(stringToConvert, fontSeeBelowForMoreInformation)`

If you do not provide a font, one will be picked for you at random.

### options/fonts

- circled: ⓐⓑⓒ
- circledNeg: 🅐🅑🅒
- fullWidth: ａｂｃ
- mathBold: 𝐚𝐛𝐜
- mathBoldFraktur: 𝖆𝖇𝖈
- mathBoldItalic: 𝒂𝒃𝒄
- mathBoldScript: 𝓪𝓫𝓬
- mathDouble: 𝕒𝕓𝕔
- mathMono: 𝚊𝚋𝚌
- mathSans: 𝖺𝖻𝖼
- mathSansBold: 𝗮𝗯𝗰
- mathSansBoldItalic: 𝙖𝙗𝙘
- mathSansItalic: 𝘢𝘣𝘤
- parenthesized: ⒜⒝⒞
- squared: 🄰🄱🄲
- squaredNeg: 🅰🅱🅲
- rockDots: äḅċ
- smallCaps: ᴀʙᴄ
- stroked: Ⱥƀȼ
- inverted: ɐqɔ
- reversed: Adↄ-


### CLI

`npm install to-unicode -g`

```
convert text to unicode fonts

Options:
  -t, --font  font to render text in. if one is not passed, a font will be
              assigned to you at random.
  -f, --file  path to file containing text to convert
  -h, --help  Show help                                                [boolean]

Examples:
  toUnicode weird
  toUnicode -t fullWidth oh yeah, wow this
  is amazing
  toUnicode -t circled -f presentation.txt
  node test.js | toUnicode
```