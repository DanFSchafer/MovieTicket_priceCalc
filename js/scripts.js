function Ticket(age, name, time, cost) {
  this.age = age;
  this.name = name;
  this.time = time;
}
Ticket.prototype.cost = function() {
  currentCost = 0
  if (this.time === "matinee") {
    currentCost = 4;
  } else {
      currentCost = 6;
  }
  if (this.age === "youth") {
    currentCost += 1;
  } else if (this.age === "adult") {
    currentCost += 3;
  } if ((this.name === "movie2") || (this.name === "movie3")) {
    currentCost +=2;
  }
  return currentCost;

}

$(function() {
  $("#options form").submit(function(event) {
  event.preventDefault();
  var name = $("input:radio[name=movie]:checked").val();
  var age = $("input:radio[name=age]:checked").val();
  var time = $("input:radio[name=time]:checked").val();
  console.log(name, age, time);

  var newTicket = new Ticket(age, name, time);
  console.log (newTicket);

  newTicket.cost();
  console.log(newTicket.cost());
});
});
