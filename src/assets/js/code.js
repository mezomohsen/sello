$('.filters ul li').click(function(){
  $('.filters ul li').removeClass('active');
  $(this).addClass('active');
  
  var data = $(this).attr('data-filter');
  $grid.isotope({
    filter: data
  })
});

var $grid = $(".grid").isotope({
  itemSelector: ".all",
  percentPosition: true,
  masonry: {
    columnWidth: ".all"
  }
});

$('.lnk-product .fa-heart').click(function(){
  $(this).toggleClass('fas');
  $(this).toggleClass('liked');
});

$('.btn-carts').click(function(){
  $('.part-cart').css("right" , "0");
  $('.over-body').toggle();
//  $('.media').fadeToggle(500);
    
});

$('.close-cart').click(function(){
  $('.part-cart').css("right" , "-300px");
  $('.over-body').toggle();
});
$('.over-body').click(function(){
  $('.part-cart').css("right" , "-300px");
  $('.over-body').toggle();
});


$('.navbar .collapse .hv-down').mouseenter(function(){
    $('.hov-navlink').css("display" , "block");
});
$('.hov-navlink').mouseenter(function(){
    $('.hov-navlink').css("display" , "block");
});
$('.navbar .collapse .hv-down').mouseleave(function(){
    $('.hov-navlink').css("display" , "none");
});
$('.hov-navlink').mouseleave(function(){
    $('.hov-navlink').css("display" , "none");
});



$('.owl-carousel').owlCarousel({
    loop:true,
    nav:false,
    lazyLoad:true,
    autoplayTimeout:1500,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        500:{
            items:5
        },
        1000:{
            items:8
        }
    }
})