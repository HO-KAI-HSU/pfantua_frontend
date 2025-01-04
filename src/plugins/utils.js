window.utils = {};

window.utils.deepClone = function (o) {
  return JSON.parse(JSON.stringify(o));
}

window.utils.correctImageRatio = function (section) {
  // ---- 圖片比例
  setTimeout(() => {
    var w = $(section + ' .product-image:first').width();
    $(section + ' .product-image').css('height', w + 'px');
    //    $('.product-image img').css('height', w + 'px');
  }, 100);
}

Array.prototype.remove = function () {
  var what, a = arguments, L = a.length, ax;
  while (L && this.length) {
    what = a[--L];
    while ((ax = this.indexOf(what)) !== -1) {
      this.splice(ax, 1);
    }
  }
  return this;
};

Array.prototype.groupBy = function (prop) {
  return this.reduce(function (groups, item) {
    const val = item[prop]
    groups[val] = groups[val] || []
    groups[val].push(item)
    return groups
  }, {})
};

window.utils.copy = function (input) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(input).then(
      () => {
        console.log("Copied to clipboard successfully.");
      },
      (err) => {
        console.log("Failed to copy the text to clipboard.", err);
      }
    );
  } else if (window.clipboardData) {
    window.clipboardData.setData("Text", input);
  }
};