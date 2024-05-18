Array.prototype.moveToFront = function (predicate) {
  const index = this.findIndex(predicate);
  if (index !== -1) {
    const [item] = this.splice(index, 1);
    this.unshift(item);
  }
};
Array.prototype.moveToBack = function (predicate) {
  const index = this.findIndex(predicate);
  if (index !== -1) {
    const [item] = this.splice(index, 1);
    this.push(item);
  }
};