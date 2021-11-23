
if ($('.comp-country-code').length > 0) {
  genCountryCode();
  $('.select-selected').addClass('bt');
  $('.select-items').addClass('bt');
}

//menu header
$('.js-corp-menu-listing').click( function (e) {
  var foo = '#' + $(this).attr('data-id');
  $('html, body').animate({
    scrollTop: $(foo).position().top - 54
  }, 2000);

  $('.nav-drop').removeClass('active');

});

$('.js-corp-plan-cta').click(function () {
  $('.corp-plans-lightbox').animate({top: '0', opacity: 1}, 500);
  console.log('form load');
});


$('#corp-cancel').click(function () {
  $('.corp-plans-lightbox').animate({top: '100%', opacity: 0}, 500);
});

   //contact page
   $('#company-name').focusout(function () {
    checkEmptyField("company-name");
  });


  $('#name').focusout(function () {
    checkEmptyField("name");
  });

  $('#plan-of-interest').focusout(function () {
    checkSelectedField("plan-of-interest");
  });

  $('#industry').focusout(function () {
    checkSelectedField("industry");
  });

  $('#contact-no').focusout(function () {
    checkEmptyField("contact-no");
  });

  $('#contact-email').focusout(function () {
    if (checkEmptyField($(this).attr('id'))) {
      checkEmailField($(this).attr('id'));
    }
  });

   //submit
   $('#corp-plans-submit').click(function (e) {
     console.log('submit-0');

     e.preventDefault();
     var errNo = 0;

     $(".personal-ele").each(function () {
      errNo += parseInt($(this).attr('data-err'));
      console.log(errNo,  $(this).attr('data-err'), 'contact');
      console.log($(this), 'what is this');
      });

      if (errNo > 0) {
        checkEmptyField('name');
        checkEmptyField("company-name");
        checkEmailField('contact-email');
        checkSelectedField('industry');
        checkSelectedField('plan-of-interest');
        if (checkEmptyField("contact-no")) {
          if(checkNumericFieldSolo("contact-no")) {

           checkLength("contact-no", 8, 10, 'contact number');
          }
        }

      } else {
        errNo = 0;
        var data = {
          company_name: $('#company-name').val(),
          name: $('#name').val(),
          email: $('#contact-email').val(),
          contact: "+" + $('#country-code').val() + $('#contact-no').val(),
          plan_of_interest: $('#industry option:selected').val(),
          description: $('#description').val()
        };
          // $('.contact-lighbox').css('display', 'flex');
          // $('.contact-lighbox').css('z-index', '1250');
        console.log(data, 'submit-sucess');
        window.location.href='corp-plan-thank-you.html';
      }
   });

   // contact component
   $('#company-name-1').focusout(function () {
    checkEmptyField("company-name-1");
  });


  $('#name-1').focusout(function () {
    checkEmptyField("name-1");
  });

  $('#plan-of-interest-1').focusout(function () {
    checkSelectedField("plan-of-interest-1");
  });

  $('#industry-1').focusout(function () {
    checkSelectedField("industry-1");
  });

  $('#contact-no-1').focusout(function () {
    checkEmptyField("contact-no-1");
  });

  $('#contact-email-1').focusout(function () {
    if (checkEmptyField($(this).attr('id'))) {
      checkEmailField($(this).attr('id'));
    }
  });

  $('#corp-plans-submit-1').click(function (e) {
    console.log('submit-1');

    e.preventDefault();
    var errNum = 0;

    $(".js-form-ele").each(function () {
      errNum += parseInt($(this).attr('data-err'));
     console.log(errNum,  $(this).attr('data-err'), 'contact');
     console.log($(this), 'what is this');
     });

     if (errNum > 0) {
      checkEmptyField('name-1');
      checkEmptyField("company-name-1");
      checkEmailField('contact-email-1');
      checkSelectedField('industry-1');
      checkSelectedField('plan-of-interest-1');
       if (checkEmptyField("contact-no-1")) {
         if(checkNumericFieldSolo("contact-no-1")) {

          checkLength("contact-no", 8, 10, 'contact number');
         }
       }

     } else {
      errNum = 0;
       var data = {
         company_name: $('#company-name-1').val(),
         name: $('#name-1').val(),
         email: $('#contact-email-1').val(),
         contact: "+" + $('#country-code').val() + $('#contact-no-1').val(),
         plan_of_interest: $('#industry-1 option:selected').val(),
         description: $('#description-1').val()
       };
         // $('.contact-lighbox').css('display', 'flex');
         // $('.contact-lighbox').css('z-index', '1250');
       console.log(data, 'submit-sucess');
       window.location.href='corp-plan-thank-you.html';
     }
  });