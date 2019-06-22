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
    for (i = 0; i <= number; i++) {
      $("#result").append("<li>"+ i + "</li>");
    }
    // var result = leapYear(inputYear);
    // $("#result").text(array1);
    event.preventDefault();
  });
});
