// start of renewal js
// `

// Runtime
$(document).ready(function () {
  console.log('renewal loaded');  

  if($('.in-lightbox.show').length > 0){ 
  $('.lightbox-overlay').fadeIn(300);
  }
   

  $("#view-opts").click(function(e) {

    e.preventDefault();
    
    var urlD = $(this).attr('data-url');


    console.log(urlD);
    window.location =  urlD;
  });

  getSubWidth();

 
  if($('.comp-country-code').length > 0) {
    genCountryCode();

  console.log('run in here genCountryCode');
    }

  $('#personal-first-name').focusout(function () {
    checkPairEmpty($(this).attr('id'), "personal-name");
  });

  $('#personal-last-name').focusout(function () {
    if(checkPairEmpty($(this).attr('id'), "personal-name")){

      $(".reminder").fadeOut(300);
    }
  });

  $("#personal-email").focusout(function () {
   if (checkEmptyField($(this).attr('id'))) {
       checkEmailField($(this).attr('id'));
   }
 });

  $('#contact-no').focusout(function () {
    if (checkEmptyField($(this).attr('id'))) { 
      if (checkNumericFieldSolo($(this).attr('id'))) {

        if (checkLength($(this).attr('id'), 8, 10, 'mobile number')) {
           checkSGMobile($(this).attr('id'));
        }
      }
    }
  });

  $(".checkout-ele").focusout(function (e) {
    e.preventDefault();
    checkForErrors();
  });


  function checkForErrors() {
    var errNo = 0;

    $(".checkout-ele").each(function () {
      errNo += parseInt($(this).attr('data-err'));

      if ($(this).attr('data-err') == 1) {

        console.log("there might be err on:" + $(this).attr('id'));
      }
    });
    console.log("total Errors:" + errNo);

    if (errNo <= 0) {
      $('#checkout-renewal-btn').prop("disabled", false); 
    } else {
      $('#checkout-renewal-btn').prop("disabled", true); 
    }
  }


  $('#checkout-renewal-btn').click(function (e) {
    e.preventDefault();
     window.location = 'renewal-register-confirm.html';
   });



  $('.info-toggle').hover(function(){ 
 
    var id =  $(this).attr('for');
     
    $("#" + id).fadeIn(300);
 

  }, function(){

    $(".info-box").fadeOut(50);

  });
});

function getSubWidth() {
  var getWidth = 0;

  if ($(".rp-wrapper").length > 0) {

  var buffer = $(".form-element.renewal label").css('marginRight'); 

  console.log(buffer);

  $('.form-element.renewal label').each(function() { 
    getWidth = getWidth + ($(this).outerWidth() + parseInt(buffer)) ;

    console.log(getWidth);
  });

  $('.rp-wrapper').width(getWidth);

  $('.rp-wrapper .form-element').css({'display': 'flex'});
  }
}
