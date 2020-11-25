var sentence = "舔共藝人 賣國求榮 賤畜 習近平的形狀 破腦麻仔 陪睡 噓 噁 討厭 胖 蔣開穴氣到棺材板跳起來 槍斃 沒存在感 米田共 垃圾 爛咖 煩";

for (let i = 0; i < 10; i++) {
  $("#message").append(
    $('<div/>', { 
      class: 'random-sentence', 
      html: sentence 
    }).css({
      fontSize: random(15, 50)+'px',
      textOrientation: random(0,2) == 1?'upright': random(0,1) == 1?'sideways':'sideways-right',

    })
  );
}

$("#message").on('click', '.random-sentence', function() {
  $(this).animate({fontSize:'+=200', opacity: '0'}, 500, function() {
    $(this).hide()
  });
})

function random(start, end, step = 1) {
  let max = (end-start)/step;
  return Math.floor(Math.random() * (max + 1)) * step + start;
}
