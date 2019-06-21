function largestOfFour(arr) {
  let newArr = 0;
  let bigNum = [];
  for (let i = 0; i < arr.length; i++) {
    newArr = arr[i][0];
    for (let j = 1; j < arr[i].length; j++) {
      if (arr[i][j] > newArr) {
        // console.log(`${arr[i][j]}`);
        bigNum.push(arr[i][j]);
      } else {
        //console.log(`${arr[i][j - 1]}`);
        // newArr.push(arr[i][j]);
      }
      // console.log(newArr);
      console.log(`the bigger number: ${bigNum}`);
      bigNum = [];
    }
  }
  console.log(newArr);
  // You can do this!
  return arr;
}

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1]
]);
//incorrectly pushing lower numbers!
