$(function(){
var gifData;

$('.randomGifButton').on('click', function() {
  $.get('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC')
    .then(function(data) {
      gifData = data.data;

      $('.randomGif').empty();
      $('.randomGif').append('<img src=' + gifData.image_url + '></img>');
    });
})




});
