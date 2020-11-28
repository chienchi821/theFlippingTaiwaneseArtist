var sentence = "This is where the comments go"

for (let i = 0; i < 10; i++) {
  $("#message").append(
    $('<div/>', {
      class: 'random-sentence',
      html: sentence
    }).css({
      fontSize: random(30, 50)+'px',
      textOrientation: random(0,2) == 1?'upright': random(0,1) == 1?'sideways':'sideways-right',
    }));
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



let value = 0;
function draw() {
  background(value)
}

function mouseClicked() {
  if (value === 0) {
    value = 255;
  } else {
    value = 0;
  }
}
