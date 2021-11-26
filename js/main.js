 $(document).ready(function () {

     setCarousel('hc-1');
    //  setTaglineHeight();

     if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
         $('.android-badge').hide();
     }

     if (/Android/i.test(navigator.userAgent)) {
         $('.ios-badge').hide();
     }

 });