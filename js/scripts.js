function getTriangle(sideA, sideB, sideC) {
  // sides cannot be 0 and one side cannot be longer than the other
  // two combined
  if (sideA === 0 || sideB === 0 || sideC === 0 ||
      sideA + sideB < sideC || sideB + sideC < sideA ||
      sideA + sideC < sideB) {
    return "not a triangle";
  } else if (sideA === sideB && sideA === sideC) {
    return "equilateral";
  } else if (sideA === sideB || sideA === sideC || sideB === sideC) {
    return "isosceles";
  } else {
    return "scalene";
  }
}


jQuery(document).ready(function() {
  $("#sideA").focus();
  $("#triangle").submit(function(event) {
    var sideA = parseInt($("#sideA").val());
    var sideB = parseInt($("#sideB").val());
    var sideC = parseInt($("#sideC").val());
    var result = getTriangle(sideA, sideB, sideC);
    $("#triangle-type").text(result);
    $("#result").show();
    event.preventDefault();
  });
});
