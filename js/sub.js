var index_xs=0;
var index_s=0;
var index_m=0;
var index_l=0;
var colors = ["gr", "ls"];



$(document).ready(function() {
$(".dropdown-button").dropdown();
	$('.carousel.carousel-slider').carousel({fullWidth: true});
        
	
    $('.button-collapse').sideNav({
        menuWidth: 200, // Default is 300
        edge: 'left', // Choose the horizontal origin
        closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
        draggable: true // Choose whether you can drag to open on touch screens
        }
    );
	
	$(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal1').modal({opacity:0.9});
		$('.modalabout').modal({opacity:0});
		$('.modalterms').modal({opacity:0});
		$('.modal').modal();
		$('select').material_select();
		$("select").closest('.input-field').children('.select-wrapper').children("span").html("");

		$('select').formSelect();
		$('.picker').appendTo('body');
		$('#sizeDiv').hide();
	$('#colorDiv').hide();
	$('#colorgrillDiv').hide();
	$('#serialDiv').hide();
		$('#type').show();
		
		
  });
	


	
$('.datepicker').pickadate({
  
selectMonths: true,// Creates a dropdown to control month
  selectYears: 15 // Creates a dropdown of 15 years to control year,
});
	


	
	
	
//$('a[href^="#pick"]').on('click', function (event) {
//	var pickcolor = $(this.getAttribute('href'));
//	alert(pickcolor);
//});

    $('.carousel.carousel-slider').carousel({fullWidth: true});
	
	$(document).ready(function(){
		$('.slider').slider({height:768, interval:60000, transition:600});
		
    });

	$(document).ready(function(){
    $('.materialboxed').materialbox();
  });

      $('.parallax').parallax();

    // Scoll animation
    $('a[href^="#"]').on('click', function (event) {
        var target = $(this.getAttribute('href'));
   
		if (target.length && !(event.currentTarget.classList[0] === 'event')) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 700);
        } else if (event.currentTarget.classList[0] === 'event' && !($('.event-wrapper').css('flex-direction') === 'row') && event.currentTarget.classList[1] === 'active') {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        } else {
            event.preventDefault();
        }
    });
});


// undress
$('#clicker_xs').on('click', function() {
    if ($('#cover_xs').css('opacity') == 0) $('#cover_xs').css('opacity', 1);
    else $('#cover_xs').css('opacity', 0);
});

$('#clicker_s').on('click', function() {
    if ($('#cover_s').css('opacity') == 0) $('#cover_s').css('opacity', 1);
    else $('#cover_s').css('opacity', 0);
});

$('#clicker_m').on('click', function() {
    if ($('#cover_m').css('opacity') == 0) $('#cover_m').css('opacity', 1);
    else $('#cover_m').css('opacity', 0);
});

$('#clicker_l').on('click', function() {
    if ($('#cover_l').css('opacity') == 0) $('#cover_l').css('opacity', 1);
    else $('#cover_l').css('opacity', 0);
});


//colorpicker



$('#clicker_color_xs').on('click', function() {
		
	index_xs = index_xs + 1;
	
  if (index_xs == colors.length) {
     index_xs = 0;
  }
	
$('#cover_xs').attr('src','img/img/variations/xs_'+colors[index_xs]+'_cover.png');
$('#naked_xs').attr('src','img/img/variations/xs_'+colors[index_xs]+'_naked.png');
			    return false;
});


$('#clicker_color_s').on('click', function() {
		
	index_s = index_s + 1;
	
  if (index_s == colors.length) {
     index_s = 0;
  }
	
$('#cover_s').attr('src','img/img/variations/s_'+colors[index_s]+'_cover.png');
$('#naked_s').attr('src','img/img/variations/s_'+colors[index_s]+'_naked.png');
			    return false;
});



$('#clicker_color_m').on('click', function() {
		
	index_m = index_m + 1;
	
  if (index_m == colors.length) {
     index_m = 0;
  }
	
$('#cover_m').attr('src','img/img/variations/m_'+colors[index_m]+'_cover.png');
$('#naked_m').attr('src','img/img/variations/m_'+colors[index_m]+'_naked.png');
			    return false;
});



$('#clicker_color_l').on('click', function() {
		
	index_l = index_l + 1;
	
  if (index_l == colors.length) {
     index_l = 0;
  }
	
$('#cover_l').attr('src','img/img/variations/l_'+colors[index_l]+'_cover.png');
$('#naked_l').attr('src','img/img/variations/l_'+colors[index_l]+'_naked.png');
			    return false;
});


var options = [
    {selector: '.appear', offset: 200, callback: function(el) { Materialize.fadeInImage($(el)); } },
    
  ];
  Materialize.scrollFire(options);



// HIDE FORMS
$("#type").change(function() {

	  
	
	
  if ($(this).val() == "LQ-GHS102-CA-0") {
    $('#serialDiv').show();
	$('#colorDiv').show();
	  $('#colorgrillDiv').hide();
	  $('#sizeDiv').hide();
	
    
  }
});
$("#type").trigger("change");



$("#type").change(function() {
  if ($(this).val() == "LQ-GHS102-TH-") {
    $('#sizeDiv').show();
	$('#colorDiv').show();
	$('#colorgrillDiv').hide();
	$('#serialDiv').hide();
    
  }
});
$("#type").trigger("change");


$("#type").change(function() {
  if ($(this).val() == "LQ-GHS102-GR-0") {
    	$('#serialDiv').hide();
	$('#colorDiv').hide();
	  $('#colorgrillDiv').show();
	  $('#sizeDiv').hide();
    
  } 
});
$("#type").trigger("change");







