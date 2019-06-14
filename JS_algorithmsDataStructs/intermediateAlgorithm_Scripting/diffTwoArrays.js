function diffArray(arr1, arr2) {
  var newArr = [];
  let mergedArr = arr1.concat(arr2);
  mergedArr.sort();
  console.log(mergedArr);
  for (let i = 0; i < mergedArr.length; i++) {
    if (mergedArr[i] == mergedArr[i + 1]) {
      console.log(`${mergedArr[i]} from index ${i} and ${i + 1}`);
    } else {
      console.log(`push number ${mergedArr[i]} to newArr`);
    }
  }
  console.log(`${mergedArr}`);
}

//   //console.log(mergedArr);
//   //iterate through elements in mergedArr
//   for (var i = 0; i < arr1.length; i++) {
//     // console.log(`${arr2.indexOf(arr1[i])}`);
//     if (arr2.indexOf(arr1[i]) == -1) {
//       console.log(`push ${arr1[i]} to newArr`);
//       newArr.push(arr1[i]);
//     } else {
//       for (var j = 0; j < arr2.length; j++) {
//         console.log(`${arr1[i]} and ${arr2[j]}`);
//         if (arr1.indexOf(arr2[j]) == -1) {
//           console.log(`push ${arr2[j]} to newArr`);
//           newArr.push(arr2[j]);
//         }
//       }
//     }
//   }
//   console.log(`${newArr}`);
//   return newArr;
// }

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// function diffArray(arr1, arr2) {
//   var newArr = [];
//   let mergedArr = arr1.concat(arr2);
//   //console.log(mergedArr);
//   //iterate through elements in mergedArr
//   for (var i = 0; i < arr1.length; i++) {
//     // console.log(`${arr2.indexOf(arr1[i])}`);
//     if (arr2.indexOf(arr1[i]) == -1) {
//       console.log(`push ${arr1[i]} to newArr`);
//       newArr.push(arr1[i]);
//     } else {
//       for (var j = 0; j < arr2.length; j++) {
//         console.log(`${arr1[i]} and ${arr2[j]}`);
//         if (arr1.indexOf(arr2[j]) == -1) {
//           console.log(`push ${arr2[j]} to newArr`);
//           newArr.push(arr2[j]);
//         }
//       }
//     }
//   }
//   console.log(`${newArr}`);
//   return newArr;
// }

// diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// function diffArray(arr1, arr2) {
//   var newArr = [];
//   //merge arrays
//   let mergedArr = arr1.concat(arr2);
//   console.log(mergedArr);
//   //iterate through the array
//   //compare each number with another number in an array
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < mergedArr.length; j++) {
//       if (arr1[i] == mergedArr[j]) {
//         for (let k = 0; k < arr2.length; k++) {
//           if (arr1[i] == arr2[k]) {
//             console.log(`Remove index: ${j} from array ${mergedArr[j]}`);
//             mergedArr.splice(mergedArr[j], 1);
//           }
//         }
//       }
//     }
//   }
//   //if there are two matches then remove the number
//   console.log(mergedArr);
//   return newArr;
// }

// diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
