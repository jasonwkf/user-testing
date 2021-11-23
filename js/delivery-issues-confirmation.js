 $(document).ready(function () {
  console.log(new Date().getHours() + " hrs", new Date().getMinutes() + " mins", 'time');
  
   var currentHr = new Date().getHours();
   var currentMin = new Date().getMinutes();
  //  var currentHr = 10
  //  var currentMin = 39;

   if (currentHr >= 9) {
     if(currentMin > 30) {
      $('.issues-confirm-msg').text('We apologise for the inconvenience caused. We will investigate this issue. If a credit is given for this delivery lapse, it will be reflected in your bill next month (for monthly recurring subscriptions) or as a refund via your payment method (for termed subscriptions).');
     } else {
      $('.issues-confirm-msg').html('We apologise for the inconvenience caused. Please allow us two working days to investigate your issue and credit your account for the delivery incident. The credits will be used to offset your next subscription charge. <br><br> Please note that we will not be able to offer a replacement of newspapers for delivery issues reported here. Thank you for your understanding.');
     }
   } else {
    $('.issues-confirm-msg').html('We apologise for the inconvenience caused. Please allow us two working days to investigate your issue and credit your account for the delivery incident. The credits will be used to offset your next subscription charge. <br><br> Please note that we will not be able to offer a replacement of newspapers for delivery issues reported here. Thank you for your understanding.');
   }
 });