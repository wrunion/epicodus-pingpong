$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    var number = parseInt($("#number").val());
    // alert(number);
    var i;
    for (i = 1; i <= number; i++) {
      if (i % 15 === 0) {
      $("#result").append("<li>"+ "pingpong" + "</li>");
      } else if (i % 3 === 0) {
        $("#result").append("<li>"+ "ping" + "</li>");
      } else if (i % 5 === 0) {
        $("#result").append("<li>"+ "pong" + "</li>");
      } else
       $("#result").append("<li>"+ i + "</li>"); }
    event.preventDefault();
  });
});
