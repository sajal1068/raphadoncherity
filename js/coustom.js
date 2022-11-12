// JavaScript Document


$(document).ready(function () {

	var owl = $("#slider-caststudy");
	owl.owlCarousel({
		items: 1, //10 items above 1000px browser width
		itemsMobile: false, // itemsMobile disabled - inherit from itemsTablet option
		navigation: true,
		dots: false,
		autoplay: true,
		nav: true,
		autoplayTimeout: 2000,
		autoplayHoverPause: true,
		lazyLoad: true,
		loop: true,
		responsive: {
			0: {
				items: 1
			},
			667: {
				items: 1
			},
			768: {
				items: 2
			},
			1000: {
				items: 3
			}
		}

	});
	
	var owl = $("#vs-slider");
	owl.owlCarousel({
		items: 1, //10 items above 1000px browser width
		itemsMobile: false, // itemsMobile disabled - inherit from itemsTablet option
		navigation: true,
		dots: false,
		autoplay: true,
		nav: true,
		autoplayTimeout: 2000,
		autoplayHoverPause: true,
		lazyLoad: true,
		loop: true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 2
			},
			1000: {
				items: 2
			}
		}

	});
	
	var owl = $("#smlier-slider");
	owl.owlCarousel({
		items: 1, //10 items above 1000px browser width
		itemsMobile: false, // itemsMobile disabled - inherit from itemsTablet option
		navigation: true,
		dots: false,
		autoplay: true,
		nav: true,
		autoplayTimeout: 2000,
		autoplayHoverPause: true,
		lazyLoad: true,
		loop: true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1
			},
			1000: {
				items: 1
			}
		}

	});

});

// menu js

function openNav() {
	document.getElementById("myNav").style.width = "100%";
  }
  
  function closeNav() {
	document.getElementById("myNav").style.width = "0%";
  }


$(document).ready(function() {
	$("#sidebarCollapse").on("click", function() {
	  $("#sidebar").toggleClass("active");
	  $("body").toggleClass("activebody");
	  $(this).toggleClass("active");
	});
	$("#menuClose").on("click", function() {
		$("#sidebar").removeClass("active");
		$("body").removeClass("activebody");
	});
 });
  

$(document).ready(function(){
  $("#chck-ind").click(function(){
    $("#date-divb").show();
	$("#qu-sec").hide();
  });
  $("#chck-ind2").click(function(){
    $("#date-divb").show();
	$("#qu-sec").hide();
  });
});

$(document).ready(function(){
  $("#qn-bn").click(function(){
    $("#qu-sec").show();
	$("#date-divb").hide();
  });
  $("#chck-ind2").click(function(){
    $("#date-divb").show();
  });
  $("body").click(function(){
    $("#qu-sec").hide();
  });
  $('.search-sec-div2').click(function(event){
	   event.stopPropagation();
  });
   
});

$(document).ready(function(){
  $(".sp-input").click(function(){
    $("#qu-sec").hide();
	$("#date-divb").hide();
  });
});

$(document).ready(function(){
  $("body").click(function(){
    $("#date-divb").hide();
  });
  $('.search-sec-div2').click(function(event){
	   event.stopPropagation();
  });
  
   
});

$(document).ready(function(){
  $('.search-sec-div2 ul li').click(function(){
    $('ul li').removeClass("active1");
    $(this).addClass("active1");
});
  $("body").click(function(){
    $('ul li').removeClass("active1");
  });
  $('.search-sec-div2').click(function(event){
	   event.stopPropagation();
  });
});
$(document).ready(function(){
  $('.search-sec-div2 ul li').click(function(){
    $('.search-sec-div2').addClass("search-sec-div2-bg");
  });
});
$(document).ready(function(){
  $('.search-sec-div2 ul li').click(function(){
    $('.serach-bn-1').addClass("search-sec-div2-bg1");
	 $('body').click(function() {
      $('.serach-bn-1').removeClass("search-sec-div2-bg1");
     });
	 $('.search-sec-div2 ul li').click(function(event){
	   event.stopPropagation();
	  });
  });
});

