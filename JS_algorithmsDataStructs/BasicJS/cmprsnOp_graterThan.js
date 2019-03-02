function testGreaterOrEqual(val) {
    if (val >= 20) {  // Change this line
    console.log("A");
      return "20 or Over";
    }
    
    if (val >= 10) {  // Change this line
    console.log("B");
      return "10 or Over";
    }
    console.log("C");
    return "Less than 10";
  }
  
  // Change this value to test
  testGreaterOrEqual(10);
