// This function is called when the user wants to calculate the love percentage.
function calculate() {
  // Retrieve the value entered in the "yourName" input field and store it in the variable "yourName".
  var yourName = document.getElementById("yourName").value;

  // Capitalize the first letter of "yourName" and convert the rest of the characters to lowercase.
  var capitalizeFirstLetter =
    yourName[0].toUpperCase() + yourName.slice(1).toLowerCase();

  // Retrieve the value entered in the "crushName" input field and store it in the variable "crushName".
  var crushName = document.getElementById("crushName").value;

  // Call the "calculatePercentage" function with the corrected names and store the result in the variable "percentage".
  var percentage = calculatePercentage(capitalizeFirstLetter, crushName);

  // Retrieve the div element with id "result" and store it in the variable "resultDiv".
  var resultDiv = document.getElementById("result");

  // Set the inner HTML of "resultDiv" to display the calculated love percentage.
  resultDiv.innerHTML = "Love percentage: " + percentage + "%";
}

// This function calculates the love percentage based on the combined names.
function calculatePercentage(yourName, crushName) {
  // Concatenate "yourName" and "crushName" to form a single string.
  var combinedName = yourName + crushName;

  // Initialize a variable to store the total sum of ASCII values.
  var total = 0;

  // Loop through each character in the combined name.
  for (var i = 0; i < combinedName.length; i++) {
    // Add the ASCII value of each character to the total sum.
    total += combinedName.charCodeAt(i);
  }

  // Calculate the love percentage by taking the remainder of the total sum divided by 101, limiting it to 100%.
  var percentage = total % 101;

  // Return the calculated love percentage.
  return percentage;
}
