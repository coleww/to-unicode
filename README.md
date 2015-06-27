to-unicode
----------------

swaps out letters for unicodey equivalents.

you know, for giving your twitter bot cooler text, or something.

### example

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
```

### API

toUnicode(stringToConvert, fontSeeBelowForMoreInformation)

If you do not provide a font, one will be picked for you at random.

### options/fonts

circled: ⓐⓑⓒ
circledNeg: 🅐🅑🅒
fullWidth: ａｂｃ
mathBold: 𝐚𝐛𝐜
mathBoldFraktur: 𝖆𝖇𝖈
mathBoldItalic: 𝒂𝒃𝒄
mathBoldScript: 𝓪𝓫𝓬
mathDouble: 𝕒𝕓𝕔
mathMono: 𝚊𝚋𝚌
mathSans: 𝖺𝖻𝖼
mathSansBold: 𝗮𝗯𝗰
mathSansBoldItalic: 𝙖𝙗𝙘
mathSansItalic: 𝘢𝘣𝘤
parenthesized: ⒜⒝⒞
squared: 🄰🄱🄲
squaredNeg: 🅰🅱🅲
rockDots: äḅċ
smallCaps: ᴀʙᴄ
stroked: Ⱥƀȼ
inverted: ɐqɔ
reversed: Adↄ