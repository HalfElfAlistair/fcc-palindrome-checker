function palindromeCheck() {
  let str = document.getElementById("string").value;
  let newArray = [];
  let arrayToCheck = str.toLowerCase().split("");


  for (let i = 0; i < arrayToCheck.length; i++) {
    if ((/\w/.test(arrayToCheck[i])) && !(/_/.test(arrayToCheck[i]))) {
      newArray.push(arrayToCheck[i]);
    }
  }

  let combinedString = newArray.join("");
  let mirrorPoint = combinedString.length / 2;
  let firstHalf = combinedString.slice(0, mirrorPoint);
  let secondHalf = combinedString.slice(mirrorPoint);

  if (firstHalf.length < secondHalf.length) {
      secondHalf = secondHalf.slice(1).split("").reverse().join("");
    } else if (firstHalf.length === secondHalf.length) {
      secondHalf = secondHalf.split("").reverse().join("");
    }

      if (firstHalf === secondHalf) {
        document.getElementById("palindrome").innerHTML = "Yes, that's a palindrome!";
    } else {
      document.getElementById("palindrome").innerHTML = "Sorry, that's not a palindrome.";
    }

    
}