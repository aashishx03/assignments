const fs = require("fs");

textContent = "HI this is Aashish";

fs.writeFile("./a.txt", textContent, (err, data) => {
  console.log("File Written");
});

fs.readFile("./a.txt", "utf-8", (err, data) => {
  console.log(data);
});
