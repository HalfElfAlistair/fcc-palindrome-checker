function palindromeCheck() {

// acquires string value from html input

  let str = document.getElementById("string").value;

// establishes a version of the str for the next stage and seperates each character.

  let arrayToCheck = str.toLowerCase().split("");

// assigns empty array to push relevant character values to

  let newArray = [];

// iterates through arrayToCheck and pushes any letters or digits to newArray


  for (let i = 0; i < arrayToCheck.length; i++) {
    if ((/\w/.test(arrayToCheck[i])) && !(/_/.test(arrayToCheck[i]))) {
      newArray.push(arrayToCheck[i]);
    }
  }

  // joins data back into a string without spaces and halves it so the halves can be compared

  let combinedString = newArray.join("");
  let mirrorPoint = combinedString.length / 2;
  let firstHalf = combinedString.slice(0, mirrorPoint);
  let secondHalf = combinedString.slice(mirrorPoint);

// checks to see if string halves are same length, removes the additional character that would be the middle point in the full string. Reverses the second half so they can be compared correctly.

  if (firstHalf.length < secondHalf.length) {
      secondHalf = secondHalf.slice(1).split("").reverse().join("");
    } else if (firstHalf.length === secondHalf.length) {
      secondHalf = secondHalf.split("").reverse().join("");
    }

// performs check to see if both halves are identical and returns respective message.

      if (firstHalf === secondHalf) {
        document.getElementById("palindrome").innerHTML = "Yes, that's a palindrome!";
    } else {
      document.getElementById("palindrome").innerHTML = "Sorry, that's not a palindrome.";
    }

    
}