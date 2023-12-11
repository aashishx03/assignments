let count = 0;

function counter() {
  count++;
  console.log(count);
}

for (let i = 0; i < 10; i++) {
  setTimeout(counter, i * 1000);
}
