let value = 0;

//
// function draw() {
// background(value)
// }
//
// function mouseClicked() {
//   if (value === 0) {
//     value = 255;
//   } else {
//     value = 0;
//   }
// }

var sentence = "舔共藝人賣國求榮賤畜習近平的形狀破腦麻仔陪睡噓噁討厭胖蔣開穴氣到棺材板跳起來槍斃沒存在感米田共垃圾爛咖煩"

for (let i = 0; i < 10; i++) {
  $("#message").append(
    $('<div/>', {
      class: 'random-sentence',
      html: sentence
    }).css({
      fontSize: random(15, 55)+'px',
      textOrientation: random(0,2) == 1?'upright': random(0,1) == 1?'sideways':'sideways-right',
    }));
}
  $('div').width(screen.width * 0.60);

$("#message").on('click', '.random-sentence', function() {
  $(this).animate({fontSize:'+=200', opacity: '0'}, 500, function() {
    $(this).hide()
  });
})

function random(start, end, step = 1) {
  let max = (end-start)/step;
  return Math.floor(Math.random() * (max + 1)) * step + start;
}
