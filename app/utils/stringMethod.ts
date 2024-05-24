// src/utils/stringMethods.js
String.prototype.folderFilter = function () {
  return this.replaceAll("-", " ").split(" ").map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(" ");
};
