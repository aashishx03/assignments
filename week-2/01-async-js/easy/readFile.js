const fs = require("fs");

fs.readFile("./a.txt", "utf-8", (err, data) => {
  console.log(data);
});

sum = 0;
for (let i = 0; i < 1000; i++) {
  sum += i;
  return sum;
}
console.log(sum);
