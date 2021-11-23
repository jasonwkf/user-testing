if ($('.comp-country-code').length > 0) {
  genCountryCode();

    console.log('run in here genCountryCode');
  }

 $(document).ready(function () {

   //initializing form
   checkForErrors();
   $("#delivery-country").select2({
     // matcher: matchStart,
     containerCssClass: ".adv-select"
   });


   $("#billing-country").select2({
     // matcher: matchStart,
     containerCssClass: ".adv-select"

   });

   $("#name-reminder").delay(2000).fadeIn(300);
   $(".helper-box-overlay").delay(2000).fadeIn(300);

   $(".helper-box-overlay").click(function(){
    $("#name-reminder").fadeOut(300);
   });

   $("#personal-first-name").focusin(function(){
    $("#name-reminder").fadeIn(300);
    $(".helper-box-overlay").fadeIn(300);
   });

   $("#personal-last-name").focusin(function(){
    $("#name-reminder").fadeIn(300);
    $(".helper-box-overlay").fadeIn(300);
   });


   $('.order-header.dropdown').click(function () {
    if ($(window).width() < 450) {
      $('.order-container').fadeToggle(300);
    }
  });

  $(".novalidate").change(function() {
    if ($(this).val != '' ) {

      $(this).addClass('valid');
    }else {
      $(this).removeClass('valid');
    }
  });

   $('#billing-country').change(function () {

     var val = $(this).val();

     switch (val) {
       case 'Singapore':
         $('.foreign').hide();
         $('.local').fadeIn(300);
         $('.local').css('display', 'flex');
         $('.local input').attr('data-err', '1');
         $('.foreign input').attr('data-err', '0');
         break;

       case 'United States':
         $('.foreign').css('display', 'flex');
         $('.foreign.cir1').css('display', 'flex');
         $('.local').hide();
         $('.local input').attr('data-err', '0');
         $('.foreign input').attr('data-err', '1');
         $('.cir1 input').attr('data-err', '1');

         break;

       case 'Canada':
         $('.foreign').css('display', 'flex');
         $('.foreign.cir1').css('display', 'flex');
         $('.local').hide();
         $('.local input').attr('data-err', '0');
         $('.foreign input').attr('data-err', '1');
         $('.cir1 input').attr('data-err', '1');
         break;

       default:
         $('.foreign').css('display', 'flex');
         $('.foreign.cir1').hide();
         $('.local').hide();
         $('.local input').attr('data-err', '0');
         $('.foreign input').attr('data-err', '1');
         $('.cir1 input').attr('data-err', '0');
         break;
     }
   });

   //Checking Delivery

   $('#delivery-pos-code').change(function () {
     getMailingAddr($(this).val(), $(this).attr('id'), $(this).attr('fill'));
   });
   $('#delivery-pos-code').focusout(function () {
     checkEmptyField($(this).attr('id'));

   });

   $('#delivery-block').focusout(function () {
     checkEmptyField($(this).attr('id'));
   });
   $('#delivery-first-name').focusout(function () {
     checkPairEmpty($(this).attr('id'), "delivery-name");

   });

   $('#delivery-last-name').focusout(function () {
     checkPairEmpty($(this).attr('id'), "delivery-name");

   });

   $('#delivery-address').focusout(function () {
     checkEmptyField($(this).attr('id'));
   });

   $('#delivery-floor').focusout(function () {
     if (!checkPairEmpty($(this).attr('id'), "delivery-house")) {
       checkPairNumeric($(this).attr('id'), "delivery-house");
     }

   });

   $('#delivery-unit').focusout(function () {
     if (!checkPairEmpty($(this).attr('id'), "delivery-house")) {
       checkPairNumeric($(this).attr('id'), "delivery-house");
     }
   });

   $('#copyBilling').change(function () {

     if ($(this).prop('checked')) {
      $('#delivery-first-name').val($('#personal-first-name').val());
      $('#delivery-last-name').val($('#personal-last-name').val());
      $('#delivery-contact-no').val($('#contact-no').val());
      $('#delivery-country').val($('#billing-country').val());
       $('#delivery-pos-code').val($('#billing-pos-code').val());
       $('#delivery-block').val($('#billing-block').val());
       $('#delivery-address').val($('#billing-address').val());
       $('#delivery-address').addClass('valid');
       $('#delivery-floor').val($('#billing-floor').val());
       $('#delivery-unit').val($('#billing-unit').val());
       $('#delivery-first-name').attr('data-err', 0);
      $('#delivery-last-name').attr('data-err', 0);
      $('#delivery-contact-no').attr('data-err', 0);
       $('#delivery-pos-code').attr('data-err', 0);
       $('#delivery-address').attr('data-err', 0);
       $('#delivery-floor').attr('data-err', 0);
       $('#delivery-unit').attr('data-err', 0);
       $('#delivery-block').attr('data-err', 0);


     } else {

      $('#delivery-first-name').val('');
      $('#delivery-last-name').val('');
      $('#delivery-contact-no').val('');
       $('#delivery-country').val('');
       $('#delivery-pos-code').val('');
       $('#delivery-block').val('');
       $('#delivery-address').val('');
       $('#delivery-address').removeClass('valid');
       $('#delivery-floor').val('');
       $('#delivery-unit').val('');
       $('#delivery-pos-code').attr('data-err', 1);
       $('#delivery-address').attr('data-err', 1);
       $('#delivery-floor').attr('data-err', 1);
       $('#delivery-unit').attr('data-err', 1);
       $('#delivery-block').attr('data-err', 1);
       $('#delivery-first-name').attr('data-err', 1);
      $('#delivery-last-name').attr('data-err', 1);
      $('#delivery-contact-no').attr('data-err', 1);
     }
     checkForErrors();
   });

   //Check Billing Validation

   $('#billing-pos-code').change(function () {
     getMailingAddr($(this).val(), $(this).attr('id'), $(this).attr('fill'));
   });

   $('#billing-pos-code').focusout(function () {
     checkEmptyField($(this).attr('id'));
   });

   $('#billing-block').focusout(function () {
     checkEmptyField($(this).attr('id'));
   });

   $('#billing-address').focusout(function () {
     checkEmptyField($(this).attr('id'));
   });

   $('#billing-floor').focusout(function () {
     if (!checkPairEmpty($(this).attr('id'), "billing-house")) {
       checkPairNumeric($(this).attr('id'), "billing-house");
     }
   });

   $('#billing-unit').focusout(function () {
     if (!checkPairEmpty($(this).attr('id'), "billing-house")) {
       checkPairNumeric($(this).attr('id'), "billing-house");
     }
   });

   // Checkout Foreign


   $('#billing-faddress').focusout(function () {
     checkEmptyField($(this).attr('id'));
   });

   $('#billing-faddress2').focusout(function () {
     checkEmptyField($(this).attr('id'));
   });


   $('#billing-state').focusout(function () {
     checkEmptyField($(this).attr('id'));
   });

   $('#billing-zipcode').focusout(function () {
     if (checkEmptyField($(this).attr('id'))) {
       checkNumericFieldSolo($(this).attr('id'));
     }
   });

   //check Personal Details

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



   $('#checkout-payment-btn').click(function (e) {
    e.preventDefault();
     window.location = 'payment.html';
   });


   $('#complete-btn').click(function (e) {
    e.preventDefault();
     window.location = 'success-thirdparty.html';
   });


   //change Address

  $('.checkout-change-addr').click(function (e) {
    e.preventDefault();

    if ($(this).attr('.checkout-change-addr') != '') {

      $('#lbody').load('address-book.html', function (response, status, xhr) {
        $('#lbody').html(response);

        if (status == "error") {
          var msg = "Sorry but there was an error: ";
          $("#error").html(msg + xhr.status + " " + xhr.statusText);
        }
      });

      $('#common').addClass('show');
      lockScroll();
    }
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
       $('#checkout-payment-btn').prop("disabled", false);
     } else {
       $('#checkout-payment-btn').prop("disabled", true);
     }
   }

 });