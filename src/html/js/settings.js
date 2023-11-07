

(function () {
	"use strict";

  	// preloader
  	$(window).on("load", function (e) {
  		$('.js-preLoader').delay(2000).fadeOut();
  		// setTimeout(function(){ $('body').addClass('pageloaded'); }, 1000);
  	});


  	// dropdownAnimate
  	$('.dropdown').on('show.bs.dropdown', function(e){
  		$(this).find('.dropdown-menu').first().stop(true, true).slideDown(200);
  	});

  	$('.dropdown').on('hide.bs.dropdown', function(e){
  		$(this).find('.dropdown-menu').first().stop(true, true).slideUp(200);
  	});


    $('.js-searchBoxBtn').click(function() {
      $(".js-searchBox").toggleClass("active");
    });


    $('.custom-select-s2').select2({
        minimumResultsForSearch: -1
    });


    $('.js-scrollDown').click(function (){
      $('html, body').animate({
        scrollTop: $(".js-scrollDownNews").offset().top
      }, 1000)
    });


    $('.js-fTitle').click(function (){
        $(".js-fTitle").removeClass("active");
        $(this).addClass('active');
    });


    // index slide
  	if ($(".js-owlHomeSlide").length != 0) {
  		var owl = $('.js-owlHomeSlide');
  		owl.owlCarousel({
        items: 1,
        loop: false,
        nav: false,
        dots: true,
        autoplay:true,
        margin: 0,
        mouseDrag: false,
		autoplayTimeout:60000,

        // animateIn: 'zoomInRight',
        // animateOut: 'fadeIn' 
		});
  	}


    // index duyurular
  	if ($(".js-owlNotice").length != 0) {
  		var owl = $('.js-owlNotice');
  		owl.owlCarousel({
  			items: 1,
  			loop: true,
  			nav: false,
  			dots: true,
  			margin: 0,
			  autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
  			mouseDrag: false,
        autoHeight: true,
  			//animateOut: 'fadeIn'
  		});
  	}


    // index slide
    $(".twentytwenty-container[data-orientation!='vertical']").twentytwenty({default_offset_pct: 0.5});
    $(".twentytwenty-container[data-orientation='vertical']").twentytwenty({default_offset_pct: 0.3, orientation: 'vertical'});



    // galeri
    lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true,
      'showImageNumberLabel': true,
      'albumLabel': '%1 / %2',
      'fitImagesInViewport': true,
      'disableScrolling': true
    })





    if ($(".js-owlNews").length != 0) {
      var owl = $('.js-owlNews');
      owl.owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        mouseDrag: false,
        center:true,
        
        margin: 10,
        responsive : {
            0 : {
              items: 1
            },
            768 : {
              items: 2
            }
        }
      });
    }




  $(document).ready(function() {


      var owlGalleryBig = $("#js-owlGalleryBig");
      var owlGalleryThumb = $("#js-owlGalleryThumb");
      if ($(document).width() < 991) {
        var slidesPerPage = 4; //globaly define number of elements per page
      }else{
        var slidesPerPage = 8; //globaly define number of elements per page
      }
      
      var syncedSecondary = true;

      owlGalleryBig.owlCarousel({
          items: 1,
          slideSpeed: 2000,
          nav: true,
          autoplay: true, 
          dots: false,
          mouseDrag: false,
          loop: true,
          responsiveRefreshRate: 200,
          navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      }).on('changed.owl.carousel', syncPosition);

      owlGalleryThumb
          .on('initialized.owl.carousel', function() {
              owlGalleryThumb.find(".owl-item").eq(0).addClass("current");
          })
          .owlCarousel({
              items: slidesPerPage,
              dots: true,
              nav: true,
              smartSpeed: 200,
              slideSpeed: 500,
              slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
              responsiveRefreshRate: 100,
              navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
          }).on('changed.owl.carousel', syncPosition2);

      function syncPosition(el) {
          //if you set loop to false, you have to restore this next line
          //var current = el.item.index;

          //if you disable loop you have to comment this block
          var count = el.item.count - 1;
          var current = Math.round(el.item.index - (el.item.count / 2) - .5);

          if (current < 0) {
              current = count;
          }
          if (current > count) {
              current = 0;
          }

          //end block

          owlGalleryThumb
              .find(".owl-item")
              .removeClass("current")
              .eq(current)
              .addClass("current");
          var onscreen = owlGalleryThumb.find('.owl-item.active').length - 1;
          var start = owlGalleryThumb.find('.owl-item.active').first().index();
          var end = owlGalleryThumb.find('.owl-item.active').last().index();

          if (current > end) {
              owlGalleryThumb.data('owl.carousel').to(current, 100, true);
          }
          if (current < start) {
              owlGalleryThumb.data('owl.carousel').to(current - onscreen, 100, true);
          }
      }

      function syncPosition2(el) {
          if (syncedSecondary) {
              var number = el.item.index;
              owlGalleryBig.data('owl.carousel').to(number, 100, true);
          }
      }

      owlGalleryThumb.on("click", ".owl-item", function(e) {
          e.preventDefault();
          var number = $(this).index();
          owlGalleryBig.data('owl.carousel').to(number, 300, true);
      });
  });


  if ($("career.js-videoLink").length != 0) {
    jQuery(function(){
      jQuery("career.js-videoLink").YouTubePopUp(); // Disable autoplay
    });
  }






    if ($(".js-positionCards").length != 0) {
      
      // filtereleme
      const options = { delay: 10, delayMode: 'alternate' };
      // Adjust the CSS selector to match the container where
      // you set up your image gallery
      const filterizr = new Filterizr('.js-positionCards', options);
        
      $('.js-positionNav li').click(function() {
        $('.js-positionNav li').removeClass("active");
        $(this).addClass("active");

        $('.js-positionCards .js-pCard').removeClass('active');

        $(".js-pCardDetails").removeClass("active");
        $('.js-positionCards .js-pCard').removeClass('active');
      });

      $('.js-positionCards .js-pCard').click(function() {
        $('.js-positionCards .js-pCard').removeClass('active');
        $(this).addClass('active');
        var cardPosition = $(this).parent().position();
        var positionInfo = $(this).find(".js-pCardDetailsClone").html();

        $(".js-pCardDetails").css("top", cardPosition.top + 216); // 216px  .pCard yuksekligi kadar
        $(".js-pCardDetails").addClass("active");

        $(".js-pCardDetails .js-positionDetailInner").html(positionInfo);

        console.log(positionInfo);

      });


      $('.js-pCardClose').click(function() {
        $(".js-pCardDetails").removeClass("active");
        $('.js-positionCards .js-pCard').removeClass('active');
      });

      $('.js-filterSearch').keypress(function() {
        $(".js-pCardDetails").removeClass("active");
        $('.js-positionCards .js-pCard').removeClass('active');
      });
    }


    })
();


