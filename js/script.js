;(function(){
  "use strict";

    $("#mynav ul li> a").on('click', function(){
        $(this).next('ul').slideToggle(500);
        })


  //  switcher

  $("#hideSwitcher, #showSwitcher").click(function () {

    if ($("#showSwitcher").is(":visible")) {

  var show = "#showSwitcher";
        jQuery("#switcher").animate({"margin-left": "0px"}, 500).show();
  createCookie("switcher_visible", 'true', 365);

        } else {

  var show = "#switcher";
        $("#showSwitcher").show().animate({"margin-left": "0"}, 500);
  createCookie("switcher_visible", 'false', 365);

    }

$(show).animate({"margin-left": "-500px"}, 500, function () {
  $(this).hide();
});

});
function createCookie(name,value,days) {
  var expires = "";
  if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days*24*60*60*1000));
      expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
var switcher_visible = 'false';
	if(switcher_visible != 'false') {
		jQuery("#showSwitcher").trigger('click');
	}


  var orange = true;
  var green = false;
  var blue = false;
  $('#orange-css').on('click',function(){
    orange = true;
    green = false;
      blue = false;
    setActiveStyleSheet('orange'); 
    $("#logo").attr('src','images/logo-dark.png');
    $("#mobile-logo").attr('src','images/logo-dark.png');
    if($('#is_light').is(':checked')){
      $("#logo").attr('src','images/logo-white.png');
    }
    // feature icon
    $("#download-bitcoin").attr('src','images/download-bitcoin.png');
    $("#add-bitcoins").attr('src','images/add-bitcoins.png');
    $("#buy-sell-bitcoins").attr('src','images/buy-sell-bitcoins.png');
    // about iamge
    $("#about-us").attr('src','images/about-us.png');
    // iamge-block feature 
    $("#strong-security").attr('src','images/strong-security.png');
    $("#world-coverage").attr('src','images/world-coverage.png');
    $("#payment-options").attr('src','images/payment-options.png');
    $("#mobile-app").attr('src','images/mobile-app.png');
    $("#cost-efficiency").attr('src','images/cost-efficiency.png');
    $("#high-liquidity").attr('src','images/high-liquidity.png');
  });


  $('#green-css').on('click',function(){
    orange = false;
    green = true;
    blue = false;
    setActiveStyleSheet('green'); 
   $("#logo").attr('src','images/green-dark.png');
   $("#mobile-logo").attr('src','images/green-dark.png');
   if($('#is_light').is(':checked')){
    $("#logo").attr('src','images/green-white.png');
  }
   // feature icon
   $("#download-bitcoin").attr('src','images/download-bitcoin (1).png');
   $("#add-bitcoins").attr('src','images/add-bitcoins (1).png');
   $("#buy-sell-bitcoins").attr('src','images/buy-sell-bitcoins (1).png');
    // about iamge
    $("#about-us").attr('src','images/about-us-green.png');
    // iamge-block feature 
    $("#strong-security").attr('src','images/strong-security (1).png');
    $("#world-coverage").attr('src','images/world-coverage (1).png');
    $("#payment-options").attr('src','images/payment-options (1).png');
    $("#mobile-app").attr('src','images/mobile-app (1).png');
    $("#cost-efficiency").attr('src','images/cost-efficiency (1).png');
    $("#high-liquidity").attr('src','images/high-liquidity (1).png');
  });


  $('#blue-css').on('click',function(){
    orange = false;
    green = false;
    blue = true;
    setActiveStyleSheet('blue'); 
    $("#logo").attr('src','images/blue-dark.png');
    $("#mobile-logo").attr('src','images/blue-dark.png');
    if($('#is_light').is(':checked')){
      $("#logo").attr('src','images/blue-white.png');
    }
     // feature icon
   $("#download-bitcoin").attr('src','images/download-bitcoin (2).png');
   $("#add-bitcoins").attr('src','images/add-bitcoins (2).png');
   $("#buy-sell-bitcoins").attr('src','images/buy-sell-bitcoins (2).png');
    // about iamge
    $("#about-us").attr('src','images/about-us-blue.png');
    // iamge-block feature 
    $("#strong-security").attr('src','images/strong-security (2).png');
    $("#world-coverage").attr('src','images/world-coverage (2).png');
    $("#payment-options").attr('src','images/payment-options (2).png');
    $("#mobile-app").attr('src','images/mobile-app (2).png');
    $("#cost-efficiency").attr('src','images/cost-efficiency (2).png');
    $("#high-liquidity").attr('src','images/high-liquidity (2).png');
  });

  function setActiveStyleSheet(title) {
    var i, a, main;
    for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
      if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title")) {
        a.disabled = true;
        if(a.getAttribute("title") == title) a.disabled = false;
      }
    }
  }

  // body screen

 $("#is_dark").on('click',function(){
   $('body').removeClass('light');
   $('body').addClass('dark');
   $('.chart-1').css('opacity','1'); 
		 $('.chart-1').css('z-index','1'); 
		 $('.chart-2').css('opacity','1');
		$('.chart-2').css('z-index','-1');	
		$('.chart-2').css('height','0');
		$('.chart-1').css('height','auto');	
		$('.chart-2').css('margin','0');
		$('.chart-1').css('margin','70px 0');	
 })
 $("#is_light").on('click',function(){
   $('body').removeClass('dark');
   $('body').addClass('light');
   $('.chart-2').css('opacity','1');
   $('.chart-1').css('opacity','0'); 
		 $('.chart-2').css('z-index','1');
		 $('.chart-1').css('z-index','-1');
		 $('.chart-1').css('height','0');	
		 $('.chart-2').css('height','auto');	
			$('.chart-1').css('margin','0');
			$('.chart-2').css('margin','70px 0');
   if(orange == true){
     $("#logo").attr('src','images/logo-white.png');
   }else if(green == true){
    $("#logo").attr('src','images/green-white.png');
   }else{
    $("#logo").attr('src','images/blue-white.png');
   }
   
 })

