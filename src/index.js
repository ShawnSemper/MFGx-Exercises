// Implement the body of the function below & ensure it passes the provided unit tests by running npm run test.
const sum = (arrayOfNumbers) => {
  var result = arrayOfNumbers.reduce(function(a, b){
    return a + b;
}, 0);
  return result;
};

module.exports = {
  sum,
};
