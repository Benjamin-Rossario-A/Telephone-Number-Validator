const userInput = document.getElementById("user-input"); //used to receive input from the user.
const result = document.getElementById("results-div"); // used to display the result to the user.
const checkBtn = document.getElementById("check-btn"); // used to take the input when the user has finished entering the input.
const clearBtn = document.getElementById("clear-btn"); // used to clear the previous output which are displayed.

const checkValidNumber = (input) => {
  if (input == "") {
    // If the input given by the user is empty then an alert message is sent to the user.
    alert("Please provide a phone number");
    return;
  }
  const countryCode = "^(1\\s?)?";
  //regex used for matching the country code. For US the country code is 1. It can be given by user and also not by the user. The user may or may not give space. Even the entire thing can also be skipped by the user. Thats why it is optional.
  const areaCode = "(\\([\\d]{3}\\)|[\\d]{3})";
  //The next three numbers represent the area code of the phone number. They can also be represented with in brackets or without brackets.
  const spaces = "[\\s\\-]?";
  //Before phone code some user may leave space or type "-" in order to separate the remaining from phone code.
  const phoneCode = "[\\d]{3}([\\s\\-]?)[\\d]{4}$";
  //The phone consists of 7 numbers. They can be represented like 555-5555 or 5555555 or 555 5555. All these cases are valid. Other than these cases are not valid.
  const phoneRegex = new RegExp(
    `${countryCode}${areaCode}${spaces}${phoneCode}`
  );
  /*In phone regex the listed regex strings are converted into regex functions with the help of  RegExp object.*/

  const pElement = document.createElement("p"); // A p tag is created to display the output to the user.
  pElement.innerText = `${
    phoneRegex.test(input) ? "Valid" : "Invalid" //the condition returns valid if the regex expression matches with the given input.
  } US  number: ${input}`;
  //Instead of the ternary condition "phoneRegex.test(input)" we can also use "input.match(phoneRegex)". Both of them give the same result.
  pElement.className = "result-text";
  pElement.style.fontSize = "26px";
  pElement.style.textAlign = "center";
  result.appendChild(pElement);
  // The output is appended into the result div. So that it can be dislayed for the user.
};

checkBtn.addEventListener("click", () => {
  checkValidNumber(userInput.value);
  userInput.value = "";
});

userInput.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    checkValidNumber(userInput.value);
    userInput.value = "";
  }
});

clearBtn.addEventListener("click", () => {
  result.replaceChildren();
});