// layout
$("#is_wide").on('click',function(){
  $('body').removeClass('boxed');
  $('body').addClass('wide');
})
$("#is_boxed").on('click',function(){
  $('body').removeClass('wide');
  $('body').addClass('boxed');
})

// baner slider
$('#baner').slick({
  fade:true,
  prevArrow:'<i class="fas fa-chevron-left b-left"></i>',
  nextArrow:'<i class="fas fa-chevron-right b-right"></i>',
  autoplaySpeed : 5000,
  autoplay:true,
  speed:1000,
});

/* ----------------------------------------------------------- */
		/*  VIDEO POP UP
		/* ----------------------------------------------------------- */
		jQuery(".mfp-youtube").magnificPopup({
			type: "iframe",
			mainClass: "mfp-fade",
			removalDelay: 0,
			preloader: false,
			fixedContentPos: false,
			iframe: {
				patterns: {
					youtube: {
						src: "https://youtube.com/embed/%id%?autoplay=1&rel=0"
					},
				}
			}
		});



    // pricing part js
    $('#buy').on('click',function(){
     $('.switcher').addClass('in');
     $('.switcher').removeClass('on');
     $('.pricing-list .pricing-wrapper #buy').addClass('is-visible').removeClass('is-hidden');
     $('.pricing-list .pricing-wrapper  #sell').addClass('is-hidden').removeClass('is-visible');
    })
    $('#sell').on('click',function(){
     $('.switcher').addClass('on');
     $('.switcher').removeClass('in');
     $('.pricing-list .pricing-wrapper  #sell').addClass('is-visible').removeClass('is-hidden');
     $('.pricing-list .pricing-wrapper #buy').addClass('is-hidden').removeClass('is-visible');
    })


})( jQuery);


