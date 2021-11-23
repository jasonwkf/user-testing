// start of lightbox js
// `

// Runtime
$(document).ready(function () { 
    console.log('giro loaded');

   

    $('#giro-pay').click(function(e) {

      e.preventDefault(); 

      window.location =  "payment-giro-callback.html";
        
       
    });

    
    $('form').submit(function(e) {

      e.preventDefault(); 

      window.location = 'payment-giro-error.html';
    });
 
});