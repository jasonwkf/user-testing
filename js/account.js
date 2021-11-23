 $(document).ready(function () {


  getPaymentWidth();
  getSubWidth();

  var slider = document.querySelector('#sub-preview');
  var isDown = false;
  var startX;
  var scrollLeft;

  $('#sub-preview').mousedown(function(e){
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });

  $('#sub-preview').mouseleave(function(e){
    isDown = false;
    slider.classList.remove('active');
  });

  $('#sub-preview').mouseup(function(e){
    isDown = false;
    slider.classList.remove('active');
  });

  $('#sub-preview').mousemove(function(e){
    if(!isDown) return;
    e.preventDefault();
    var x = e.pageX - slider.offsetLeft;
    var walk = (x - startX) * 3; //scroll-fast
    slider.scrollLeft = scrollLeft - walk;
    console.log(walk);
  });


  $('.border-side .th-label').click(function(){

   var par =  $(this).parent();

   console.log(par);
   par.children('.complex-tbl').fadeToggle(300);

  });


  $('#sub-preview').scroll(function(){
    var sl = $(this).scrollLeft ;
    console.log( sl);
  });

  $('.mobile-toggle').click(function () {
    if(!$('#order-sum-right').hasClass('active')){
      $('.mobile-toggle h2').text('Close');
      $('#order-sum-right').addClass('active');
      lockScroll();
    }else{
       $('#order-sum-right').removeClass('active');
       $('.mobile-toggle h2').text('Order Summery');
      unlockScroll();
    }
  });



  $('.edit-prompt').click(function(){
    var forID = $(this).attr('for');

    if($("#"+ forID).css('display') == 'none'){

      $("tr.edit").hide();
      $("#"+ forID).fadeIn(400);
    }else {

      $("#"+ forID).fadeOut(400);
    }

  });



  $('.tab-header ul li').click(function(){
    var getID = $(this).attr('id');

    var forID = $(this).attr('for');

    console.log('hello');
    if (!$(this).hasClass('active')) {
      $('.tab-header li').removeClass('active');
      $("#"+ getID).addClass('active');

      $('.tab-option-body').hide();
      $('.tab-option-body').removeClass('active');
      $("#"+ forID).fadeIn(300);
      $("#"+ forID).addClass('active');
    }

  });


  $('.form-element-payment input:radio').click(function(){
    $('html, body').animate({ scrollTop: $('#csi').offset().top - 150 }, 'fast');
  });


  function getPaymentWidth() {
    var getWidth = 0;
    var buffer = $(".form-element-payment").css('marginRight');

    $('.form-element-payment  ').each(function() {

      getWidth = getWidth + ($(this).outerWidth() + parseInt(buffer)) ;
    });

    $('.payment-wrapper').width(getWidth);
  }


 function getSubWidth() {
    var getWidth = 0;

    if ($(".single-sub").length > 0) {

    var buffer = $(".single-sub").css('marginRight');

    $('.single-sub').each(function() {
      getWidth = getWidth + ($(this).outerWidth() + parseInt(buffer)) ;
    });

    $('.sub-wrapper').width(getWidth);
    }
  }


$('button.cancel').click(function(e){
  console.log('hello');
  e.preventDefault();
  window.history.back();

  });


  $('a.remove').click(function() {

    console.log('in');
    var cos = $(this).attr('for');
    $('.lightbox-overlay').fadeIn(300);
    $('#' + cos).addClass('show');

  });


  $('#proceed-cancel').click(function(e) {
      e.preventDefault();

      var getID = $(this).attr('for');

      $('#' + getID).removeClass('show');
      $('.lightbox-overlay').fadeOut(300);

      unlockScroll();
  });


  $('button.update-comm').click(function(e) {


    e.preventDefault();
    console.log('in');
    var lightboxid = $(this).attr('for');

    $('.lightbox-overlay').fadeIn(300);
    $('#' + lightboxid).addClass('show');




  });

  $('#proceed-comm').click(function(e) {
    e.preventDefault();

    var getID = $(this).attr('for');

    window.location = getID;

    unlockScroll();
});

  $('button.signout').click(function() {

    console.log('in');
    var lightboxid = $(this).attr('for');

    $('.lightbox-overlay').fadeIn(300);
    $('#' + lightboxid).addClass('show');

  });


  $('button.signoutall').click(function() {

    console.log('in');
    var lightboxid = $(this).attr('for');

    $('.lightbox-overlay').fadeIn(300);
    $('#' + lightboxid).addClass('show');

  });

  function getUrlParameter (name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  }

  var getUrlParam = getUrlParameter('redirect');
  switch(getUrlParam) {
    case 'www.straitstimes.com':
      $('.back-to-pub-container-desktop').css('display', 'flex');
      break;
    case 'www.zaobao.com.sg':
      $('.back-to-pub-container-desktop').css('display', 'flex');
      $('.pub-logo').attr('src', './images/logos/zb-mini.png');
      break;
    default:
      console.log('i am nothing');
  }
 });