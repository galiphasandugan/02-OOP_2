"use strict";

/* -------------------------------------------------------
    MODULES
------------------------------------------------------- */

// console.log('İndex.js çalıştı')

module.exports = function () {
  console.log("İndex.js çalıştı");
};
//  ! module.export aktarma kodumuz başka dosyaların kullanımına açıyorum

/* --------------------------------------------------- *

const test1 = function () {
  console.log("test1 çlıştı");
};
const test2 = function () {
  console.log("test2 çlıştı");
};
const test3 = function () {
  console.log("test3 çlıştı");
};

// module.exports = [
//     test1,test2,test3
// ]

// module.exports = {test1,test2,test3}
//
//


// ! key ismi ile value ynı ise kısyolu var
module.exports = {
  test1: test1,
  test2: test2,
  test3: test3,
};
// ! Kısayolu bu
module.exports = {
    test1,
    test2,
    test3,
  };


/* --------------------------------------------------- */

module.exports.test1 = function () {
    console.log("test1 çlıştı");
  };
module.exports.test2 = function () {
    console.log("test2 çlıştı");
  };
module.exports.test3 = function () {
    console.log("test3 çlıştı");
  };

module.exports.variable = 'new-value'


/* --------------------------------------------------- */
/* --------------------------------------------------- */
/* --------------------------------------------------- */
/* --------------------------------------------------- */
