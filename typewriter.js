const sentence = "hello there from lighthouse labs";
let count = 80;

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, count);
  count += 80;

}

setTimeout(() => {
  process.stdout.write("\n");
}, count);


