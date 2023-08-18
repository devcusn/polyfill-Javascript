function filter(callback, context) {
  var arr = [];

  for (i = 0; i < this.length; i++) {
    if (callback.call(context, this[i], i, this)) {
      arr.push(this[i]);
    }
  }
  return arr;
}

if (!Array.prototype.filter) {
  Array.prototype.filter = filter;
}

const arrData = [10, 24, 13, 17, 19, 23, 14, 21];
arrData.filter((element) => {
  return element % 2 === 0;
});
