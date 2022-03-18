/** @format */

const fs = require("fs");

//CREATE
fs.appendFile(
  "NodeJS-Patikası/Odev4/employees.json",
  '{"name": "Employee 1 Name", "salary": 2000}',
  "utf-8",
  (err, data) => {
    if (err) console.log(err);
  }
);
//READ
fs.readFile("NodeJS-Patikası/Odev4/employees.json", "utf-8", (err, data) => {
  if (err) console.log(err);
  console.log(data);
});

//UPDATE
fs.writeFile(
  "NodeJS-Patikası/Odev4/employees.json",
  ',{"name": "Employee 2 Name", "salary": 5000}',
  "utf-8",
  (err, data) => {
    if (err) console.log(err);
  }
);

//DELETE
fs.unlink("NodeJS-Patikası/Odev4/employees.json", (err) => {
  if (err) throw err;
  console.log("Dosya Silindi");
});
