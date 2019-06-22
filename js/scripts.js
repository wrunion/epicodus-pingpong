// var leapYear = function(inputYear) {
//   if ((inputYear % 4 === 0) && (inputYear % 100 !== 0) || (inputYear % 400 ===  0)) {
//     return true;
//   } else {
//     return false;
//   }
// };

$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    var number = parseInt($("#number").val());
    alert(number);
    var numberArrays = [];
    var i;
    for (i = 1; i <= number; i++) {
      if (i % 3 === 0) {
      $("#result").append("<li>"+ "ping" + "</li>");
    } else
      if (i % 5 === 0) {
        $("#result").append("<li>"+ "pong" + "</li>"); } else
      if (i % 15 === 0) {
        $("#result").append("<li>"+ "pingpong" + "</li>"); }
      else
       $("#result").append("<li>"+ i + "</li>"); }
      // }
    // var result = leapYear(inputYear);
    // $("#result").text(array1);
    event.preventDefault();
  });
});
