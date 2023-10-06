// ! require('./module/index.js') 
// ! başka bir js dosyasını içe aktarmak için 
// ! require('./module/index')

/* --------------------------------------------------- *
// ? export
const test = require('./module/')
test()
// ? shothand for singlefunction
require('./module/')

/* --------------------------------------------------- *

const test = require('./module/')
test()
// ? shothand for singlefunction
require('./module/')
/* --------------------------------------------------- */
// const [test1,test2,test3] = require('./module/')
// test1(), test2(), test3()


/* --------------------------------------------------- */

//   const {test1,test2,test3} = require('./module/')
  const {test1:newFunc,test2,test3,variable} = require('./module/')
    newFunc(), test2(), test3(),console.log(variable)
/* --------------------------------------------------- */
/* --------------------------------------------------- */
/* --------------------------------------------------- */