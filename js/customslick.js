$(document).ready(function(){
    $('.team_slider').slick({
    infinite:true,
    slidesToShow:4,
    slidesToScroll:1,
    autoplaySpeed:4000,
    autoplay:true,
    arrows:false,
         responsive: [
             {
                 breakpoint: 1200,
                 settings: {
                     slidesToShow: 3,
                     slidesToScroll: 1,
                 }
    },
             {
                 breakpoint: 992,
                 settings: {
                     slidesToShow: 3,
                     slidesToScroll: 2,
                 }
    },
             {
                 breakpoint: 768,
                 settings: {
                     slidesToShow: 2,
                     slidesToScroll: 2,
                 }
                 
    },
             {
                 breakpoint: 576,
                 settings: {
                     slidesToShow: 2,
                     slidesToScroll: 2,
                 }
                 
    },
                     {
                 breakpoint: 479,
                 settings: {
                     slidesToShow: 1,
                     slidesToScroll: 1,
                 }
                 
    }
  ]    
        
        
        
});
    
     //vino Box js for img
    
        $('.venobox').venobox();
    
        // typed js
    $(".typed").typed({
		strings: ["Web Designer.", "Web Developer.", 'Graphics Designer'],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 50,
		// time before typing starts
		startDelay: 500,
		// backspacing speed
		backSpeed: 50,
		// time before backspacing
		backDelay: 500,
		// loop
		loop: true,
		// false = infinite
		loopCount: 100,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
	});
    
    //Bottom Slider Text
     $('.bottom_slider').slick({
         infinite: true,
         slidesToShow: 1,
         slidesToScroll: 1,
         autoplaySpeed: 4000,
         autoplay: true,
         arrows: true,
         prevArrow:'.ar_l',
         nextArrow:'.ar_r',
     });
    
   // Smooths scrolling
    $('body').scrollspy({target: ".navbar", offset: 50});
    
    //Animate Scroll Spy
    var html_body = $('html, body');
    $('nav a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 45
                }, 1500);
                return false;
            }
        }
    });
    
    
    //Wow Js
    new WOW().init();
    
    //Preloder
       $(window).on('load', function(){
        
        $('.preloader').delay(2000).fadeOut(500);
        
    });
    
    
    // Scroll To Top
    
    $(window).scroll(function(){
        if($(this).scrollTop() > 40){
            $('#scroll_top').fadeIn();
        } else{
             $('#scroll_top').fadeOut();
        }
    });
    $("#scroll_top").click(function(){
        $('html ,body').animate({scrollTop : 0},800);
    });


    
   
    
    
    
    
    
    
    
});