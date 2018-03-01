$(document).ready(function() {
  $(".menu-toggle").on('click', function() {
    $(this).toggleClass("on");
    $('.menu-section').toggleClass("on");
    $("nav ul").toggleClass('hidden');
  });
  $(window).scroll(function(){
    $(".header").css("opacity", 1 - $(window).scrollTop() / 1600 );
  });
  
  var reveal = {
  delay    : 200,
  duration : 900,
  distance : '15px',
  easing   : 'ease',
  scale    : 1
};
  window.sr = ScrollReveal();
  sr.reveal('#project p', reveal);
  sr.reveal('#project h1', reveal);
  sr.reveal('#project h2', reveal);
  sr.reveal('#project div', reveal);
  sr.reveal('.concert-wrap', reveal);
  sr.reveal('.steun-wrap', reveal);
  sr.reveal('.contact-wrap', reveal);

  $( 'a.overlay_trigger[data-overlay-id]' ).click(function(e) {
		e.preventDefault();
		var myOverlay = $(this).attr('data-overlay-id');
		$('#'+myOverlay).addClass('open');
	});

	$( ".overlay-closer" ).click(function(e) {
		e.preventDefault();
		$('.overlays').removeClass('open');
    $('video').each(function () {
        this.pause();
        this.currentTime = 0;
    });
	});

  $('.overlays').bind('mousewheel DOMMouseScroll', function(e) {
		var scrollTo = null;

		if (e.type == 'mousewheel') {
			scrollTo = (e.originalEvent.wheelDelta * -1);
		}
		else if (e.type == 'DOMMouseScroll') {
			scrollTo = 40 * e.originalEvent.detail;
		}

		if (scrollTo) {
			e.preventDefault();
			$(this).scrollTop(scrollTo + $(this).scrollTop());
		}
	});
});
