# Storyteller

This is a webapp template that can be used as a 'Choose your own Adventure' engine. 

![image](https://github.com/GavinBuckley/Storyteller/assets/31485432/17ee4780-7ce4-407e-b693-9f2ed5028564)

## Basics

The user will be given a "chunk" of story at a time and then the user is given a "continue". The story does not progress until the user has pressed the continue. This allows for the writer to add in natural pauses where the main charater can speak or do actions. Once the branch is over, the user will be given 2 or more options that lead to the next branch. 

It's possible for a branch to have no continues, or more than two choices. 

## Story Setup
Each branch of the story is contained in an array found in the 'globals.js' file.

![image](https://github.com/GavinBuckley/Storyteller/assets/31485432/d4039e9b-9ae4-4b24-8501-b3fc7ad4442d)

* **title:** The chapter name shown at the top of each branch
* **node:** An internal naming system. You can make these values whatever you like **except for the first two nodes**. "00" should be the starting point for the story, and "99" should be the branch that players return to after the story ends.
* **revision:** Another internal system to help organize the story. This can be left blank.
* **parent:** This represents the previous branch that lead to the one you're on. The number must refer to the index of the array, starting at 0. (To help display this, the example code has the index of each branch commented above it.)
* **author** This is used to display the author of each branch.
* **story** An array containing the bulk of the branch. You can have as many entries as you like. It must be formatted as text in quotation marks followed by a comma.
  >  "This is an example choose your own adventure program.",

  >  "You can now choose a story path.",`
* **continue:** This is used to generate the red buttons that the user can click on to continue the story. You can have as many entries as you like. They must be formatted as follows:
  >{ text: "This is an example continue." },
* **choices:** The choices the user has at the end of each branch. You can have as many entries as you like, but more than 3 may cause layout issues. Each choice must be formatted as follows with the proper index leading to the next branch.
  >{ text: "Option 1", index: 2},
  
  >{ text: "Option 2", index: 3},

## Special Formatting

* **Story**
  * **New lines:** can be inserted to story text by adding `\n` in the location where you want the new line. You can add as many as you like. 
    > "This is an example of a new line. \n Next up...",
  * **Italics:** can be added by inserting `<span class=\"italic\">example text<\/span>` into the story line.
    > "This is normal. <span class=\"italic\">This is italic.<\/span>",
  * **Centering:** This operates the same way italics does, using `<span class=\"centered\">example text<\/span>`.
    > "This is normal. <span class=\"centered\">This is centered.<\/span>",
* **Continues**
  * **Italics:** can be added by inserting `(ITALICS)` to the beginning of the line. This must be the first thing in the line. At the moment, the code is set up so the whole text is italics, or none of it is.
    > "(ITALICS)So what happens next?",

## Endings

Branches that end with just one choice will be displayed as an ending. The ending button index should ideally lead back to the first index in the story array to allow the user to restart the story at the first branch.  
