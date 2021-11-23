 $(document).ready(function () {
  console.log('address.js loaded');
 
  if($('.comp-country-code').length > 0) {
  genCountryCode();
  console.log('run in here genCountryCode');
  }
  
  $("#address-country").select2({
    // matcher: matchStart,
    containerCssClass: ".adv-select"
  });

  // call address book 
  $('.action input:radio').change(function() {
   
    var rid = $(this).attr('id');
    var rowId = rid.replace("addr-", "");
    console.log(rid);


    if($(this).prop('checked')){

        $('.address-row').removeClass('active');
        $('#' + rowId).addClass('active');
    }

  });

  $('.address-row').click(function() {
   
    var rid = $(this).attr('id');
    
    var rowId = rid.replace("addr-", "");
    console.log(rid);

    $('#addr-' + rowId).prop('checked', true);
     
    $('.address-row').removeClass('active');
    $('#' + rowId).addClass('active'); 

  });


  
  $("#new-address").click(function(){ 
    $('.address-book').removeClass('active'); 
    $('.address-book').css({'opacity':'0'});
    $('#add-address').addClass("active"); 
    $('#add-address').animate({'opacity':'1'}, 300); 
  });

  $("#back-address").click(function(){
     
    $('.address-book').removeClass('active');
    $('.address-book').css({'opacity':'0'}); 
    $('#select-address').addClass("active"); 
    $('#select-address').animate({'opacity':'1'}, 300); 

  });

  // Add address check

  $('#address-pos-code').change(function () {
    getMailingAddr($(this).val(), $(this).attr('id'), $(this).attr('fill'));
  });
  $('#address-pos-code').focusout(function () {
   checkEmptyField($(this).attr('id'));

 });
  $('#address-first-name').focusout(function () { 
   checkPairEmpty($(this).attr('id'), "address-name");
  });
  
  $('#address-last-name').focusout(function () {
    checkPairEmpty($(this).attr('id'), "address-name");

 });

  $('#address-address').focusout(function () {
    checkEmptyField($(this).attr('id'));
  });

  $('#address-block').focusout(function () {
    checkEmptyField($(this).attr('id'));
  });

  $('#address-floor').focusout(function () {
    if(!checkPairEmpty($(this).attr('id'), "address-house")){
      checkPairNumeric($(this).attr('id'), "address-house");
    }
  });

  $('#address-unit').focusout(function () {
    if(!checkPairEmpty($(this).attr('id'), "address-house")){
      checkPairNumeric($(this).attr('id'), "address-house");
    }
  });


  $('#address-country').change(function () {

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

  $(".address-ele").focusout(function (e) {
    e.preventDefault();
    checkForErrors();
  });

  $("#add-address-btn").click(function (e) {
    e.preventDefault();
  
    $('.address-book').removeClass('active');
    $('.address-book').css({'opacity':'0'}); 
    $('#select-address').addClass("active"); 
    $('#select-address').animate({'opacity':'1'}, 300); 
 
  });
  


  function checkForErrors() {
    var errNo = 0;

    $(".address-ele").each(function () {
      errNo += parseInt($(this).attr('data-err'));

      if ($(this).attr('data-err') == 1) {

        console.log("there might be err on:" + $(this).attr('id'));
      }
    });
    console.log("total Errors:" + errNo);

    if (errNo <= 0) {
      $('#add-address-btn').prop("disabled", false); 
    } else {
      $('#add-address-btn').prop("disabled", true); 
    }
  }
 });