$(document).ready(function(){
  $(".comon-hover").click(function(){
    $("#search-text").show();
  });
   $('body').click(function() {
   $('#search-text').hide();
  });
 
});
$(document).ready(function(){
  $("#chck-ind").click(function(){
    $("#search-text").show();
  });
   $('body').click(function() {
   $('#search-text').hide();
  });
  
});

$(document).ready(function(){
  $("#chck-ind-n").click(function(){
    $("#search-text").show();
  });
   $('body').click(function() {
   $('#search-text').hide();
  });
  
});

$(document).ready(function(){
  $("#chck-ind-n").click(function(){
    $("#date-divb-n").show();
  });
   $('body').click(function() {
   $('#date-divb-n').hide();
  });
  
});

$(document).ready(function(){
  $("#chck-ind2").click(function(){
    $("#search-text").show();
  });
   $('body').click(function() {
   $('#search-text').hide();
  });
  
});

$(document).ready(function(){
  $(".td1").click(function(){
    $("#search-text").show();
  });
   $('body').click(function() {
   $('#search-text').hide();
  });
  
});

$(document).ready(function(){
  $("#ser-show-bn").click(function(){
     $(".tab-explore-d2").removeClass("newClass2");
	 $(".top-head2-sec2").addClass("newClass3");
	 $('#ser-show-bn').hide();
  });
});




$(document).ready(function(){
  $(window).scroll(function(){
	  if ($(this).scrollTop() > 50) {
		 $('header').addClass('newClass');
		 $('#ser-show-bn').show();
	  } else {
		 $('header').removeClass('newClass');
		 $('#ser-show-bn').hide();
		 
	  }
	  
  });
   $(window).scroll(function(){
	  if ($(this).scrollTop() > 50) {
		 $('.tab-explore-d2').addClass('newClass2');
		 $('.top-head2-sec2').removeClass('newClass3');
		 
	  } else {
		 $('.tab-explore-d2').removeClass('newClass2');
		 
	  }
  });
});




// ------------list-------------
$(document).ready(function () {
	var items = $(".list-wrapper .list-item");
		var numItems = items.length;
		var perPage = 8;
	
		items.slice(perPage).hide();
	
		$('#pagination-container').pagination({
			items: numItems,
			itemsOnPage: perPage,
			prevText: "&laquo;",
			nextText: "&raquo;",
			onPageClick: function (pageNumber) {
				var showFrom = perPage * (pageNumber - 1);
				var showTo = showFrom + perPage;
				items.hide().slice(showFrom, showTo).fadeIn(700);
			}
		});
		
});

$(function () {
  $("#datepicker").datepicker({ 
        autoclose: true, 
        todayHighlight: true
  }).datepicker('update', new Date());
});


$(document).ready(function(){
  $("#list").click(function(){
    $(".list-wrapper .row").addClass("list-view-filter");
	$(".list-wrapper .row").removeClass("grid-view-filter");
  });
});
$(document).ready(function(){
  $("#grid").click(function(){
    $(".list-wrapper .row").removeClass("list-view-filter");
	$(".list-wrapper .row").addClass("grid-view-filter");
  });
});


$(document).ready(function(){
  $("#customRadioInline1").click(function(){
    $("#debit-pay").show(1000);
	$("#ne-banking").hide(1000);
  });
  $("#customRadioInline2").click(function(){
    $("#ne-banking").show(1000);
	$("#debit-pay").hide(1000);
  });
});


$(document).ready(function () {
	var items = $(".list-wrapper .list-item");
		var numItems = items.length;
		var perPage = 8;
	
		items.slice(perPage).hide();
	
		$('#pagination-container2').pagination({
			items: numItems,
			itemsOnPage: perPage,
			prevText: "&laquo;",
			nextText: "&raquo;",
			onPageClick: function (pageNumber) {
				var showFrom = perPage * (pageNumber - 1);
				var showTo = showFrom + perPage;
				items.hide().slice(showFrom, showTo).fadeIn(700);
			}
		});
		
});