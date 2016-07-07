

$(function() {
  $("#options form").submit(function(event) {
  event.preventDefault();
  var movie = $("input:radio[name=movie]:checked").val();
  var age = $("input:radio[name=age]:checked").val();
  var time = $("input:radio[name=time]:checked").val();
  console.log(movie, age, time);


  });
});
