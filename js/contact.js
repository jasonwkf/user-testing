   //check form
    // var x = document.getElementById('category');
    // var xValue = x.addEventListener('change', function () {
    //   console.log(x.value,'value');
    //   return x.value;
    // });

    genCountryCode();

    //Customer Service Page (additional sub)
    $('#contact-first-name').focusout(function () {
     checkPairEmpty($(this).attr('id'), "contact-first-name");
    });

    $('#contact-last-name').focusout(function () {
     checkPairEmpty($(this).attr('id'), "contact-last-name");
    });


   $('#contact-email').focusout(function () {
     if (checkEmptyField($(this).attr('id'))) {
       checkEmailField($(this).attr('id'));
     }
   });

   $('#contact-no').focusout(function () {
     if (checkEmptyField($(this).attr('id'))) {
       if(checkNumericFieldSolo($(this).attr('id'))) {

        checkLength($(this).attr('id'), 8, 10, 'contact number');
       }
     }
   });


   //contact page
   $('#category').focusout(function () {
     checkSelectedField("category");
   });


    $('#description').focusout(function () {
     checkEmptyField($(this).attr('id'), "description");
    });

    //submit
    $('#contact-submit').click(function (e) {
      e.preventDefault();
      var errNo = 0;

      $(".personal-ele").each(function () {
       errNo += parseInt($(this).attr('data-err'));
       console.log(errNo,  'contact');
       });

       if (errNo > 0) {
         checkName('contact');
         checkSelectedField($(this).attr('id'),"category");
         checkEmptyField($(this).attr('id'), "description");
         if (checkEmptyField("contact-no")) {
           if(checkNumericFieldSolo("contact-no")) {

            checkLength("contact-no", 8, 10, 'contact number');
           }
         }
       } else {
         errNo = 0;
         var data = {
           first_name: $('#contact-first-name').val(),
           last_name: $('#contact-last-name').val(),
           email: $('#contact-email').val(),
           contact: "+" + $('#country-code').val() + $('#contact-no').val(),
           category: $('#category option:selected').val(),
           acct_no: $('#acct-no').val(),
           description: $('#description').val()
         };
           $('.contact-lighbox').css('display', 'flex');
           $('.contact-lighbox').css('z-index', '1250');
         console.log(data, 'submit');
       }

    });

    $('#customer-support-submit').click(function (e) {
      e.preventDefault();
      var errNo = 0;

      $(".personal-ele").each(function () {
        errNo += parseInt($(this).attr('data-err'));
        console.log(errNo,  'contact');
        });

        if (errNo > 0) {
          checkName('contact');
          checkSelectedField($(this).attr('id'),"category");
          checkEmptyField($(this).attr('id'), "description");
          if (checkEmptyField("contact-no")) {
            if(checkNumericFieldSolo("contact-no")) {

             checkLength("contact-no", 8, 10, 'contact number');
            }
          }
        } else {
          errNo = 0;
          var data = {
            first_name: $('#contact-first-name').val(),
            last_name: $('#contact-last-name').val(),
            email: $('#contact-email').val(),
            contact: "+" + $('#country-code').val() + $('#contact-no').val(),
            category: $('#category option:selected').val(),
            acct_no: $('#acct-no').val(),
            description: $('#description').val()
          };
            $('.contact-lighbox').css('display', 'flex');
            $('.contact-lighbox').css('z-index', '1250');
          console.log(data, 'submit');
        }


    });

    $('#customer-support-modal-dismiss').click(function () {
      $('.contact-lighbox').css('display', 'none');
      $('.contact-lighbox').css('z-index', '-1');
      location.href = 'add-sub-enquiry.html';
    });

    $('#contact-modal-dismiss').click(function () {
      $('.contact-lighbox').css('display', 'none');
      $('.contact-lighbox').css('z-index', '-1');
      location.href = 'contact-us.html';
    });