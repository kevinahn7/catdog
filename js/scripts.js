$(function() {
  $("#meow").click(function() {
    $("#bark").after("<p>bark</p>");
  });
  $("#bark").click(function() {
    $("#meow").after("<p>Meow</p>");
  });
});
