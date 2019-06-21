function factorialize(num) {
  //calculat factorial
  let newNum = 1;
  for (let i = 1; i <= num; i++) {
    newNum *= i;
    //console.log(`Multiplying by ${i}`);
    //console.log(`${newNum}`);
  }
  num = newNum;
  return num;
}

factorialize(5);
