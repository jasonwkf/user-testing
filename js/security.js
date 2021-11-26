$(function () {
  //research get localstorage
 var username = JSON.parse(localStorage.getItem('username'));
 // console.log(username, 'username');

 $.ajax('./data/drop-off.json').done(function (data) {
   var users = data.drop_off_user;
   // console.log(users, 'users');

   Array.from(users, function (user, i) {
     // console.log(user, 'single user');
     var getNowDate = Math.floor(Date.now() / 1000);
     var userDate = new Date(user.valid_date) / 1000;
     var difference = getNowDate - userDate;
     // console.log(difference, user, 'difference');

     if(!username || !username.valid_date) {
       alert('You do not have access to this page');
       window.location.href='index.html';
     }

     if (username.username == user.username) {
       if (difference > 7200) {
         console.log('You do not have access to this page');
         alert('You do not have access to this page');
         window.location.href='index.html';
       }
     }
   });
 }).fail(function (err) {
   console.error(err);
 }).always(function () {
   console.log('fetch complete');
 });
});
