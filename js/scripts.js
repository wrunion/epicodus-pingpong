var resultArray = [];

// function empty() {
//   resultArray.clear();
// }

$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {

    var number = parseInt($("#number").val());

    var i;
    for (i = 1; i <= number; i++) {
      if (i % 15 === 0) {
        resultArray.push("pingpong");
      } else if (i % 3 === 0) {
        resultArray.push("ping");
      } else if (i % 5 === 0) {
        resultArray.push("pong");
      } else
       resultArray.push(i); }

      resultArray.forEach(function(element) {
        $("#result ul").append("<li>" + element + "</li>");
      });
    event.preventDefault();
    $("form").trigger('reset');
  });
  $("button#reset").click(function(event) {
   location.reload();
  });
});
