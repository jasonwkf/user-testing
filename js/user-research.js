
$(function () {
  var errorMsg = localStorage.getItem('login_error') ? localStorage.getItem('login_error'): null;
  if (errorMsg) {
    $('#login-err').show().text(errorMsg);
  }

  $('#username').focusout(function () {
    checkEmptyField("username");
  });

  $('#password').focusout(function () {
    checkEmptyField("password");
  });
    //submit
    $('#user-research-subimit').click(function (e) {
    console.log('user-research-submit');

    e.preventDefault();
    var errNo = 0;

    $(".personal-ele").each(function () {
      errNo += parseInt($(this).attr('data-err'));
      console.log(errNo,  $(this).attr('data-err'), 'contact');
      console.log($(this), 'what is this');
      });

      if (errNo > 0) {
        checkEmptyField('username');
        checkEmptyField("password");
      } else {
        errNo = 0;
        // call json
      $.ajax('./data/drop-off.json').done(function (data) {
        var users = data.drop_off_user;
        for (var i = 0; i < users.length; i++) {
          var user = users[i];
          if (user.username == $('#username').val() && user.password == $('#password').val()) {

            var obj = {
              "username": user.username,
              "valid_date": new Date(user.valid_date)
            };

            console.log(obj,'obj');

            localStorage.setItem("username", JSON.stringify(obj));
            window.location.href='new-publication-st.html';
            $('#login-err').show().text(' ');
            break;
          } else {
            $('#login-err').show().text('You currently do not have access to this page.');
            continue;
          }
        }
      })
      .fail(function (err) {
        console.log(err, 'fectch fail');
      })
      .always(function () {
        console.log('fetch complete');
      });
      }
  });
});