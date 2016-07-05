$(function(){
var gifData;
var stickerData;
var searchData;

$('.randomGifButton').on('click', function() {
  $.get('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC')
    .then(function(data) {
      gifData = data.data;
      $('.randomGif').empty();
      $('.randomGif').append('<img class=\"randomGif\" src=' + gifData.image_url + '></img>');
    });
})

$('.randomStickerButton').on('click', function() {
  $.get('http://api.giphy.com/v1/stickers/random?api_key=dc6zaTOxFJmzC')
    .then(function(data) {
      stickerData = data.data;

      $('.randomGif').empty();
      $('.randomGif').append('<img class=\"randomSticker\" src=' + stickerData.image_url + '></img>');
    });
})


//Started to build search function. I will return to this, if only for my own sake.

// $('.searchGifButton').on('click', function() {
//   var searchResults = $('form').serialize();
//   console.log(searchResults);
//   $.get('http://api.giphy.com/v1/gifs/search?limit=5&q=' + searchResults + '&api_key=dc6zaTOxFJmzC')
//     .then(function(data) {
//       searchData = data.data;
//       $('.randomGif').empty();
//       console.log(searchData[0].images.original.url);
//
//       for (var i = 0; i < searchData.length; i++) {
//         console.log(searchData[i].images.original.url);
//       }
//   });
// })


});
