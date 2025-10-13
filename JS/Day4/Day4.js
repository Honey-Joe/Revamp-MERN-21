var setI;
var count = 0;
setI = setInterval(() => {
  count = count + 1;
  console.log(count);
}, 1000);

setTimeout(() => {
  console.log("Over time");
  clearInterval(setI);
}, 5000);
