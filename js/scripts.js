var leapYear = function(inputYear) {
  if ((inputYear % 4 === 0) && (inputYear % 100 !== 0) || (inputYear % 400 ===  0)) {
    return true;
  } else {
    return false;
  }
};

$(document).ready(function() {
  $("#leap-year").submit(function(event) {
    var inputYear = parseInt($("#year").val());
    // alert(inputtedYear);
    var result = leapYear(inputYear);
    $("#result").text(result);
    event.preventDefault();
  });
});
