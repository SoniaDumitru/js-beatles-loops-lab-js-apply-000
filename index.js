// add solution here
function theBeatlesPlay(arrayOfMusicians, arrayOfInstruments) {
  var newArray = [];
  for (let i=0; i<arrayOfMusicians.length; i++) {
      newArray.push(arrayOfMusicians[i] + "plays" + arrayOfInstruments[i])
    }
  return newArray;
}
function johnLennonFacts(facts) {
  let newArray =[];
  let i=0;
 while (facts.length>i) {
   newArray.push(facts[i] + "!!!");
   i++:
 }
 return newArray;
}
function iLoveTheBeatles(number) {
  let newArray =[];
  do {
    newArray.push("I love the Beatles!")
  number++;
}
  while (number < 15)
  return newArray;
}
