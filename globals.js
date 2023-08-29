const title = "Choose Your Own Adventure"

const gameData = [

    {
        // 0
        title: "Choose Your Own Adventure",
        node: "00",
        revision: "",
        parent: "none",
        author: "",
        story: [
            "This is an example choose your own adventure program.",
            "You can now choose a story path."

        ],
        continue: [
            { text: "Ok, sounds good to me." },
        ],
        choices: [
            { text: "Option 1", index: 2},
            { text: "Option 2", index: 3}
        ],
        voiceover: [
        ]
    },

    {
        // 1
        title: "Choose Your Own Adventure",
        node: "99",
        revision: "",
        parent: "none",
        author: "",
        story: [
            "This is the page you get sent to when you die or restart the story. \n\n The idea is that this part is the end of your first story section, so the user doesn't have to click through the entire first section again.",
        ],
        continue: [

        ],
        choices: [
            { text: "Option 1", index: 2},
            { text: "Option 2", index: 3}
        ],
        voiceover: [
        ]
    },

    {
        // 2
        title: "Option 1",
        node: "1A",
        revision: "",
        parent: "0",
        author: "",
        story: [
            "This is a story path.",
            "You can make each path as long as you like.",
        ],
        continue: [
            { text: "I think I got it." },
        ],
        choices: [
            { text: "Option 3", index: 4},
            { text: "Option 4", index: 5}
        ],
        voiceover: [
        ]
    },

    {
        // 3
        title: "Option 2",
        node: "1B",
        revision: "",
        parent: "0",
        author: "",
        story: [
            "This is a story path.",
            "You can make each path as long as you like.",
        ],
        continue: [
            { text: "Makes sense." },
        ],
        choices: [
            { text: "Option 3", index: 4 },
            { text: "Option 4", index: 5 }
        ],
        voiceover: [
        ]
    },

    {
        // 4
        title: "Option 3",
        node: "1B",
        revision: "08/09/2023",
        parent: "2",
        author: "",
        story: [
            "In this example, you have died and the story will end.",
            "Yeah, sorry about that.",
        ],
        continue: [
            { text: "Aw man." },
        ],
        choices: [
            { text: "You died", index: 1},
        ],
        voiceover: [
        ]
    },

    {
        // 5
        title: "Option 4",
        node: "2B",
        revision: "",
        parent: "2",
        author: "",
        story: [
            "In this example, you have died and the story will end.",
            "Yeah, sorry about that."
        ],
        continue: [
            { text: "Aw man." },
        ],
        choices: [
            { text: "You died", index: 1 },
        ],
        voiceover: [
        ]
    },

    {
        // PLACEHOLDER
        title: "",
        node: "",
        revision: "",
        parent: "",
        author: "",
        story: [
            "A.",
            "B.",
            "C.",
            "D.",
            "E.",
            "F.",
            "G.",
        ],
        continue: [
            { text: "A" },
            { text: "B" },
            { text: "C" },
            { text: "D" },
            { text: "E" },
            { text: "F" },
            { text: "G" },

        ],
        choices: [
            { text: "Choice 1", index: 1 },
            { text: "Choice 2", index: 2 },
        ],
        voiceover: [

        ]
    },

];