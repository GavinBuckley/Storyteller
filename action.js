var version = "v1.0"
var currentChapter = 0
var currentChunk = 0
var lastChunk = (currentChunk - 1)
var accumulatedStoryText = "";
var addedContinue = ""
var justRegenerated = false
var regenAuth = false
var mobileDisplay = false

window.onresize = resize;
window.onload = function () {

    // Checks to see if the story needs to be regenerated
    if (sessionStorage.hasOwnProperty("needsRegen")) {

        let needsRegen = Boolean(sessionStorage.getItem("needsRegen"))

        if (needsRegen == true) {

            document.getElementById("start").innerHTML = "Continue"
            regenAuth = true

        }
    }
     
    if (!(sessionStorage.hasOwnProperty("chapter"))) {

        sessionStorage.setItem("chapter", 0)

    }

    if (!(sessionStorage.hasOwnProperty("chunk"))) {

        sessionStorage.setItem("chunk", 0)

    } 

    // Checks to see the size of the window
    if (window.innerWidth <= 600) {
        mobileDisplay = true
        resize()
    }

    // Sets the version number
    document.getElementById("version").innerHTML = version
}

function update() {

    // Checks to see if the player has started playing
    if (!(sessionStorage.hasOwnProperty("started"))) {

        sessionStorage.setItem("started", 1)

    }

    // Checks to see if the story needs to be regenerated
    var needsRegen = Boolean(sessionStorage.getItem("needsRegen"))
    if (needsRegen == true & regenAuth == true) {

        currentChapter = parseInt(sessionStorage.getItem("chapter"))
        currentChunk = parseInt(sessionStorage.getItem("chunk"))
        lastChunk = (currentChunk - 1)
        accumulatedStoryText = sessionStorage.getItem("accumulatedStoryText")
        sessionStorage.setItem("needsRegen", false)
        justRegenerated = true
        regenAuth = false

    }

    const titleElement = document.getElementById("chapterTitle");
    const subtitleElement = document.getElementById("subtitle");
    const storyElement = document.getElementById("textContainer")
    const author = document.getElementById("author")
    const menu = document.getElementById("menu")
    const mobileAuthor = document.getElementById("mobileAuthor")

    const currentChapterData = gameData[currentChapter];
    const currentChunkText = currentChapterData.story[currentChunk];


    // Check to see if it is the title page or reset page and set subtitle
    if (!(currentChapterData.node == "00" || currentChapterData.node == "99")) {

        titleElement.style.marginTop = "0px"
        subtitleElement.style.display = "flex"
        subtitleElement.textContent = title

        if (mobileDisplay == false) {

            author.textContent = "Written By: " + currentChapterData.author

        } else {

            rightbox.style.display = "none"
            leftbox.style.flex = "0"
            mobileAuthor.textContent = "Written By: " + currentChapterData.author
        }

        menu.style.display = "flex"

    } else {

        titleElement.style.marginTop = "8px"
        subtitleElement.style.display = "none"
        menu.style.display = "none"
        author.textContent = ""
        mobileAuthor.textContent = ""

    }

    // Set title
    titleElement.textContent = currentChapterData.title;

    // Determine the previous continue text to add 
    if (currentChunk > 0) {

        let italicsCheck = currentChapterData.continue[lastChunk].text.substring(0, 9);
        let normalSpan = "<span class='pressedContinue'>"
        let italicSpan = "<span class='italic'>"
        let endSpan = "</span>"
        let newline = "\n"

        if (italicsCheck === "(ITALICS)") {

            addedContinue = newline + normalSpan + italicSpan + currentChapterData.continue[lastChunk].text.substring(9) + endSpan + endSpan + newline

        } else {

            addedContinue = newline + normalSpan + currentChapterData.continue[lastChunk].text + endSpan + newline

        }

        sessionStorage.setItem("needsRegen", true)

    }

    // Add story chunks to current story already written per chapter
    if (justRegenerated == false) {

        accumulatedStoryText += addedContinue + currentChunkText + "\n"
        sessionStorage.setItem("accumulatedStoryText", accumulatedStoryText)

    } else {

        justRegenerated = false
    }
    
    storyElement.innerHTML = accumulatedStoryText;
    
    // Clear existing choices
    choicesContainer.innerHTML = ""; 

    // Check to see if there are more chunks
    if (currentChunk < currentChapterData.continue.length) {

        // Generate continue button
        const button = document.createElement("button");
        button.classList.add('continueButton')

        // Check to see if the button should be italic
        const italics = currentChapterData.continue[currentChunk].text.substring(0, 9);
        if (italics === "(ITALICS)") {

            button.style = "font-style: italic;"
            button.textContent = currentChapterData.continue[currentChunk].text.substring(9)

        } else {

            button.textContent = currentChapterData.continue[currentChunk].text

        }

        // Add event listener to continue button
        button.addEventListener("click", () => {
            currentChunk++
            lastChunk++
            sessionStorage.setItem("chapter", currentChapter);
            sessionStorage.setItem("chunk", currentChunk);
            update();
        });

        // Append to container
        choicesContainer.appendChild(button);

    } else {

        // Generate choice buttons
        currentChapterData.choices.forEach(choice => {

            const button = document.createElement("button");

            // Checks to see if the story has an ending
            if (currentChapterData.choices.length > 1) {

                button.classList.add('choiceButton')

            } else {

                button.classList.add('ending')

            }
        
            button.textContent = choice.text;

            // Add event listener to button
            button.addEventListener("click", () => {
                currentChapter = choice.index;
                currentChunk = 0;
                lastChunk = (currentChunk - 1)
                accumulatedStoryText = "";
                addedContinue = ""
                sessionStorage.setItem("chapter", currentChapter);
                sessionStorage.setItem("chunk", currentChunk);
                sessionStorage.setItem("needsRegen", false)
                update();
            });

            // Append to container
            choicesContainer.appendChild(button);

        });
    }
}

