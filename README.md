# Storyteller

This is a webapp template that can be used as a 'Choose your own Adventure' engine. 

![image](https://github.com/GavinBuckley/Storyteller/assets/31485432/17ee4780-7ce4-407e-b693-9f2ed5028564)

## Story Setup
Each branch of the story is contained in an array found in the 'globals.js' file.

![image](https://github.com/GavinBuckley/Storyteller/assets/31485432/ec39add8-2e4c-4e35-8155-ae8b5cc736ad)

* **title:** The chapter name shown at the top of each branch
* **node:** An internal naming system. You can make these values whatever you like **except for the first two nodes**. "00" should be the starting point for the story, and "99" should be the branch that players return to after the story ends.
* **revision:** Another internal system to help organize the story. This can be left blank.
* **parent:** This represents the previous branch that lead to the one you're on. The number must refer to the index of the array, starting at 0. (To help display this, the example code has the index of each branch commented above it.)
* **author** This is used to display the author of each branch.
* **story** An array containing the bulk of the branch. You can have as many entries as you like. It must be formatted as text in quotation marks followed by a comma.
  >  "This is an example choose your own adventure program.",

  >  "You can now choose a story path.",
* **continue:** This is used to generate the red buttons that the user can click on to continue the story. You can have as many entries as you like. They must be formatted as follows:
  >{ text: "This is an example continue." },
* **choices:** The choices the user has at the end of each branch. You can have as many entries as you like, but more than 3 may cause layout issues. Each choice must be formatted as follows with the proper index leading to the next branch.
  >{ text: "Option 1", index: 2},
  
  >{ text: "Option 2", index: 3},
* **voiceover:** This is unused. 
