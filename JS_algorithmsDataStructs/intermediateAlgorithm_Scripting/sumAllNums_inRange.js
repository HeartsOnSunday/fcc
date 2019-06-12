function sumAll(arr) {
  let newArr = arr.sort(function(a, b) {
    return a - b;
  });
  var initialNum = newArr[0];
  var finalNum = newArr[1];
  var sum = 0;
  for (var i = initialNum; i <= finalNum; i++) {
    sum += i;
  }
  console.log(sum);
  return sum;
}

sumAll([1, 4]);
sumAll([10, 4]);
sumAll([5, 10]);
