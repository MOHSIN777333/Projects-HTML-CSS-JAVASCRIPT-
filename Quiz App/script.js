import quizData from "./db.js";
import state from "./state.js";

// ─── DOM Elements ────────────────────────────────────
const inpTextEl = document.getElementById("nameInp");
const getInfoContainerEl = document.getElementById("getInfoContainer");
const quizScreenEl = document.getElementById("quizScreen");
const resultScreenEl = document.getElementById("resultScreen");
const progressBarEl = document.getElementById("progressBar");
const totalQuestionEl = document.getElementById("totalQuestion");
const attempQuestionEl = document.getElementById("attempQuestion");
const scoreEl = document.getElementById("score");
const questionContainerEl = document.getElementById("questionContainer");
const answerContainerEl = document.getElementById("btnContainer");
const messageEl = document.getElementById("message");
const finalScoreEl = document.getElementById("final-score");
const optionsBtn = document.getElementById("btnOption");
const submitBtn = document.getElementById("submit");
const resetBtnEl = document.getElementById("reset");
const reTryBtnEl = document.getElementById("re-try");

let selectedDifficulty = "";

// ─── Difficulty Select ───────────────────────────────
optionsBtn.addEventListener("click", (e) => {
    const btn = e.target.closest(".btn");
    if (!btn) return;

    selectedDifficulty = btn.innerText.toLowerCase();

    // Sab buttons reset karo
    document.querySelectorAll("#btnOption .btn").forEach(b => {
        b.style.backgroundColor = "";
        b.style.color = "";
    });

    // Selected highlight karo
    btn.style.backgroundColor = "#132457";
    btn.style.color = "white";
});

// ─── Submit ──────────────────────────────────────────
submitBtn.addEventListener("click", () => {
    const userName = inpTextEl.value.trim();

    if (!userName) {
        alert("Naam zaroor daalo!");
        return;
    }
    if (!selectedDifficulty) {
        alert("Difficulty select karo!");
        return;
    }

    state.username = userName;
    state.question = quizData.filter(q => q.difficulty === selectedDifficulty);
    state.currentIndex = 0;
    state.score = 0;
    state.answer = false;

    if (state.question.length === 0) {
        alert("Is difficulty mein questions nahi hain!");
        return;
    }

    inpTextEl.value = "";
    showScreen("quiz");
    renderQuestion();
});

// ─── Screen Switch ───────────────────────────────────
function showScreen(screen) {
    getInfoContainerEl.classList.add("screen");
    quizScreenEl.classList.add("screen");
    resultScreenEl.classList.add("screen");

    if (screen === "quiz") quizScreenEl.classList.remove("screen");
    if (screen === "getInfo") getInfoContainerEl.classList.remove("screen");
    if (screen === "result") resultScreenEl.classList.remove("screen");
}

// ─── Render Question ─────────────────────────────────
function renderQuestion() {
    const { question, currentIndex, score } = state;

    // Quiz khatam?
    if (currentIndex >= question.length) {
        showResult();
        return;
    }

    const current = question[currentIndex];
    const percent = (currentIndex / question.length) * 100;

    // UI update
    questionContainerEl.textContent = current.question;
    progressBarEl.style.width = percent + "%";
    totalQuestionEl.textContent = `Question: ${question.length}`;
    attempQuestionEl.textContent = currentIndex + 1;
    scoreEl.textContent = `Score: ${score}`;

    // Options render
    answerContainerEl.innerHTML = "";
    const fragment = document.createDocumentFragment();

    current.options.forEach((option) => {
        const btn = document.createElement("button");
        btn.textContent = option;
        fragment.appendChild(btn);
    });

    answerContainerEl.appendChild(fragment);
    state.answer = false;
}

// ─── Answer Check ────────────────────────────────────
answerContainerEl.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;
    if (state.answer) return;

    state.answer = true;

    const selected = btn.innerText;
    const correct = state.question[state.currentIndex].correctAnswer;
    const allBtns = answerContainerEl.querySelectorAll("button");

    if (selected === correct) {
        btn.style.backgroundColor = "green";
        btn.style.color = "white";
        state.score++;
    } else {
        btn.style.backgroundColor = "red";
        btn.style.color = "white";

        // Sahi answer highlight karo
        allBtns.forEach(b => {
            if (b.innerText === correct) {
                b.style.backgroundColor = "green";
                b.style.color = "white";
            }
        });
    }

    setTimeout(() => {
        state.currentIndex++;
        renderQuestion();
    }, 1000);
});

// ─── Show Result ─────────────────────────────────────
function showResult() {
    showScreen("result");

    const { username, score, question } = state;
    const percent = (score / question.length) * 100;

    finalScoreEl.textContent = `${username} — Score: ${score} / ${question.length}`;
    progressBarEl.style.width = "100%";

    if (percent === 100) {
        messageEl.textContent = "Perfect! Zabardast! 🎉";
    } else if (percent >= 80) {
        messageEl.textContent = "Bahut acha! Aur thoda aur! 💪";
    } else if (percent >= 60) {
        messageEl.textContent = "Theek hai, aur mehnat karo 📚";
    } else {
        messageEl.textContent = "Keep learning! Agli baar better! 🚀";
    }
}

// ─── Retry ───────────────────────────────────────────
reTryBtnEl.addEventListener("click", () => {
    state.currentIndex = 0;
    state.score = 0;
    state.answer = false;
    showScreen("quiz");
    renderQuestion();
});

// ─── Reset ───────────────────────────────────────────
resetBtnEl.addEventListener("click", () => {
    state.username = "";
    state.difficulty = "";
    state.score = 0;
    state.currentIndex = 0;
    state.question = [];
    state.answer = false;

    selectedDifficulty = "";
    inpTextEl.value = "";

    document.querySelectorAll("#btnOption .btn").forEach(b => {
        b.style.backgroundColor = "";
        b.style.color = "";
    });

    showScreen("getInfo");
});