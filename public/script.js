function checkUsername() {
  var username = $("#username").val();

  if (username.length < 3) {
      $("#result").html("<span style='color: red;'>Username too short</span>");
      return;
  }

  $.ajax({
      url: "/check-username",
      type: "POST",
      data: { username: username },
      success: function (response) {
          if (response.available) {
              $("#result").html("<span style='color: green;'>Username available</span>");
          } else {
              $("#result").html("<span style='color: red;'>Username taken</span>");
          }
      },
      error: function () {
          $("#result").html("<span style='color: red;'>Error checking username</span>");
      }
  });
}
