function forEach(callback, thisArg) {
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }

  for (let i = 0; i < this.length; i++) {
    callback.call(thisArg, this[i], i, this);
  }
}

if (!Array.prototype.forEach) {
  Array.prototype.forEach = forEach;
}
//example
[1, 2, 3].forEach((a, index, arr) => {
  console.log(a, index, arr);
});
