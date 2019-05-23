// Setup
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
if (prop !== "tracks" && value){

  // console.log(`Album ID no. ${id} with ${prop}, and value ${value}`)
  // if(id.props == "tracks" && !value == ""){
   console.log("Add to Record Collection");
   collectionCopy[id][0] = { prop: value };
   //collection[id].push(value);
   console.log(collectionCopy[id][0]); // Derp
}
  else {
    console.log("go watch game of thrones");
  };
  console.log(`Prop: ${prop}`);
  console.log(`Value ${value}`);

  return collection;
};

// Alter values below to test your code
updateRecords(5439, "artist", "ABBA");

updateRecords(2468, "tracks", "cinnamon girl");

/*
copy of object ["name of new property"] = value of new property
ADD NEW PROPERTY TO THHE OBJECT
*/