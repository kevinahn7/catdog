$(function() {
  $("#meow").click(function() {
    $("#bark").next().append("<p><img src=\"img/dog.jpg\" class=\"small\"> Woof<button class=\"delete\">Delete</button></p>");
    $(".delete").click(function() {
      $(this).parent().remove();
    });
  });
  $("#bark").click(function() {
    $("#meow").next().append("<p><img src=\"img/cat.jpg\" class=\"small\"> Meow<button class=\"delete\">Delete</button></p>");
    $(".delete").click(function() {
      $(this).parent().remove();
    });
  });


});
