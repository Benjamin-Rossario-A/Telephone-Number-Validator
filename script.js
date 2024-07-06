const userInput = document.getElementById("user-input");
const result = document.getElementById("results-div");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");

const checkValidNumber = (input) => {
  if (input == "") {
    alert("Please provide a phone number");
    return;
  }
  const countryCode = "(^1\\s?)?";
  const areaCode = "(\\([\\d]{3}\\)|[\\d]{3})";
  const spaces = "([\\s\\-])?";
  const phoneCode = "[\\d]{3}[\\s\\-]?[\\d]{4}$";
  const phoneRegex = new RegExp(
    `${countryCode}${areaCode}${spaces}${phoneCode}`
  );

  if (/*input.match(phoneRegex)*/ phoneRegex.test(input)) {
    console.log("true");
  } else {
    console.log("false");
  }
  console.log(phoneRegex);
};

checkValidNumber("1 555-555-5555");
