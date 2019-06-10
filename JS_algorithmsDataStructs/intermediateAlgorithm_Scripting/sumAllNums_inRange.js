function sumAll(arr) {
  //Identify components
  let num1 = arr[0];
  let num2 = arr[1];
  //console.log(`first ${num1}`);
  //console.log(`second ${num2}`);
  function sumRange(less, greater) {
    var sum = less;
    counter = greater - less;
    for (counter; counter > 0; counter--) {
      console.log(`calculation`);
    }
  }
  //sort numbers from the array
  if (num1 > num2) {
    //console.log(`num1: ${num1} is larger than ${num2}`);
    sumRange(num2, num1);
  } else {
    //console.log(`num2: ${num2} is larger than ${num1}`);
    sumRange(num1, num2);
  }

  return 1;
}

sumAll([1, 4]);
sumAll([4, 1]);
sumAll([5, 10]);
sumAll([10, 5]);
/*

Receive numbers 
numbers are in an array (1st, 2nd)
return sum of all numbers from and inclding the 1st and 2nd numbers


determine which is larger

if(1st > 2nd)
start at value of 2nd 
Initiate a counter
var sumz = 0;
sumz += [2nd + i] counter!

reverse logic

if (2nd)
*/
