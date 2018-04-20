// Determine whether input is a prime number..
function isPrime(number){
	"use strict";

	// Do not allow numbers below 2 (they cannot be prime numbers)...
	if (number <= 1) {
		alert("Your input is invalid. Reason: Less than or equal to 1");
	} else {
		// Probably an awful way of doing this...
		if (
			((number % 2 == 0) && (number != 2)) || 
			((number % 3 == 0) && (number != 3)) || 
			((number % 4 == 0) && (number != 4)) || 
			((number % 5 == 0) && (number != 5))
		) {
			console.log("" + number + " is NOT a prime number.");
			console.log(""); // Console line break
		}
		else {
			console.log("" + number + " is NOT a prime number.");
			console.log("");
		}
	}
}
 
// Determine the most effective way to split an input amount across the several different available coins..
function amountToCoins(amount, coins) {
	"use strict";
	
	let j = 0;
	let temp = amount;
	
	console.log("Coins required to make up " + amount + " pence:");

	// For every type of coin...
	for (let i = 0; i < coins.length; i++) {
		// Subtract it from the remaining amount until no more can be subtracted...
		for (j = 0; temp >= coins[i]; j++) {
			temp = temp - coins[i];
		}
		// The number of times (j) this occured is the maximum number of that type of coin that can fit into the original amount...
		console.log(j + " " + coins[i] + "p coins");
	}
	
	console.log("");
}

// Identify duplicate characters in a string and remove them, outputting only the first instance of each character..
function uniqueLetters(string) {
	"use strict";
	
	let temp = "";
	let output = "";
	let duplicate = false;
	
	console.log("Extracting unique characters from '" + string + "':"); 

	// For every character in the input string...
	for (let i = 0; i < string.length; i++) {
		temp = string[i];
		duplicate = false; // Assume each character is unique until proven otherwise
		
		// Check if it already exists in the output string...
		for (let k = 0; k < output.length; k++) {
			if (temp == output[k]) {
				duplicate = true; // AKA: It already exists in the output string
			}
		}
		// If it already exists, continue to next iteration and repeat...
		if (duplicate == true) {
			continue;
		// Otherwise, add it to the output string...
		} else {
			output = output + temp;
		}
	}
	
	console.log(output);
	console.log("");
}

// Calculate the factorial of an input number...
function factorial(number) {
	"use strict";
	
	let temp = number;
	
	// If input is a positive number...
	if (temp >= 0) {
		// For every step input is greater than 0...
		for (let i = temp - 1; i >= 1; i--) {
			temp = temp + i; // Sum the input with the next number in the sequence. E.g. 3 -> 2
		}
	// If input is a negative number... (Come to think of it, I'm not sure if negative factorials are even a thing, but just in case)
	} else {
		// For every step input is less than 0...
		for (let i = temp + 1; i <= -1; i++) {
			temp = temp + i; // Sum the input with the next number in the sequence. E.g. -3 -> -2
		}
	}
	console.log(number + "! = " + temp);
	console.log("");
}

// Outout the first n numbers in the Fibonacci sequence...
function fibonacci(number) {
	"use strict";
	
	let fibArr = [0, 1]; // Assume we know the first 2 Fibonacci numbers
	
	console.log("Finding first " + number + " Fibonacci numbers:");

	for (let i = 0; i < number - 2; i++) {
		fibArr.push(fibArr[i] + fibArr[i + 1]); // Create a new array element equal to the sum of the last 2 and append it to the array
	}
	
	// Print whole array as one...
	console.log(fibArr);
	console.log("");
}