//Javascript
function scrollDisable(){
    $('html, body').addClass('hidden');
}
function scrollAble(){
    $('html, body').removeClass('hidden');
}
function scrollDisable(){
    $('body').addClass('scrollDisable').on('scroll touchmove mousewheel', function(e){
        e.preventDefault();
    });
}
