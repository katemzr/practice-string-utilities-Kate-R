// Create the stringUtils.js Module:
// ○ Define and export the following functions:
// ■ capitalize(str): Converts the first letter of a string to uppercase.
// ■ reverse(str): Reverses the characters in a string.
// ■ contains(str, substr): Checks if a substring exists within a string and returns true or false.

// 2. Test the Module in app.js:
// ○ Import the stringUtils.js module into app.js.
// ○ Test each function with different string inputs and log the results to the console.

// 3. Ensure Reusability:
// ○ Design the module functions to handle edge cases, such as empty strings or undefined inputs.


function capitalize(str) {
	if (!str || typeof str !== "string") return "";
	return str.charAt(0).toUpperCase() + str.slice(1);
}

function reverse(str) {
	if (!str || typeof str !== "string") return "";
	return str.split("").reverse().join("");
}

function contains(str, substr) {
	if (!str || typeof str !== "string" || !substr || typeof substr !== "string") return false;
	return str.includes(substr);
}

module.exports = { capitalize, reverse, contains };