	var validator = {};

	validator.isEmailAddress = function(input) {
		// Find where the @ symbol is in the input
		var atIndex = input.indexOf("@");
		// If there is an issue with the input parameter...
		if (!input) {
			// ...throw a custom error message
		  throw "The parameter to check the email is missing!";
		}
		// If the @ symbol exists AND the previous character is NOT an empty string
		// AND the following character is NOT an empty string...
		if ( atIndex > 0 && input.charAt(atIndex - 1) !== '' &&
			input.charAt(atIndex + 1) !== '') {
			// ...return true
		  return true;
		}
		// Else...
		else {
			// ...return false
		  return false;
		}
	};

	validator.isPhoneNumber = function(input) {
		// Remove all symbols from input string
		var symbolFreeInput = validator.withoutSymbols(input);
		// Convert alpha-numeric string to an array
		var splitSymbolFreeInput = symbolFreeInput.split("");
		// Create an array of only numeric characters
		var digitsArray = ["0","1","2","3","4","5","6","7","8","9"];
		// If there is an issue with the input parameter...
		if (!input) {
			// ...throw a custom error message
		  throw "The parameter to determine if input is a valid phone number is " +
		  "missing!";
		}
		// Create a loop to go through every array entry of splitSymbolFreeInput
		for ( var i = 0; i < splitSymbolFreeInput.length; i++ ) {
		  // If the current character in splitSymbolFreeInput is NOT found in the
		  // digitsArray array...
		  if ( digitsArray.indexOf(splitSymbolFreeInput[i]) < 0 ) {
		    // ...change that character to a comma
		    splitSymbolFreeInput[i] = ',';
		  }
		}
		// Convert the splitSymbolFreeInput array back to a string
		splitSymbolFreeInput = splitSymbolFreeInput.toString();
		// While the comma character is still found in the splitSymbolFreeInput
		// string...
		while ( splitSymbolFreeInput.indexOf(",") >= 0 ) {
		  // ...replace the comma with no character
		  splitSymbolFreeInput = splitSymbolFreeInput.replace(",","");
		}
		// If the splitSymbolFreeInput string contains 10 digits...
		if ( splitSymbolFreeInput.length === 10 ) {
			// ...return true
		  return true;
		}
		// If not...
		else {
			// ...return false
		  return false;
		}
	};

	validator.withoutSymbols = function(input) {
		// Split the input string into an array of individual characters
		var inputSplit = input.split('');
		// Create an array of only alpha-numeric characters
		var alphaNumericChars = ["a","b","c","d","e","f","g","h","i","j","k","l",
		                        "m","n","o","p","q","r","s","t","u","v","w","x",
		                        "y","z","A","B","C","D","E","F","G","H","I","J",
		                        "K","L","M","N","O","P","Q","R","S","T","U","V",
		                        "W","X","Y","Z","0","1","2","3","4","5","6","7",
		                        "8","9"," "];
		// If there is an issue with the input parameter...
		if (!input) {
			// ...throw a custom error message
		  throw "The parameter to remove symbols from the input is missing!";
		}
		// Create a loop to go through each array entry create from the input
		for ( var i = 0; i < inputSplit.length; i++ ) {
			// If the current character in inputSplit is NOT found in the
			// alphaNumbericChars array...
		  if ( alphaNumericChars.indexOf(inputSplit[i]) < 0 ) {
		  	// ...change that character to a comma
		    inputSplit[i] = ',';
		  }
		}
		// Convert the inputSplit array back to a string
		inputSplit = inputSplit.toString();
		// While the comma character is still found in the inputSplit string...
		while ( inputSplit.indexOf(",") >= 0 ) {
			// ...replace the comma with no character
		  inputSplit = inputSplit.replace(",","");
		}
		// return the resulting string with no symbols
		return inputSplit;
	};

	validator.isDate = function(input) {
		// Attempt to create a new date object from the provided input and save
		// it to the checkDateInput variable
		var checkDateInput = new Date(input);
		// If there is an issue with the input parameter...
		if (!input && input !== "") {
			// ...throw a custom error message
		  throw "The parameter to check if the input is a valid date is missing!";
		}
		// If the created date object yields a NaN return for the getDay()
		// function...
		if (isNaN(checkDateInput.getDay()) ) {
			// ...then an improper date string was passed into this function
			// and used to create the checkDateInput so return false
		  return false;
		} else {
			// Else, return true since a proper date was able to be created with
			// the input parameter
		  return true;
		}
	};

	validator.isBeforeDate = function(input, reference) {
		// Create a new date object and save it to inputDate using the input
		// parameter
		var inputDate = new Date(input);
		// Create a new date object and save it to referenceDate using the reference
		// parameter
		var referenceDate = new Date(reference);
		// If either the input or reference parameters are missing...
		if (!input || !reference) {
			// ...throw a custom error message
			throw "The parameter(s) to compare the two dates using the isBeforeDate "+
			"function are missing!";
		}
		// If both of the parameters are valid dates...
		if ( validator.isDate(input) && validator.isDate(reference) ) {
			// ...Check to see if the input parameter is less than the reference
			// parameter...
			if ( inputDate.getTime() < referenceDate.getTime() ) {
				// ...if true, return true
				return true;
			}
			// Else if the input parameter is greater than the reference parameter...
			else if ( inputDate.getTime() > referenceDate.getTime()) {
				// ... return false
				return false;
			}
		}
		// ...If both parameters are not valid dates...
		else {
			// ...throw a custom error message
			throw "The parameters passed into the isBeforeDate function are not all "+
			"valid dates.";
		}
	};

	validator.isAfterDate = function(input, reference) {
		// Create a new date object and save it to inputDate using the input
		// parameter
		var inputDate = new Date(input);
		// Create a new date object and save it to referenceDate using the reference
		// parameter
		var referenceDate = new Date(reference);
		// If either the input or reference parameters are missing...
		if (!input || !reference) {
			// ...throw a custom error message
			throw "The parameter(s) to compare the two dates using the isAfterDate "+
			"function are missing!";
		}
		// If both of the parameters are valid dates...
		if ( validator.isDate(input) && validator.isDate(reference) ) {
			// ...Check to see if the input parameter is greater than the reference
			// parameter...
			if ( inputDate.getTime() > referenceDate.getTime() ) {
				// ...if true, return true
				return true;
			}
			// Else if the input parameter is less than the reference parameter...
			else if ( inputDate.getTime() < referenceDate.getTime()) {
				// ... return false
				return false;
			}
		}
		// ...If both parameters are not valid dates...
		else {
			// ...throw a custom error message
			throw "The parameters passed into the isAfterDate function are not all "+
			"valid dates.";
		}
	};

	validator.isBeforeToday = function(input) {
		// Create a new date object and save it to the inputDate variable using
		// the input parameter
		var inputDate = new Date(input);
		// Create a new date object with the current date
		var todaysDate = new Date();
		// If the input parameter is missing...
		if (!input) {
			// ...then throw a custom error message
			throw "The parameter to compare if a date is before today's date is "+
			"missing!";
		}
		// If the input parameter is a valid date...
		if ( validator.isDate(input) ) {
			// ...Check to see if the input date is less than today's date...
			if ( inputDate.getTime() < todaysDate.getTime() ) {
				// ...return true if so
				return true;
			}
			// ...If not, check to see if the input parameter is greater than today's
			// date...
			else if ( inputDate.getTime() > todaysDate.getTime() ) {
				// ...return false if so
				return false;
			}
		}
		// ...If the input parameter is not a valid date...
		else {
			// ...throw a custom error message
			throw "The parameter passed into the isBeforeToday function is not a "+
			"valid date.";
		}
	};

	validator.isAfterToday = function(input) {
		// Create a new date object and save it to the inputDate variable using
		// the input parameter
		var inputDate = new Date(input);
		// Create a new date object with the current date
		var todaysDate = new Date();
		// If the input parameter is missing...
		if (!input) {
			// ...then throw a custom error message
			throw "The parameter to compare if a date is after today's date is "+
			"missing!";
		}
		// If the input parameter is a valid date...
		if ( validator.isDate(input) ) {
			// ...Check to see if the input date is greater than today's date...
			if ( inputDate.getTime() > todaysDate.getTime() ) {
				// ...return true if so
				return true;
			}
			// ...If not, check to see if the input parameter is less than today's
			// date...
			else if ( inputDate.getTime() < todaysDate.getTime() ) {
				// ...return false if so
				return false;
			}
		}
		// ...If the input parameter is not a valid date...
		else {
			// ...throw a custom error message
			throw "The parameter passed into the isAfterToday function is not a "+
			"valid date.";
		}
	};

	validator.isEmpty = function(input) {
		// If the input parameter is missing and the input parameter does not equal
		// to the space character...
		if (!input && input !== " " && input !== "" ) {
			// ...then throw a custom error message
			throw "The parameter to check if a string is empty using the isEmtpy "+
			"function is missing!";
		}
		// If the input string has a length of 0...
		if ( input.length === 0 ) {
			// ...return true as it is empty
			return true;
		}
		// If the input string is greater than 0...
		if ( input.length > 0 ) {
			// ...for each position of the string...
			for (i = 0; i < input.length; i++) {
				// ...check to see if the character is not equal to the space
				// character...
				if ( input[i] !== " " ) {
					// ...If not equal to space, return false
					return false;
				}
			}
			// If the loop has not exited the function already, return true as the
			// string is empty and contains only space characters
			return true;
		}
	};

	validator.contains = function(input, words) {
		// Create an array of characters that signal the beginning and end of words
		// and save them to the wordEncapsulators variable
		var wordEncapsulators = [undefined, " ", ",", ".", "!", "?", "-", ":", ";",
		"(", ")", "$", "@", "/", '"', "'", "{", "}", "[", "]"];
		// Create a string variable to temporarily hold each word found
		var currentWord = "";
		// Create an array to push all found words to
		var wordsFound = [];
			// If either the input or the words parameter is missing...
			if (!input || !words) {
			// ...then throw a custom error message
			throw "The parameter(s) to check if the words are contained in the input"+
			" are missing!";
		}
		// Create a loop to go through each character in the input
		for (var i = 0; i < input.length; i++ ) {
			// If the current character is NOT a word encapsulating character...
			if ( wordEncapsulators.indexOf(input[i]) === -1 ) {
				// ...then add the current character to the currentWord variable to
				// build up the current word
				currentWord += input[i];
			}
			// If the currect character IS a word encapsulating character...
			if ( wordEncapsulators.indexOf(input[i]) > -1 ) {
				// ...push the current word in currentWord as a lower case character
				// into the wordsFound array...
        wordsFound.push(currentWord.toLowerCase());
        // ...and reset the currentWorld variable to an empty string for the
        // next word
        currentWord = "";
			}
		}
		// Create a loop to go through each word in the words parameter
		for (var i = 0; i < words.length; i++ ) {
			// If the current word in the words parameter is found in the wordsFound
			// array...
			if ( wordsFound.indexOf(words[i]) > -1 ) {
				// ...then return true as it is a match and the input parameter contains
				// that word
				return true;
			}
		}
		// After the loop executes, if no matches were found then return false
		return false;
	};

	validator.lacks = function(input, words) {
		// Create an array of characters that signal the beginning and end of words
		// and save them to the wordEncapsulators variable
		var wordEncapsulators = [undefined, " ", ",", ".", "!", "?", "-", ":", ";",
		"(", ")", "$", "@", "/", '"', "'", "{", "}", "[", "]"];
		// Create a string variable to temporarily hold each word found
		var currentWord = "";
		// Create an array to push all found words to
		var wordsFound = [];
		// If either the input or the words parameter is missing...
		if (!input || !words) {
			// ...then throw a custom error message
			throw "The parameter(s) to check if the words are lacking in the input"+
			" are missing!";
		}
		// Create a loop to go through each character in the input
		for (var i = 0; i < input.length; i++ ) {
			// If the current character is NOT a word encapsulating character...
			if ( wordEncapsulators.indexOf(input[i]) === -1 ) {
				// ...then add the current character to the currentWord variable to
				// build up the current word
				currentWord += input[i];
			}
			// If the currect character IS a word encapsulating character...
			if ( wordEncapsulators.indexOf(input[i]) > -1 ) {
				// ...push the current word in currentWord as a lower case character...
        wordsFound.push(currentWord.toLowerCase());
        // ...and reset the currentWorld variable to an empty string for the
        // next word
        currentWord = "";
			}
		}
		// Create a loop to go through each word in the words parameter
		for (var i = 0; i < words.length; i++ ) {
			// If the current word in the words parameter is found in the wordsFound
			// array...
			if ( wordsFound.indexOf(words[i]) > -1 ) {
				// ...then return false as it is NOT lacking in the input parameter
				return false;
			}
		}
		// After the loop executes, if no matches were found then return true as
		// the words ARE lacking in the input parameter
		return true;
	};

	validator.isComposedOf = function(input, strings) {
		// Create an empty string and save it to the currentWord variable to act
		// as a place holder for the words we find in the input parameter
		var currentWord = "";
		// If either the input or the strings parameter is missing...
		if (!input || !strings) {
			// ...then throw a custom error message
			throw "The parameter(s) to check if the input is composed of the given" +
			" strings is missing!";
		}
		// Create a loop to check each character of the input parameter
		for ( var i = 0; i < input.length; i++ ) {
			// If the current character is not a space, undefined or a period...
			if ( input[i] !== " " && input[i] !== undefined && input[i] !== ".") {
				// ...then add that character to the currentWord variable
				currentWord += input[i];
			}
			// If the word saved in the currentWord variable is found in the strings
			// array parameter...
			if ( strings.indexOf(currentWord) > -1 ) {
				// ...then reset the currentWord to an empty string to make a clean
				// slate for the next word to be built from scanning the input parameter
				currentWord = "";
			}
		}
		// If the saved word in the currentWord variable at this point is an emtpy
		// string...
		if ( currentWord === "" ) {
			// ...then any found words that were saved in currentWord were matched
			// so the input paramter IS composed of strings in the strings array
			// parameter
			return true;
		// ...Else, return false because there is still at least one unmatched
		// word in the currentWord variable that was not found in the strings array
		} else {
			return false;
		}
	};

	validator.isLength = function(input, n) {
		// If either the input or the n parameter is missing...
		if (!input || !n) {
			// ...then throw a custom error message
			throw "The parameter(s) to check if the input length is less than or " +
			"equal to the number parameter is missing!";
		}
		// If the character length of the input parameter is less than or equal to
		// the n parameter integer...
		if ( input.length <= n ) {
			// ...then return true
			return true;
		// ...Else...
		} else {
			// ...return false
			return false;
		}
	};

	validator.isOfLength = function(input, n) {
		// If either the input or the n parameter is missing...
		if (!input || !n) {
			// ...then throw a custom error message
			throw "The parameter(s) to check if the input length is less than or " +
			"equal to the number parameter is missing!";
		}
		// If the character length of the input parameter is greater than or equal
		// to the n parameter integer...
		if ( input.length >= n ) {
			// ...then return true
			return true;
		// ...Else...
		} else {
			// ...return false
			return false;
		}
	};

	validator.countWords = function(input) {
		// Create a string variable to temporarily hold each word found
		var currentWord = "";
		// Create an array to push all found words to
		var wordsFound = [];
		// Create an array of characters that signal the beginning and end of words
		// and save them to the wordEncapsulators variable
		var wordEncapsulators = [undefined, " ", ",", ".", "!", "?", "-", ":", ";",
		"(", ")", "$", "@", "/", '"', "'", "{", "}", "[", "]"];
		// If the input parameter is missing and is NOT an empty string...
		if (!input && input !== "") {
			// ...then throw a custom error message
			throw "The parameter to check how many words are in the input is missing"+
			".";
		}
		// Create a loop to go through each character of the input parameter
		for (var i = 0; i < input.length; i++ ) {
			// If the current character is NOT a word encapsulating character...
			if ( wordEncapsulators.indexOf(input[i]) === -1) {
				// ...then add the current character to the currentWord variable to
				// build up the current word
				currentWord += input[i];
			}
			// If the currect character IS a word encapsulating character...
			if ( wordEncapsulators.indexOf(input[i]) > -1 ) {
				// ...then push the current word in currentWord to the wordsFound array
				// as long as the word is not an empty string...
				if ( currentWord !== "" ) {
					wordsFound.push(currentWord);
				}
        // ...and reset the currentWorld variable to an empty string for the
        // next word
        currentWord = "";
			}
		}
		// If the final word in currentWord is not an empty string...
		if ( currentWord !== "" ) {
			// ...then push this last word into the wordsFound array
			wordsFound.push(currentWord);
		}
		// Return the total length of the wordsFound array which will represent
		// all the words found in the input parameter
		return wordsFound.length;
	};

	validator.lessWordsThan = function(input, n) {
		// If either the input or the n parameter is missing...
		if (!input || !n) {
			// ...then throw a custom error message
			throw "The parameter(s) to check if the number of words is less than or" +
			" equal to the number parameter is missing!";
		}
		// If the number of words in the input parameter is less than or equal to
		// the n parameter...
		if ( validator.countWords(input) <= n ) {
			// ...then return true
			return true;
			// ...Else return false
		} else {
			return false;
		}
	};

	validator.moreWordsThan = function(input, n) {
		// If either the input or the n parameter is missing...
		if (!input || !n) {
			// ...then throw a custom error message
			throw "The parameter(s) to check if the number of words is greater than" +
			" or equal to the number parameter is missing!";
		}
		// If the number of words in the input parameter is greater than or equal to
		// the n parameter...
		if ( validator.countWords(input) >= n ) {
			// ...then return true
			return true;
			// ...Else return false
		} else {
			return false;
		}
	};

	validator.isBetween = function(input, floor, ceil) {
		// If either the input, foor or ceil parameter is missing...
		if (!input || !floor || !ceil) {
			// ...then throw a custom error message
			throw "The parameter(s) to check if the input is greater than or equal " +
			"to the floor number or if the input is less than or equal to the " +
			"ceiling number is missing!";
		}
		// If the input length is less than or equal to the ceil param AND the
		// input length is greater than or equal to the floor param...
		if ( input.length <= ceil && input.length >= floor ) {
			// ...then return true
			return true;
		// ...Else, return false
		} else {
			return false;
		}
	};

	validator.isAlphanumeric = function(input) {
		// Create an array of all possible alphanumeric characters and save it to
		// the alphaNumericChars variable
		var alphaNumericChars = ["a","b","c","d","e","f","g","h","i","j","k","l",
		                        "m","n","o","p","q","r","s","t","u","v","w","x",
		                        "y","z","A","B","C","D","E","F","G","H","I","J",
		                        "K","L","M","N","O","P","Q","R","S","T","U","V",
		                        "W","X","Y","Z","0","1","2","3","4","5","6","7",
		                        "8","9"];
		// If the input parameter is missing AND it is NOT an empty string...
		if (!input && input !== "") {
			// ...then throw a custom error message
			throw "The parameter to check if the input is alphanumeric is missing!";
		}
		// If the input is equal to an empty string...
		if ( input === "" ) {
			// ...return true
			return true;
		}
		// Create a loop to go through each character of the input string
		for ( var i = 0; i < input.length; i++ ) {
			// If the current character is NOT found in the array of alphanumeric
			// characters...
			if ( alphaNumericChars.indexOf(input[i]) === -1 ) {
				// ...return false
				return false;
			}
		}
		// At the end of the function after the for loop has completed, if no
		// non-alphanumeric characters were found in the string return true
		// since the string is only made up of alphanumeric characters.
		return true;
	};

	validator.isCreditCard = function(input) {
		// Create an array of index numbers where a 19 character credit card number
		// string will have hyphen characters located at
		var hyphenArr = [4, 9, 14];
		// If the input parameter is missing...
		if (!input && input !== "") {
			// ...then throw a custom error message
			throw "The parameter to check if the input is a valid credit card number"+
			" is missing!";
		}
		// Create a switch statement to check the length of the input parameter
		switch (input.length) {
			// In the case of a 16 character input parameter...
			case 16:
				// ...return the result of calling the validator.isAlphanumeric() function
				// on the input since this case should only have valid alphanumeric
				// characters contained in the input
				return validator.isAlphanumeric(input);
			// In the case of a 19 character input parameter...
			case 19:
				// Create a for loop to go through each input parameter
				for (var i = 0; i < input.length; i++ ) {
					// If the current character is NOT a place where a hyphen is expected
					// AND is NOT alphanumeric...
					if ( hyphenArr.indexOf(i) === -1 && validator.isAlphanumeric(input[i]) !== true ) {
						// ...return false
						return false;
					}
					// If the current character IS a place where a hyphen is expected AND
					// is NOT a hyphen...
					if ( hyphenArr.indexOf(i) > -1 && input[i] !== "-" ) {
						// ...return false
						return false;
					}
				}
				// Return true if the completion of the for loop did not yield any
				// non-alphanumeric characters in places other than hyphens and only
				// hyphens where hyphens should be at
				return true;
			// If the length of the input is anything other than 16 or 19 characters
			// return false since that length would be an invalid credit card number
			default:
				return false;
		}
	};

	validator.isHex = function(input) {
		// Create an array that contains all possible hexadecimal characters and
		// save it to the hexArr variable
		var hexArr = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E",
		"F","a","b","c","d","e","f"];
		// If the input parameter is missing...
		if (!input) {
			// ...then throw a custom error message
			throw "The parameter to check if the input is a valid hexadecimal number"+
			" is missing!";
		}
		// If the first character of the input string is not a hash symbol...
		if ( input[0] !== "#" ) {
					// ...return false
          return false;
		}
		// If the length of the input is neither 4 or 7 characters long...
		if ( input.length !== 4 && input.length !== 7 ) {
			// ...return false
			return false;
		}
		// Create a for loop that goes through every character after the hash symbol
		for ( var i = 1; i < input.length; i++ ) {
			// If the character is not found in the array of all possible hexadecimal
			// characters...
			if ( hexArr.indexOf(input[i]) === -1 ) {
				// ...return false
				return false;
			}
		}
		// If the function has not returned a false yet then return true as no
		// falsifiable conditions have been met so the input is a hexadecimal number
		return true;
	};

  validator.isRGB = function(input) {
  	// Take the input and split it along commas then save the resulting strings
  	// to the splitInput array
		var splitInput = input.split(",");
		// Initialize the openingRGB, firstNumber, secondNumber and thirdNumber
		// variables as empty strings for later use
    var openingRGB = "";
    var firstNumber = "";
    var secondNumber = "";
    var thirdNumber = "";
    // Create an array of acceptable digits and space characters to prevent
    // parseInt() function from accepting non space and digit characters
    var digits = ["0","1","2","3","4","5","6","7","8","9", " "];
		// If the input parameter is missing...
		if (!input) {
			// ...then throw a custom error message
			throw "The parameter to check if the input is a valid rgb color is " +
			"missing!";
		}
		// Create a for loop to go through the first 4 characters of the input
		// string
    for (var i = 0; i < 4; i++) {
    	// Add each character found to the openingRGB variable
      openingRGB += splitInput[0][i];
    }
  	// If the resulting variable does not equal the string 'rgb('...
    if ( openingRGB !== "rgb(" ) {
    	// ...return false
      return false;
    }
    // If the very last character of the input parameter is not a closing
    // parenthesis...
    if ( splitInput[2][splitInput[2].length - 1 ] !== ")" ) {
    	// ...return false
      return false;
    }
    // Create a loop to go through each character after the 4th character of the
    // first splitInput array entry
    for ( var i = 4; i < splitInput[0].length; i++ ) {
    	// If the current character is not found in the digits array of
    	// valid digits...
      if ( digits.indexOf(splitInput[0][i]) === -1 ) {
      	// ...return false
        return false;
      }
      // Add each character found to the firstNumber variable
      firstNumber += splitInput[0][i];
    }
    // Convert the firstNumber string value to a number value
    firstNumber = parseInt(firstNumber, 10);
    // If the value of firstNumber is less than 0 or greater than 255...
    if ( firstNumber < 0 || firstNumber > 255 ) {
    	// ...return false
      return false;
    }
    // Create a loop to go through each character of the second splitInput
    // array entry
    for ( var i = 0; i < splitInput[1].length; i++ ) {
    	// If the current character is not found in the digits array of
    	// valid digits...
       if ( digits.indexOf(splitInput[1][i]) === -1 ) {
       	// ...return false
        return false;
      }
      // Add each character found to the secondNumber variable
      secondNumber += splitInput[1][i];
    }
    // Convert the secondNumber string value to a number value
    secondNumber = parseInt(secondNumber, 10);
    // If the value of secondNumber is less than 0 or greater than 255...
    if ( secondNumber < 0 || secondNumber > 255 ) {
    	// ...return false
      return false;
    }
    // Create a loop to go through each character of the third splitInput
    // array entry until the last character
    for ( var i = 0; i < splitInput[2].length - 1; i++ ) {
    	// If the current character is not found in the digits array of
    	// valid digits...
       if ( digits.indexOf(splitInput[2][i]) === -1 ) {
       	// ...return false
        return false;
      }
      // Add each character found to the thirdNumber variable
      thirdNumber += splitInput[2][i];
    }
    // Convert the thirdNumber string value to a number value
    thirdNumber = parseInt(thirdNumber, 10);
    // If the value of thirdNumber is less than 0 or greater than 255...
    if ( thirdNumber < 0 || thirdNumber > 255 ) {
    	// ...return false
      return false;
    }
    // Return true if all the other checks did not return a false since the
    // input is in a valid rgb color format
		return true;
	};

	validator.isHSL = function(input) {
  	// Take the input and split it along commas then save the resulting strings
  	// to the splitInput array
		var splitInput = input.split(",");
		// Initialize the openingHSL, firstNumber, secondNumber and thirdNumber
		// variables as empty strings for later use
    var openingHSL = "";
    var firstNumber = "";
    var secondNumber = "";
    var thirdNumber = "";
    // Create an array of acceptable digits and space characters to prevent
    // parseFloat() function from accepting non-space, digit and decimal
    // characters
    var digits = ["0","1","2","3","4","5","6","7","8","9", " ", "."];
		// If the input parameter is missing...
		if (!input) {
			// ...then throw a custom error message
			throw "The parameter to check if the input is a valid hsl color is " +
			"missing!";
		}
		// Create a for loop to go through the first 4 characters of the input
		// string
    for (var i = 0; i < 4; i++) {
    	// Add each character found to the openingHSL variable
      openingHSL += splitInput[0][i];
    }
  	// If the resulting variable does not equal the string 'hsl('...
    if ( openingHSL !== "hsl(" ) {
    	// ...return false
      return false;
    }
    // If the very last character of the input parameter is not a closing
    // parenthesis...
    if ( splitInput[2][splitInput[2].length - 1 ] !== ")" ) {
    	// ...return false
      return false;
    }
    // Create a loop to go through each character after the 4th character of the
    // first splitInput array entry
    for ( var i = 4; i < splitInput[0].length; i++ ) {
    	// If the currecnt character of the first number contains a decimal...
    	if ( splitInput[0][i] === "." ) {
      	// ...return false as only intergers are accepted for the first HSL
      	// number input
        return false;
      }
    	// If the current character is not found in the digits array of
    	// valid digits...
      if ( digits.indexOf(splitInput[0][i]) === -1 ) {
      	// ...return false
        return false;
      }
      // Add each character found to the firstNumber variable
      firstNumber += splitInput[0][i];
    }
    // Convert the firstNumber string value to an integer value
    firstNumber = parseInt(firstNumber, 10);
    // If the value of firstNumber is less than 0 or greater than 360...
    if ( firstNumber < 0 || firstNumber > 360 ) {
    	// ...return false
      return false;
    }
    // Create a loop to go through each character of the second splitInput
    // array entry
    for ( var i = 0; i < splitInput[1].length; i++ ) {
    	// If the current character is not found in the digits array of
    	// valid digits...
       if ( digits.indexOf(splitInput[1][i]) === -1 ) {
       	// ...return false
        return false;
      }
      // Add each character found to the secondNumber variable
      secondNumber += splitInput[1][i];
    }
    // Convert the secondNumber string value to a floating number value
    secondNumber = parseFloat(secondNumber);
    // If the value of secondNumber is less than 0 or greater than 1...
    if ( secondNumber < 0 || secondNumber > 1 ) {
    	// ...return false
      return false;
    }
    // Create a loop to go through each character of the third splitInput
    // array entry until the last character
    for ( var i = 0; i < splitInput[2].length - 1; i++ ) {
    	// If the current character is not found in the digits array of
    	// valid digits...
       if ( digits.indexOf(splitInput[2][i]) === -1 ) {
       	// ...return false
        return false;
      }
      // Add each character found to the thirdNumber variable
      thirdNumber += splitInput[2][i];
    }
    // Convert the thirdNumber string value to a floating number value
    thirdNumber = parseFloat(thirdNumber);
    // If the value of thirdNumber is less than 0 or greater than 1...
    if ( thirdNumber < 0 || thirdNumber > 1 ) {
    	// ...return false
      return false;
    }
    // Return true if all the other checks did not return a false since the
    // input is in a valid hsl color format
		return true;
	};

	validator.isColor = function(input) {
		// If the input parameter is missing...
		if (!input) {
			// ...then throw a custom error message
			throw "The parameter to check if the input is a valid hex, RGB or "+
			"HSL color type is missing!";
		}
		// If the input is a Hex color type...
		if ( validator.isHex(input) ) {
			// ...return true
			return true;
			// ...Else, if the input is an RGB color type...
		} else if ( validator.isRGB(input) ) {
			// ...return true
			return true;
			// ...Else, if the input is an HSL color type...
		} else if ( validator.isHSL(input) ) {
			// ...return true
			return true;
			// ...Otherwise, return false since the input does not match any hex, rgb
			// or hsl color formats
		} else {
			return false;
		}
	};

	validator.isTrimmed = function(input) {
		// Split the input into an array of single characters and save it to the
		// splitInput variable
		var splitInput = input.split("");
		// If the input parameter is missing...
		if (!input && input !== "") {
			// ...then throw a custom error message
			throw "The parameter to check if the input is trimmed or not is missing!";
		}
		// If the first character or the last character of the input is a space...
		if ( splitInput[0] === " " || splitInput[splitInput.length - 1] === " " ) {
			// ...return false
			return false;
		}
		// Create a loop to go through each character of the array starting after
		// the first character and ending before the last character
		for (var i = 1; i < splitInput.length - 1; i++ ) {
			// If the current character is a space character...
			if ( splitInput[i] === " " ) {
				// ...check whether the next character is also a space character...
				if ( splitInput[i + 1] === " " ) {
					// ...return false if it is
					return false;
				}
			}
		}
		// After the completion of the for loop, if no conditions were met to return
		// false then return true since the input is trimmed of leading, trailing
		// and unnecessary space characters
		return true;
	};
