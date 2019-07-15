var locations = [
  "Library",
  "Study Room",
  "SU",
  "Starbucks",
  "Tower Lawn",
  "BBC",
  "DC",
  "SRAC",
  "Boba Shop",
  "Apartment",
  "House (Sorority or Frat)",
  "Caffe Frascati",
  "Philz"
];

var button = document.getElementById ('display');

button.addEventListener("click", function() {
  var total = randNum(locations);
  changeLocation(total);
})

function randNum(array){
  var randDeci = Math.random()* array.length;
  var randOne = Math.floor(randDeci);
  return randOne;
  console.log(randOne);
};

randNum(locations);

function changeLocation (someNum) {
  var newLocation = document.getElementById('t');
  newLocation.innerHTML = locations[someNum];
};


// var loc = document.getElementById("display");
// loc.addEventListener("click", function(){
// var n = n1(location);
  // document.getElementById("text").innerHTML = location[n];
  // changeImg(n);
// });

//
// function randNum(array){
// var randDeci = Math.random ();
// var randBig = randDeci * array.length;
// var random = Math.floor (randBig);
// console.log(random);
// return random
// // }
// //Test to see if the random number generator works
// function changeImg(someNum){
// var dieImg = document.getElementById('dieImage');
// dieImg.src = diceFaces [someNum] ;
// }
