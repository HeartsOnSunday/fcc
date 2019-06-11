function sumAll(arr) {
  //Identify components
  let newArr = arr.sort(function(a, b) {
    return a - b;
  });
  var sum = 0;
  //console.log(`Value Starts At ${newArr[0]}`);
  for (var i = newArr[0]; i < newArr[1] + 1; i++) {
    sum += Number(i);
    // console.log(`The sum is now ${sum}`);
  }
  console.log(sum);
  return sum;
}
/*
  function sumRange(less, greater) {
    var sum = less;
    counter = greater - less;
    for (counter; counter > 0; counter--) {
      let addition = less;
      sum += Number(addition + counter);
    }
    console.log(sum);
    return sum;
  }
  //sort numbers from the array
  if (num1 > num2) {
    sumRange(num2, num1);
  } else {
    sumRange(num1, num2);
  }
*/
sumAll([1, 4]);
sumAll([10, 4]);
sumAll([5, 10]);
