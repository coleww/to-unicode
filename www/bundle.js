(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = {
  circled: "ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ",
  circledNeg: "🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩",
  fullWidth: "ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ",
  mathBold: "𝐚𝐛𝐜𝐝𝐞𝐟𝐠𝐡𝐢𝐣𝐤𝐥𝐦𝐧𝐨𝐩𝐪𝐫𝐬𝐭𝐮𝐯𝐰𝐱𝐲𝐳",
  mathBoldFraktur: "𝖆𝖇𝖈𝖉𝖊𝖋𝖌𝖍𝖎𝖏𝖐𝖑𝖒𝖓𝖔𝖕𝖖𝖗𝖘𝖙𝖚𝖛𝖜𝖝𝖞𝖟",
  mathBoldItalic:  "𝒂𝒃𝒄𝒅𝒆𝒇𝒈𝒉𝒊𝒋𝒌𝒍𝒎𝒏𝒐𝒑𝒒𝒓𝒔𝒕𝒖𝒗𝒘𝒙𝒚𝒛",
  mathBoldScript:  "𝓪𝓫𝓬𝓭𝓮𝓯𝓰𝓱𝓲𝓳𝓴𝓵𝓶𝓷𝓸𝓹𝓺𝓻𝓼𝓽𝓾𝓿𝔀𝔁𝔂𝔃",
  mathDouble:  "𝕒𝕓𝕔𝕕𝕖𝕗𝕘𝕙𝕚𝕛𝕜𝕝𝕞𝕟𝕠𝕡𝕢𝕣𝕤𝕥𝕦𝕧𝕨𝕩𝕪𝕫",
  mathMono:  "𝚊𝚋𝚌𝚍𝚎𝚏𝚐𝚑𝚒𝚓𝚔𝚕𝚖𝚗𝚘𝚙𝚚𝚛𝚜𝚝𝚞𝚟𝚠𝚡𝚢𝚣",
  mathSans: "𝖺𝖻𝖼𝖽𝖾𝖿𝗀𝗁𝗂𝗃𝗄𝗅𝗆𝗇𝗈𝗉𝗊𝗋𝗌𝗍𝗎𝗏𝗐𝗑𝗒𝗓",
  mathSansBold:  "𝗮𝗯𝗰𝗱𝗲𝗳𝗴𝗵𝗶𝗷𝗸𝗹𝗺𝗻𝗼𝗽𝗾𝗿𝘀𝘁𝘂𝘃𝘄𝘅𝘆𝘇",
  mathSansBoldItalic: "𝙖𝙗𝙘𝙙𝙚𝙛𝙜𝙝𝙞𝙟𝙠𝙡𝙢𝙣𝙤𝙥𝙦𝙧𝙨𝙩𝙪𝙫𝙬𝙭𝙮𝙯",
  mathSansItalic:  "𝘢𝘣𝘤𝘥𝘦𝘧𝘨𝘩𝘪𝘫𝘬𝘭𝘮𝘯𝘰𝘱𝘲𝘳𝘴𝘵𝘶𝘷𝘸𝘹𝘺𝘻",
  parenthesized: "⒜⒝⒞⒟⒠⒡⒢⒣⒤⒥⒦⒧⒨⒩⒪⒫⒬⒭⒮⒯⒰⒱⒲⒳⒴⒵",
  squared: "🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅈🅉",
  squaredNeg: "🅰🅱🅲🅳🅴🅵🅶🅷🅸🅹🅺🅻🅼🅽🅾🅿🆀🆁🆂🆃🆄🆅🆆🆇🆈🆉",
  rockDots:  "äḅċḋëḟġḧïjḳḷṁṅöṗqṛṡẗüṿẅẍÿż",
  smallCaps: "ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴩqʀꜱᴛᴜᴠᴡxyᴢ",
  stroked:  "Ⱥƀȼđɇfǥħɨɉꝁłmnøᵽꝗɍsŧᵾvwxɏƶ",
  inverted: "ɐqɔpǝɟƃɥıɾʞןɯuodbɹsʇnʌʍxʎz",
  reversed: "AdↄbɘꟻgHijklmᴎoqpᴙꙅTUvwxYz"
}
},{}],2:[function(require,module,exports){
var fonts = require('./fonts')

module.exports = function(text, font){
  if(!font || !fonts[font]){
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

},{"./fonts":1}],3:[function(require,module,exports){
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
},{"../":2}]},{},[3])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJmb250cy5qcyIsImluZGV4LmpzIiwid3d3L2RlbW8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgY2lyY2xlZDogXCLik5Dik5Hik5Lik5Pik5Tik5Xik5bik5fik5jik5nik5rik5vik5zik53ik57ik5/ik6Dik6Hik6Lik6Pik6Tik6Xik6bik6fik6jik6lcIixcbiAgY2lyY2xlZE5lZzogXCLwn4WQ8J+FkfCfhZLwn4WT8J+FlPCfhZXwn4WW8J+Fl/CfhZjwn4WZ8J+FmvCfhZvwn4Wc8J+FnfCfhZ7wn4Wf8J+FoPCfhaHwn4Wi8J+Fo/CfhaTwn4Wl8J+FpvCfhafwn4Wo8J+FqVwiLFxuICBmdWxsV2lkdGg6IFwi772B772C772D772E772F772G772H772I772J772K772L772M772N772O772P772Q772R772S772T772U772V772W772X772Y772Z772aXCIsXG4gIG1hdGhCb2xkOiBcIvCdkJrwnZCb8J2QnPCdkJ3wnZCe8J2Qn/CdkKDwnZCh8J2QovCdkKPwnZCk8J2QpfCdkKbwnZCn8J2QqPCdkKnwnZCq8J2Qq/CdkKzwnZCt8J2QrvCdkK/wnZCw8J2QsfCdkLLwnZCzXCIsXG4gIG1hdGhCb2xkRnJha3R1cjogXCLwnZaG8J2Wh/CdlojwnZaJ8J2WivCdlovwnZaM8J2WjfCdlo7wnZaP8J2WkPCdlpHwnZaS8J2Wk/CdlpTwnZaV8J2WlvCdlpfwnZaY8J2WmfCdlprwnZab8J2WnPCdlp3wnZae8J2Wn1wiLFxuICBtYXRoQm9sZEl0YWxpYzogIFwi8J2SgvCdkoPwnZKE8J2ShfCdkobwnZKH8J2SiPCdkonwnZKK8J2Si/CdkozwnZKN8J2SjvCdko/wnZKQ8J2SkfCdkpLwnZKT8J2SlPCdkpXwnZKW8J2Sl/CdkpjwnZKZ8J2SmvCdkptcIixcbiAgbWF0aEJvbGRTY3JpcHQ6ICBcIvCdk6rwnZOr8J2TrPCdk63wnZOu8J2Tr/Cdk7DwnZOx8J2TsvCdk7PwnZO08J2TtfCdk7bwnZO38J2TuPCdk7nwnZO68J2Tu/Cdk7zwnZO98J2TvvCdk7/wnZSA8J2UgfCdlILwnZSDXCIsXG4gIG1hdGhEb3VibGU6ICBcIvCdlZLwnZWT8J2VlPCdlZXwnZWW8J2Vl/CdlZjwnZWZ8J2VmvCdlZvwnZWc8J2VnfCdlZ7wnZWf8J2VoPCdlaHwnZWi8J2Vo/CdlaTwnZWl8J2VpvCdlafwnZWo8J2VqfCdlarwnZWrXCIsXG4gIG1hdGhNb25vOiAgXCLwnZqK8J2ai/CdmozwnZqN8J2ajvCdmo/wnZqQ8J2akfCdmpLwnZqT8J2alPCdmpXwnZqW8J2al/CdmpjwnZqZ8J2amvCdmpvwnZqc8J2anfCdmp7wnZqf8J2aoPCdmqHwnZqi8J2ao1wiLFxuICBtYXRoU2FuczogXCLwnZa68J2Wu/CdlrzwnZa98J2WvvCdlr/wnZeA8J2XgfCdl4LwnZeD8J2XhPCdl4XwnZeG8J2Xh/Cdl4jwnZeJ8J2XivCdl4vwnZeM8J2XjfCdl47wnZeP8J2XkPCdl5HwnZeS8J2Xk1wiLFxuICBtYXRoU2Fuc0JvbGQ6ICBcIvCdl67wnZev8J2XsPCdl7HwnZey8J2Xs/Cdl7TwnZe18J2XtvCdl7fwnZe48J2XufCdl7rwnZe78J2XvPCdl73wnZe+8J2Xv/CdmIDwnZiB8J2YgvCdmIPwnZiE8J2YhfCdmIbwnZiHXCIsXG4gIG1hdGhTYW5zQm9sZEl0YWxpYzogXCLwnZmW8J2Zl/CdmZjwnZmZ8J2ZmvCdmZvwnZmc8J2ZnfCdmZ7wnZmf8J2ZoPCdmaHwnZmi8J2Zo/CdmaTwnZml8J2ZpvCdmafwnZmo8J2ZqfCdmarwnZmr8J2ZrPCdma3wnZmu8J2Zr1wiLFxuICBtYXRoU2Fuc0l0YWxpYzogIFwi8J2YovCdmKPwnZik8J2YpfCdmKbwnZin8J2YqPCdmKnwnZiq8J2Yq/CdmKzwnZit8J2YrvCdmK/wnZiw8J2YsfCdmLLwnZiz8J2YtPCdmLXwnZi28J2Yt/CdmLjwnZi58J2YuvCdmLtcIixcbiAgcGFyZW50aGVzaXplZDogXCLikpzikp3ikp7ikp/ikqDikqHikqLikqPikqTikqXikqbikqfikqjikqnikqrikqvikqzikq3ikq7ikq/ikrDikrHikrLikrPikrTikrVcIixcbiAgc3F1YXJlZDogXCLwn4Sw8J+EsfCfhLLwn4Sz8J+EtPCfhLXwn4S28J+Et/CfhLjwn4S58J+EuvCfhLvwn4S88J+EvfCfhL7wn4S/8J+FgPCfhYHwn4WC8J+Fg/CfhYTwn4WF8J+FhvCfhYfwn4WI8J+FiVwiLFxuICBzcXVhcmVkTmVnOiBcIvCfhbDwn4Wx8J+FsvCfhbPwn4W08J+FtfCfhbbwn4W38J+FuPCfhbnwn4W68J+Fu/Cfhbzwn4W98J+FvvCfhb/wn4aA8J+GgfCfhoLwn4aD8J+GhPCfhoXwn4aG8J+Gh/Cfhojwn4aJXCIsXG4gIHJvY2tEb3RzOiAgXCLDpOG4hcSL4biLw6vhuJ/EoeG4p8OvauG4s+G4t+G5geG5hcO24bmXceG5m+G5oeG6l8O84bm/4bqF4bqNw7/FvFwiLFxuICBzbWFsbENhcHM6IFwi4bSAypnhtIThtIXhtIfqnLDJosqcyarhtIrhtIvKn+G0jcm04bSP4bSpccqA6pyx4bSb4bSc4bSg4bSheHnhtKJcIixcbiAgc3Ryb2tlZDogIFwiyLrGgMi8xJHJh2bHpcSnyajJieqdgcWCbW7DuOG1veqdl8mNc8Wn4bW+dnd4yY/GtlwiLFxuICBpbnZlcnRlZDogXCLJkHHJlHDHncmfxoPJpcSxyb7Kntefya91b2RiyblzyoduyozKjXjKjnpcIixcbiAgcmV2ZXJzZWQ6IFwiQWTihoRiyZjqn7tnSGlqa2xt4bSOb3Fw4bSZ6pmFVFV2d3hZelwiXG59IiwidmFyIGZvbnRzID0gcmVxdWlyZSgnLi9mb250cycpXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odGV4dCwgZm9udCl7XG4gIGlmKCFmb250IHx8ICFmb250c1tmb250XSl7XG4gICAgZm9udCA9IE9iamVjdC5rZXlzKGZvbnRzKVt+fihNYXRoLnJhbmRvbSgpICogT2JqZWN0LmtleXMoZm9udHMpLmxlbmd0aCldXG4gIH1cbiAgdmFyIGFscGhhYmV0ID0gXCJhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5elwiLnNwbGl0KFwiXCIpXG4gIHZhciBhbHBoID0gZm9udHNbZm9udF1cbiAgdmFyIG1hcHB5ID0ge31cbiAgYWxwaGFiZXQuZm9yRWFjaChmdW5jdGlvbihsLCBpKXtcbiAgICBtYXBweVtsXSA9IGFscGhbaV1cbiAgfSlcblxuICByZXR1cm4gdGV4dC5zcGxpdChcIlwiKS5tYXAoZnVuY3Rpb24odyl7XG4gICAgcmV0dXJuIG1hcHB5W3cudG9Mb3dlckNhc2UoKV0gfHwgd1xuICB9KS5qb2luKFwiXCIpXG59XG5cbm1vZHVsZS5leHBvcnRzLmZvbnRzID0gZm9udHNcbiIsInZhciB0b1VuaWNvZGUgPSByZXF1aXJlKFwiLi4vXCIpXG5cblxudmFyIGZvbnRTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9udCcpXG5PYmplY3Qua2V5cyh0b1VuaWNvZGUuZm9udHMpLmZvckVhY2goZnVuY3Rpb24oZm9udCl7XG4gIHZhciBvcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICBvcHQudGV4dENvbnRlbnQgPSBvcHQudmFsdWUgPSBmb250XG4gIGZvbnRTZWxlY3QuYXBwZW5kQ2hpbGQob3B0KVxufSlcblxudmFyIGZvbnQgPSAnY2lyY2xlZCdcbmZvbnRTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbihlKXtcbiAgZm9udCA9IGUudGFyZ2V0LnZhbHVlXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvdXRwdXQnKS50ZXh0Q29udGVudCA9IHRvVW5pY29kZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQnKS52YWx1ZSwgZm9udClcbn0pXG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dCcpLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBmdW5jdGlvbihlKXtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ291dHB1dCcpLnRleHRDb250ZW50ID0gdG9Vbmljb2RlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dCcpLnZhbHVlLCBmb250KVxufSkiXX0=
