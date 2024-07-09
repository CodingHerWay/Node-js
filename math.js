/*function add(a,b) {
  return a+b;
}   

function sub(a,b) {
  return a-b;
}*/
   
   
//single or default export
//we can use this only one time
//module.exports = {add, sub};

//use of export objects

exports.add = (a,b) => a+b;
exports.sub = (a,b) => a-b;