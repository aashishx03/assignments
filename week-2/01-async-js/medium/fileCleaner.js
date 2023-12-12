const fs = require("fs");

// const data = fs.readFileSync("./demo.txt", "utf-8");

// console.log(typeof data);

function removeSpaces(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "_" && str[i - 1] != "_") {
      newStr += str[i];
    } else if (str[i] == "_") {
      continue;
    } else {
      newStr += str[i];
    }
  }
  return newStr;
}

fs.readFile("./demo.txt", "utf-8", (err, data) => {
  const content = data;
  const newContent = removeSpaces(content);
  fs.writeFile("./demo.txt", newContent, (err, data) => {
    console.log("Data is Written SuccessFully");
  });
});
