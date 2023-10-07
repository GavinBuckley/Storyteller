//
// 888b      88    ,ad8888ba,    88b           d88         db         88888888ba,
// 8888b     88   d8"'    `"8b   888b         d888        d88b        88      `"8b
// 88 `8b    88  d8'        `8b  88`8b       d8'88       d8'`8b       88        `8b
// 88  `8b   88  88          88  88 `8b     d8' 88      d8'  `8b      88         88
// 88   `8b  88  88          88  88  `8b   d8'  88     d8YaaaaY8b     88         88
// 88    `8b 88  Y8,        ,8P  88   `8b d8'   88    d8""""""""8b    88         8P
// 88     `8888   Y8a.    .a8P   88    `888'    88   d8'        `8b   88      .a8P
// 88      `888    `"Y8888Y"'    88     `8'     88  d8'          `8b  88888888Y"'
//
// Library by Gavin Buckley
//

//================================================= DOM =================================================\\
/** Checks to see if an element exists in the DOM.
@param {string} element The element ID to search for.
 **/
function elementExists(element) {
    let exists = document.getElementById(element);
    if (exists !== null) {
        return true
    } else {
        return false
    }
}

//================================================= SESSION STORAGE =================================================\\
/** Checks session storage for key. If there isn't one, sets it.
@param {string} key A key.
@param {string} value The value to set if the key doesn't exist. 
All values are saved in storage as strings. If the value is anything other than a string, it must be parsed later.
 **/
function checkSessionStorage(key, value) {

    if (!(sessionStorage.hasOwnProperty(key))) {

        sessionStorage.setItem(key, value)
    }
}

/** Removes a specific key from session storage.
@param {string} key A key from session storage.
 **/
function removeSessionStorageKey(key) {

    if (!(sessionStorage.hasOwnProperty(key))) {

        throw new Error("Key " + "\"" + key + "\"" + " does not exist!")

    } else {

        sessionStorage.removeItem(key)
    }
}

/** Clears all of session storage. */
function clearAllSessionStorage() {
    sessionStorage.clear()
}

//================================================= LOCAL STORAGE =================================================\\
/** Checks local storage for key. If there isn't one, sets it.
@param {string} key A key.
@param {string} value The value to set if the key doesn't exist.
All values are saved in storage as strings. If the value is anything other than a string, it must be parsed later.
 **/
function checkLocalStorage(key, value) {

    if (!(localStorage.hasOwnProperty(key))) {

        localStorage.setItem(key, value)
    }
}
/** Removes a specific key from local storage.
@param {string} key A key from local storage.
 **/
function removeLocalStorageKey(key) {

    if (!(localStorage.hasOwnProperty(key))) {

        throw new Error("Key " + "\"" + key + "\"" + " does not exist!")

    } else {

        localStorage.removeItem(key)
    }
}

/** Clears all of local storage. */
function clearAllLocalStorage() {
    localStorage.clear()
}

//================================================= RANDOM =================================================\\
/** Returns a random element from an array. */
function randomFromArray(array) {

    // Checks to see if the array is a real array
    if (array instanceof Array) {

        let randomIndex = Math.floor(Math.random() * array.length);
        let randomElement = array[randomIndex]
        return randomElement
    } else {

        throw new Error("\"" + array + "\"" + " is not a valid array.")
    }
}
/** Returns a random integer between two numbers.
@param {number} min Minimum value
@param {number} max Maximum value
 **/
function randomInt(min, max) {

    // Ensure that min and max are valid numbers
    if (typeof min !== 'number' || typeof max !== 'number') {
        throw new Error('Both min and max must be numbers');
    }

    // Generate a random number between min (inclusive) and max (exclusive)
    return Math.floor(Math.random() * (max - min)) + min;
}

/** Returns a random float between two numbers with the option of rounding.
@param {float} min Minimum value
@param {float} max Maximum value
@param {int} decimalPlaces The amount of decimal places to round to
 **/
function randomFloat(min, max, decimalPlaces) {

    // Ensure that min and max are valid numbers
    if (typeof min !== 'number' || typeof max !== 'number') {
        throw new Error('Both min and max must be numbers');
    }

    // Ensure that decimalPlaces is a non-negative integer
    if (typeof decimalPlaces !== 'number' || decimalPlaces < 0 || !Number.isInteger(decimalPlaces)) {
        throw new Error('decimalPlaces must be a non-negative integer');
    }

    // Generate a random number between min (inclusive) and max (exclusive)
    let randomNum = Math.random() * (max - min) + min;

    // Round the random number to the specified number of decimal places
    if (decimalPlaces > 0) {
        const multiplier = Math.pow(10, decimalPlaces);
        randomNum = Math.round(randomNum * multiplier) / multiplier;
    } else {
        randomNum = Math.round(randomNum);
    }

    return randomNum;
}

/** Returns true or false based off the chance given.
@param {float} chance A value between 0 and 1
 **/
function randomChance(chance) {

    if (typeof chance !== 'number') {
        throw new Error('Chance must be a number');
    }
    if (chance > 1 || chance < 0) {
        throw new Error('Chance must be between 0 and 1');
    }

    let randomNum = Math.random()

    return randomNum <= chance;
}

//================================================= DEBUG =================================================\\

function debug(string) {
    console.log(string)
}
