/** @format */
const PI = 3.14;
function circleArea(r) {
  console.log("Area:", PI * r * r);
}

function circleCircumference(r) {
  console.log("Circumference", 2 * PI * r);
}

module.exports = {
  circleArea,
  circleCircumference,
};
