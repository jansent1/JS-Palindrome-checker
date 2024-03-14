document.addEventListener("DOMContentLoaded", () => {
  // variables for html elements:
  const checkButton = document.getElementById("check-btn");
  const textInput = document.getElementById("text-input");
  const resultDiv = document.getElementById("result");

  checkButton.addEventListener("click", () => {
    const inputValue = textInput.value.trim();
    if (inputValue === "") {
      alert("Please input a value.");
      return; //prevent further execution if field is empty
    }

    const isPalindrome = palindrome(inputValue);
    const resultMessage = isPalindrome
      ? `${inputValue} is a palindrome.`
      : `${inputValue} is not a palindrome.`;

    resultDiv.textContent = resultMessage; // content for the result div
  });
});

function palindrome(str) {
  let formatted = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  let reversed = [...formatted].reverse().join("");
  console.log(formatted);

  return formatted == reversed;
}

console.log(palindrome("five|_/|four"));
