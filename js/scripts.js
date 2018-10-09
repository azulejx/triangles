var firstSide = "";
var secondSide = "";
var thirdSide = "";

function Triangle(first, second, third) {
  this.firstSide = first;
  this.secondSide = second;
  this.thirdSide = third;
}

Triangle.prototype.triangleNames = function() {
  if (firstSide === secondSide && firstSide === thirdSide){
    return "Equilateral triangle!"
  }

  else if (firstSide + secondSide <= thirdSide || firstSide + thirdSide <= secondSide || secondSide + thirdSide <= firstSide){
    return "This is not a triangle! Try again"
  }

  else if (firstSide === secondSide || firstSide === thirdSide || secondSide === thirdSide && firstSide + secondSide > thirdSide){
    return "Isosceles triangle!"
  }

  else if (firstSide === secondSide || firstSide === thirdSide || secondSide === thirdSide && firstSide + thirdSide > secondSide){
    return "Isosceles triangle!"
  }

  else if (firstSide === secondSide || firstSide === thirdSide || secondSide === thirdSide && secondSide + thirdSide > firstSide){
    return "Isosceles triangle!"
  }

  else if (firstSide !== secondSide && firstSide !== thirdSide && secondSide !== thirdSide){
    return "Scalene triangle!"
  }

  else {
    return "What did you do?! This is an error"
  }

}

$(document).ready(function() {
  $("form#new-triangle").submit(function(event) {
    event.preventDefault();

    var firstSide = parseInt($("input#new-first-side").val());
    var secondSide = parseInt($("input#new-second-side").val());
    var thirdSide = parseInt($("input#new-third-side").val());

    var newTriangle = new Triangle(firstSide, secondSide, thirdSide);

    $("ul#triangles").append("<li><span class='result'>" + newTriangle.triangleNames() + "</span></li>");

    $(".result").last().click(function() {
      $("#show-triangle").show();
      $("#show-triangle h2").text(newTriangle.triangleNames);
      $(".first-side").text(newTriangle.firstSide);
      $(".second-side").text(newTriangle.secondSide);
      $(".third-side").text(newTriangle.thirdSide);
    });
  });
});
