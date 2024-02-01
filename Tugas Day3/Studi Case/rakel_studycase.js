function isPalindrome(str) {
    const cleanedStr = str.toLowerCase().replace(/[\W_]/g, "");
    return cleanedStr === cleanedStr.split("").reverse().join("");
  }
  
  function checkPalindrome() {
    const inputText = document.getElementById("inputText").value;
    const resultDiv = document.getElementById("result");
  
    if (inputText.trim() === "") {
      resultDiv.innerHTML = "Please enter a word or phrase.";
      return;
    }
  
    if (isPalindrome(inputText)) {
      resultDiv.innerHTML = `"${inputText}" is TRUE`;
    } else {
      resultDiv.innerHTML = `"${inputText}" is FALSE`;
    }
  }
  