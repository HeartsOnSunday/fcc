function reverseString(str) {
  //use str and .split("") to split by each letter.
  let splitstr = str.split("");
  console.log(splitstr);
  //check data type = = = Obj;
  let tempArr = [];
  splitstr.forEach(s => {
    //console.log(`each letter ${s}`);
    tempArr.push(s);
    //push char to an array
    //.push()- - - most effective order? must be converted in to a string.
  });
  console.log(`The temporary Array joined to a string ${tempArr.join("")}`);
  return str;
}

reverseString("hello");
