 $(document).ready(function () {


    $('.loading-msg').text('Please wait while we process your changes!');
    genCountryCode();
   
    $('#dob').datepicker({
      format: 'dd/mm/yyyy',  
      autoclose: true,
      orientation: 'right bottom'
    });


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
 
  
 });