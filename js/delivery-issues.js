console.log('delivery-js');
$(document).ready(function () {
  //backhistoryback
  $('#delivery-back-btn').click(function () {
    window.history.back();
  });
  //Select a delivery issue
    $('#start-btn').click(function () {
      var checkCount = $('input[name="delivery-issue"]:checked').length;

          $('.js-delivery-input').each(function(e){
            if (this.checked) {
              $('#start-btn').prop('disabled', false);
              var clickId = $(this).index('.js-delivery-input');

              $('.js-delivery-label').each(function(e) {
                var labelId = $(this).index('.js-delivery-label');
                if (clickId !== labelId) {
                  $(this).fadeOut(450);
                }

              $('.delivery-issue-signin').fadeIn(600);
              $('.delivery-divider').hide();
              $('.delivery-cta-container').hide();
              $('.delivery-issue-form').css('padding-bottom', '30px');
              });
            } else {
              if (checkCount === 1) {
                $(this).fadeOut(400);
              }
            }
        });
    });

  // address box logic
  $('input[name="guest-signin"]').each(function(i, value){
    console.log(i, value.id, $(this), 'js-guest');
    $(this).on('click',function(e){
      if ($(this).prop('checked')) {
        switch($(this).attr('id')) {
          case 'delivery-address':
            $('.' + $(this).attr('id')+'-form').show();
            $('.account-number-form').hide();
            break;
          case 'account-number':
            $('.' + $(this).attr('id')+'-form').show();
            $('.delivery-address-form').hide();
            break;
          default:
            $('.delivery-address-form').hide();
            $('.account-number-form').hide();
        }
      } else {
        $('.delivery-address-form').hide();
        $('.account-number-form').hide();
      }
    });
  });

  $('textarea.delivery-text-area').keydown(function() {

    var getLength =  $(this).val().length ;
    var getmaxLength =  $(this).attr('maxlength');
    console.log(getLength + " vs " + getmaxLength);
  
    $('.text-length').text(getLength + '/' + getmaxLength);
    
  });


  //all form validations
  $('#del-acct-no').focusout(function () { 
    checkEmptyField($(this).attr('id'), "del-acct-no");
    var isFieldNotEmpty = checkEmptyField($(this).attr('id'), "del-acct-no");
    if (isFieldNotEmpty) {
      $('#update-btn').prop("disabled", false);
    } else {
      $('#update-btn').prop("disabled", true);
    }
   });
  
  $("#user-sub").select2({
    // matcher: matchStart,
    containerCssClass: ".adv-select"
  });

  $("#addr-country").select2({
    // matcher: matchStart,
    containerCssClass: ".adv-select"
  });

  $("#addr-state").select2({
    // matcher: matchStart,
    containerCssClass: ".adv-select"
  });

  $('#addr-country').change(function () {

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

  $('#personal-first-name').focusout(function () {
    checkPairEmpty($(this).attr('id'), "personal-name");
  });

  $('#personal-last-name').focusout(function () {
    if(checkPairEmpty($(this).attr('id'), "personal-name")){

      $(".reminder").fadeOut(300);
    }
  });
  //Check address Validation

  $('#addr-pos-code').change(function () {
    getMailingAddr($(this).val(), $(this).attr('id'), $(this).attr('fill'));
  });

  $('#addr-pos-code').focusout(function () {
    checkEmptyField($(this).attr('id'));
  });

  $('#addr-block').focusout(function () {
    checkEmptyField($(this).attr('id'));
  });

  $('#addr-address').focusout(function () {
    checkEmptyField($(this).attr('id'));
  });

  $('#addr-floor').focusout(function () {
    if (!checkPairEmpty($(this).attr('id'), "addr-house")) {
      checkPairNumeric($(this).attr('id'), "addr-house");
    }
  });

  $('#addr-unit').focusout(function () {
    if (!checkPairEmpty($(this).attr('id'), "addr-house")) {
      checkPairNumeric($(this).attr('id'), "addr-house");
    }
  });

  // Checkout Foreign 
  $('#addr-faddress').focusout(function () {
    checkEmptyField($(this).attr('id'));
  });

  $('#addr-faddress2').focusout(function () {
    checkEmptyField($(this).attr('id'));
  });


  $('#addr-state').focusout(function () {
    checkEmptyField($(this).attr('id'));
  });

  $('#addr-zipcode').focusout(function () {
    if (checkEmptyField($(this).attr('id'))) {
      checkNumericFieldSolo($(this).attr('id'));
    }
  });

  $(".update-ele").focusout(function (e) {
    e.preventDefault();
    checkForErrors();
  });

  function checkForErrors() {
    var errNo = 0;
    var loop = 0;

    $(".update-ele").each(function (errNo) {
        console.log("before Errors:" + errNo);

      errNo =  errNo + parseInt($(this).attr('data-err'));

      console.log(" Errors:" + $(this).attr('data-err')); 

      if ($(this).attr('data-err') == 1) {

        console.log("there might be err on:" + $(this).attr('id'));
      }

      loop++;
    console.log("loop Errors:" + errNo);
    });
    console.log("total Errors:" + errNo);

    if (errNo <= 0) {
      $('#update-btn').prop("disabled", false); 
    } else {
      $('#update-btn').prop("disabled", true); 
    }
  }
  //delivery-issue-back button
  $('#back-btn-1').click(function (e){
    e.preventDefault();
    window.location.reload();
  });

    //delivery-issue-back button
  $('#back-login').click(function (e){
    e.preventDefault(); 
    $('.delivery-issue-signin').hide();
    $('.delivery-divider').fadeIn(300);
    $('.delivery-cta-container').fadeIn(300);
    $('.js-delivery-input').fadeIn(300);
    $('.js-delivery-label').fadeIn(300);
  });

  // check if form are clicked
  $('#update-btn').click(function (e) {
    e.preventDefault();
    //if the address is tick
    checkIsTick('.address-list-input', 'delivery-issues-publication.html', '#update-btn');
  });

  $('#submit-issue').click(function (e) {
    e.preventDefault();
    checkIsTick('.delivery-publication-input', 'delivery-issues-confirmation.html', '#submit-issue');
  });

});
