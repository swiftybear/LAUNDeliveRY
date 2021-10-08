/**
* Template Name: Bocor - v2.0.0
* Template URL: https://bootstrapmade.com/bocor-bootstrap-template-nice-animation/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
var zx=0;
/////////////////////////////////////////////////////////////////////////////////////
// Iligan City center 8.2275709812194, 124.24418764142114
////////////////////////////////////////////////////////////////////////////////////
function initMap() {
	// Update MAP_ID with custom map ID
	map = new google.maps.Map(document.getElementById('map'), {
		center: {
			lat: 8.2275709812194,
			lng: 124.24418764142114,
		},
		zoom: 14,
		mapId: 'a7e61eed2d2a134c',
		mapTypeControl: true,
		fullscreenControl: true,
		streetViewControl: true,
	});

	// Name
	// Latitude, Longitude
	// Image URL
	// scaledSize width, height
  const content1 =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<center><h2 id="firstHeading" class="firstHeading">Quick Wash</h2> <h4><small>(Solana, Tibanga, Iligan City.)</small></h4> </center>' +
    '<div id="bodyContent">' +

    '<div class="table-responsive">' +
          '<table class="table table-borderless">' +
        '<tbody>' +
        '<tr data-aos="fade-left" data-aos-delay="100">' +
      '<th scope="row"><center><a href="https://www.facebook.com/quickwashlaundrylounge">  <img src="assets/img/clients/C1.png" alt="" style="height:110px;width:110px;"> </th>' +
      '<td> <center><h6>Store hours: 7:00am-5:00pm</h6> <a class="btn btn-info" href="service.html" role="button" style="margin-top:10px;">View prices</a></center> </td>' +
      '<td><center><a class="btn btn-info btn-sm" href="oof.html" role="button" style="margin-top:10px;">Visit Shop</a></center>' +
      '<center><a class="btn btn-primary btn-sm" href="https://www.facebook.com/quickwashlaundrylounge" role="button" style="margin-top:10px;"><i class="icofont-facebook"></i><small>Visit FB page</small></a></center> </td>' +
      '<tr>' +
      '</tbody>' +
      '</table>' +
    '</div>' +
  '</div>' +
  '</div>';
  const content2 =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<center><h2 id="firstHeading" class="firstHeading">Mr. B Laundry</h2> <h4><small>(San Miguel, Sheker Avenue, Iligan City.)</small></h4> </center>' +
    '<div id="bodyContent">' +

    '<div class="table-responsive">' +
          '<table class="table table-borderless">' +
        '<tbody>' +
        '<tr data-aos="fade-left" data-aos-delay="100">' +
      '<th scope="row"><center><a href="https://www.facebook.com/Mr-B-Laundry-Shop-106635647986163">  <img src="assets/img/clients/C2.png" alt="" style="height:110px;width:110px;"> </th>' +
      '<td><center><h6>Store hours: 7:00am-7:00pm</h6><a class="btn btn-info" href="service.html" role="button" style="margin-top:10px;">View prices</a></center> </td>' +
      '<td><center><a class="btn btn-info btn-sm" href="oof.html" role="button" style="margin-top:10px;">Visit Shop</a></center>' +
      '<center><a class="btn btn-primary btn-sm" href="https://www.facebook.com/Mr-B-Laundry-Shop-106635647986163" role="button" style="margin-top:10px;"><i class="icofont-facebook"></i><small>Visit FB page</small></a></center> </td>' +
      '<tr>' +
      '</tbody>' +
      '</table>' +
    '</div>' +
  '</div>' +
  '</div>';
  const content3 =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<center><h2 id="firstHeading" class="firstHeading">Family Laundry Shop</h2> <h4><small>(Agoncillo St., Poblacion, Iligan City)</small></h4> </center>' +
    '<div id="bodyContent">' +

    '<div class="table-responsive">' +
          '<table class="table table-borderless">' +
        '<tbody>' +
        '<tr data-aos="fade-left" data-aos-delay="100">' +
      '<th scope="row"><center><a href="https://www.facebook.com/familylaundryshopiligan">  <img src="assets/img/clients/C3.png" alt="" style="height:110px;width:110px;"> </th>' +
      '<td><center><h6>Store hours: 8:00am-8:00pm</h6><a class="btn btn-info" href="service.html" role="button" style="margin-top:10px;">View prices</a></center> </td>' +
      '<td><center><a class="btn btn-info btn-sm" href="oof.html" role="button" style="margin-top:10px;">Visit Shop</a></center>' +
      '<center><a class="btn btn-primary btn-sm" href="https://www.facebook.com/familylaundryshopiligan" role="button" style="margin-top:10px;"><i class="icofont-facebook"></i><small>Visit FB page</small></a></center> </td>' +
      '<tr>' +
      '</tbody>' +
      '</table>' +
    '</div>' +
  '</div>' +
  '</div>';
  const content4 =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<center><h2 id="firstHeading" class="firstHeading">Lavandero</h2> <h4><small>(Tubod, Iligan City.)</small></h4> </center>' +
    '<div id="bodyContent">' +

    '<div class="table-responsive">' +
          '<table class="table table-borderless">' +
        '<tbody>' +
        '<tr data-aos="fade-left" data-aos-delay="100">' +
      '<th scope="row"><center><a href="https://www.facebook.com/LavanderoPH">  <img src="assets/img/clients/C4.png" alt="" style="height:60px;width:110px;"> </th>' +
      '<td><center><h6>Store hours: 7:00am-9:00pm</h6><a class="btn btn-info" href="service.html" role="button" style="margin-top:10px;">View prices</a></center> </td>' +
      '<td><center><a class="btn btn-info btn-sm" href="oof.html" role="button" style="margin-top:10px;">Visit Shop</a></center>' +
      '<center><a class="btn btn-primary btn-sm" href="https://www.facebook.com/LavanderoPH" role="button" style="margin-top:10px;"><i class="icofont-facebook"></i><small>Visit FB page</small></a></center> </td>' +
      '<tr>' +
      '</tbody>' +
      '</table>' +
    '</div>' +
  '</div>' +
  '</div>';
  const content5 =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<center><h2 id="firstHeading" class="firstHeading">Twins Laundry</h2> <h4><small>(Phase 2, Dona Maria Subdivision, Baraas, Iligan City)</small></h4> </center>' +
    '<div id="bodyContent">' +

    '<div class="table-responsive">' +
          '<table class="table table-borderless">' +
        '<tbody>' +
        '<tr data-aos="fade-left" data-aos-delay="100">' +
      '<th scope="row"><center><a href="https://www.facebook.com/twinslaundryiligan">  <img src="assets/img/clients/C5.png" alt="" style="height:110px;width:110px;"> </th>' +
      '<td><center><h6>Store hours: 7:00am-7:00pm</h6><a class="btn btn-info" href="service.html" role="button" style="margin-top:10px;">View prices</a></center> </td>' +
      '<td><center><a class="btn btn-info btn-sm" href="oof.html" role="button" style="margin-top:10px;">Visit Shop</a></center>' +
      '<center><a class="btn btn-primary btn-sm" href="https://www.facebook.com/twinslaundryiligan" role="button" style="margin-top:10px;"><i class="icofont-facebook"></i><small>Visit FB page</small></a></center> </td>' +
      '<tr>' +
      '</tbody>' +
      '</table>' +
    '</div>' +
  '</div>' +
  '</div>';
  const content6 =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<center><h2 id="firstHeading" class="firstHeading">Lavatronic</h2> <h4><small>(Highway 30 Bldg. Tibanga, Iligan City)</small></h4> </center>' +
    '<div id="bodyContent">' +

    '<div class="table-responsive">' +
          '<table class="table table-borderless">' +
        '<tbody>' +
        '<tr data-aos="fade-left" data-aos-delay="100">' +
      '<th scope="row"><center><a href="https://www.facebook.com/Lavatronic-Laundry-Lounge-184784342276507">  <img src="assets/img/clients/C6.png" alt="" style="height:110px;width:110px;"> </th>' +
      '<td><center><h6>Store hours: 24/7 open</h6><a class="btn btn-info" href="service.html" role="button" style="margin-top:10px;">View prices</a></center> </td>' +
      '<td><center><a class="btn btn-info btn-sm" href="oof.html" role="button" style="margin-top:10px;">Visit Shop</a></center>' +
      '<center><a class="btn btn-primary btn-sm" href="https://www.facebook.com/Lavatronic-Laundry-Lounge-184784342276507" role="button" style="margin-top:10px;"><i class="icofont-facebook"></i><small>Visit FB page</small></a></center> </td>' +
      '<tr>' +
      '</tbody>' +
      '</table>' +
    '</div>' +
  '</div>' +
  '</div>';
  const content7 =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<center><h2 id="firstHeading" class="firstHeading">Robins Laundry room</h2> <h4><small>(Quezon Ave Extn. Palao Iligan City)</small></h4> </center>' +
    '<div id="bodyContent">' +

    '<div class="table-responsive">' +
          '<table class="table table-borderless">' +
        '<tbody>' +
        '<tr data-aos="fade-left" data-aos-delay="100">' +
      '<th scope="row"><center><a href="https://www.facebook.com/robinslaundryroom">  <img src="assets/img/clients/C7.png" alt="" style="height:110px;width:110px;"> </th>' +
      '<td><center><h6>Store hours: 7:00am-9:00pm</h6><a class="btn btn-info" href="service.html" role="button" style="margin-top:10px;">View prices</a></center> </td>' +
      '<td><center><a class="btn btn-info btn-sm" href="oof.html" role="button" style="margin-top:10px;">Visit Shop</a></center>' +
      '<center><a class="btn btn-primary btn-sm" href="https://www.facebook.com/robinslaundryroom" role="button" style="margin-top:10px;"><i class="icofont-facebook"></i><small>Visit FB page</small></a></center> </td>' +
      '<tr>' +
      '</tbody>' +
      '</table>' +
    '</div>' +
  '</div>' +
  '</div>';
  const content8 =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<center><h2 id="firstHeading" class="firstHeading">LaundryHub</h2> <h4><small>(Sabayle Street, Iligan City.)</small></h4> </center>' +
    '<div id="bodyContent">' +

    '<div class="table-responsive">' +
          '<table class="table table-borderless">' +
        '<tbody>' +
        '<tr data-aos="fade-left" data-aos-delay="100">' +
      '<th scope="row"><center><a href="https://www.facebook.com/washandfoldlaundryhub/">  <img src="assets/img/clients/C8.png" alt="" style="height:110px;width:110px;"> </th>' +
      '<td><center><h6>Store hours: 6:00am-8:00pm</h6><a class="btn btn-info" href="service.html" role="button" style="margin-top:10px;">View prices</a></center> </td>' +
      '<td><center><a class="btn btn-info btn-sm" href="oof.html" role="button" style="margin-top:10px;">Visit Shop</a></center>' +
      '<center><a class="btn btn-primary btn-sm" href="https://www.facebook.com/washandfoldlaundryhub/" role="button" style="margin-top:10px;"><i class="icofont-facebook"></i><small>Visit FB page</small></a></center> </td>' +
      '<tr>' +
      '</tbody>' +
      '</table>' +
    '</div>' +
  '</div>' +
  '</div>';
  const content9 =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<center><h2 id="firstHeading" class="firstHeading">Iligan Express Laundry</h2> <h4><small>(Quezon Ave Extension, Iligan City.)</small></h4> </center>' +
    '<div id="bodyContent">' +

    '<div class="table-responsive">' +
          '<table class="table table-borderless">' +
        '<tbody>' +
        '<tr data-aos="fade-left" data-aos-delay="100">' +
      '<th scope="row"><center><a href="https://www.facebook.com/iliganexpresslaundry">  <img src="assets/img/clients/C9.png" alt="" style="height:110px;width:110px;"> </th>' +
      '<td><center><h6>Store hours: 7:00am-5:00pm</h6><a class="btn btn-info" href="service.html" role="button" style="margin-top:10px;">View prices</a></center> </td>' +
      '<td><center><a class="btn btn-info btn-sm" href="oof.html" role="button" style="margin-top:10px;">Visit Shop</a></center>' +
      '<center><a class="btn btn-primary btn-sm" href="https://www.facebook.com/iliganexpresslaundry" role="button" style="margin-top:10px;"><i class="icofont-facebook"></i><small>Visit FB page</small></a></center> </td>' +
      '<tr>' +
      '</tbody>' +
      '</table>' +
    '</div>' +
  '</div>' +
  '</div>';
  const content10 =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<center><h2 id="firstHeading" class="firstHeading">Tia Lavandera</h2> <h4><small>(Sabayle near daily convinience store)</small></h4> </center>' +
    '<div id="bodyContent">' +

    '<div class="table-responsive">' +
          '<table class="table table-borderless">' +
        '<tbody>' +
        '<tr data-aos="fade-up" data-aos-delay="100">' +
      '<th scope="row"><center><a href="https://www.facebook.com/Tia-Lavandera-312268072711958/">  <img src="assets/img/clients/C10.png" alt="" style="height:110px;width:110px;"> </th>' +
      '<td><center><h6>Store hours: 7:30am-7:30pm</h6><a class="btn btn-info" href="service.html" role="button" style="margin-top:10px;">View prices</a></center> </td>' +
      '<td><center><a class="btn btn-info btn-sm" href="oof.html" role="button" style="margin-top:10px;">Visit Shop</a></center>' +
      '<center><a class="btn btn-primary btn-sm" href="https://www.facebook.com/Tia-Lavandera-312268072711958/" role="button" style="margin-top:10px;"><i class="icofont-facebook"></i><small>Visit FB page</small></a></center> </td>' +
      '<tr>' +
      '</tbody>' +
      '</table>' +
    '</div>' +
  '</div>' +
  '</div>';

	const markers = [
		[
			"Quick wash",
			8.23697203911527, 124.24405936832233,
			'marker.svg',
		  70,
			100,
      content1,
		],
		[
			'Mr. B Laundry',
			8.237613430360293, 124.2482413966858,
      'marker.svg',
		  70,
			100,
      content2,
		],
		[
			'Family Laundry Shop',
			8.226593279292036, 124.23887903136857,
      'marker.svg',
		  70,
			100,
      content3,
		],
		['Lavandero', 8.21491293124339, 124.24324951505547, 'marker.svg',
    70,
    100, content4,],
		['Twins Laundry', 8.207093259529858, 124.24514916785036, 'marker.svg',
    70,
    100, content5,],
		['Lavatronic', 8.242499020144722, 124.2484887390151, 'marker.svg',
    70,
    100, content6,],
		[
			"Robin's Laundry room",
			8.227587474943412, 124.25149871919737,
      'marker.svg',
		  70,
			100,
      content7,
		],
		[
			'LaundryHub',
			8.232433996546963, 124.23731300862738,
      'marker.svg',
		  70,
			100,
      content8,
		],
		[
			'Iligan Express Laundry',
			8.227614104539963, 124.2481637966857,
      'marker.svg',
		  70,
			100,
      content9,
		],
    [
			'Tia Lavandera',
			8.232651754841777, 124.23751752719664,
      'marker.svg',
		  70,
			100,
      content10,
		],
	];

	for (let i = 0; i < markers.length; i++) {
		const currMarker = markers[i];

		const marker = new google.maps.Marker({
			position: { lat: currMarker[1], lng: currMarker[2] },
			map,
			title: currMarker[0],
			icon: {
				url: currMarker[3],
				scaledSize: new google.maps.Size(currMarker[4], currMarker[5]),
			},
			animation: google.maps.Animation.DROP,
		});

		const infowindow = new google.maps.InfoWindow({
			content: currMarker[6],
		});

		marker.addListener('mouseover', () => {
    infowindow.open(map, marker);
		});


    marker.addListener('mouseout', () => {
      zx=5000;
          setTimeout(function(){infowindow.close(map, marker);},zx);
        });

    infowindow.addListener('mouseover', () => {
      zx=5000;
          setTimeout(function(){infowindow.open(map, marker);},zx);
        });

        infowindow.addListener('mouseout', () => {
          infowindow.close(map, marker);
            });


    marker.addListener('click', () => {
    			infowindow.open(map, marker);

    		});



	}
}
///////////////////////////////////


//marker.addListener(marker,'mouseover',function() { ...
//mouseoverTimeoutId =
//setTimeout(function() { ...Do your normal InfoWindow opening here }, 1000 );
//});


//marker.addListener(marker,'mouseout',function(){ ...

//if(mouseoverTimeoutId)
//{ clearTimeout(mouseoverTimeoutId); mouseoverTimeoutId = null; }
//});

//////////////////////////////////////////////////////////////////////////
!(function($) {
  "use strict";

  // Smooth scroll for the navigation menu and links with .scrollto classes
  $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      e.preventDefault();
      var target = $(this.hash);
      if (target.length) {

        var scrollto = target.offset().top;

        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Mobile Navigation
  if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({
      class: 'mobile-nav d-lg-none'
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
    $('body').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      $('.mobile-nav-overly').toggle();
    });

    $(document).on('click', '.mobile-nav .drop-down > a', function(e) {
      e.preventDefault();
      $(this).next().slideToggle(300);
      $(this).parent().toggleClass('active');
    });

    $(document).click(function(e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  // Porfolio isotope and filter
  $(window).on('load', function() {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function() {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
    });

    // Initiate venobox (lightbox feature used in portofilo)
    $(document).ready(function() {
      $('.venobox').venobox();
    });
  });

  // Initi AOS
  AOS.init({
    duration: 800,
    easing: "ease-in-out"
  });

})(jQuery);
