// Default JavaScript Functions and Initiations

// Load Custom Google Font
WebFont.load({
  google: {
    families: ['Ubuntu:300,400,500,700', 'Montserrat:400,700']
  }
});

function setHeight(){
  var documentHeight = $(window).height();
  if(documentHeight > 500){
    $('.banner').height(documentHeight);
  }
}

$(window).resize(function(){
  setHeight();
})

$(document).ready(function(){

  // Dynamic height main banner
  setHeight();

  // Map
  var layer = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',{
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/attribution">CARTO</a>'
  });
  var map = L.map('google-map', {
      scrollWheelZoom: false,
      center: [41.659472,-0.907274],
      zoom: 15
  });
  L.marker([41.659472,-0.907274]).addTo(map);
  map.addLayer(layer);

  // Swipe Controls for Carousel
  $('.carousel').swiperight(function() {
    $(this).carousel('prev');
  });
  $('.carousel').swipeleft(function() {
    $(this).carousel('next');
  });

  // Countdown
  $('.banner-countdown').downCount({
    date: '03/17/2018 9:00:00',
    offset: +10
  });
});


