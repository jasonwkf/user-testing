$(document).ready(function () {
  getPaymentWidth();

  
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

 

  $('.tab-header ul li').click(function(){  
    var getID = $(this).attr('id');

    var forID = $(this).attr('for');
     
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

    var urlToload = '';
    if( $(this).attr('id') == 'giro' || $(this).attr('id') == 'unionpay' ) {
      $('#csi').hide();
      $('#payment-method-body').fadeIn(300);

      
      urlToload = $(this).attr('data-url');
      if (urlToload != '') {
        $('#payment-method-body').load(urlToload, function (response, status, xhr)  {
          $('#payment-method-body').html(response);

          if (status == "error") {
            var msg = "Sorry but there was an error: ";
            $("#payment-method-body").html(msg + xhr.status + " " + xhr.statusText);
          }
           
        });
      }

    }else {
      $('#payment-method-body').hide();
      $('#csi').fadeIn(300);
 
      urlToload = $(this).attr('data-url');
      if (urlToload != '') {

        $("#csi").attr("src",urlToload);
      }
    }

    

  });


  function getPaymentWidth() {
    var getWidth = 0;
    var buffer = $(".form-element-payment").css('marginRight'); 

    $('.form-element-payment  ').each(function() {

      getWidth = getWidth + ($(this).outerWidth() + parseInt(buffer)) ;
    });
 
    $('.payment-wrapper').width($('.payment-window').width());
  }
});