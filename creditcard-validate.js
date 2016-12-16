window.onload = function () {
  // Get the submit button and the credit card form field elements and
  // save them to variables to work with later
  var submitButton = document.querySelector("button[type=submit]");
  var ccFormElement = document.getElementById("ccform");
  // Get the different form field elements and save them to variables
  // to validate them later
  var ccNameElement = document.getElementById("name_on_card");
  var ccNumberElement = document.getElementById("card_number");
  var ccExpMonthElement = document.getElementById("exp_month");
  var ccExpYearElement = document.getElementById("exp_year");
  var ccCSVElement = document.getElementById("csv");
  // Attach a click event listener to the submit button
  submitButton.addEventListener('click', function(event) {
    // Call the validateFields function when the
    // submit button is clicked
    validateFields();
  });
  // Attach a submit event listener to the submit button
  ccFormElement.addEventListener('submit', function(event) {
    // Prevent the default operation of sending the form
    // when clicked as this is not needed here
    event.preventDefault();
    // Alert that the form is validated since the submit event successfully
    // completed at this point.
    alert("This form validates!");
  });
  // The validateFields functions check different criteria for the different
  // credit card form fields and sets the respective validity states for each
  // element depending on the result
  function validateFields() {
    // Obtain the input values for the Name and CSV fields, split their strings
    // into an array of their characters and save them to variables
    var ccNameSplit =  ccNameElement.value.split("");
    var ccCSVSplit = ccCSVElement.value.split("");
    // Create an array of only letters, space and period for acceptable Name
    // field inputs
    var alphaStrings = ["a","b","c","d","e","f","g","h","i","j","k","l",
                            "m","n","o","p","q","r","s","t","u","v","w","x",
                            "y","z","A","B","C","D","E","F","G","H","I","J",
                            "K","L","M","N","O","P","Q","R","S","T","U","V",
                            "W","X","Y","Z", " ", "."];
    // Create an array of only numbers for acceptable CSV field inputs
    var digitsStrings = ["0,","1","2","3","4","5","6","7","8","9"];
    // Initialize false flags for the alpha and digit string arrays
    var specialCharFlag = false;
    var nonDigitFlag = false;
    // If the name field has a length greater than zero...
    if ( ccNameSplit.length > 0 ) {
      // ...for each character in the name field input...
      for (var i = 0; i < ccNameSplit.length; i++) {
        // ...check if the current character is NOT found in the alphaStrings
        // array
        if ( alphaStrings.indexOf(ccNameSplit[i]) === -1 ) {
          // set the specialCharFlag flag to true if it is NOT found
          specialCharFlag = true;
        }
      }
    }
    // If the CSV field has a length greater than zero...
    if ( ccCSVSplit.length > 0 ) {
      // ...for each character in the csv field input...
      for (var i = 0; i < ccCSVSplit.length; i++) {
        // ...check if the current character is NOT found in the digitsStrings
        // array
        if ( digitsStrings.indexOf(ccCSVSplit[i]) === -1 ) {
          // set the nonDigitFlag to true if it is NOT found
          nonDigitFlag = true;
        }
      }
    }
    // If the name field is empty...
    if ( validator.isEmpty(ccNameElement.value) ) {
      // ...display a custom message to user for the name on their card
      ccNameElement.setCustomValidity("Please enter your name as it appears on"+
        " your card.");
      // ...else if the name input field is less than 3 characters...
    } else if ( ccNameElement.value.length < 3 ){
      // ...display a custom message notifying that their name should be longer
      ccNameElement.setCustomValidity("Surely your full name must be more than"+
        " two characters long.");
      // ...else if a special character was found in the input...
    } else if ( specialCharFlag ) {
      // ...display a custom message that special characters can't be in names
      ccNameElement.setCustomValidity("Sorry but real names don't have special"+
        " characters in them.  Please remove any special characters.");
      // ...else if the input has leading, trailing or extra spaces in input...
    } else if ( !validator.isTrimmed(ccNameElement.value) ) {
      // ...display a custom message to remove leading, trailing or extra spaces
      ccNameElement.setCustomValidity("There seems to be too many spaces in " +
        "your name.  Please remove excess spaces.");
      // ...else, reset the validity state of the name input element to valid
    } else {
      ccNameElement.setCustomValidity("");
    }
    // If the credit card number field is empty...
    if ( validator.isEmpty(ccNumberElement.value) ) {
      // ...display a custom message requesting for input in the credit card
      // field
      ccNumberElement.setCustomValidity("Please enter your credit card " +
        "number.");
      // ...else if the credit card input is invalid...
    } else if ( !validator.isCreditCard(ccNumberElement.value) ) {
      // ...display a custom message that the card number is not valid
      ccNumberElement.setCustomValidity("This card number doesn't seem to be " +
        "a valid credit card number.");
      // ...else, reset the validity state of the credit card input element
    } else {
      ccNumberElement.setCustomValidity("");
    }
    // If the expiration month field is empty...
    if ( validator.isEmpty(ccExpMonthElement.value) ) {
      // ...display a custom message requesting input on the field
      ccExpMonthElement.setCustomValidity("Please choose your credit card's " +
        "expiration month.");
      // ...else, reset the validity state of the month input field to valid
    } else {
      ccExpMonthElement.setCustomValidity("");
    }
    // If the year input field is emtpy...
    if ( validator.isEmpty(ccExpYearElement.value) ) {
      // ...display a custom message requesting input on the year field
      ccExpYearElement.setCustomValidity("Please choose your credit card's " +
        "expiration year.");
      // ...else, reset the validity state of the year input field to valid
    } else {
      ccExpYearElement.setCustomValidity("");
    }
    // If the CSV field is empty...
    if ( validator.isEmpty(ccCSVElement.value) ) {
      // ...display a custom message requesting input to the csv field
      ccCSVElement.setCustomValidity("Please enter your credit card's CSV code"+
        " found on the back or your card or the front of American Express " +
        "cards.");
      // ...else if the input is less than 3 characters or greater than 4
      // characters...
    } else if ( ccCSVElement.value.length < 3 ||
      ccCSVElement.value.length > 4 ){
      // display a custom message that input can be between 3 and 4 characters
      ccCSVElement.setCustomValidity("Sorry, CSV numbers are 3 or 4 digits " +
        "long.");
      // ...else if a character other than digits were found...
    } else if ( nonDigitFlag ) {
      // ...display a custom message that only digits can be inputted
      ccCSVElement.setCustomValidity("Sorry, CSV numbers can only be digits " +
        "and no other characters.");
      // ...else, reset the validity state of the CSV field to valid
    } else {
      ccCSVElement.setCustomValidity("");
    }
  }
};
