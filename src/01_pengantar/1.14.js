// let number = 1;

// // 500 lines later

// // let with same name redeclared is an error
// let number = 2;


// let echoer = function(message) {
//   // Reusing function argument name as let is an error
//   let message = "Local message"; //Duplicate declaration "message"
//   console.log(message);
//   return message;
// }

// echoer("Hello there!");



var number = 1;

// 500 lines later

// let with same name redeclared is an error
var number = 2;


var echoer = function(message) {
  // var with argument name is valid 
  // gets overwritten
  var message = "Local message"; 
  console.log(message);
  return message;
}

echoer("Hello there!");