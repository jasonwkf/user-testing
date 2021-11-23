 $(document).ready(function () {
 

    $('#common').removeClass('open');
     loadNewsletterPrompt();

    function loadNewsletterPrompt() {


        $('.window-overlay').fadeIn(300);
        $('.custom-ligthbox').css({'width' : '660px'}); 
        $('.lightbox-overlay').fadeIn(300);
        $(".close-lightbox").hide();

        $('#newsletter').addClass('show');
        
        $('#newsletter .lightbox-body').html('');

        var urlToload = 'newsletter-list.html';

        $('#lbody').load(urlToload, function (response, status, xhr) {
            $('#lbody').html(response);

            if (status == "error") {
                var msg = "Sorry but there was an error: ";
                $("#error").html(msg + xhr.status + " " + xhr.statusText);
            }

            $('.window-overlay').fadeOut(300) ;
        });

        lockScroll();
    }

    

 });
 
 function saveNewsletter() {
    console.log('in clicked');
    //after api save newsletter 
    $('#newsletter .newsletter-body').html('');
    $('#newsletter .newsletter-header').html('');
    $('#newsletter .newsletter-footer').html('');

    var textToPrint = "<h4 class='regular'>Your newsletters preference has been save!</h4>";

    $('#newsletter .newsletter-header').html(textToPrint);
    $('#newsletter').delay('3000').fadeOut(200, function(){

        unlockScroll();
    }); 


}