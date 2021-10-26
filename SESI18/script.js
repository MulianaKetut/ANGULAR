$(document).ready(function () {
  $("#title").click(function () {
    alert("Saya klik page title");
  });

  $("#submitButton").click(function (e) {
    e.preventDefault();

    let username = $("#username").val();
    alert("Hallo, " + username);
  });

  $(".page-box:first").addClass("btn-info");
});
