
var letters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];




//list of words in arry
var randomWordArry = ["FOOD", "CHICKEN", "OCEAN"];
//chose random word
var randomWord =
  randomWordArry[Math.floor(Math.random() * randomWordArry.length)];
//empty score guesses
console.log(randomWord);

var s;
var count = 0;
var answerArray = [];

// fill the answer array with  the under-scores "_"
function starUp() {
  for (var i = 0; i < randomWord.length; i++) {
    answerArray[i] = "_";
  }
  //put them in a string
  s = answerArray.join(" ");
  document.getElementById("answer").innerHTML = s;

  console.log((s = answerArray.join(" ")));
}


$(document).ready(function() {
  //list of words

  for (var i = 0; i < letters.length; i++) {
    var letterBtn = $("<button>");

    letterBtn.addClass("letter-button letter letter-button-color");
    letterBtn.attr("data-letter", letters[i]);
    letterBtn.text(letters[i]);
    letterBtn.click(Letter);

    $("#buttons").append(letterBtn);
  }
});


function Letter() {
  // var letter = document.getElementById("buttons").value;
  var letter = $(this).data("letter");
  console.log(letter);
  console.log(this);

    // compare 
  if (letter.length > 0) {
    for (var i = 0; i < randomWord.length; i++) {
      if (randomWord[i] === letter) {
        answerArray[i] = letter;
        console.log(i);
      }
    }
    //increment the count++
    //display .getElementById("counter").innerHTML = "No Match:" + count; "counter"
    count++;
    document.getElementById("counter").innerHTML = "Total Try(s):" + count;
    document.getElementById("answer").innerHTML = answerArray.join(" ");
  }
  // 10 * tries
  if (count > 10) {
    document.getElementById("stat").innerHTML = "You LOST!- keep guessing";
  }
}
