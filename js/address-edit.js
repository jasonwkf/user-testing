 $(document).ready(function () {


  genCountryCode();

    if( $("#change-cat").val() == 'recipient') {
        $('.for-delivery').fadeIn(300);

        $('.for-delivery input').attr('data-err', '1');
    }else {
        $('.for-delivery').fadeOut(300);
        $('.for-delivery input').attr('data-err', '0');
    }

    $("#user-sub").select2({
        // matcher: matchStart,
        containerCssClass: ".adv-select"
      });

    $("#addr-country").select2({
        // matcher: matchStart,
        containerCssClass: ".adv-select",
        disabled: true
      });

      $("#addr-state").select2({
        // matcher: matchStart,
        containerCssClass: ".adv-select"
      });


    $('#effectiveDt').datepicker({
      format: 'dd/mm/yyyy',
      autoclose: true,
      orientation: 'right bottom',
      todayHighlight: true
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

  $('.selection').change(function () {

    checkSubforRecipient('cos-plan-selector');
    checkForErrors();
  });

  $('#effectiveDt').change(function () {
    checkEmptyField($(this).attr('id'));

    console.log(checkEmptyField($(this).attr('id')));
  });

  $(".update-ele").focusout(function (e) {
    e.preventDefault();
    checkForErrors();
  });

  function checkSubforRecipient(nm) {
    var cb = $("input[name='" + nm + "']");
    var result =  cb.is(":checked");

    console.log(result);
    return result;
  }


 function checkForErrors() {
    var errNo = 0;
    var loop = 0;

    if( $('#addr-country').val() == 'Singapore') {
      $(".local .update-ele").each(function () {
        console.log("before Errors:" + errNo + "  " + $(this).attr('data-err'));

        errNo =  errNo + parseInt($(this).attr('data-err'));

        console.log(" Errors:" + $(this).attr('data-err'));

        if ($(this).attr('data-err') == 1) {
          console.log("there might be err on:" + $(this).attr('id'));
        }

      loop++;
      console.log("loop Errors:" + errNo);

      if (errNo <= 0) {
        if ($("#change-cat").val() == 'recipient') {
          if(checkSubforRecipient('cos-plan-selector') == true) {
            $('#update-btn').prop("disabled", false);
          }else {
            $('#update-btn').prop("disabled", true);
          }
        }else{
          $('#update-btn').prop("disabled", false);
        }

      } else {
        $('#update-btn').prop("disabled", true);
      }
    });
    }




  }

 });
