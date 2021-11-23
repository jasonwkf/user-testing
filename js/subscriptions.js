 $(document).ready(function () {

    

$('#proceed-cancel').click(function(e) {
    e.preventDefault();
    
    var getID = $(this).attr('for');

    $('#' + getID).removeClass('show'); 
    $('.lightbox-overlay').fadeOut(300);
    
    unlockScroll();
 });


  $('a.cos').click(function() {

    console.log('in');
    var cos = $(this).attr('for');
    console.log(cos);

    $('.lightbox-overlay').fadeIn(300);
    $('#' + cos).addClass('show');

  });
  


  $('.tab-header ul li').click(function(){  
    var getID = $(this).attr('id');

    var forID = $(this).attr('for');
     
    console.log('hello');
    if (!$(this).hasClass('active')) {
      $('.tab-header li').removeClass('active');
      $("#"+ getID).addClass('active');
  
      $('.tab-option-body').hide();
      $('.tab-option-body').removeClass('active');
      $("#"+ forID).fadeIn(300);
      $("#"+ forID).addClass('active');
    }

  });

  $("#proceed-cos").click(function (e) {
    e.preventDefault();

    var getID =  $(this).attr('for');
    $('#' + getID).removeClass('show');

    if ($(this).attr('options') != '') {
      urlToload = $(this).attr('options');
      console.log(urlToload);
      $('#lbody').load('options-news-tablet.html #options-nt', function (response, status, xhr) {
        $('#lbody').html(response);

        if (status == "error") {
          var msg = "Sorry but there was an error: ";
          $("#error").html(msg + xhr.status + " " + xhr.statusText);
        }
      });
      $('#common').css('left', '100%');
      $('#common').addClass('show');
      $('#common').delay(300).animate({'left': '0%'}, 300);
      lockScroll();
      
    } else {
      window.location = "publication-st-cos.html";
    }

  }); 
  
 });