var fibonacci = function(input) {
  
  if (input === 1) {
    return 0;
  } else if (input === 2) {
      return 1;
  } else {
       return fibonacci(input - 1) + fibonacci(input - 2);
    }
  
  return result;
};

// w/o recursion
// var fibonacci = function(input) {  
//   var resultArray = [0, 1];
//   for (var i = 2; i != input + 2; i++) {
//     resultArray.push(resultArray[i - 1] + resultArray[i - 2]);
//     console.log(resultArray)
//   }
//   return resultArray[input - 1];

// };
