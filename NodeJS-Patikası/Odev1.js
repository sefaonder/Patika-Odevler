/** @format */

const arguments = process.argv.slice(2);

const PI = 3.14;

function findRadioField(r) {
  console.log(PI * r * r);
}

findRadioField(arguments[0] * 1);
