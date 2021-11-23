$(document).ready(function () {

  //add responsive table

  $(".faq-ans table").each(function () {
    $(this).addClass('table responsive-table table-bordered');
  });


  genBlurb();
  scrollToDist();

  $("a.fl").click(function (e) {
    e.preventDefault();

    var id = $(this).attr('href');

    openCat(id);

    $('html, body').animate({
      scrollTop: $(id).offset().top - 150
    }, 500);

    open = $(id).parents('.faq-topics-body.main').attr('id').replace("#", "");
    openqn = id.replace("#", "");
 

  });

  $('.faq-search-item-single').wrapInTag({
    words: ['delivery']
  });


  var open = '';
  var openqn = '';

  $(".faq-topics-header.main").click(function () {

    var id = $(this).attr('for');

    console.log(open);

    if (id != open) {

      $(".faq-topics-header.main").removeClass("active");
      $(this).addClass("active");
      $(".faq-topics-body.main").hide();
      $(".faq-topics-body.main").removeClass("active");
      $("#" + id).fadeIn(300);
      $("#" + id).delay(300).toggleClass("active");

      open = id;
    } else {
      $(".faq-topics-header.main").removeClass("active");
      $(".faq-topics-body.main").fadeOut(200);
      $(".faq-topics-body.main").removeClass("active");
      $("#" + id).delay(300).fadeOut(200);
      open = '';
    }

  });

  $('#search-text').keypress(function () {
    $('.search-prompt').fadeIn(300);
  });

  $('#search-text').focusout(function () {
    $('.search-prompt').fadeOut(300);
  });

  $(".faq-topics-header.sub").click(function () {

    var id = $(this).attr('for');

    console.log(open);

    if (id != open) {

      $(".faq-topics-header.sub").removeClass("active");
      $(this).addClass("active");
      $(".faq-topics-body.sub").hide();
      $(".faq-topics-body.sub").removeClass("active");
      $("#" + id).fadeIn(300);
      $("#" + id).delay(300).toggleClass("active");

      open = id;
    } else {
      $(".faq-topics-header.sub").removeClass("active");
      $(".faq-topics-body.sub").fadeOut(200);
      $(".faq-topics-body.sub").removeClass("active");
      $("#" + id).delay(300).fadeOut(200);
      open = '';
    }
  });

  $(".faq-qn").click(function () {

    var id = $(this).attr('for');

    console.log(openqn);
    if (id != openqn) {

      $(".faq-qn").removeClass("active");
      $(this).addClass("active");
      $(".faq-ans").hide();
      $(".faq-ans").removeClass("active");
      $("#" + id).fadeIn(300);
      $("#" + id).delay(300).toggleClass("active");

      openqn = id;
    } else {
      $(".faq-qn").removeClass("active");
      $(".faq-ans").fadeOut(200);
      $(".faq-ans").removeClass("active");
      $("#" + id).delay(300).fadeOut(200);
      openqn = '';
    }

  });

  $(".faq-search-preview").click(function () {

    var id = $(this).attr('for');
    var words = $('#' + id).text().split(" ");
    var lenWord = words.length;


    if (lenWord > 20) {
      var headerid = $(this).parent().find('.faq-search-qn');
      console.log(openqn);
      if (id != openqn) {

        // $(".faq-search-qn").removeClass("active");
        // headerid.addClass("active");
        // $(".faq-search-ans").hide();
        // $(".faq-search-ans").removeClass("active");
        $("#" + id).fadeIn(300);
        $("#" + id).delay(300).toggleClass("active");

        $("#" + id).parent().find('.faq-search-preview').hide();
        openqn = id;
      } else {
        // $(".faq-search-qn").removeClass("active");
        // $(".faq-search-ans").fadeOut(200);
        // $(".faq-search-ans").removeClass("active");
        $("#" + id).delay(300).fadeOut(200);
        $('.faq-search-preview').fadeIn(200);
        openqn = '';
      }
    }


  });


  $(".read-toggle").click(function () {

    var id = $(this).attr('for');
    var preview = $(this).parents('.faq-search-item-single').find('.faq-search-preview');

    console.log(preview);

    $(".faq-search-qn").removeClass("active");
    $("#" + id).fadeOut(200);
    $("#" + id).removeClass("active");
    preview.fadeIn(200);
  });


});

function openCat(id) {

  var parentsHeader = $(id).parents('.faq-topics-header.main');
  var parentsBody = $(id).parents('.faq-topics-body.main');

  var subparentsHeader = $(id).parents('.faq-topics-header.sub');
  var subparentsBody = $(id).parents('.faq-topics-body.sub');

  var qn = $(id).parent().find('.faq-qn');

  console.log(qn);

  if (subparentsBody) {

    $(".faq-topics-header.sub").removeClass("active");
    subparentsHeader.addClass("active");

    $(".faq-topics-body.sub").hide();
    $(".faq-topics-body.sub").removeClass("active");
    subparentsBody.fadeIn(300);
    subparentsBody.delay(300).addClass("active");
  }

  if (parentsBody) {

    $(".faq-topics-header.main").removeClass("active");
    parentsHeader.addClass("active");

    $(".faq-topics-body.main").hide();
    $(".faq-topics-body.main").removeClass("active");
    parentsBody.fadeIn(300);
    parentsBody.delay(300).addClass("active");
  }

  $(".faq-qn").removeClass("active");
  qn.addClass("active");
  $(".faq-ans").hide();
  $(".faq-ans").removeClass("active");
  $(id).fadeIn(300);
  $(id).delay(300).toggleClass("active");

}

function genBlurb() {
  if ($('.faq-search-preview').length > 0) {

    $('.faq-search-preview').each(function () {
      var words = $(this).text().split(" ");

      var indx = words.indexOf('delivery');
      var id = $(this).attr('for');
      var lenWord = words.length;
      var after = 0;
      var before = 0;

      var blurb = []; 
      switch (true) {
        case lenWord <= 20:
          after = indx + 10;
          blurb = words;
          $(this).remove();
          $('#' + id).children('.read-toggle').hide();
          $('#' + id).show();
          break;

        case indx < 10:
          blurb = words.slice(0, lenWord);
          break;

        case lenWord = indx:
          before = indx - 10;
          blurb = words.slice(before, indx);
          break;

        default:

          before = indx - 10;
          after = indx + 10;
          blurb = words.slice(before, after);
          break;
      }

      var newBurlb = blurb.join(' ') + ' <span>...Read More</span>';
      // console.log(words.slice(0 , after));
      $(this).html(newBurlb);

    });

  }
}


function scrollToDist() {

  var hash = window.top.location.hash.substr(1);

  console.log(hash);
  if (hash != '') {
    var id = '#' + hash;

    var parentsHeader = $(id).parents('.faq-topics-header.main');
    var parentsBody = $(id).parents('.faq-topics-body.main');
    var qn = $(id).parent().find('.faq-topics-header.sub');

    if (parentsBody) {

      $(".faq-topics-header.main").removeClass("active");
      parentsHeader.addClass("active");

      $(".faq-topics-body.main").hide();
      $(".faq-topics-body.main").removeClass("active");
      parentsBody.fadeIn(300);
      parentsBody.delay(300).addClass("active");
    }

    $(".faq-topics-header.sub").removeClass("active");
    qn.addClass("active");
    $(".faq-topics-body.sub").hide();
    $(".faq-topics-body.sub").removeClass("active");
    $(id).fadeIn(300);
    $(id).delay(300).toggleClass("active");

    $('html, body').animate({
      scrollTop: $(id).offset().top - 150
    }, 500);

  }


}