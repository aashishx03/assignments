// Create a counter in javaScript (counts from 30 to 0);

/////////////// USING SET INERVAL

let counter = 30;
function count() {
  console.log(counter);
  if (counter == 0) {
    clearInterval(counting);
    console.log("Counting Complete");
  } else {
    counter--;
  }
}
const counting = setInterval(count, 1000);

////////////// USING SET TIMEOUT
let num = 30;
function count2() {
  console.log(num);
  num--;
}

for (let i = num; i >= 0; i--) {
  setTimeout(count2, i * 1000);
}
