
 $(function () {

  $('.selection').change(function(){
    $("#proceed-cos").prop('disabled', false);
  });


  $('#proceed-cancel').click(function(e) {
    e.preventDefault();

    var getID = $(this).attr('for');

    $('#' + getID).removeClass('show');
    $('.lightbox-overlay').fadeOut(300);

    unlockScroll();
  });


   $('.options').click(function (e) {
     e.preventDefault();

     $('.window-overlay').fadeIn(300);

     var cos = $(this).attr('cos');
     var urlToload = '';
     if ($(this).attr('options') != '') {

       urlToload = $(this).attr('options');
     }
     if (cos != '') {
      $('.window-overlay').hide();

       console.log(urlToload);

       $('.lightbox-overlay').fadeIn(300);
       $('#' + cos).addClass('show');
       $("#proceed-cos").attr('options', urlToload);
     } else {
        $('.window-overlay.lightbox').fadeIn(300);

       if ($(this).attr('options') != '') {
         console.log('got options');

         $('#common .lightbox-body').html('');
         urlToload = $(this).attr('options');
         console.log(urlToload);
         $('.lightbox-overlay').fadeIn(300);
         $('#common').addClass('show');
         $('#lbody').load(urlToload + ' #options-nt', function (response, status, xhr)  {
           $('#lbody').html(response);

           if (status == "error") {
             var msg = "Sorry but there was an error: ";
             $("#error").html(msg + xhr.status + " " + xhr.statusText);
           }

         $('.window-overlay').fadeOut(300);
         });

         lockScroll();
       } else {
         window.location = "checkout.html";
       }
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
       window.location = "checkout.html";
     }

   });

//==== new skyscraper ----
  console.log($(window).scrollTop(), scroll);
 // global var
 var x = 0;
 var scrollHeight;

   $(window).scroll(function () {
    // console.log(window.scrollY, 'scroll');
    var stickyHeight = $('.comp-page-header').outerHeight();
      // var stickyHeight = ($('.comp-user-plan-overview').outerHeight() + $('.comp-page-header').outerHeight()) - $('.comp-page-header').outerHeight();
      // var offsetHeight = $('.comp-publication-subscription-menu-tag').outerHeight() + $('.comp-publication-subscription-header').outerHeight() + $('.comp-publication-subscription-menu-tag').outerHeight();
      var offsetHeight = $('.comp-publication-subscription-header').outerHeight() + $('.comp-publication-subscription-menu-tag').outerHeight();
      var stickyMenu = $('.comp-publication-subscription-menu-tag').position().top;

      if($(window).scrollTop() > stickyHeight ) {
        $('.comp-publication-subscription-header').addClass('is-sticky');
        $('.is-sticky').css('top', $('#the-header').outerHeight());
      } else {
        $('.comp-publication-subscription-header').removeClass('is-sticky');
        $('.comp-publication-subscription-menu-tag').removeClass('is-menu-sticky');
      }

      if($(window).scrollTop() > stickyMenu ) {
        $('.comp-publication-subscription-menu-tag').addClass('is-menu-sticky');
        $('.is-menu-sticky').css('top', $('#the-header').outerHeight() + $('.comp-publication-subscription-header').outerHeight());
      }

      //return menu tag to is ori position
      if ($('.comp-publication-subscription-menu-tag').offset().top < $('.comp-publication-all-subscription').offset().top) {
        $('.comp-publication-subscription-menu-tag').toggleClass('is-menu-sticky');
      }

      //bt-plans-include
      var headerHeight = $('#the-header').outerHeight() + $('.comp-publication-subscription-header').outerHeight() + $('.comp-publication-subscription-menu-tag').outerHeight();

      if ($(window).scrollTop() >  $('.bt-plans-include').offset().top - offsetHeight) {
        $('.comp-publication-subscription-menu-tag').toggleClass('is-menu-sticky');
      }
      //scroll to change cat header

      if ($(window).scrollTop() > $('.comp-publication-subscription-header').offset().top - offsetHeight - 57 && $(window).scrollTop() < $('#comp-promo-bt-compare-plans').offset().top - offsetHeight - 57) {
        $('#subscription-plan-cta').addClass('is-active');
      } else {
        $('.pub-menu-item').removeClass('is-active');
      }

      if ($(window).scrollTop() > $('#comp-promo-bt-compare-plans').offset().top - offsetHeight && $(window).scrollTop() < $('#bt-skycraper-faq').offset().top - offsetHeight) {
        $('#compare-plan-cta').addClass('is-active');
      } else {
        $('.pub-menu-item').removeClass('is-active');
      }

      if ($(window).scrollTop() > $('.comp-publication-subscription-header').offset().top - offsetHeight - 57 && $(window).scrollTop() < $('#comp-promo-bt-compare-plans').offset().top - offsetHeight - 57) {
        $('#subscription-plan-cta').addClass('is-active');
      } else if ($(window).scrollTop() > $('#comp-promo-bt-compare-plans').offset().top - offsetHeight - 57 && $(window).scrollTop() < $('#bt-skycraper-faq').offset().top - offsetHeight - 57) {
        $('#compare-plan-cta').addClass('is-active');
        $('#subscription-plan-cta').removeClass('is-active');
      } else if ($(window).scrollTop() > $('#bt-skycraper-faq').offset().top - offsetHeight - 57 && $(window).scrollTop() < $('.newspaper-links').offset().top - offsetHeight) {
        $('#compare-plan-cta').removeClass('is-active');
        $('#faq-cta').addClass('is-active');
      }

      if ($(window).scrollTop() < $('.bt-plans-include').offset().top - offsetHeight) {
        console.log('xxx');
        x = 0;
      } else {
        console.log('y');
        x = 1;
      }
   });

   //==
  $('.pub-menu-item').click(function (e) {
    console.log($('.comp-publication-subscription-header').outerHeight(), 'height');
    e.preventDefault();
    var id = '#' + $(this).attr('data-id');

    //Math.round($('.comp-publication-subscription-header').outerHeight() * 2) + $('.comp-publication-subscription-header').outerHeight() - 20;
    // scrollHeight = $('#the-header').outerHeight() + $('.comp-publication-subscription-header').outerHeight() + $('.comp-publication-subscription-menu-tag').outerHeight();
    if (x == 1) {
      scrollHeight = $('#the-header').outerHeight() + $('.comp-publication-subscription-header').outerHeight();
      x = 0;
      console.log(x, 'change 1');
    } else {
      scrollHeight = $('#the-header').outerHeight() + $('.comp-publication-subscription-header').outerHeight() + $('.comp-publication-subscription-menu-tag').height();
      x = 1;
      console.log(x, 'change 2');
    }

    console.log(scrollHeight, x, 'menu tag after');
    $('html, body').animate({
      scrollTop: $(id).offset().top - scrollHeight
    }, 2000);
  });

//==

  $('.tag-menu-item').click( function (e) {
    e.preventDefault();

    $('.tag-menu-item.is-active').removeClass('is-active');
    $(this).addClass('is-active');
    var cat = "." + $(this).data('id');
    var bar = $('#the-header').outerHeight() + $('.comp-publication-subscription-header').outerHeight() + $('.comp-publication-subscription-menu-tag').outerHeight();
    $('.single-plan-item').fadeOut();
    $('.single-plan-item' + cat).fadeIn(1500);
    // $('html, body').animate({
    //   scrollTop: $("#all-plans").offset().top - $('.comp-publication-subscription-menu').outerHeight() - 37
    // }, 2000);
    var foo = $('.comp-page-header').outerHeight() + $('.comp-user-plan-overview').outerHeight() + 77;

    $('html, body').animate({
      scrollTop: foo
    }, 2000);

  });

  var trackContainer;
  var track;
  var pressed = false;
  var start;
  var end;
  var posInit;
  var posFinal;
  var planSlides;
  var fixMarginLeft = 12; //1;
  var slideWidth;
  var dotNavs;
  var dots;
  var currentSlide;
  var targetSlide;
  var slideWrapper;
  var slides;
  var index = 0;
  var threshold = 20;
  // check screen size to add and remove class function
  var checkScreenSize = function (slide, k, h) {
    slideWidth = Math.round((trackContainer.getBoundingClientRect().width / 2) - 36);
    console.log(slideWidth, 'initial w');
    if ($(window).width() > 992) {
      // slide.style.left = 50 * k - fixMarginLeft * k + '%';
      slide.style.left = slideWidth * k + fixMarginLeft * k + 'px';
      slide.classList.add('plan-carousel');
      slide.style.width = slideWidth + 'px';
      // slide.style.maxHeight = h + 'px';
    } else {
      slide.style = ' ';
      slide.classList.remove('plan-carousel');
    }

    $(window).on('resize', function () {
      slideWidth = Math.round((trackContainer.getBoundingClientRect().width / 2) - 36);
      console.log(slideWidth, 'what is w? responsive?');
      if ($(window).width() > 992) {
        // slide.style.left = 50 * k - fixMarginLeft * k + '%';
        slide.style.left = slideWidth * k + fixMarginLeft * k + 'px';
        slide.classList.add('plan-carousel');
        // slide.style.maxHeight = h + 'px';
        slide.style.width = slideWidth + 'px';
      } else {
        slide.style = '';
        slide.classList.remove('plan-carousel');
        // slide.style.transform = 'none';
      }
    });
  };

  // drag function
  var startDrag = function (e) {
    track.removeClass('plan-transition');
    e = e || window.event;
    start = e.clientX;
    posInit = slideWrapper.offsetLeft;
    track.css('cursor', 'grabbing');
    document.onmouse =  endDrag;
    document.onmousemove = dragAction;
    pressed = true;
    console.log(posInit, start, 'start drag');
  };

  var dragAction = function (e) {
    // console.log(start, posInit, e.offsetX, e.clientX);
    e = e || window.event;
    if (!pressed) return;
    e.preventDefault();
    end = start - e.clientX;
    start = e.clientX;
    console.log(slideWrapper.offsetLeft - end, 'drag action');
    slideWrapper.style.left = (slideWrapper.offsetLeft - end) + 'px';
    checkboundary ();
  };

  var endDrag = function (e) {
    track.addClass('plan-transition');
    posFinal = slideWrapper.offsetLeft;
    track.css('cursor', 'grab');
    if (posFinal - posInit < -threshold) {
      shiftSlide(1, 'drag');
    } else if (posFinal - posInit > 0) {
      shiftSlide (-1, 'drag');
    } else {
      slideWrapper.style.left = (posInit) + 'px';
    }
    checkboundary ();
    document.onmouseup = null;
    document.onmousemove = null;
    pressed = false;
    // console.log(posFinal, posInit, 'drag end');
  };

  $('.plan-option-wrapper').each(function (i , el) {
    // look for all the plan-option-wrapper
    planSlides = Array.from(el.children);
    //filter plan-option-wrapper with more than 2
    if (planSlides.length > 2) {
      //set variable
      // nav dots for the carousel
      dotNavs = document.querySelectorAll('.circle-container')[i];
      dots = Array.from(dotNavs.children); //dotNavs.getElementsbyclassname
      slideWrapper =  document.getElementsByClassName('plan-option-wrapper')[i];
      slides = Array.from(slideWrapper.children);
      // slideWidth =  Math.round((slideWrapper.offsetWidth / 2) - 24);
      // get plant-option classs
      trackContainer = document.querySelectorAll('.plan-option-items')[i];//$('.plan-option-items').eq(i);

      slideWrapper.style.width = (trackContainer.getBoundingClientRect().width / 2) * slides.length + 'px';

      trackContainer.addEventListener('mousedown', startDrag);
      trackContainer.addEventListener('mouseup', endDrag);
      trackContainer.addEventListener('mousemove', dragAction);
      trackContainer.addEventListener('mouseleave', function () {
        pressed = false;
        trackContainer.style.cursor = 'default';
      });


      console.log(trackContainer, 'track container');
      // the target wrapper
      track = $(this);
      // create height for wrapper
      var obj = { height: planSlides[0].getBoundingClientRect().height };
      // clone to avoide change of height
      var x = Object.assign({}, obj);
      // set track height
      track.css('height', x + 28 + 'px' );
      // if else condition for the loading of window width
      if ($(window).width() > 992) {
        track.css('height', x.height + 28 + 'px' );
      } else {
        track.removeAttr('style');
      }
      // if else condition for the loading of window width resize
      $(window).on('resize', function () {
        slideWrapper.style.width = (trackContainer.getBoundingClientRect().width / 2) * slides.length + 'px';
        console.log(slideWrapper.style.width, 'sssss');
        if ($(window).width() > 992) {
          track.css('height', x.height + 28 + 'px' );
        } else {
          track.removeAttr('style');
        }
      });

      //dot selection
      dots.forEach(function (item, j) {
        var getIndex = item.getAttribute('data-id');
        item.addEventListener('click', function () {

          dots.forEach(function (option) {
            option.classList.remove('active');
          });
          // filter dots
          if (j == getIndex) {
            item.classList.add('active');
            slides.forEach(function (slide, slideIndex) {
              if(slide.classList.contains('current-plan')) {
                // get the current plan slides
                currentSlide = slide;
              }
              // get the target slide
              targetSlide = slides[j];
              // input to function
              moveToSlide(track, currentSlide, targetSlide);
            });
          }
        });
      });

      // at position absolute css, top and bottom 0;
      planSlides.forEach(function (slide, k) {
        // use function to determine css
        // console.log(k, slide, slide.clientWidth, 'for each');
        return checkScreenSize(slide, k, x.height);
      });
    }
  });

  //carousel
  // var track = $('.plan-option-wrapper')[0];
  // var planSlides = Array.from(track.children);
  // console.log(planSlides, 'track');
  // var dotNavs = $('.skycraper-carousel');
  // var dots = Array.from(dotNavs);
  // var planSizewidth = planSlides[0].getBoundingClientRect().width;
  // var fixMarginLeft =  1;//12;
  // console.log(planSizewidth, 'size');

  //arrange slides next to one another
  // var setSlidePosition = function (slide, i) {
  //   slide.style.left = planSizewidth * i + fixMarginLeft * i + 'px';
  // };

  // var setSlidePosition = function (slide, i) {
  //  slide.style.left = 50 * i - fixMarginLeft * i + '%';
  // };

  // planSlides.forEach(setSlidePosition);
  // function to move the track
  var moveToSlide = function (track, currentSlide, targetSlide) {
    // if else condition for window width on load and on resize;
    if ($(window).width() >= 992) {
      track.css('left', '-' + targetSlide.style.left);
      // track.removeClass('plan-transition');
    } else {
      track.removeAttr('style');
      // track.css('transform', 'none');
    }

    $(window).on('resize', function () {
      if ($(window).width() >= 992) {
        track.css('left', '-' + targetSlide.style.left);
        // track.removeClass('plan-transition');
      } else {
        track.removeAttr('style');
        // track.css('transform', 'none');
      }
    });
    // track.style.transform =  'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-plan');
    targetSlide.classList.add('current-plan');
  };

  function shiftSlide (dir, action) {
    if (pressed) {
      if(!action) {
        posInit = slideWrapper.offsetLeft;
      }

      if (dir == 1) {
        slideWrapper.style.left = (posInit - slideWidth) + 'px';
        index++; // possibe solution
        console.log(index, '1');
        dots.forEach(function (item, j) {
          // console.log(item, 'item index++');
          if (j == index) {
            item.classList.add('active');
            slides.forEach(function (slide, slideIndex) {
              if (j == slideIndex) {
                slide.classList.add('current-plan');
                if(slide.classList.contains('current-plan')) {
                  console.log(slide, 'shitft 1');
                  currentSlide = slide;
                }

                targetSlide = slides[index];
                moveToSlide(track, currentSlide, targetSlide);
              }
            });
          } else {
            item.classList.remove('active');
          }
        });

      } else if (dir == -1) {
        slideWrapper.style.left = (posInit + slideWidth) + "px";
        index--;
        console.log(index, '-1');
        dots.forEach(function (item, j) {

          if (j == index) {
            item.classList.add('active');
            slides.forEach(function (slide, slideIndex) {
              if (j == slideIndex) {
                slide.classList.add('current-plan');
                if(slide.classList.contains('current-plan')) {
                  console.log(slide, 'shitft -1');
                  currentSlide = slide;
                }

                targetSlide = slides[index];
                moveToSlide(track, currentSlide, targetSlide);
              }
            });
          } else {
            item.classList.remove('active');
          }
        });
      }
    }

    pressed = false;
  }

  function checkboundary () {
    var outer = trackContainer.getBoundingClientRect();
    var inner = slideWrapper.getBoundingClientRect();
    var foo = (trackContainer.getBoundingClientRect().width / 2) - 12 * (slides.length - 1) - 20;

    if (parseInt(slideWrapper.style.left) > 0) {
      slideWrapper.style.left = '0px';

    } else if (inner.right < (outer.right - foo)) {
      slideWrapper.style.left = '-' + (inner.width - outer.width + foo) + 'px';
    }
  }
  // carousel js reference from https://youtu.be/gBzsE0oieio

  //research get localstorage
  var username = JSON.parse(localStorage.getItem('username'));

  $.ajax('./data/drop-off.json').done(function (data) {
    var users = data.drop_off_user;

    Array.from(users, function (user, i) {
      var getDate = Math.floor(Date.now() / 1000);
      var difference = getDate - (new Date(user.valid_date) /1000);
      console.log(difference, 'difference');

      if(!username || !username.valid_date) {
        console.log('no user');
        alert('You do not have access to this page');
        window.location.href='index.html';
      }

      if (username.username == user.username) {
        if (difference > 7200) {
          console.log('you can not allow to got');
          // alert('You do not have access to this page');
          window.location.href='index.html';
          // localStorage.setItem("login_error", 'You do not have access to this page');
        }
      }
    });
  }).fail(function (err) {
    console.error(err);
  }).always(function () {
    console.log('fetch complete');
  });
 });

