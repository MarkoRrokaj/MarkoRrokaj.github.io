
/*-----------------------------------------------------------*/
/*01. PICS MOSAIC ------------------*/
/*-----------------------------------------------------------*/

$('#all').click(function() {
    $('._pictures1-01').hide();
    $('._pictures1-02').hide();
    $('._pictures1-03').hide();
    $('._pictures1-04').hide();
    $('._pictures1-05').hide();
    $('._pictures1-06').hide();
    $('._pictures1-07').hide();
    $('._pictures1-08').hide();
    $('._pictures1-09').hide();
    $('._pictures1-10').hide();
    $('.image-grid').fadeIn(1500);
});


$('#port').click(function() { 
    $('._pictures1-01').hide();
    $('._pictures1-02').hide();
    $('._pictures1-03').hide();
    $('._pictures1-04').hide();
    $('._pictures1-05').hide();
    $('._pictures1-06').hide();
    $('._pictures1-07').hide();
    $('._pictures1-08').hide();
    $('._pictures1-09').hide();
    $('._pictures1-10').hide();
    $('._pictures1-03').fadeIn(1500);
    $('._pictures1-08').fadeIn(1500);
    $('._pictures1-10').fadeIn(1500);
});

$('#fash').click(function() {  
    $('._pictures1-01').hide();
    $('._pictures1-02').hide();
    $('._pictures1-03').hide();
    $('._pictures1-04').hide();
    $('._pictures1-05').hide();
    $('._pictures1-06').hide();
    $('._pictures1-07').hide();
    $('._pictures1-08').hide();
    $('._pictures1-09').hide();
    $('._pictures1-10').hide();
    $('._pictures1-04').fadeIn(1500);
    $('._pictures1-06').fadeIn(1500);
    $('._pictures1-07').fadeIn(1500);
    $('._pictures1-09').fadeIn(1500);
});

$('#str').click(function() {   
    $('._pictures1-01').hide();
    $('._pictures1-02').hide();
    $('._pictures1-03').hide();
    $('._pictures1-04').hide();
    $('._pictures1-05').hide();
    $('._pictures1-06').hide();
    $('._pictures1-07').hide();
    $('._pictures1-08').hide();
    $('._pictures1-09').hide();
    $('._pictures1-10').hide();
    $('._pictures1-01').fadeIn(1500);
    $('._pictures1-02').fadeIn(1500);
    $('._pictures1-05').fadeIn(1500);
});



$('.lazy').slick({
  lazyLoad: 'ondemand',
  slidesToShow: 7,
  slidesToScroll: 1,
});




