 $(document).ready(function () {

   $('.input-daterange #fromDt').datepicker({
     format: 'dd/mm/yyyy',
     autoclose: true,
     orientation: 'left bottom',
     todayHighlight: true,
     startDate: new Date(), // here is where to insert the start date
     endDate: getEffectiveDate(new Date(), 30),
     immediateUpdates: true

   });

   $('.input-daterange #toDt').datepicker({
    format: 'dd/mm/yyyy',
    autoclose: true,
    orientation: 'right bottom',
    todayHighlight: true,
    startDate: new Date(), // here is where to insert the start date
    endDate: getEffectiveDate(new Date(), 30),
    immediateUpdates: true

  });


   $('#toDt').focusout(function () {
     console.log('focusOout');
     checkEmptyField($(this).attr('id'));

   });


   $('#toDt').change(function () {
     console.log('Change');
     checkEmptyField($(this).attr('id'));

   });


   $('#fromDt').change(function () {
     console.log('change');
     checkEmptyField($(this).attr('id'));
   });


   $('#fromDt').focusout(function () {

     checkEmptyField($(this).attr('id'));
   });

   $('#checkTnc').change(function () {
     checkForErrors();

   });


   $(".update-ele").focusout(function (e) {
     e.preventDefault();
     checkForErrors();
   });


   $('#add-action').submit(function (e) {
     e.preventDefault();

     // console.log('nioe');
   });


   $('.cancel').click(function (e) {

     window.history.back();
     console.log('clicked');
   });

   function checkForErrors() {
     var errNo = 0;

     $(".update-ele").each(function (errNo) {
       console.log("before Errors:" + errNo);

       errNo = parseInt($(this).attr('data-err'));

       if ($(this).attr('data-err') == 1) {

         console.log("there might be err on:" + $(this).attr('id'));
       }

       console.log("loop Errors:" + errNo);

       $('#errNo').val(errNo);
     });

     console.log("total Errors:" + $('#errNo').val());

     if ($('#errNo').val() <= 0) {
       if ($('#checkTnc').prop('checked')) {
         $('#update-btn').prop("disabled", false);
       } else {
         $('#update-btn').prop("disabled", true);
       }

     } else {
       $('#update-btn').prop("disabled", true);
     }

   }

 });