// Back button
function back() {

    const currentChapterData = gameData[currentChapter];
    currentChapter = currentChapterData.parent
    currentChunk = 0;
    lastChunk = (currentChunk - 1)
    accumulatedStoryText = "";
    addedContinue = ""
    sessionStorage.setItem("chapter", currentChapter);
    sessionStorage.setItem("chunk", currentChunk);
    update()

}

// Restart button
function restart() {

    currentChapter = 0
    currentChunk = 0;
    lastChunk = (currentChunk - 1)
    accumulatedStoryText = "";
    addedContinue = ""
    document.getElementById("mobileAuthor").innerHTML = ""
    sessionStorage.setItem("chapter", currentChapter);
    sessionStorage.setItem("chunk", currentChunk);
    sessionStorage.removeItem("storyItem")
    needsRegen = false
    update()
    closeNav()
    
}

// Open side navigation bar
function openNav() {
    document.getElementById("sidenav").style.width = "250px";
    document.getElementById("overlay").style.display = "block"
}

// Close side navigation bar
function closeNav() {
    document.getElementById("sidenav").style.width = "0";
    document.getElementById("overlay").style.display = "none"
}

// When the window is resized, resize all the elements
function resize() {

    const leftbox = document.getElementById("leftbox")
    const rightbox = document.getElementById("rightbox")
    const author = document.getElementById("author")
    const mobileAuthor = document.getElementById("mobileAuthor")
    const currentChapterData = gameData[currentChapter];
    let started = sessionStorage.getItem("started")
    let width = window.innerWidth

    if ((width <= 600) && (!(currentChapterData.node == "00" || currentChapterData.node == "99")) && (started == 1)) { 

        rightbox.style.display = "none"
        mobileAuthor.textContent = "Written by: " + currentChapterData.author
        leftbox.style.flex = "0"
        mobileDisplay = true

    } else {

        if (!(currentChapterData.node == "00" || currentChapterData.node == "99")) {

            rightbox.style.display = "flex"
            mobileAuthor.textContent = ""
            author.textContent = "Written by: " + currentChapterData.author
            leftbox.style.flex = "1"
            mobileDisplay = false

        }
    }
}

// Debug
function setChapter() {
    currentChapter = document.getElementById("debugchapter").value;
    update()
}

function debugReset() {
    sessionStorage.removeItem("chapter")
    sessionStorage.removeItem("chunk")
    sessionStorage.removeItem("accumulatedStoryText")
    sessionStorage.removeItem("needsRegen")
    sessionStorage.removeItem("started")
}