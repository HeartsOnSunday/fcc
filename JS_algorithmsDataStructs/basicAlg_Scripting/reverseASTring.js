function reverseString(str) {
  //use str and .split("") to split by each letter.
  let splitstr = str.split("");
  console.log(splitstr);
  //check data type = = = Obj;
  let tempArr = [];
  let indexes = splitstr.length - 1;
  for (let i = indexes; i >= 0; i--) {
    console.log(`The index ${i} and the character ${splitstr[i]}`);
    tempArr.push(splitstr[i]);
  }
  //console.log(`${tempArr.toString()}`);
  //console.log(`each letter ${s}`);
  /* 
    console.log(splitstr.indexof(s));
    tempArr.slice(1, 0, s);
    */

  //push char to an array
  //.push()- - - most effective order? No, order returned is the same
  //use splice to push item of array back into an array?
  //Splice - - inserting or replacing?

  // use .jon() to return answer as a string
  str = tempArr.join("");
  console.log(`${str}`);
  //console.log(typeof str);
  return str;
}

reverseString("hello");
