// start of lightbox js
// `

// Runtime
$(document).ready(function () { 
    console.log('lightbox loaded');

    window.err = 0;

    $('.package-options input').change(function() {

      $('.package-options .term input').each( function() {
        console.log('in loop term');
        if($(this).is(':checked')) {
          window.err = 0;
          return false; 
        }else{
          window.err =  window.err + 1;
        }
      });

      

      $('.package-options .vas input').each( function() {
        console.log('in loop vas');
        if($(this).is(':checked')) {
          window.err = 0;
          return false; 
        }else{
          window.err =  window.err + 1;
        }
      });


      if( window.err == 0 ){ 
       
        $('#proceed-checkout').prop('disabled', false);
      }


    });

    $('#proceed-checkout').click(function(e) {

      e.preventDefault();
      if($('#promo-code').val() == '') {
        $('.checkout-error-server p').text('Please enter a promo code (*sample error)');
        $('.checkout-error-server').addClass('active');

     
        console.log('in here error');

        $('.right-rail-scroll').animate({
          scrollTop: $(".checkout-error-server").offset().top
        }, 500);
      }else {
        window.location= "checkout.html";
      }
    });
    
    $("#saveNewsletter").click( function(e) {
      e.preventDefault();
      saveNewsletter();
      return false;
     

  });

 
});