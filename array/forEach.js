function forEach(callback, thisArg) {
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }

  for (let i = 0; i < this.length; i++) {
    callback.call(thisArg, this[i], i, this);
  }
}

if (!Array.prototype.my) {
  Array.prototype.my = forEach;
}

[1, 2, 3].my((a, index, arr) => {
  console.log(a, index, arr);
});
