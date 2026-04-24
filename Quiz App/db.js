const quizData = [
    {
        id: 1,
        category: "JavaScript",
        difficulty: "easy",
        question: "What is the output of typeof null?",
        options: ["null", "object", "undefined", "number"],
        correctAnswer: "object",
        explanation: "This is a known JavaScript bug. typeof null returns 'object'.",
    },
    {
        id: 2,
        category: "JavaScript",
        difficulty: "medium",
        question: "Which method converts JSON to a JavaScript object?",
        options: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.toObject()"],
        correctAnswer: "JSON.parse()",
        explanation: "JSON.parse() converts JSON string into JS object.",
    },
    {
        id: 3,
        category: "JavaScript",
        difficulty: "hard",
        question: "What is closure in JavaScript?",
        options: [
            "Function inside function",
            "Access to outer function scope",
            "Block scope concept",
            "Async behavior",
        ],
        correctAnswer: "Access to outer function scope",
        explanation: "Closure allows inner function to access variables of outer function.",
    },

    {
        id: 4,
        category: "React",
        difficulty: "easy",
        question: "What is React?",
        options: [
            "Framework",
            "Library",
            "Language",
            "Database",
        ],
        correctAnswer: "Library",
        explanation: "React is a JavaScript library for building UI.",
    },
    {
        id: 5,
        category: "React",
        difficulty: "medium",
        question: "Which hook is used for state management?",
        options: ["useEffect", "useState", "useRef", "useMemo"],
        correctAnswer: "useState",
        explanation: "useState manages component state.",
    },

    {
        id: 6,
        category: "General",
        difficulty: "easy",
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        correctAnswer: "Mars",
        explanation: "Mars appears red due to iron oxide on its surface.",
    },
    {
        id: 7,
        category: "General",
        difficulty: "medium",
        question: "Who developed the theory of relativity?",
        options: [
            "Isaac Newton",
            "Albert Einstein",
            "Nikola Tesla",
            "Galileo",
        ],
        correctAnswer: "Albert Einstein",
        explanation: "Einstein proposed the theory of relativity.",
    },

    {
        id: 8,
        category: "Coding",
        difficulty: "hard",
        question: "What is time complexity of binary search?",
        options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
        correctAnswer: "O(log n)",
        explanation: "Binary search halves the array each step.",
    },

    {
        id: 9,
        category: "HTML",
        difficulty: "easy",
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Tech Modern Language",
            "Hyper Tool Multi Language",
            "None",
        ],
        correctAnswer: "Hyper Text Markup Language",
        explanation: "HTML is the standard markup language for web pages.",
    },

    {
        id: 10,
        category: "CSS",
        difficulty: "medium",
        question: "Which property is used for Flexbox layout?",
        options: ["display: grid", "display: flex", "position: flex", "float: flex"],
        correctAnswer: "display: flex",
        explanation: "Flexbox is enabled using display: flex.",
    },
];

export default quizData;