










//================================================= SESSION STORAGE =================================================\\

// Checks session storage for key. If there isn't one, set it.
function checkSessionStorage(key, value) {

    if (!(sessionStorage.hasOwnProperty(key))) {

        sessionStorage.setItem(key, value)
    }
}

// Removes specific key from session storage
function removeSessionStorageKey(key) {

    if (!(sessionStorage.hasOwnProperty(key))) {

        console.error("Key " + "\"" + key + "\"" + " does not exist!")

    } else {

        sessionStorage.removeItem(key)
    }
}

// Clears all of session storage
function clearAllSessionStorage() {
    sessionStorage.clear()
}

//================================================= LOCAL STORAGE =================================================\\

// Checks session storage for key. If there isn't one, set it.
function checkLocalStorage(key, value) {

    if (!(localStorage.hasOwnProperty(key))) {

        localStorage.setItem(key, value)
    }
}

// Removes specific key from local storage
function removeLocalStorageKey(key) {

    if (!(localStorage.hasOwnProperty(key))) {

        console.error("Key " + "\"" + key + "\"" + " does not exist!")

    } else {

        localStorage.removeItem(key)
    }
}

// Clears all of local storage
function clearAllLocalStorage() {
    localStorage.clear()
}

//================================================= DEBUG =================================================\\

function debug(string) {
    console.log(string)
}